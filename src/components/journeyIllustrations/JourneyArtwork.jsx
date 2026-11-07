import React from 'react';

export default function JourneyArtwork({ id }) {
  switch (id) {
    case '1984':
      // 1984: Started in 1 Slum in Mysuru - Urban settlement & community empowerment
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="sky-1984" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffeedd" />
              <stop offset="60%" stopColor="#ffd8b8" />
              <stop offset="100%" stopColor="#fca582" />
            </linearGradient>
            <linearGradient id="roof-1984" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
          </defs>
          {/* Warm sunrise sky */}
          <rect width="400" height="220" fill="url(#sky-1984)" />
          {/* Glowing rising sun */}
          <circle cx="200" cy="90" r="45" fill="#fef08a" opacity="0.9" className="animate-pulse" />
          <circle cx="200" cy="90" r="60" fill="#fef08a" opacity="0.3" />

          {/* Distant Mysuru hill silhouette */}
          <path d="M 0,160 Q 90,130 180,155 T 400,160 L 400,220 L 0,220 Z" fill="#9a3412" opacity="0.4" />

          {/* Informal Settlement / Community Homes Illustration */}
          {/* House 1 Left */}
          <polygon points="40,140 100,110 160,140" fill="url(#roof-1984)" />
          <rect x="55" y="140" width="90" height="60" fill="#fed7aa" stroke="#9a3412" strokeWidth="2" />
          <rect x="85" y="155" width="30" height="45" fill="#78350f" rx="3" />
          <rect x="65" y="150" width="15" height="15" fill="#fef08a" stroke="#78350f" strokeWidth="1" />

          {/* Central Shelter - The Beginning */}
          <polygon points="150,130 220,95 290,130" fill="#c2410c" />
          <rect x="165" y="130" width="110" height="70" fill="#ffedd5" stroke="#9a3412" strokeWidth="2" />
          <rect x="205" y="145" width="30" height="55" fill="#15803d" rx="3" />
          <rect x="175" y="145" width="20" height="20" fill="#bae6fd" stroke="#0369a1" strokeWidth="1" />
          <rect x="245" y="145" width="20" height="20" fill="#bae6fd" stroke="#0369a1" strokeWidth="1" />

          {/* Right House */}
          <polygon points="275,145 340,115 400,145" fill="url(#roof-1984)" />
          <rect x="290" y="145" width="85" height="55" fill="#fde68a" stroke="#9a3412" strokeWidth="2" />
          <rect x="320" y="160" width="25" height="40" fill="#78350f" rx="2" />

          {/* Children and community figures holding hands */}
          <g fill="#166534">
            {/* Child 1 */}
            <circle cx="110" cy="180" r="6" />
            <path d="M 104,188 L 116,188 L 114,208 L 106,208 Z" />
            {/* Child 2 */}
            <circle cx="130" cy="178" r="7" />
            <path d="M 122,187 L 138,187 L 135,210 L 125,210 Z" />
            {/* Adult Worker */}
            <circle cx="152" cy="170" r="8" fill="#15803d" />
            <path d="M 143,180 L 161,180 L 158,214 L 146,214 Z" fill="#15803d" />
          </g>

          {/* Foreground ground grass */}
          <rect x="0" y="200" width="400" height="20" fill="#15803d" />
        </svg>
      );

    case '1989':
      // 1989: Expanded to More Slums in Mysuru - Citywide expansion & connecting communities
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="bg-1989" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e3a5f" />
            </linearGradient>
            <linearGradient id="pulse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#bg-1989)" />

          {/* City Grid Network lines */}
          <path d="M 80,140 Q 200,90 320,130" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 4" fill="none" opacity="0.8" />
          <path d="M 110,80 Q 200,150 290,70" stroke="#4ade80" strokeWidth="2.5" strokeDasharray="5 3" fill="none" opacity="0.7" />
          <path d="M 200,50 L 200,170" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.6" />

          {/* Connecting Pulse Nodes (Slum hubs across Mysuru) */}
          {/* Node 1 */}
          <g transform="translate(80, 140)">
            <circle cx="0" cy="0" r="16" fill="#38bdf8" opacity="0.25" className="animate-ping" />
            <circle cx="0" cy="0" r="10" fill="#0284c7" />
            <circle cx="0" cy="0" r="5" fill="#e0f2fe" />
          </g>
          {/* Node 2 - Central Hub */}
          <g transform="translate(200, 110)">
            <circle cx="0" cy="0" r="24" fill="#22c55e" opacity="0.3" className="animate-ping" />
            <circle cx="0" cy="0" r="14" fill="#16a34a" />
            <circle cx="0" cy="0" r="7" fill="#f0fdf4" />
          </g>
          {/* Node 3 */}
          <g transform="translate(320, 130)">
            <circle cx="0" cy="0" r="18" fill="#38bdf8" opacity="0.25" className="animate-ping" />
            <circle cx="0" cy="0" r="11" fill="#0284c7" />
            <circle cx="0" cy="0" r="5" fill="#e0f2fe" />
          </g>
          {/* Node 4 - North */}
          <g transform="translate(140, 75)">
            <circle cx="0" cy="0" r="9" fill="#eab308" />
            <circle cx="0" cy="0" r="4" fill="#fef9c3" />
          </g>
          {/* Node 5 - South */}
          <g transform="translate(270, 70)">
            <circle cx="0" cy="0" r="9" fill="#eab308" />
            <circle cx="0" cy="0" r="4" fill="#fef9c3" />
          </g>

          {/* Stylized Settlement Roof Clusters */}
          <g opacity="0.85" fill="#e2e8f0">
            <polygon points="70,165 85,150 100,165" fill="#38bdf8" />
            <polygon points="185,140 205,125 225,140" fill="#4ade80" />
            <polygon points="305,155 325,140 345,155" fill="#38bdf8" />
          </g>

          <text x="200" y="200" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold" letterSpacing="2">
            MYSURU CITYWIDE NETWORK
          </text>
        </svg>
      );

    case '1990a':
      // 1990: Outreach with Street Children - Helping hands, child protection
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="bg-1990a" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#451a03" />
              <stop offset="60%" stopColor="#78350f" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="warm-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#bg-1990a)" />

          {/* Lantern / Beacon of hope glow */}
          <circle cx="200" cy="70" r="45" fill="#fde047" opacity="0.25" className="animate-pulse" />
          <circle cx="200" cy="70" r="25" fill="#fef08a" opacity="0.8" />

          {/* Protecting Arch / Helping Hands holding shelter */}
          <path d="M 120,180 Q 200,90 280,180" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />

          {/* Street Children moving towards safety & care */}
          <g>
            {/* Child 1 holding book */}
            <circle cx="160" cy="140" r="10" fill="#fef3c7" />
            <path d="M 150,152 L 170,152 L 168,185 L 152,185 Z" fill="#f59e0b" />
            {/* Child 2 reaching out */}
            <circle cx="200" cy="130" r="12" fill="#fef3c7" />
            <path d="M 188,144 L 212,144 L 209,185 L 191,185 Z" fill="#10b981" />
            {/* Child 3 */}
            <circle cx="240" cy="142" r="9" fill="#fef3c7" />
            <path d="M 231,153 L 249,153 L 247,185 L 233,185 Z" fill="#3b82f6" />
          </g>

          {/* Protective Shield Outline */}
          <path d="M 200,45 Q 260,65 260,115 Q 260,175 200,195 Q 140,175 140,115 Q 140,65 200,45 Z" fill="none" stroke="#22c55e" strokeWidth="3" opacity="0.8" strokeDasharray="8 4" />

          <text x="200" y="210" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="bold" letterSpacing="1.5">
            CHILD PROTECTION DRIVE
          </text>
        </svg>
      );

    case '1990b':
      // 1990: Rehabilitation Homes for Boys and Girls (Asha Bhavana & Asha Kirana)
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="bg-1990b" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2e1065" />
              <stop offset="60%" stopColor="#4c1d95" />
              <stop offset="100%" stopColor="#6d28d9" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#bg-1990b)" />

          {/* Stars in the evening sky */}
          <circle cx="60" cy="40" r="2" fill="#fff" opacity="0.8" />
          <circle cx="150" cy="30" r="1.5" fill="#fff" opacity="0.7" />
          <circle cx="320" cy="45" r="2" fill="#fff" opacity="0.8" />
          <circle cx="270" cy="25" r="1.5" fill="#fff" opacity="0.6" />

          {/* TWO HOMES: Asha Bhavana (Girls) & Asha Kirana (Boys) */}
          {/* Home 1 Left (Asha Bhavana) */}
          <g transform="translate(60, 50)">
            <polygon points="10,60 65,20 120,60" fill="#db2777" />
            <rect x="25" y="60" width="80" height="85" fill="#fdf2f8" stroke="#be185d" strokeWidth="2" rx="4" />
            <rect x="50" y="90" width="30" height="55" fill="#be185d" rx="3" />
            {/* Warm glowing windows */}
            <rect x="35" y="70" width="20" height="20" fill="#fef08a" stroke="#be185d" strokeWidth="1.5" />
            <rect x="75" y="70" width="20" height="20" fill="#fef08a" stroke="#be185d" strokeWidth="1.5" />
            <text x="65" y="160" textAnchor="middle" fill="#f472b6" fontSize="10" fontWeight="bold">ASHA BHAVANA</text>
          </g>

          {/* Home 2 Right (Asha Kirana) */}
          <g transform="translate(210, 50)">
            <polygon points="10,60 65,20 120,60" fill="#2563eb" />
            <rect x="25" y="60" width="80" height="85" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="2" rx="4" />
            <rect x="50" y="90" width="30" height="55" fill="#1d4ed8" rx="3" />
            {/* Warm glowing windows */}
            <rect x="35" y="70" width="20" height="20" fill="#fef08a" stroke="#1d4ed8" strokeWidth="1.5" />
            <rect x="75" y="70" width="20" height="20" fill="#fef08a" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="65" y="160" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="bold">ASHA KIRANA</text>
          </g>

          {/* Connecting pathway / bridge of unity between the two homes */}
          <path d="M 170,140 Q 200,125 230,140" stroke="#fde047" strokeWidth="3" strokeDasharray="4 3" fill="none" />
          <circle cx="200" cy="132" r="5" fill="#fde047" />
        </svg>
      );

    case '1999':
      // 1999: Expanded to 3 Districts (Mysuru, Mandya & Chamarajanagar) Map representation
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="bg-1999" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#14532d" />
              <stop offset="100%" stopColor="#052e16" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#bg-1999)" />

          {/* Regional Territory Map Shapes */}
          {/* Mandya Region (North-East) */}
          <path d="M 180,40 Q 260,35 280,75 Q 260,115 210,110 Q 180,90 180,40 Z" fill="#22c55e" opacity="0.5" stroke="#4ade80" strokeWidth="2" />
          {/* Mysuru Region (Center-West) */}
          <path d="M 100,70 Q 190,65 205,120 Q 170,165 95,140 Q 75,100 100,70 Z" fill="#16a34a" opacity="0.6" stroke="#86efac" strokeWidth="2" />
          {/* Chamarajanagar Region (South) */}
          <path d="M 165,120 Q 250,110 270,160 Q 230,195 150,185 Q 150,150 165,120 Z" fill="#15803d" opacity="0.7" stroke="#4ade80" strokeWidth="2" />

          {/* District Pins & Labels */}
          {/* Mandya */}
          <g transform="translate(230, 70)">
            <circle cx="0" cy="0" r="8" fill="#facc15" className="animate-bounce" />
            <circle cx="0" cy="0" r="3" fill="#713f12" />
            <text x="14" y="4" fill="#fef08a" fontSize="12" fontWeight="bold">Mandya</text>
          </g>

          {/* Mysuru */}
          <g transform="translate(130, 105)">
            <circle cx="0" cy="0" r="10" fill="#facc15" className="animate-bounce" />
            <circle cx="0" cy="0" r="4" fill="#713f12" />
            <text x="-16" y="22" fill="#ffffff" fontSize="13" fontWeight="black">Mysuru</text>
          </g>

          {/* Chamarajanagar */}
          <g transform="translate(200, 155)">
            <circle cx="0" cy="0" r="8" fill="#facc15" className="animate-bounce" />
            <circle cx="0" cy="0" r="3" fill="#713f12" />
            <text x="14" y="4" fill="#fef08a" fontSize="12" fontWeight="bold">Chamarajanagar</text>
          </g>

          {/* Connecting Triangle Highways */}
          <line x1="130" y1="105" x2="230" y2="70" stroke="#fde047" strokeWidth="2" strokeDasharray="5 3" />
          <line x1="230" y1="70" x2="200" y2="155" stroke="#fde047" strokeWidth="2" strokeDasharray="5 3" />
          <line x1="200" y1="155" x2="130" y2="105" stroke="#fde047" strokeWidth="2" strokeDasharray="5 3" />

          <text x="200" y="210" textAnchor="middle" fill="#86efac" fontSize="11" fontWeight="extrabold" letterSpacing="1">
            3 DISTRICT EXPANSION
          </text>
        </svg>
      );

    case '2014':
      // 2014: Expanded to North Karnataka, 5 Districts (Bidar, Kalaburagi, Raichur, Davangere, Chitradurga)
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="bg-2014" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#bg-2014)" />

          {/* Rising Arrow pointing North with 5 district nodes */}
          <path d="M 200,190 L 200,50 L 180,75 M 200,50 L 220,75" stroke="#818cf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" className="animate-pulse" />

          {/* 5 District Constellation Nodes */}
          {/* Bidar (Top-most) */}
          <g transform="translate(200, 45)">
            <circle cx="0" cy="0" r="14" fill="#6366f1" opacity="0.3" className="animate-ping" />
            <circle cx="0" cy="0" r="7" fill="#a5b4fc" />
            <text x="14" y="4" fill="#e0e7ff" fontSize="11" fontWeight="bold">Bidar</text>
          </g>

          {/* Kalaburagi */}
          <g transform="translate(140, 80)">
            <circle cx="0" cy="0" r="6" fill="#a5b4fc" />
            <text x="-70" y="4" fill="#e0e7ff" fontSize="11" fontWeight="bold">Kalaburagi</text>
          </g>

          {/* Raichur */}
          <g transform="translate(260, 95)">
            <circle cx="0" cy="0" r="6" fill="#a5b4fc" />
            <text x="12" y="4" fill="#e0e7ff" fontSize="11" fontWeight="bold">Raichur</text>
          </g>

          {/* Davangere */}
          <g transform="translate(130, 140)">
            <circle cx="0" cy="0" r="6" fill="#a5b4fc" />
            <text x="-65" y="4" fill="#e0e7ff" fontSize="11" fontWeight="bold">Davangere</text>
          </g>

          {/* Chitradurga */}
          <g transform="translate(265, 145)">
            <circle cx="0" cy="0" r="6" fill="#a5b4fc" />
            <text x="12" y="4" fill="#e0e7ff" fontSize="11" fontWeight="bold">Chitradurga</text>
          </g>

          {/* Constellation link lines */}
          <path d="M 200,45 L 140,80 L 130,140 L 200,190 L 265,145 L 260,95 Z" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.7" />

          <text x="200" y="210" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="black" letterSpacing="1.5">
            NORTH KARNATAKA 5 DISTRICTS
          </text>
        </svg>
      );

    case '2018':
      // 2018: Flood Relief, Kerala - Rescue boat, humanitarian relief kits
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="bg-2018" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#082f49" />
              <stop offset="70%" stopColor="#0c4a6e" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#bg-2018)" />

          {/* Rain streaks */}
          <g stroke="#38bdf8" strokeWidth="1.5" opacity="0.4" strokeLinecap="round">
            <line x1="50" y1="20" x2="40" y2="50" />
            <line x1="120" y1="10" x2="110" y2="40" />
            <line x1="220" y1="15" x2="210" y2="45" />
            <line x1="310" y1="25" x2="300" y2="55" />
            <line x1="180" y1="60" x2="170" y2="90" />
          </g>

          {/* Water wave surges */}
          <path d="M 0,160 Q 100,140 200,165 T 400,160 L 400,220 L 0,220 Z" fill="#0369a1" opacity="0.8" />
          <path d="M 0,175 Q 80,165 180,180 T 400,175 L 400,220 L 0,220 Z" fill="#0284c7" />

          {/* Humanitarian Rescue Boat */}
          <g transform="translate(130, 115)">
            {/* Boat Hull */}
            <path d="M 10,40 L 30,58 L 110,58 L 130,40 Z" fill="#ea580c" stroke="#c2410c" strokeWidth="2" />
            {/* White relief strip */}
            <rect x="35" y="44" width="70" height="6" fill="#ffffff" />
            {/* Lifebuoy ring */}
            <circle cx="70" cy="30" r="12" fill="#ffffff" stroke="#ef4444" strokeWidth="3" />
            <circle cx="70" cy="30" r="6" fill="#0284c7" />

            {/* Relief Workers & Kits */}
            <circle cx="45" cy="28" r="7" fill="#fde047" />
            <circle cx="95" cy="28" r="7" fill="#fde047" />
            {/* Relief Boxes */}
            <rect x="52" y="32" width="14" height="12" fill="#ca8a04" stroke="#854d0e" strokeWidth="1" />
            <rect x="68" y="32" width="14" height="12" fill="#15803d" stroke="#14532d" strokeWidth="1" />
          </g>

          <text x="200" y="210" textAnchor="middle" fill="#bae6fd" fontSize="11" fontWeight="black" letterSpacing="1.5">
            EMERGENCY HUMANITARIAN MISSION
          </text>
        </svg>
      );

    case '2020':
      // 2020: COVID-19 Relief Work - Protective shield, medical aid, community sanitization
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="bg-2020" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4c0519" />
              <stop offset="60%" stopColor="#881337" />
              <stop offset="100%" stopColor="#9f1239" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#bg-2020)" />

          {/* Protective Safe Zone Ambient Aura */}
          <circle cx="200" cy="100" r="65" fill="#f43f5e" opacity="0.2" className="animate-pulse" />

          {/* Central Heroic Protective Shield */}
          <path d="M 200,35 Q 260,50 260,105 Q 260,165 200,185 Q 140,165 140,105 Q 140,50 200,35 Z" fill="#be123c" stroke="#fda4af" strokeWidth="3" />

          {/* Medical Cross Symbol on Shield */}
          <rect x="193" y="70" width="14" height="45" fill="#ffffff" rx="2" />
          <rect x="178" y="85" width="44" height="14" fill="#ffffff" rx="2" />

          {/* Community food ration & sanitization kit box */}
          <g transform="translate(180, 130)">
            <rect x="0" y="0" width="40" height="25" fill="#fecdd3" stroke="#e11d48" strokeWidth="1.5" rx="3" />
            <text x="20" y="16" textAnchor="middle" fill="#9f1239" fontSize="9" fontWeight="bold">RATION</text>
          </g>

          {/* Defeated viral particles neutralized on borders */}
          <circle cx="80" cy="70" r="14" fill="#fb7185" opacity="0.3" stroke="#fda4af" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="320" cy="130" r="16" fill="#fb7185" opacity="0.3" stroke="#fda4af" strokeWidth="1.5" strokeDasharray="3 3" />

          <text x="200" y="210" textAnchor="middle" fill="#fecdd3" fontSize="11" fontWeight="black" letterSpacing="1.5">
            PANDEMIC EMERGENCY RESPONSE
          </text>
        </svg>
      );

    case '2026':
      // 2026: Expanded to Coastal Districts (Uttara Kannada & Dakshina Kannada)
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="bg-2026" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#042f2e" />
              <stop offset="60%" stopColor="#115e59" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#bg-2026)" />

          {/* Arabian Sea Waves on the Coast */}
          <path d="M 0,120 Q 50,110 100,125 T 200,120 L 0,220 Z" fill="#0f766e" opacity="0.6" />
          <path d="M 0,150 Q 60,140 120,155 T 240,150 L 0,220 Z" fill="#14b8a6" opacity="0.7" />

          {/* Western Ghats Coastline Landmass */}
          <path d="M 90,0 Q 150,80 180,140 Q 210,180 250,220 L 400,220 L 400,0 Z" fill="#065f46" stroke="#34d399" strokeWidth="2" />

          {/* Palm Trees along Karnataka Coast */}
          <g transform="translate(180, 70)">
            <path d="M 10,70 Q 20,40 18,10" stroke="#78350f" strokeWidth="3" fill="none" />
            {/* Palm Fronds */}
            <path d="M 18,10 Q 0,-5 -15,10" stroke="#10b981" strokeWidth="2.5" fill="none" />
            <path d="M 18,10 Q 20,-15 35,-5" stroke="#10b981" strokeWidth="2.5" fill="none" />
            <path d="M 18,10 Q 35,5 45,20" stroke="#10b981" strokeWidth="2.5" fill="none" />
          </g>

          {/* Pin 1: Karwar (Uttara Kannada) */}
          <g transform="translate(160, 45)">
            <circle cx="0" cy="0" r="14" fill="#facc15" opacity="0.3" className="animate-ping" />
            <circle cx="0" cy="0" r="7" fill="#fef08a" />
            <text x="14" y="4" fill="#ffffff" fontSize="12" fontWeight="bold">Karwar (UK)</text>
          </g>

          {/* Pin 2: Mangalore (Dakshina Kannada) */}
          <g transform="translate(230, 150)">
            <circle cx="0" cy="0" r="14" fill="#facc15" opacity="0.3" className="animate-ping" />
            <circle cx="0" cy="0" r="7" fill="#fef08a" />
            <text x="14" y="4" fill="#ffffff" fontSize="12" fontWeight="bold">Mangalore (DK)</text>
          </g>

          {/* Connecting Coastal Golden Route */}
          <path d="M 160,45 Q 195,100 230,150" stroke="#facc15" strokeWidth="3" strokeDasharray="6 3" fill="none" />

          <text x="200" y="210" textAnchor="middle" fill="#99f6e4" fontSize="11" fontWeight="black" letterSpacing="1.5">
            COASTAL KARNATAKA EXPANSION
          </text>
        </svg>
      );

    default:
      return null;
  }
}

