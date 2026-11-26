import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#services' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'Process', href: '#process' },
  { label: 'Terms', href: '#terms' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#C6A47E]/25 bg-[#0E0E0E]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4">
        <a
          href="#top"
          className="font-serif text-xl font-medium tracking-wide text-[#F7F4EF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A47E]"
        >
          Skyline Equipage
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-7 text-sm font-medium text-[#D6CFC4] md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#F7F4EF] hover:underline hover:underline-offset-8 hover:decoration-[#C6A47E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A47E]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#order-box"
            className="hidden sm:inline-flex items-center justify-center rounded-sm bg-[#256660] px-4 py-2 text-xs font-semibold tracking-wide text-[#F7F4EF] transition-colors duration-150 hover:bg-[#1E544F] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A47E]"
          >
            Submit Order
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#C6A47E]/30 text-[#F7F4EF] transition-colors hover:border-[#C6A47E] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-[#C6A47E]/20 bg-[#121212] px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 text-sm font-medium text-[#D6CFC4] transition-colors hover:text-[#F7F4EF]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#order-box"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[#256660] px-4 py-2 text-sm font-semibold text-[#F7F4EF] transition-colors hover:bg-[#1E544F]"
            >
              Submit Order on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
