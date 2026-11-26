export const WHATSAPP_NUMBER_RAW = '923144475594';
export const WHATSAPP_NUMBER_DISPLAY = '+92 314 4475594';
export const CONTACT_EMAIL = 'info@skylineequipage.com';
export const CONTACT_LOCATION = 'Rawalpindi, Punjab, Pakistan';
export const OPERATING_HOURS = 'Monday – Saturday · 09:00 – 18:00 PKT';

export interface TableOfContentsItem {
  number: string;
  title: string;
  description: string;
  href: string;
}

export const TABLE_OF_CONTENTS: TableOfContentsItem[] = [
  {
    number: '01',
    title: 'Brand Philosophy',
    description: 'Our founding principles, values, and the vision that defines every decision we make',
    href: '#philosophy',
  },
  {
    number: '02',
    title: 'Who We Are',
    description: 'Company background, leadership overview, and the people behind Skyline Equipage',
    href: '#who-we-are',
  },
  {
    number: '03',
    title: 'Our Services',
    description: 'End-to-end supply solutions — procurement, fulfilment, account management, and more',
    href: '#services',
  },
  {
    number: '04',
    title: 'Product Categories',
    description: 'A comprehensive overview of the seven core supply verticals we cover',
    href: '#catalogue',
  },
  {
    number: '05',
    title: 'Our Process',
    description: 'How we receive, process, fulfil, and follow up on every order — our operational promise',
    href: '#process',
  },
  {
    number: '06',
    title: 'Why Skyline Equipage',
    description: 'The competitive advantages and commitments that set us apart in the market',
    href: '#advantages',
  },
  {
    number: '07',
    title: 'Sectors We Serve',
    description: 'Industries and client profiles we specialise in equipping with tailored supply solutions',
    href: '#sectors',
  },
  {
    number: '08',
    title: 'Commercial Terms',
    description: 'Pricing structure, payment policy, delivery terms, and account management framework',
    href: '#terms',
  },
];

export const CORE_VALUES = [
  {
    number: '01',
    title: 'Precision',
    description:
      'Accurate specifications, correct quantities, and zero ambiguity in every order. We read requirements carefully and execute with exactness.',
  },
  {
    number: '02',
    title: 'Reliability',
    description:
      'Commitments are kept. Deadlines are honoured. When circumstances change, we communicate proactively — never after the fact.',
  },
  {
    number: '03',
    title: 'Partnership',
    description:
      "We grow when our clients grow. We invest in understanding each organisation's rhythm so we can anticipate, not merely react.",
  },
];

export const AT_A_GLANCE_METRICS = [
  { value: '2026', label: 'Year Established' },
  { value: '500+', label: 'Product Lines Available' },
  { value: '7', label: 'Core Supply Verticals' },
  { value: '48hr', label: 'Standard Delivery Window' },
  { value: 'PKR', label: 'Local Currency Billing' },
];

export interface ServiceTier {
  number: string;
  label: string;
  title: string;
  summary: string;
  bullets: string[];
  audience: string;
  featured?: boolean;
}

export const SERVICE_TIERS: ServiceTier[] = [
  {
    number: '01',
    label: 'Core Service',
    title: 'Managed Supply Accounts',
    summary:
      'Our flagship service tier. A dedicated account manager, agreed rate cards, priority fulfilment, and monthly consolidated invoicing — designed for organisations that require a seamless, ongoing supply relationship rather than transactional ordering.',
    bullets: [
      'Named account manager with direct line access',
      'Pre-agreed pricing on recurring product lines',
      'Monthly consolidated invoicing with full itemisation',
      'Quarterly supply reviews and demand forecasting',
    ],
    audience: 'Recommended for Corporate & Institutional Clients',
    featured: true,
  },
  {
    number: '02',
    label: 'Service',
    title: 'General Order Fulfilment',
    summary:
      'Standard order-by-order supply. Quote, approve, deliver. Ideal for one-off requirements, project-specific procurement, or clients evaluating the relationship.',
    bullets: [
      'Same-day quotation on standard items',
      '48-hour standard delivery window',
      'Full delivery documentation',
    ],
    audience: 'Open to All Clients',
  },
  {
    number: '03',
    label: 'Service',
    title: 'Bulk & Institutional Procurement',
    summary:
      'Volume-based sourcing for large-scale requirements. We negotiate on your behalf with our supplier network to secure competitive rates on bulk orders.',
    bullets: [
      'Volume pricing with documented savings',
      'Phased delivery scheduling',
      'Inspection and quality verification',
    ],
    audience: 'Institutions · Tenders · Projects',
  },
  {
    number: '04',
    label: 'Service',
    title: 'Custom & Specialist Sourcing',
    summary:
      'Dedicated sourcing for non-standard specifications, specialised equipment, and cross-category requisitions outside routine inventory — vetted through our local and international supplier network.',
    bullets: [
      'Specification matching & sample verification',
      '72-hour sourced procurement readiness',
      'Custom sourcing minimum: PKR 10,000',
    ],
    audience: 'Bespoke Requisitions · Technical Supply',
  },
];

export interface ProductVertical {
  number: string;
  title: string;
  theme: 'dark' | 'teal' | 'light';
  items: string[];
  note?: string;
}

export const PRODUCT_VERTICALS: ProductVertical[] = [
  {
    number: '01',
    title: 'Office, Stationery & Printing',
    theme: 'dark',
    items: [
      'Paper, files, folders & binders',
      'Writing instruments & desk accessories',
      'Printer cartridges & toners',
      'Notebooks, planners & diaries',
      'Stamps, labels & mailing supplies',
    ],
  },
  {
    number: '02',
    title: 'Industrial & Safety',
    theme: 'light',
    items: [
      'PPE: helmets, gloves, boots, vests',
      'Fire safety equipment & extinguishers',
      'First aid kits & medical supplies',
      'Signage, hammers & safety tape',
      'Tools, fasteners & hardware',
    ],
  },
  {
    number: '03',
    title: 'IT & Electronics',
    theme: 'light',
    items: [
      'Cables, adapters & peripherals',
      'UPS systems & power solutions',
      'Networking equipment',
      'Storage devices & accessories',
      'Computer & AV consumables',
    ],
  },
  {
    number: '04',
    title: 'Janitorial & Facility',
    theme: 'teal',
    items: [
      'Cleaning chemicals & disinfectants',
      'Mops, brooms & janitorial equipment',
      'Waste management & bins',
      'Washroom & hygiene supplies',
      'Air fresheners & odour management',
    ],
  },
  {
    number: '05',
    title: 'Construction Materials',
    theme: 'light',
    items: [
      'Cement, sand & aggregates',
      'Electrical fittings & conduits',
      'Plumbing materials & fixtures',
      'Paint, primer & surface prep',
      'Tiles, flooring & finishing materials',
    ],
  },
  {
    number: '06',
    title: 'Medical & Lab',
    theme: 'light',
    items: [
      'Disposable gloves & masks',
      'Laboratory consumables',
      'Patient care & ward supplies',
      'Diagnostic accessories',
      'Sterilisation & infection control',
    ],
  },
  {
    number: '07',
    title: 'Food & Hospitality Supplies',
    theme: 'light',
    items: [
      'Bulk dry goods & provisions',
      'Kitchen disposables & packaging',
      'Catering equipment & utensils',
      'Beverages & condiments',
      'Hospitality amenities & linen',
    ],
    note: 'Serving Hotels · Restaurants · Canteens · Institutions',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  slaTitle: string;
  slaDetails: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Inquiry & Requirements',
    description:
      'Client submits a requirements list — by email, WhatsApp, or through their dedicated account manager. No format is required; we work with whatever specification is available and ask only the questions that matter.',
    slaTitle: 'Response Time',
    slaDetails: ['Within 2 hours', '(Business Hours)'],
  },
  {
    number: '02',
    title: 'Quotation & Approval',
    description:
      'A detailed, itemised quotation is prepared and submitted. Pricing is transparent — no hidden charges, no post-approval surprises. The client reviews, requests amendments if needed, and approves. Nothing moves without approval.',
    slaTitle: 'Standard Quote',
    slaDetails: ['Within 4 hours', 'Complex: 24 hours'],
  },
  {
    number: '03',
    title: 'Procurement & Preparation',
    description:
      'Upon approval, the order is raised with our supplier network. Items are sourced, quality-checked where required, consolidated at our facility, and prepared for delivery with full documentation — delivery note, invoice, and specification sheet.',
    slaTitle: 'Standard Items',
    slaDetails: ['Same or next day', 'Sourced items: 72hr'],
  },
  {
    number: '04',
    title: 'Delivery & Handover',
    description:
      'Delivery is made to the specified address within the agreed window. The receiving party is contacted prior to arrival. A signed delivery receipt is obtained and filed. Any delivery discrepancy is flagged and resolved within 24 hours.',
    slaTitle: 'Rawalpindi / ISB',
    slaDetails: ['Same day available', 'Outstation: Arranged'],
  },
  {
    number: '05',
    title: 'Post-Delivery Follow-Up',
    description:
      'The account manager follows up within 48 hours of delivery to confirm satisfaction, log any feedback, and initiate any necessary remedial action. For managed accounts, this data is entered into the client service record and reviewed during the monthly account health check.',
    slaTitle: 'Follow-Up Call',
    slaDetails: ['Within 48 hours', 'of delivery'],
  },
];

export const ADVANTAGES = [
  {
    number: '01',
    title: 'One Supplier, Every Category',
    description:
      'Managing multiple vendors for different supply categories creates administrative overhead, inconsistent quality, and accountability gaps. Skyline Equipage consolidates your procurement under a single, accountable relationship — one contact, one invoice, one standard.',
    tinted: false,
  },
  {
    number: '02',
    title: 'Corporate Discipline at Every Order Size',
    description:
      'We apply the same documentation, accountability, and follow-up process to a Rs. 5,000 stationery order as we do to a Rs. 5,000,000 facility fitout. There are no small orders — only clients who deserve the same standard.',
    tinted: true,
  },
  {
    number: '03',
    title: 'Transparent Pricing, No Surprises',
    description:
      'Our quotations are itemised, our margins are not hidden, and our invoices match what was approved. We believe price clarity is not just ethical — it is the foundation of a durable business relationship.',
    tinted: false,
  },
  {
    number: '04',
    title: 'Proactive Communication, Always',
    description:
      'We do not wait to be chased. Delays are reported before they affect delivery. Stock issues are flagged with alternatives. Every order status update reaches the client before they need to ask for it.',
    tinted: false,
  },
  {
    number: '05',
    title: 'Scalable from Day One',
    description:
      'Whether you begin with a single category order or a multi-vertical managed account, our infrastructure is built to scale with you. Growing volumes, new product lines, and additional locations are supported by the same platform, team, and processes from day one.',
    tinted: true,
  },
  {
    number: '06',
    title: 'Vetted Supplier Network',
    description:
      'Every supplier in our network has been assessed for product quality, pricing reliability, and fulfilment consistency. We do not pass on unverified vendors or take chances with your brand reputation.',
    tinted: false,
  },
];

export const SECTORS = [
  {
    number: '01',
    title: 'Corporate Offices',
    description:
      'From SME offices to large corporate headquarters — stationery, IT consumables, facility supplies, and pantry provisions on a recurring managed basis.',
    capabilities: ['Office supplies', 'IT accessories', 'Janitorial', 'Pantry'],
    tinted: true,
  },
  {
    number: '02',
    title: 'Government & Public Sector',
    description:
      'Tender-ready supply for government departments, municipalities, and public institutions. Full GST compliance, official invoicing, and documented procurement trails.',
    capabilities: ['Tender fulfilment', 'Stationery', 'Safety equipment', 'Facility supplies'],
    tinted: false,
  },
  {
    number: '03',
    title: 'Construction & Engineering',
    description:
      'On-site PPE, safety equipment, materials, and tools. We work with project timelines and phase deliveries to match construction schedules.',
    capabilities: ['PPE & safety', 'Materials', 'Tools', 'Site supplies'],
    tinted: false,
  },
  {
    number: '04',
    title: 'Hospitals & Healthcare',
    description:
      'Disposables, infection control supplies, lab consumables, and administrative stationery for clinical and administrative teams. Compliance-aware sourcing.',
    capabilities: ['Disposables', 'Lab supplies', 'PPE', 'Admin stationery'],
    tinted: true,
  },
  {
    number: '05',
    title: 'Schools & Universities',
    description:
      'Educational institutions require reliable, large-volume supply of stationery, lab materials, janitorial supplies, and facility maintenance items — on a scheduled basis.',
    capabilities: ['Stationery', 'Lab consumables', 'Facility supplies', 'Sports & activity'],
    tinted: true,
  },
  {
    number: '06',
    title: 'Hotels & Hospitality',
    description:
      'Guest amenities, housekeeping supplies, kitchen provisions, and facility maintenance items. We understand hospitality standards and supply to them.',
    capabilities: ['Housekeeping', 'Guest amenities', 'Kitchen supplies', 'Linen & textiles'],
    tinted: false,
  },
];

export interface CommercialTerm {
  term: string;
  highlight: string;
  details: string;
}

export const COMMERCIAL_TERMS: CommercialTerm[] = [
  {
    term: 'Quotation Validity',
    highlight: '72 hours from date of issue',
    details: 'Prices are subject to supplier variation after this window. We will notify clients before any change is applied.',
  },
  {
    term: 'Minimum Order Value',
    highlight: 'PKR 2,000 Standard · PKR 10,000 Custom',
    details: 'No minimum for managed account clients. Standard order minimum: PKR 2,000. Custom sourcing minimum: PKR 10,000.',
  },
  {
    term: 'Payment Terms',
    highlight: '100% / 50-50 / 30-Day Net',
    details:
      'New clients: 100% advance on first two orders. Established clients: 50% advance, 50% on delivery. Managed accounts: 30-day net terms upon credit approval.',
  },
  {
    term: 'Accepted Payment',
    highlight: 'Bank Transfer & Cheque',
    details:
      'Bank transfer (all major Pakistani banks), and cheque (managed accounts only). Receipts issued within 2 hours of payment confirmation.',
  },
  {
    term: 'Delivery Coverage',
    highlight: 'RWP/ISB · Punjab · Nationwide',
    details:
      'Rawalpindi & Islamabad: Same-day or next-day delivery. Punjab outstation: 2–3 business days. Other provinces: 3–5 business days via courier partner.',
  },
  {
    term: 'Delivery Charges',
    highlight: 'Free above PKR 10,000 (RWP/ISB)',
    details:
      'Free delivery on orders above PKR 10,000 (Rawalpindi / Islamabad). Standard delivery charges depend on weight and location. Outstation quoted per order.',
  },
  {
    term: 'Returns & Replacements',
    highlight: 'Replaced within 48 hours at no charge',
    details:
      'Defective or incorrect items replaced at no charge within 48 hours of delivery upon documented claim.',
  },
  {
    term: 'Tax & Invoicing',
    highlight: 'GST-Compliant PKR Invoices',
    details:
      'All invoices are GST-compliant. NTN number available on request. Invoices issued in PKR with full itemisation, quantities, unit prices, and applicable taxes.',
  },
];
