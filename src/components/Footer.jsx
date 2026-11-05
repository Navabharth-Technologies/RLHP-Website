import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Heart, ShieldCheck } from 'lucide-react';

export default function Footer({ setCurrentPage, onNavClick }) {
  const B = import.meta.env.BASE_URL;

  const handleNav = (pageId, optionId = null) => {
    if (onNavClick) {
      onNavClick(pageId, optionId);
    } else if (setCurrentPage) {
      setCurrentPage(pageId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="colophon" className="site-footer bg-[#0a1628] text-gray-200 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Organization Branding & Address */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white p-1 border-2 border-rlhp-green flex-shrink-0">
                <img
                  src={`${B}rlhp-logo.png`}
                  alt="RLHP Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-white font-extrabold text-base block leading-tight">
                  Rural Literacy &amp; Health Programme
                </span>
                <span className="text-xs text-rlhp-accentgreen font-medium">
                  (RLHP), Mysuru — Est. 1984
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              No. 343, 2nd Stage, Gayathripuram, Udayagiri Post, Mysuru – 570 019, Karnataka, India
            </p>
            <p className="text-xs text-gray-400">
              Transforming lives of children, women, and marginalized communities across South India for 42+ years.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-[2px] after:bg-rlhp-green">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Our Organization', page: 'about', opt: 'identity' },
                { label: 'Our Team', page: 'about', opt: 'team' },
                { label: 'Our Identity', page: 'about', opt: 'identity' },
                { label: 'Contact Us', page: 'contact' },
                { label: 'Financials & Audit Reports', page: 'financials' },
                { label: 'Our Gallery', page: 'gallery' },
                { label: 'Media Coverage', page: 'media-coverage' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav(item.page, item.opt)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rlhp-green opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us & Follow Us */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-[2px] after:bg-rlhp-green">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400 mb-6">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-rlhp-accentgreen flex-shrink-0" />
                <a href="mailto:rlhpintervita@gmail.com" className="hover:text-white transition-colors">
                  rlhpintervita@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-rlhp-accentgreen flex-shrink-0" />
                <a href="tel:08212451216" className="hover:text-white transition-colors">
                  0821 2451216
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-rlhp-accentgreen flex-shrink-0 mt-0.5" />
                <span>Mysuru, Karnataka, India</span>
              </li>
            </ul>

            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Follow Us
            </h4>
            <div className="flex gap-2.5">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/rlhpmysore.rlhp/', label: 'Facebook' },
                { icon: Instagram, href: 'https://instagram.com/rlhpmysore', label: 'Instagram' },
                { icon: Youtube, href: 'https://www.youtube.com/channel/UCwlQCuupud6ldOTS57PaYaA', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-rlhp-green hover:text-white flex items-center justify-center text-gray-300 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Compliance, Society Act & Donate */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-[2px] after:bg-rlhp-green">
              Transparency &amp; Legal
            </h3>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-gray-300 space-y-2 mb-5">
              <div className="flex items-center gap-2 text-rlhp-accentgreen font-semibold">
                <ShieldCheck size={16} />
                <span>Non-Profit Verification</span>
              </div>
              <p>Registered under Karnataka Societies Registration Act 1960.</p>
              <p>Tax exemption benefits available under Section 80G &amp; 12A of the Income Tax Act.</p>
              <p>FCRA Compliant for international donations.</p>
            </div>

            <button
              onClick={() => handleNav('bank-details')}
              className="w-full inline-flex items-center justify-center gap-2 bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-semibold text-sm py-2.5 px-4 rounded-lg shadow transition-colors"
            >
              <Heart size={15} className="fill-white" />
              Donate to RLHP
            </button>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Rural Literacy and Health Programme (RLHP). All rights reserved.</p>
          <p>Designed with care for grassroots community impact.</p>
        </div>
      </div>
    </footer>
  );
}
