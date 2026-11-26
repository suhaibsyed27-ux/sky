export default function Footer() {
  return (
    <footer className="bg-[#256660] text-[#F7F4EF]">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-6 px-6 py-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-serif text-2xl tracking-[0.16em] text-[#F7F4EF] uppercase">
            Skyline
          </p>
          <p className="mt-1 font-mono text-[11px] tracking-[0.22em] text-[#D6EFEA] uppercase">
            Equipage · General Order Supplier
          </p>
        </div>

        <div className="font-mono text-[11px] leading-relaxed tracking-[0.18em] text-[#D6EFEA] uppercase sm:text-right">
          <p>Corporate Portfolio · 2026</p>
          <p>© Skyline Equipage · All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
