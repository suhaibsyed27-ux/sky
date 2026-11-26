import { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { PRODUCT_VERTICALS, SERVICE_TIERS } from '../data/portfolioData';

interface ServicesAndCatalogueProps {
  onAddItemToOrder: (itemText: string) => void;
  addedItems: string[];
}

export default function ServicesAndCatalogue({
  onAddItemToOrder,
  addedItems,
}: ServicesAndCatalogueProps) {
  const [selectedVertical, setSelectedVertical] = useState<string>('all');

  const visibleVerticals =
    selectedVertical === 'all'
      ? PRODUCT_VERTICALS
      : PRODUCT_VERTICALS.filter((v) => v.number === selectedVertical);

  return (
    <>
      {/* 03 · Our Services */}
      <section id="services" className="border-t border-[#C6A47E]/35 bg-[#FFFFFF] text-[#141414]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="flex flex-col justify-between gap-6 border-b border-[#C6A47E]/50 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-[#9A7B56] uppercase">
                03 · Our Services
              </p>
              <h2
                className="mt-3 font-serif font-medium text-[#141414]"
                style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.08 }}
              >
                What We Deliver
              </h2>
              <p className="mt-3 font-mono text-xs tracking-[0.22em] text-[#5C564E] uppercase">
                Procurement · Fulfilment · Management
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5C564E] md:text-right">
              From a single sourced item to a fully managed supply account, our service model adapts
              to the complexity and scale of each client’s requirements.
            </p>
          </div>

          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-[#423E39]">
            Skyline Equipage operates across four primary service tiers. Each tier is designed to
            scale with the client — beginning as a reactive supplier and evolving into a fully
            integrated procurement partner as the relationship matures.
          </p>

          {/* Featured Service Tier 01 */}
          {SERVICE_TIERS.filter((s) => s.featured).map((service) => (
            <div
              key={service.number}
              className="mt-10 grid grid-cols-1 gap-8 bg-[#121212] p-8 text-[#F7F4EF] sm:p-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-7">
                <p className="font-mono text-xs tracking-[0.22em] text-[#C6A47E] uppercase">
                  {service.number} · {service.label}
                </p>
                <h3 className="mt-3 font-serif text-3xl font-medium text-[#F7F4EF] sm:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#D6CFC4]">{service.summary}</p>
                <ul className="mt-6 divide-y divide-[#C6A47E]/25 border-t border-b border-[#C6A47E]/25">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="py-3 text-sm text-[#F7F4EF]">
                      — {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between lg:col-span-5 lg:border-l lg:border-[#C6A47E]/25 lg:pl-8">
                <div className="border border-[#C6A47E]/45 px-4 py-3">
                  <p className="font-mono text-xs tracking-[0.16em] text-[#C6A47E] uppercase">
                    {service.audience}
                  </p>
                </div>

                <div className="mt-8">
                  <p className="font-mono text-xs tracking-[0.22em] text-[#C6A47E] uppercase">
                    What This Means for You
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#D6CFC4]">
                    You spend zero time chasing suppliers. Your procurement is handled, tracked, and
                    reported. You focus on running your organisation while we ensure nothing runs
                    out, breaks down, or delays your operations.
                  </p>
                  <a
                    href="#order-box"
                    className="mt-6 inline-flex min-h-[40px] items-center justify-center rounded-sm bg-[#256660] px-5 py-2 text-xs font-semibold tracking-wide text-[#F7F4EF] transition-colors duration-150 hover:bg-[#1E544F] whitespace-nowrap"
                  >
                    Inquire About Managed Accounts
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Remaining 3 Tiers */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {SERVICE_TIERS.filter((s) => !s.featured).map((service) => (
              <div
                key={service.number}
                className="flex flex-col justify-between border border-[#C6A47E]/45 bg-[#FAF8F5] p-7"
              >
                <div>
                  <p className="font-mono text-xs tracking-[0.22em] text-[#9A7B56] uppercase">
                    {service.number} · {service.label}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-medium text-[#141414]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#423E39]">{service.summary}</p>
                  <ul className="mt-5 divide-y divide-[#C6A47E]/30 border-t border-b border-[#C6A47E]/30">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="py-2.5 text-sm text-[#2A2622]">
                        — {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border border-[#256660]/45 px-3 py-2 text-center">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-[#256660] uppercase">
                    {service.audience}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 · Product Categories — Seven Core Verticals */}
      <section id="catalogue" className="border-t border-[#C6A47E]/35 bg-[#F7F4EF] text-[#141414]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="flex flex-col justify-between gap-6 border-b border-[#C6A47E]/50 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-[#9A7B56] uppercase">
                04 · Product Categories
              </p>
              <h2
                className="mt-3 font-serif font-medium text-[#141414]"
                style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.08 }}
              >
                What We Supply
              </h2>
              <p className="mt-3 font-mono text-xs tracking-[0.22em] text-[#5C564E] uppercase">
                Seven Core Verticals
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5C564E] md:text-right">
              A deliberate, curated range across the categories that matter most to Pakistani
              businesses and institutions — sourced from vetted local and international suppliers.
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <p className="max-w-2xl text-sm leading-relaxed text-[#423E39]">
              Every product in our catalogue is sourced from a vetted supplier with documented
              quality and delivery benchmarks. Select any item below to append it directly to your
              WhatsApp order list.
            </p>
            {addedItems.length > 0 && (
              <a
                href="#order-box"
                className="inline-flex min-h-[40px] items-center justify-center rounded-sm bg-[#256660] px-4 py-2 text-xs font-semibold text-[#F7F4EF] transition-colors hover:bg-[#1E544F] whitespace-nowrap shrink-0 tabular-nums"
              >
                View Order Box ({addedItems.length} added)
              </a>
            )}
          </div>

          {/* Interactive Vertical Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter product verticals"
            className="mt-8 flex flex-wrap gap-1.5 border border-[#C6A47E]/40 bg-[#EDE7DD] p-1.5"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedVertical === 'all'}
              onClick={() => setSelectedVertical('all')}
              className={`min-h-[40px] px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                selectedVertical === 'all'
                  ? 'bg-[#121212] text-[#F7F4EF]'
                  : 'text-[#423E39] hover:bg-[#FFFFFF]/70 hover:text-[#141414]'
              }`}
            >
              All 7 Verticals
            </button>
            {PRODUCT_VERTICALS.map((vertical) => (
              <button
                key={vertical.number}
                type="button"
                role="tab"
                aria-selected={selectedVertical === vertical.number}
                onClick={() => setSelectedVertical(vertical.number)}
                className={`min-h-[40px] px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selectedVertical === vertical.number
                    ? 'bg-[#121212] text-[#F7F4EF]'
                    : 'text-[#423E39] hover:bg-[#FFFFFF]/70 hover:text-[#141414]'
                }`}
              >
                {vertical.number}. {vertical.title}
              </button>
            ))}
          </div>

          {/* Verticals Grid */}
          <div className="mt-8 grid grid-cols-1 gap-px border border-[#C6A47E]/45 bg-[#C6A47E]/45 md:grid-cols-2 lg:grid-cols-3">
            {visibleVerticals.map((vertical, idx) => {
              const isFullSpan =
                selectedVertical === 'all' &&
                vertical.number === '07' &&
                idx === visibleVerticals.length - 1;
              const isDark = vertical.theme === 'dark';
              const isTeal = vertical.theme === 'teal';

              const surfaceClass = isDark
                ? 'bg-[#121212] text-[#F7F4EF]'
                : isTeal
                  ? 'bg-[#256660] text-[#F7F4EF]'
                  : 'bg-[#FFFFFF] text-[#141414]';

              const kickerClass = isDark
                ? 'text-[#C6A47E]'
                : isTeal
                  ? 'text-[#D6EFEA]'
                  : 'text-[#9A7B56]';

              const dividerClass = isDark
                ? 'divide-[#C6A47E]/25 border-[#C6A47E]/25'
                : isTeal
                  ? 'divide-[#F7F4EF]/25 border-[#F7F4EF]/25'
                  : 'divide-[#C6A47E]/35 border-[#C6A47E]/35';

              const buttonClass = isDark
                ? 'text-[#C6A47E] hover:text-[#F7F4EF]'
                : isTeal
                  ? 'text-[#F7F4EF]/90 hover:text-[#FFFFFF]'
                  : 'text-[#256660] hover:text-[#141414]';

              return (
                <div
                  key={vertical.number}
                  className={`flex flex-col justify-between p-7 sm:p-8 ${surfaceClass} ${
                    isFullSpan ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                      <div>
                        <p className={`font-mono text-xs tracking-[0.22em] uppercase ${kickerClass}`}>
                          {vertical.number} · Category
                        </p>
                        <h3 className="mt-2 font-serif text-2xl font-medium">{vertical.title}</h3>
                      </div>
                      {vertical.note && (
                        <p className="font-mono text-[11px] tracking-[0.16em] text-[#5C564E] uppercase">
                          {vertical.note}
                        </p>
                      )}
                    </div>

                    <ul
                      className={`mt-5 divide-y border-t ${dividerClass} ${
                        isFullSpan ? 'grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-3' : ''
                      }`}
                    >
                      {vertical.items.map((item) => {
                        const isAdded = addedItems.includes(item);
                        return (
                          <li
                            key={item}
                            className="flex items-center justify-between gap-3 py-3 text-sm"
                          >
                            <span className="leading-snug">{item}</span>
                            <button
                              type="button"
                              onClick={() => onAddItemToOrder(item)}
                              title={`Add ${item} to WhatsApp order box`}
                              className={`inline-flex min-h-[32px] items-center gap-1 px-2 py-1 font-mono text-[11px] font-medium transition-colors whitespace-nowrap shrink-0 ${buttonClass}`}
                            >
                              {isAdded ? (
                                <>
                                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                                  <span>Added</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                                  <span>Add</span>
                                </>
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
