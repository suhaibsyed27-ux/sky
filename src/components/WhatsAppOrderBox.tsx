import { useMemo, useRef, useState } from 'react';
import { Check, Copy, Plus, Send, Trash2 } from 'lucide-react';
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  OPERATING_HOURS,
  WHATSAPP_NUMBER_DISPLAY,
  WHATSAPP_NUMBER_RAW,
} from '../data/portfolioData';

interface OrderLineItem {
  id: string;
  name: string;
  quantity: string;
}

interface WhatsAppOrderBoxProps {
  orderText: string;
  onOrderTextChange: (next: string) => void;
  onClearCatalogBadges: () => void;
}

const SERVICE_OPTIONS = [
  'General Order Fulfilment',
  'Managed Supply Account',
  'Bulk & Institutional Procurement',
  'Custom & Specialist Sourcing',
];

const DELIVERY_ZONES = [
  'Rawalpindi & Islamabad (Same/Next Day)',
  'Punjab Outstation (2–3 Business Days)',
  'Other Provinces (3–5 Business Days)',
];

export default function WhatsAppOrderBox({
  orderText,
  onOrderTextChange,
  onClearCatalogBadges,
}: WhatsAppOrderBoxProps) {
  const [organisation, setOrganisation] = useState('');
  const [contactName, setContactName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryZone, setDeliveryZone] = useState(DELIVERY_ZONES[0]);
  const [serviceTier, setServiceTier] = useState(SERVICE_OPTIONS[0]);
  const [gstRequired, setGstRequired] = useState(false);

  // Quick structured item builder
  const [quickItemName, setQuickItemName] = useState('');
  const [quickItemQty, setQuickItemQty] = useState('');
  const [structuredItems, setStructuredItems] = useState<OrderLineItem[]>([]);

  const [validationError, setValidationError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const hiddenLinkRef = useRef<HTMLAnchorElement | null>(null);

  const handleAddQuickItem = () => {
    const trimmedName = quickItemName.trim();
    if (!trimmedName) return;

    const newItem: OrderLineItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: trimmedName,
      quantity: quickItemQty.trim() || 'As required',
    };
    setStructuredItems((prev) => [...prev, newItem]);
    setQuickItemName('');
    setQuickItemQty('');
    setValidationError(null);
  };

  const handleRemoveQuickItem = (id: string) => {
    setStructuredItems((prev) => prev.filter((item) => item.id !== id));
  };

  const formattedMessage = useMemo(() => {
    const lines: string[] = [
      '*SKYLINE EQUIPAGE — ORDER / QUOTATION REQUEST*',
      '',
      `*Service Tier:* ${serviceTier}`,
      `*Organisation:* ${organisation.trim() || 'Not specified'}`,
      `*Contact Person:* ${contactName.trim() || 'Not specified'}`,
      `*Client Phone:* ${clientPhone.trim() || 'Not specified'}`,
      `*Delivery Zone:* ${deliveryZone}`,
      `*Delivery Address:* ${deliveryAddress.trim() || 'Not specified'}`,
      `*GST Invoice Required:* ${gstRequired ? 'Yes (GST / NTN)' : 'No'}`,
      '',
      '*ITEMS & REQUIREMENTS LIST:*',
    ];

    if (structuredItems.length > 0) {
      structuredItems.forEach((item, idx) => {
        lines.push(`${idx + 1}. ${item.name} — Qty: ${item.quantity}`);
      });
    }

    if (orderText.trim()) {
      if (structuredItems.length > 0) {
        lines.push('');
        lines.push('*Additional Order Notes / Full List:*');
      }
      lines.push(orderText.trim());
    }

    if (structuredItems.length === 0 && !orderText.trim()) {
      lines.push('(Please enter the items you want to purchase)');
    }

    return lines.join('\n');
  }, [
    serviceTier,
    organisation,
    contactName,
    clientPhone,
    deliveryZone,
    deliveryAddress,
    gstRequired,
    structuredItems,
    orderText,
  ]);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${WHATSAPP_NUMBER_RAW}?text=${encodeURIComponent(formattedMessage)}`;
  }, [formattedMessage]);

  const hasOrderContent = structuredItems.length > 0 || orderText.trim().length > 0;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasOrderContent) {
      setValidationError(
        'Please enter at least one item or requirement in the order box before sending.'
      );
      return;
    }

    if (!contactName.trim() && !organisation.trim()) {
      setValidationError('Please provide your name or organisation name so we can address your quote.');
      return;
    }

    setValidationError(null);
    setSubmittedOnce(true);

    if (hiddenLinkRef.current) {
      hiddenLinkRef.current.href = whatsappUrl;
      hiddenLinkRef.current.click();
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleClearAll = () => {
    onOrderTextChange('');
    setStructuredItems([]);
    setQuickItemName('');
    setQuickItemQty('');
    setValidationError(null);
    setSubmittedOnce(false);
    onClearCatalogBadges();
  };

  return (
    <section id="order-box" className="bg-[#0E0E0E] text-[#F7F4EF]">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.24em] text-[#C6A47E] uppercase">
            Begin the Conversation
          </p>
          <h2
            className="mt-4 font-serif font-medium text-[#F7F4EF]"
            style={{
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              lineHeight: 1.06,
              textWrap: 'balance',
            }}
          >
            Let’s Equip Your Organisation.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#D6CFC4]">
            Submit your requirements list — however rough, however detailed — and receive a
            comprehensive, itemised quotation within four business hours. No commitment required. No
            relationship too small to begin.
          </p>
          <p className="mt-2 font-serif text-lg italic text-[#C6A47E]">
            The Skyline standard starts with the very first message.
          </p>
        </div>

        {/* Direct WhatsApp Order & Requirements Box */}
        <form
          onSubmit={handleSubmitWhatsApp}
          noValidate
          className="mt-12 grid grid-cols-1 gap-8 border border-[#C6A47E]/35 bg-[#151515] p-6 sm:p-10 lg:grid-cols-12"
        >
          {/* Left Column: Requirements / Items Input */}
          <div className="space-y-6 lg:col-span-7">
            <div className="border-b border-[#C6A47E]/25 pb-4">
              <p className="font-mono text-xs tracking-[0.2em] text-[#C6A47E] uppercase">
                Direct WhatsApp Order Box
              </p>
              <p className="mt-1 text-sm text-[#B8B0A4]">
                Enter everything you want to buy below — type freely, add line items, or select from
                the 7 verticals above — and send directly to{' '}
                <span className="font-mono text-[#F7F4EF]">{WHATSAPP_NUMBER_DISPLAY}</span>.
              </p>
            </div>

            {/* Quick Line-Item Adder */}
            <div>
              <label
                htmlFor="quick-item-name"
                className="block font-mono text-[11px] tracking-[0.18em] text-[#C6A47E] uppercase"
              >
                Add Structured Line Item (Optional)
              </label>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <input
                  id="quick-item-name"
                  type="text"
                  value={quickItemName}
                  onChange={(e) => setQuickItemName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddQuickItem();
                    }
                  }}
                  placeholder="Item / specification (e.g. A4 80gsm Paper Ream)"
                  className="min-h-[44px] flex-1 border border-[#C6A47E]/30 bg-[#0E0E0E] px-3.5 py-2 text-sm text-[#F7F4EF] placeholder-[#7B746A] focus:border-[#C6A47E] focus:outline-none"
                />
                <input
                  type="text"
                  value={quickItemQty}
                  onChange={(e) => setQuickItemQty(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddQuickItem();
                    }
                  }}
                  aria-label="Quantity or unit"
                  placeholder="Qty (e.g. 20 boxes)"
                  className="min-h-[44px] w-full border border-[#C6A47E]/30 bg-[#0E0E0E] px-3.5 py-2 text-sm text-[#F7F4EF] placeholder-[#7B746A] focus:border-[#C6A47E] focus:outline-none sm:w-40"
                />
                <button
                  type="button"
                  onClick={handleAddQuickItem}
                  className="inline-flex min-h-[44px] items-center justify-center gap-1.5 border border-[#C6A47E]/50 bg-[#1F1C18] px-4 py-2 text-xs font-semibold text-[#C6A47E] transition-colors hover:border-[#C6A47E] hover:text-[#F7F4EF] whitespace-nowrap shrink-0"
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                  <span>Add Item</span>
                </button>
              </div>

              {structuredItems.length > 0 && (
                <ul className="mt-3 divide-y divide-[#C6A47E]/20 border border-[#C6A47E]/25 bg-[#0E0E0E]">
                  {structuredItems.map((item, index) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between gap-3 px-3.5 py-2.5 text-sm"
                    >
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-mono text-xs text-[#C6A47E] tabular-nums">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[#F7F4EF]">{item.name}</span>
                        <span className="font-mono text-xs text-[#B8B0A4]">· {item.quantity}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveQuickItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="p-1 text-[#9E9589] transition-colors hover:text-[#F7F4EF]"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Free-form Full Requirements Box */}
            <div>
              <div className="flex items-center justify-between gap-4">
                <label
                  htmlFor="order-requirements-box"
                  className="block font-mono text-[11px] tracking-[0.18em] text-[#C6A47E] uppercase"
                >
                  Everything You Want to Buy (Requirements & Order List) *
                </label>
                {hasOrderContent && (
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="font-mono text-[11px] text-[#9E9589] underline underline-offset-4 transition-colors hover:text-[#F7F4EF]"
                  >
                    Clear List
                  </button>
                )}
              </div>
              <textarea
                id="order-requirements-box"
                rows={7}
                value={orderText}
                onChange={(e) => {
                  onOrderTextChange(e.target.value);
                  if (validationError) setValidationError(null);
                }}
                placeholder={
                  'Type or paste everything you need to buy here — e.g.\n- 30 reams A4 80gsm copy paper\n- 15 safety helmets & high-vis vests\n- 4 APC UPS 1000VA units\n- 20 litres floor disinfectant & mop sets'
                }
                className="mt-2 w-full border border-[#C6A47E]/35 bg-[#0E0E0E] p-4 text-sm leading-relaxed text-[#F7F4EF] placeholder-[#6E675E] focus:border-[#C6A47E] focus:outline-none"
              />
            </div>

            {/* Client & Delivery Fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="client-org"
                  className="block font-mono text-[11px] tracking-[0.18em] text-[#B8B0A4] uppercase"
                >
                  Organisation / Company
                </label>
                <input
                  id="client-org"
                  type="text"
                  value={organisation}
                  onChange={(e) => {
                    setOrganisation(e.target.value);
                    if (validationError) setValidationError(null);
                  }}
                  placeholder="Company or Institution name"
                  className="mt-1.5 min-h-[44px] w-full border border-[#C6A47E]/30 bg-[#0E0E0E] px-3.5 py-2 text-sm text-[#F7F4EF] placeholder-[#6E675E] focus:border-[#C6A47E] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="client-name"
                  className="block font-mono text-[11px] tracking-[0.18em] text-[#B8B0A4] uppercase"
                >
                  Contact Person *
                </label>
                <input
                  id="client-name"
                  type="text"
                  value={contactName}
                  onChange={(e) => {
                    setContactName(e.target.value);
                    if (validationError) setValidationError(null);
                  }}
                  placeholder="Your full name"
                  className="mt-1.5 min-h-[44px] w-full border border-[#C6A47E]/30 bg-[#0E0E0E] px-3.5 py-2 text-sm text-[#F7F4EF] placeholder-[#6E675E] focus:border-[#C6A47E] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="client-phone"
                  className="block font-mono text-[11px] tracking-[0.18em] text-[#B8B0A4] uppercase"
                >
                  Your Phone / WhatsApp
                </label>
                <input
                  id="client-phone"
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="+92 3XX XXXXXXX"
                  className="mt-1.5 min-h-[44px] w-full border border-[#C6A47E]/30 bg-[#0E0E0E] px-3.5 py-2 text-sm text-[#F7F4EF] placeholder-[#6E675E] focus:border-[#C6A47E] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="service-tier"
                  className="block font-mono text-[11px] tracking-[0.18em] text-[#B8B0A4] uppercase"
                >
                  Service Tier
                </label>
                <select
                  id="service-tier"
                  value={serviceTier}
                  onChange={(e) => setServiceTier(e.target.value)}
                  className="mt-1.5 min-h-[44px] w-full border border-[#C6A47E]/30 bg-[#0E0E0E] px-3.5 py-2 text-sm text-[#F7F4EF] focus:border-[#C6A47E] focus:outline-none"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="delivery-zone"
                  className="block font-mono text-[11px] tracking-[0.18em] text-[#B8B0A4] uppercase"
                >
                  Delivery Coverage
                </label>
                <select
                  id="delivery-zone"
                  value={deliveryZone}
                  onChange={(e) => setDeliveryZone(e.target.value)}
                  className="mt-1.5 min-h-[44px] w-full border border-[#C6A47E]/30 bg-[#0E0E0E] px-3.5 py-2 text-sm text-[#F7F4EF] focus:border-[#C6A47E] focus:outline-none"
                >
                  {DELIVERY_ZONES.map((zone) => (
                    <option key={zone} value={zone}>
                      {zone}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="delivery-address"
                  className="block font-mono text-[11px] tracking-[0.18em] text-[#B8B0A4] uppercase"
                >
                  Delivery Address / Sector
                </label>
                <input
                  id="delivery-address"
                  type="text"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="Street, Sector / Industrial Area, City"
                  className="mt-1.5 min-h-[44px] w-full border border-[#C6A47E]/30 bg-[#0E0E0E] px-3.5 py-2 text-sm text-[#F7F4EF] placeholder-[#6E675E] focus:border-[#C6A47E] focus:outline-none"
                />
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-3 pt-1 text-sm text-[#D6CFC4]">
              <input
                type="checkbox"
                checked={gstRequired}
                onChange={(e) => setGstRequired(e.target.checked)}
                className="h-4 w-4 accent-[#256660]"
              />
              <span>Require GST-compliant invoice & NTN documentation</span>
            </label>
          </div>

          {/* Right Column: Live Message Preview & WhatsApp Dispatch */}
          <div className="flex flex-col justify-between border-t border-[#C6A47E]/25 pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-xs tracking-[0.2em] text-[#C6A47E] uppercase">
                  WhatsApp Message Preview
                </p>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex min-h-[34px] items-center gap-1.5 border border-[#C6A47E]/30 px-2.5 py-1 font-mono text-[11px] text-[#D6CFC4] transition-colors hover:border-[#C6A47E] hover:text-[#F7F4EF]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#52B788]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="mt-4 max-h-[360px] overflow-y-auto whitespace-pre-wrap border border-[#C6A47E]/25 bg-[#0E0E0E] p-4 font-mono text-xs leading-relaxed text-[#D6CFC4]">
                {formattedMessage}
              </pre>
            </div>

            <div className="mt-6 space-y-4">
              {validationError && (
                <p
                  role="alert"
                  className="border border-amber-500/40 bg-amber-950/40 px-4 py-3 text-xs text-amber-200"
                >
                  {validationError}
                </p>
              )}

              {submittedOnce && !validationError && (
                <div className="border border-[#256660] bg-[#256660]/15 px-4 py-3 text-xs text-[#D6EFEA]">
                  Order message prepared for WhatsApp ({WHATSAPP_NUMBER_DISPLAY}). If WhatsApp did
                  not open automatically,{' '}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-4"
                  >
                    click here to open WhatsApp directly
                  </a>
                  .
                </div>
              )}

              <button
                type="submit"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-sm bg-[#256660] px-6 py-3.5 text-sm font-semibold text-[#F7F4EF] transition-colors duration-150 hover:bg-[#1E544F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A47E]"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>Send Order Details via WhatsApp</span>
              </button>

              <a
                ref={hiddenLinkRef}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sr-only"
                aria-hidden="true"
                tabIndex={-1}
              >
                Open WhatsApp
              </a>

              <p className="text-center font-mono text-[11px] text-[#9E9589]">
                Direct Recipient: {WHATSAPP_NUMBER_DISPLAY} · Quotation within 4 business hours
              </p>
            </div>
          </div>
        </form>

        {/* Contact Info Block (Page 11 Reference) */}
        <div className="mt-16 grid grid-cols-1 divide-y divide-[#C6A47E]/45 border border-[#C6A47E]/45 md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="p-7">
            <p className="font-mono text-[11px] tracking-[0.22em] text-[#C6A47E] uppercase">
              General Enquiries & WhatsApp
            </p>
            <p className="mt-3 text-sm text-[#F7F4EF]">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-[#C6A47E]"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-1 font-mono text-sm text-[#D6CFC4] tabular-nums">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER_RAW}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#C6A47E]"
              >
                {WHATSAPP_NUMBER_DISPLAY}
              </a>
            </p>
          </div>

          <div className="p-7">
            <p className="font-mono text-[11px] tracking-[0.22em] text-[#C6A47E] uppercase">
              Location
            </p>
            <p className="mt-3 text-sm text-[#F7F4EF]">Rawalpindi, Punjab</p>
            <p className="mt-1 text-sm text-[#D6CFC4]">Pakistan</p>
            <span className="sr-only">{CONTACT_LOCATION}</span>
          </div>

          <div className="p-7">
            <p className="font-mono text-[11px] tracking-[0.22em] text-[#C6A47E] uppercase">
              Operating Hours
            </p>
            <p className="mt-3 text-sm text-[#F7F4EF]">Monday – Saturday</p>
            <p className="mt-1 font-mono text-sm text-[#D6CFC4] tabular-nums">09:00 – 18:00 PKT</p>
            <span className="sr-only">{OPERATING_HOURS}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
