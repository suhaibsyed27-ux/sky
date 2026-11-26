import { ArrowDownRight } from 'lucide-react';
import { TABLE_OF_CONTENTS } from '../data/portfolioData';

function SkylineEmblem() {
  return (
    <svg
      viewBox="0 0 360 150"
      className="h-24 w-auto sm:h-28"
      fill="none"
      aria-hidden="true"
    >
      <rect x="10" y="92" width="32" height="54" stroke="#C6A47E" strokeWidth="1.5" fill="#2A241E" fillOpacity="0.45" />
      <rect x="48" y="62" width="34" height="84" stroke="#C6A47E" strokeWidth="1.5" fill="#2A241E" fillOpacity="0.45" />
      <line x1="106" y1="8" x2="106" y2="26" stroke="#C6A47E" strokeWidth="1.5" />
      <rect x="88" y="26" width="38" height="120" stroke="#C6A47E" strokeWidth="1.5" fill="#2A241E" fillOpacity="0.55" />
      <rect x="132" y="50" width="34" height="96" stroke="#C6A47E" strokeWidth="1.5" fill="#2A241E" fillOpacity="0.45" />
      <rect x="172" y="78" width="44" height="68" stroke="#C6A47E" strokeWidth="1.5" fill="#2A241E" fillOpacity="0.45" />
      <rect x="222" y="56" width="34" height="90" stroke="#C6A47E" strokeWidth="1.5" fill="#2A241E" fillOpacity="0.45" />
      <rect x="262" y="98" width="38" height="48" stroke="#C6A47E" strokeWidth="1.5" fill="#2A241E" fillOpacity="0.45" />
      <rect x="306" y="80" width="32" height="66" stroke="#C6A47E" strokeWidth="1.5" fill="#2A241E" fillOpacity="0.45" />
    </svg>
  );
}

export default function HeroCover() {
  return (
    <section id="top" className="bg-[#0E0E0E] text-[#F7F4EF]">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-8">
              <SkylineEmblem />
            </div>
            <p className="font-mono text-xs tracking-[0.28em] text-[#C6A47E]">
              Corporate Portfolio · 2026
            </p>
            <h1
              className="mt-4 font-serif font-normal tracking-[0.08em] text-[#F7F4EF] uppercase"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1.05,
                textWrap: 'balance',
              }}
            >
              Skyline
              <span className="mt-1 block text-[#C6A47E]">Equipage</span>
            </h1>
            <p className="mt-5 font-mono text-xs tracking-[0.22em] text-[#B8B0A4] uppercase">
              General Order Supplier · Precision · Reliability · Partnership
            </p>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-sm leading-relaxed text-[#D6CFC4]">
              Rawalpindi-based general order supplier serving corporate, institutional, and
              industrial organisations across Pakistan with single-point accountability.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#order-box"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[#256660] px-6 py-3 text-sm font-semibold text-[#F7F4EF] transition-colors duration-150 hover:bg-[#1E544F] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A47E]"
              >
                <span>Order Directly via WhatsApp</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#catalogue"
                className="inline-flex min-h-[44px] items-center px-2 py-2 text-sm font-medium text-[#C6A47E] transition-colors duration-150 hover:text-[#F7F4EF] whitespace-nowrap shrink-0"
              >
                Browse 7 Verticals
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Teal Foundation Band from Cover Page */}
      <div className="bg-[#256660] text-[#F7F4EF]">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-6 px-6 py-8 md:flex-row md:items-center">
          <p className="max-w-2xl text-base leading-relaxed text-[#F7F4EF]/95">
            Skyline Equipage is a full-spectrum general order supplier committed to equipping
            organisations with every essential — delivered with precision, accountability, and the
            discipline of a trusted long-term partner.
          </p>
          <div className="shrink-0 md:text-right">
            <p className="font-mono text-[11px] tracking-[0.24em] text-[#F7F4EF]/75 uppercase">
              Document Type
            </p>
            <p className="mt-1 font-serif text-xl text-[#F7F4EF]">Company Portfolio</p>
          </div>
        </div>
      </div>

      {/* Portfolio Contents Strip (Page 2 Reference) */}
      <div className="border-b border-[#C6A47E]/35 bg-[#F7F4EF] text-[#141414]">
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#C6A47E]/45 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-[#7A6B5D] uppercase">
                Portfolio Index
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium text-[#141414] sm:text-4xl">
                Table of Contents
              </h2>
            </div>
            <p className="font-mono text-xs tracking-[0.18em] text-[#7A6B5D] uppercase">
              Skyline Equipage · Corporate Portfolio 2026
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {TABLE_OF_CONTENTS.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="group flex items-baseline justify-between gap-6 border-b border-[#C6A47E]/35 py-4 transition-colors duration-150 hover:border-[#256660]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs font-medium text-[#B08A5E] tabular-nums">
                    {item.number}
                  </span>
                  <span className="font-serif text-xl font-medium text-[#141414] transition-colors group-hover:text-[#256660]">
                    {item.title}
                  </span>
                </div>
                <span className="hidden text-right text-xs leading-snug text-[#5C564E] lg:block lg:max-w-[260px]">
                  {item.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
