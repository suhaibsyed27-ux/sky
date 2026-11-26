import { COMMERCIAL_TERMS, SECTORS } from '../data/portfolioData';

export default function SectorsAndTerms() {
  return (
    <>
      {/* 07 · Sectors We Serve */}
      <section id="sectors" className="border-t border-[#C6A47E]/35 bg-[#FFFFFF] text-[#141414]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="flex flex-col justify-between gap-6 border-b border-[#C6A47E]/50 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-[#9A7B56] uppercase">
                07 · Sectors We Serve
              </p>
              <h2
                className="mt-3 font-serif font-medium text-[#141414]"
                style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.08 }}
              >
                Who We Work With
              </h2>
              <p className="mt-3 font-mono text-xs tracking-[0.22em] text-[#5C564E] uppercase">
                Sectors · Clients · Applications
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5C564E] md:text-right">
              Skyline Equipage is structured to serve organisations across seven major sectors, each
              with tailored supply requirements that our product range and service model are built
              to address.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px border border-[#C6A47E]/45 bg-[#C6A47E]/45 md:grid-cols-2">
            {SECTORS.map((sector) => (
              <div
                key={sector.number}
                className={`flex flex-col justify-between p-8 ${
                  sector.tinted ? 'bg-[#F0ECE4]' : 'bg-[#FFFFFF]'
                }`}
              >
                <div>
                  <p className="font-mono text-xs tracking-[0.22em] text-[#256660] uppercase tabular-nums">
                    Sector {sector.number}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-[#141414]">
                    {sector.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#423E39]">
                    {sector.description}
                  </p>
                </div>

                <p className="mt-6 border-t border-[#C6A47E]/35 pt-4 font-mono text-xs text-[#256660]">
                  {sector.capabilities.join(' · ')}
                </p>
              </div>
            ))}
          </div>

          {/* 7th Sector / All-Sector General Order Supplier Assurance */}
          <div className="mt-6 border border-[#256660]/40 bg-[#256660]/10 p-6 sm:p-8">
            <p className="font-mono text-xs tracking-[0.2em] text-[#256660] uppercase">
              Sector 07 · Industrial & Custom Requirements
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#1E3B38]">
              Not in this list? Skyline Equipage operates as a full-spectrum general order supplier
              — if your organisation has a supply requirement, we have the capability to address it.
              Submit a detailed request below and our procurement team will source, vet, and deliver
              the right solution within your specifications, budget, and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* 08 · Commercial Terms */}
      <section id="terms" className="border-t border-[#C6A47E]/35 bg-[#F7F4EF] text-[#141414]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="flex flex-col justify-between gap-6 border-b border-[#C6A47E]/50 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-[#9A7B56] uppercase">
                08 · Commercial Terms
              </p>
              <h2
                className="mt-3 font-serif font-medium text-[#141414]"
                style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.08 }}
              >
                How We Do Business
              </h2>
              <p className="mt-3 font-mono text-xs tracking-[0.22em] text-[#5C564E] uppercase">
                Pricing · Payment · Delivery · Accounts
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5C564E] md:text-right">
              Transparency in commercial terms is as important to us as transparency in pricing. We
              believe clients make better decisions — and build better partnerships — when they
              understand the terms clearly from the start.
            </p>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#423E39]">
            The following terms represent our standard commercial framework. Managed account clients
            may negotiate custom terms as part of their service agreement. All figures are in
            Pakistani Rupees (PKR) unless otherwise stated.
          </p>

          <div className="mt-8 divide-y divide-[#C6A47E]/45 border border-[#C6A47E]/55 bg-[#FFFFFF]">
            {COMMERCIAL_TERMS.map((row) => (
              <div
                key={row.term}
                className="grid grid-cols-1 md:grid-cols-12"
              >
                <div className="bg-[#121212] px-6 py-5 text-[#F7F4EF] md:col-span-4 md:flex md:items-center">
                  <span className="font-serif text-lg font-medium tracking-wide text-[#C6A47E]">
                    {row.term}
                  </span>
                </div>
                <div className="px-6 py-5 md:col-span-8">
                  <p className="font-mono text-xs font-medium text-[#256660] tabular-nums uppercase">
                    {row.highlight}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#423E39]">{row.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
