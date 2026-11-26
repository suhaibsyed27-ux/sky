import { AT_A_GLANCE_METRICS, CORE_VALUES } from '../data/portfolioData';

export default function PhilosophyAndAbout() {
  return (
    <>
      {/* 01 · Brand Philosophy */}
      <section id="philosophy" className="bg-[#FFFFFF] text-[#141414]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="flex flex-col justify-between gap-6 border-b border-[#C6A47E]/50 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-[#9A7B56] uppercase">
                01 · Brand Philosophy
              </p>
              <h2
                className="mt-3 font-serif font-medium text-[#141414]"
                style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.08 }}
              >
                The Skyline Standard
              </h2>
              <p className="mt-3 font-mono text-xs tracking-[0.22em] text-[#5C564E] uppercase">
                Vision · Values · Purpose
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5C564E] md:text-right">
              Every brand is a promise. Ours is built on the belief that a supplier can be more than
              a vendor — it can be the invisible backbone that keeps an organisation running.
            </p>
          </div>

          <blockquote className="my-12 max-w-4xl font-serif text-2xl italic leading-relaxed text-[#1E1E1E] sm:text-3xl">
            “We believe that supply is not a transaction — it is a relationship built on
            consistency, transparency, and the quiet discipline of doing exactly what you said you
            would do, every single time.”
          </blockquote>

          <div className="grid grid-cols-1 gap-10 border-t border-[#C6A47E]/50 pt-10 md:grid-cols-2">
            <div>
              <h3 className="border-b border-[#C6A47E]/45 pb-3 font-serif text-2xl font-medium text-[#141414]">
                Our Vision
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-[#423E39]">
                To become the most trusted general order supplier for organisations across Pakistan
                — known not for the loudest pitch, but for the most reliable delivery. We envision a
                firm where clients never need to chase an order, never question a quote, and never
                doubt our commitment to their operation.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#423E39]">
                Skyline Equipage was founded on the conviction that the supply sector deserves a
                firm that operates with corporate discipline at every price point. Whether the order
                is a single ream of paper or a facility-wide equipment rollout, every client receives
                the same standard of care.
              </p>
            </div>

            <div>
              <h3 className="border-b border-[#C6A47E]/45 pb-3 font-serif text-2xl font-medium text-[#141414]">
                Our Mission
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-[#423E39]">
                To equip every client organisation with the materials, equipment, and consumables
                they need — sourced from verified suppliers, delivered on time, and backed by
                responsive account management that treats every order as a priority.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#423E39]">
                We do not compete on noise. We compete on track record. Every fulfilment is an
                opportunity to deepen a relationship, and we approach that responsibility with the
                seriousness it deserves. Our mission is measured one delivered order at a time.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 divide-y divide-[#C6A47E]/45 border-t border-[#C6A47E]/45 md:grid-cols-3 md:divide-x md:divide-y-0">
            {CORE_VALUES.map((val) => (
              <div key={val.number} className="py-6 md:px-6 md:first:pl-0 md:last:pr-0">
                <p className="font-mono text-xs tracking-[0.2em] text-[#9A7B56] uppercase tabular-nums">
                  {val.number} · Value
                </p>
                <h4 className="mt-2 font-serif text-2xl font-medium text-[#141414]">{val.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-[#524D47]">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 · Who We Are */}
      <section id="who-we-are" className="border-t border-[#C6A47E]/35 bg-[#F7F4EF] text-[#141414]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="flex flex-col justify-between gap-6 border-b border-[#C6A47E]/50 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-[#9A7B56] uppercase">
                02 · Who We Are
              </p>
              <h2
                className="mt-3 font-serif font-medium text-[#141414]"
                style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.08 }}
              >
                Built for Business
              </h2>
              <p className="mt-3 font-mono text-xs tracking-[0.22em] text-[#5C564E] uppercase">
                Company · People · Ethos
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5C564E] md:text-right">
              A new firm with a founding team that has spent years inside the supply chain — as
              buyers, as operations managers, and as clients who grew tired of being let down.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-0 border border-[#C6A47E]/40 lg:grid-cols-12">
            {/* Dark At A Glance Column */}
            <div className="bg-[#121212] p-8 text-[#F7F4EF] lg:col-span-4">
              <p className="font-mono text-xs tracking-[0.22em] text-[#B8B0A4] uppercase">
                At a Glance
              </p>
              <div className="mt-6 divide-y divide-[#C6A47E]/30 border-t border-[#C6A47E]/30">
                {AT_A_GLANCE_METRICS.map((metric) => (
                  <div key={metric.label} className="py-5">
                    <p className="font-serif text-4xl font-normal text-[#C6A47E] tabular-nums">
                      {metric.value}
                    </p>
                    <p className="mt-1.5 font-mono text-[11px] tracking-[0.2em] text-[#D6CFC4] uppercase">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* White Narrative Column */}
            <div className="flex flex-col justify-between bg-[#FFFFFF] p-8 sm:p-10 lg:col-span-8">
              <div>
                <p className="font-serif text-2xl leading-snug text-[#141414] sm:text-3xl">
                  Skyline Equipage is a Rawalpindi-based general order supplier established to serve
                  the growing demand for a dependable, professionally managed procurement partner
                  across corporate, institutional, and industrial sectors.
                </p>

                <p className="mt-6 text-[15px] leading-relaxed text-[#423E39]">
                  We were founded by professionals who understood, from direct operational
                  experience, that the supply sector in Pakistan lacked a firm that combined breadth
                  of product range with corporate-grade accountability. The vision was clear: build
                  a supplier that organisations could trust with their operational continuity — not
                  just their discretionary orders.
                </p>

                <p className="mt-4 text-[15px] leading-relaxed text-[#423E39]">
                  From day one, Skyline Equipage has been structured around the needs of the client.
                  Our account management model ensures that every client organisation has a single
                  point of contact, a consistent quotation process, and full visibility over order
                  status from placement to delivery.
                </p>
              </div>

              <div className="mt-8 border border-[#256660]/25 bg-[#256660]/8 px-6 py-5">
                <p className="font-serif text-xl italic text-[#1B4A45]">
                  “We built the firm we wished existed when we were on the other side of the
                  purchase order.”
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-[#423E39]">
                Our supplier network is continuously vetted for quality, pricing competitiveness, and
                delivery reliability. We do not list a product we cannot source, and we do not commit
                to a timeline we cannot meet. This discipline is the foundation of the Skyline
                standard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
