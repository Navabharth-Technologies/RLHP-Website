import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const B = import.meta.env.BASE_URL;

/* ─── NAV STRUCTURE (Direct Links, No Dropdowns) ───────────────────────── */
const NAV = [
  { label: 'Home', id: 'home' },
  { label: 'Our Identity', id: 'about' },
  { label: 'What We Do', id: 'projects' },
  { label: 'Impact & Resources', id: 'impact' },
  { label: 'Our Gallery', id: 'gallery' },
  { label: 'Media Coverage', id: 'media-coverage' },
  { label: 'Financials', id: 'financials' },
  { label: 'Contact Us', id: 'contact' },
  { label: 'AEA NE', id: 'where-we-work' },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function Navbar({ currentPage, setCurrentPage, onNavClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll listener for sticky shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* Lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* Navigate handler */
  const go = (id, opt = null) => {
    if (onNavClick) onNavClick(id, opt);
    else if (setCurrentPage) setCurrentPage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* Active state check */
  const active = (item) => {
    if (item.id === currentPage) return true;
    if (item.id === 'about' && (currentPage === 'about' || currentPage === 'identity')) return true;
    if (item.id === 'projects' && (currentPage === 'projects' || currentPage === 'programmes')) return true;
    if (item.id === 'impact' && (currentPage === 'impact' || currentPage === 'knowledge-hub' || currentPage === 'mis' || currentPage === 'tenders')) return true;
    return false;
  };

  /* ─────────── RENDER ─────────── */
  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">

      {/* ══════════ MAIN NAVIGATION BAR (Top bar removed per user request) ══════════ */}
      <nav
        className={`bg-[#1c1d1f] transition-all duration-300 border-b border-white/5 ${
          scrolled ? 'shadow-2xl' : ''
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[76px]">

            {/* ── Logo + Brand ── */}
            <button
              onClick={() => go('home')}
              className="flex items-center gap-3 sm:gap-3.5 flex-shrink-0 text-left group"
            >
              <img
                src={`${B}rlhp-logo.png`}
                alt="RLHP Logo"
                className="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-contain bg-white p-0.5 ring-2 ring-[#236B28]/50 group-hover:ring-[#4CAF50] transition-all duration-200 shadow-md shrink-0"
              />
              <div className="leading-tight">
                <span className="block text-[#4CAF50] font-black text-[14.5px] sm:text-[16px] tracking-tight group-hover:text-[#66BB6A] transition-colors">
                  Rural Literacy &amp; Health Programme
                </span>
                <span className="block text-white text-[10px] sm:text-[11px] font-medium tracking-normal opacity-90 mt-0.5">
                  Empowering through health, education and livelihood
                </span>
              </div>
            </button>

            {/* ── Desktop Navigation Menu (Direct Links, No Dropdowns) ── */}
            <div className="hidden xl:flex items-center gap-1.5 lg:gap-3 ml-8 sm:ml-12">
              {NAV.map((item) => (
                <button
                  key={item.label}
                  onClick={() => go(item.id)}
                  className={`px-3 py-2 text-[14px] font-bold rounded transition-colors duration-150 whitespace-nowrap
                    ${active(item) ? 'text-[#4CAF50]' : 'text-white hover:text-[#4CAF50]'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* ── Mobile Hamburger ── */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* ══════════ MOBILE DRAWER ══════════ */}
        <div
          className={`xl:hidden border-t border-gray-800 bg-[#1c1d1f] overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-5 py-4 space-y-1.5 overflow-y-auto max-h-[80vh]">
            {NAV.map((item) => (
              <button
                key={item.label}
                onClick={() => go(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-[14px] font-bold transition-colors
                  ${
                    active(item)
                      ? 'bg-white/10 text-[#4CAF50] border-l-4 border-[#4CAF50]'
                      : 'text-white hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile donate button */}
            <div className="pt-4 border-t border-gray-800">
              <button
                onClick={() => go('bank-details')}
                className="w-full flex items-center justify-center gap-2 bg-[#236B28] hover:bg-[#154219] text-white px-4 py-3 rounded-md text-[14px] font-black tracking-wide shadow-md uppercase transition-colors"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/60 -z-10"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
