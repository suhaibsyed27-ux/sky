import { ADVANTAGES, PROCESS_STEPS } from '../data/portfolioData';

export default function ProcessAndAdvantages() {
  return (
    <>
      {/* 05 · Our Process */}
      <section id="process" className="border-t border-[#C6A47E]/35 bg-[#FFFFFF] text-[#141414]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="flex flex-col justify-between gap-6 border-b border-[#C6A47E]/50 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-[#9A7B56] uppercase">
                05 · Our Process
              </p>
              <h2
                className="mt-3 font-serif font-medium text-[#141414]"
                style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.08 }}
              >
                How We Operate
              </h2>
              <p className="mt-3 font-mono text-xs tracking-[0.22em] text-[#5C564E] uppercase">
                Inquiry · Fulfilment · Delivery · Follow-Up
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5C564E] md:text-right">
              A transparent, step-by-step process designed to eliminate uncertainty and give clients
              full visibility over every order from request to receipt.
            </p>
          </div>

          <div className="mt-4 divide-y divide-[#C6A47E]/45 border-b border-[#C6A47E]/45">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-1 gap-6 py-9 md:grid-cols-12 md:items-start"
              >
                <div className="md:col-span-2">
                  <span className="font-serif text-5xl font-normal text-[#C6A47E] tabular-nums">
                    {step.number}
                  </span>
                </div>

                <div className="md:col-span-7">
                  <h3 className="font-serif text-2xl font-medium text-[#141414]">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#423E39]">
                    {step.description}
                  </p>
                </div>

                <div className="md:col-span-3 md:text-right">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-[#9A7B56] uppercase">
                    {step.slaTitle}
                  </p>
                  <div className="mt-2 space-y-1 font-mono text-xs text-[#2A2622] tabular-nums">
                    {step.slaDetails.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 · Why Skyline Equipage */}
      <section id="advantages" className="border-t border-[#C6A47E]/35 bg-[#F7F4EF] text-[#141414]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="flex flex-col justify-between gap-6 border-b border-[#C6A47E]/50 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-[#9A7B56] uppercase">
                06 · Why Skyline Equipage
              </p>
              <h2
                className="mt-3 font-serif font-medium text-[#141414]"
                style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.08 }}
              >
                The Case for Us
              </h2>
              <p className="mt-3 font-mono text-xs tracking-[0.22em] text-[#5C564E] uppercase">
                Advantages · Commitments · Differentiators
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5C564E] md:text-right">
              We understand that in a first meeting, you are evaluating risk as much as value. Here
              is why partnering with Skyline Equipage is the lower-risk, higher-return choice.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px border border-[#C6A47E]/45 bg-[#C6A47E]/45 md:grid-cols-2">
            {ADVANTAGES.map((adv) => (
              <div
                key={adv.number}
                className={`p-8 sm:p-10 ${adv.tinted ? 'bg-[#EAE0D0]' : 'bg-[#FFFFFF]'}`}
              >
                <p className="font-mono text-xs tracking-[0.22em] text-[#9A7B56] uppercase tabular-nums">
                  {adv.number} · Advantage
                </p>
                <h3 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#141414]">
                  {adv.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#423E39]">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
