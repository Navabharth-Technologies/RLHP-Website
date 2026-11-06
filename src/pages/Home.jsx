import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Quote,
  FileText, GraduationCap, Handshake, ShieldCheck, Download,
  Baby, Heart, Users, Building2, MapPin, Phone, Mail, ExternalLink,
  Calendar, Check, Camera, Eye, ChevronDown, BookOpen
} from 'lucide-react';
import { downloadPDFDocument } from '../utils/fileDownloader';
import FlipbookModal from '../components/FlipbookModal';

const B = import.meta.env.BASE_URL;

export default function Home({ setCurrentPage, onNavClick }) {
  const nav = useCallback((p, o = null) => {
    if (onNavClick) onNavClick(p, o);
    else if (setCurrentPage) setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [onNavClick, setCurrentPage]);

  /* ─── HERO CAROUSEL STATE ─── */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const [downloadingReport, setDownloadingReport] = useState(null);
  const [activeFlipbook, setActiveFlipbook] = useState(null);

  const handleViewReport = (report) => {
    if (report.file) {
      window.open(report.file, '_blank');
    } else {
      nav('financials');
    }
  };

  const handleDownloadReport = async (report) => {
    if (report.file) {
      const link = document.createElement('a');
      link.href = report.file;
      link.download = report.fileName || 'RLHP_Annual_Report.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    setDownloadingReport(report.title);
    try {
      await downloadPDFDocument({
        title: report.title,
        category: report.type || 'Annual Audit Report',
        date: report.year,
        location: 'Mysuru, Karnataka, India',
        content: `Official Audited Financial Statement & Activity Review of Rural Literacy & Health Programme (RLHP) for the financial year ${report.year}.\n\nRegistration: Society Reg #36/83-84 | FCRA Reg #094420366 | 80G Tax Exemption Certificate Approved.\n\nDescription:\n${report.desc}\n\nAuditor Verification:\nThis report reflects audited income, expenditure, project allocations, and statutory compliance as reviewed by chartered accountants and submitted to statutory regulatory bodies in India.`,
        image: '/images/gallery/annual_stakeholder_convention.jpg'
      });
    } catch (e) {
      console.error(e);
    }
    setDownloadingReport(null);
  };

  /* ─── HERO SINGLE BACKGROUND IMAGE ─── */
  const heroImage = `${B}images/hero_main_banner.jpg`;

  /* ─── TESTIMONIALS DATA ─── */
  const testimonials = [
    {
      text: "I spent my childhood on the streets, struggling to meet my basic needs while continuing my education through hardships. RLHP identified me and provided care, education and support at Asha Bhavana Girls’ Home. With these opportunities, I was able to transform my life. Today, I am proud to be an advocate practising at the Magistrate Court in Bengaluru. I am grateful to RLHP for helping me build a life of dignity, confidence and independence.",
      name: "Nagarathna",
      designation: "Advocate, Bengaluru",
      tag: "Advocate practising at Magistrate Court",
    },
    {
      text: "After losing both my parents at a young age, I found a safe home, care and guidance at Asha Kirana Boys’ Shelter Home. With RLHP’s support, I completed my 10th standard with 437 marks and received vocational training in two-wheeler repair. Today, I work as a mechanic at a reputed TVS showroom in Mysuru, earning ₹14,000 per month and living independently. I am grateful to RLHP and Asha Kirana for helping me become self-reliant and build a better future.",
      name: "Prashanth",
      designation: "Mysuru",
      tag: "Employed & Self-Reliant",
    },
    {
      text: "After losing my parents at the age of three, I spent my childhood collecting rags and struggling for basic needs. RLHP identified me and brought me to Asha Kirana Boys’ Shelter Home, where I received care, education and a safe environment. With RLHP’s support, I completed my SSLC and received vocational training in carpentry at Seva Sadhana, Bengaluru. Today, I am a skilled carpenter, earning ₹15,000 per month and living independently. My dream is to start my own carpentry business and support children from disadvantaged backgrounds. I am forever grateful to RLHP and Asha Kirana for giving me the opportunity to build a dignified life.",
      name: "Narayana",
      designation: "Bengaluru",
      tag: "Skilled Carpenter",
    },
    {
      text: "My three-year-old son Manoj was underweight, weighing just 10.5 kg, and was not attending the Anganwadi regularly. With the guidance and support of RLHP, he was enrolled in the Anganwadi and began receiving nutritious food and supplements. Gradually, his health improved, and today he weighs 13.1 kg, is active and happy. I am grateful to RLHP and the Anganwadi worker for helping my child move towards a healthier future and educating me about the importance of child nutrition.",
      name: "Shruti",
      designation: "Kumbrallimata Village",
      tag: "Child Health & Nutrition",
    },
    {
      text: "I came to Asha Bhavana in 2009 at the age of five, having lost my parents’ care and support. At Asha Bhavana, I received a safe home, education, counselling and guidance that helped me grow in confidence. With RLHP’s continued support, I completed my schooling and pursued paramedical studies in Channarayapatna. Today, I am independent and able to support myself. I am deeply grateful to Asha Bhavana and RLHP for helping me build a life of dignity and self-reliance.",
      name: "Sneha",
      designation: "",
      tag: "Paramedical Studies Graduate",
    },
    {
      text: "My brother and I were brought to Asha Kirana Child Care Centre after RLHP identified our family’s vulnerable situation. At Asha Kirana, I received care, education and encouragement that helped me grow in confidence. I completed my SSLC with 501 marks and later pursued a two-year Electrician and Plumbing course at Seva Sadhana Institute, Bengaluru. Today, I work as an Electrician at St. John’s Hospital, Bengaluru, earning ₹18,000 per month. I am financially independent and dream of supporting my mother and giving back to Asha Kirana by helping other children build a better future. I am deeply grateful to RLHP for shaping my life.",
      name: "Guna",
      designation: "Bengaluru",
      tag: "Hospital Electrician",
    },
    {
      text: "My family faced financial difficulties, and supporting the education of three children was a challenge. Through RLHP’s sponsorship programme in partnership with ChildFund International, I received educational support, guidance and opportunities to develop life skills and confidence. The programme also supported my mother through entrepreneurship training and a seed grant of ₹20,000, enabling her to start a flower business. Today, her business contributes to our family income and helps us continue our education. I am grateful to RLHP and ChildFund International for empowering my family and giving us hope for a better future.",
      name: "Zoya Sulthana",
      designation: "",
      tag: "Education & Family Livelihood",
    },
    {
      text: "I am grateful to ChildFund and my sponsor for supporting my education through DFC assistance, which helped me successfully complete my M.Com with Distinction. The youth development programme also strengthened my leadership, teamwork and communication skills. With a strong interest in accountancy, I aspire to become a Bank Manager. Their continued encouragement has given me the confidence and motivation to pursue my dreams and build a bright future.",
      name: "Neha Anjum",
      designation: "",
      tag: "M.Com Distinction Graduate",
    },
  ];

  return (
    <div className="w-full">
      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#0a1628] text-white min-h-[640px] lg:min-h-[720px] flex items-center">
        {/* Static Background Image with Face Highlighted on Left */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="RLHP Child Education"
            className="w-full h-full object-cover object-[left_20%] sm:object-[15%_20%]"
          />
        </div>

        {/* Dynamic Dark Gradient: clearer on left so girl's face is highlighted, darker on right behind text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/40 via-[#0a1628]/75 to-[#0a1628]/95 z-[1]" />

        {/* Curved Green SVG Element pushed to far edge */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-2/5 pointer-events-none overflow-hidden z-[2] opacity-40 hidden md:block">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMaxYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="roughPaint">
                <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
              </filter>
            </defs>
            <path
              d="M 200,0 Q 400,200 300,400 Q 200,600 250,800 Q 300,900 200,1000 L 1000,1000 L 1000,0 Z"
              fill="#236B28"
              fillOpacity="0.85"
              filter="url(#roughPaint)"
            />
          </svg>
        </div>

        {/* Hero Content Container - Moved completely to the right edge with generous margin */}
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 py-20 flex justify-end">
          <div className="w-full max-w-[560px] lg:mr-4 xl:mr-10 bg-transparent p-2">
            {/* Main Headline with Smooth Paint Stroke Underline on Community */}
            <h1 className="text-6xl sm:text-9xl lg:text-[60px] font-bold text-white leading-[1.2] mb-7 tracking-tight drop-shadow-md">
              Transforming Lives of Children, Women and{' '}
              <span className="relative inline-block text-white">
                Community
                <svg
                  className="absolute -bottom-2 left-0 w-full overflow-visible"
                  height="12"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,6 Q75,0 150,6 T300,6"
                    stroke="#236B28"
                    strokeWidth="7"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Hero CTA Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-9">
              <button
                onClick={() => nav('bank-details')}
                className="inline-flex items-center gap-2.5 bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Heart size={18} className="fill-white" />
                Donate
              </button>
              <button
                onClick={() => nav('about', 'identity')}
                className="inline-flex items-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                Learn Our Story
              </button>
            </div>

            {/* Hero Metrics Strip */}
            <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-6 max-w-[480px]">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm">2M+</div>
                <div className="text-xs sm:text-sm text-gray-200 font-medium uppercase tracking-wider mt-0.5">Lives Reached</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm">80K</div>
                <div className="text-xs sm:text-sm text-gray-200 font-medium uppercase tracking-wider mt-0.5">Children Helped</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm">42+</div>
                <div className="text-xs sm:text-sm text-gray-200 font-medium uppercase tracking-wider mt-0.5">Years Impact</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll To Explore Link */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/70 hover:text-white text-xs uppercase tracking-widest transition-colors cursor-pointer"
          onClick={() => {
            const el = document.getElementById('who-we-are');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="mb-1">Scroll to explore</span>
          <ChevronRight size={18} className="rotate-90 animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: WHO WE ARE
          - Commitment statement in cards
          - Removed "Our commitment to holistic..." line
          - 4 stat highlight cards (1984, 4, 2M+, Mysuru)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="who-we-are" className="relative py-20 bg-white overflow-hidden">
        {/* Decorative blurred circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-rlhp-green/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-rlhp-green/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-sm font-extrabold tracking-[0.2em] text-rlhp-green uppercase mb-2">
              WHO WE ARE
            </h2>
            <div className="w-12 h-[3px] bg-rlhp-green mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Story & Bullets (7 cols) */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
                  42+ Years Working for Children's Rights
                </h3>

                <div className="text-gray-600 text-base leading-relaxed space-y-4">
                  <p>
                    Since 1984, <strong className="text-gray-900">Rural Literacy and Health Programme (RLHP)</strong> has been working towards holistic, child-centred development. What began with a focus on the health and education of urban poor (Pourakarmikas) and their children has grown into a wider community development approach, reaching over <strong className="text-gray-900">2 million lives</strong> across 10 districts in Karnataka and four states in South India.
                  </p>
                  <p>
                    We work in the most marginalized communities—from urban informal settlements to rural villages. Where others see impossibility, we see children full of potential and communities ready to transform.
                  </p>
                </div>
              </div>

              {/* Bullet checkmarks */}
              <ul className="space-y-3 pt-2">
                {[
                  'Registered Under Society Act Under 1960',
                  'Operation across 10 districts in Karnataka and four states in South India',
                  '7 Offices with Mysuru as Regional Headquarters',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rlhp-green/10 text-rlhp-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Commitment Card (5 cols) */}
            <div className="lg:col-span-5 flex">
              <div className="relative w-full bg-[#1C5620] text-white rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all flex flex-col justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6 shadow-inner">
                  <Heart size={28} className="text-white fill-white/20" />
                </div>
                <p className="text-white text-lg sm:text-xl leading-relaxed font-medium italic">
                  “Our commitment is to ensure that every child has access to quality education, every individual has opportunities to grow, and every community is empowered to build a better future. We believe that empowering children, strengthening families and fostering inclusive communities can create lasting positive change across generations.”
                </p>
              </div>
            </div>
          </div>

          {/* 4 Stat Highlight Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            {[
              { num: '1984', label: 'Registered Non-Profit', icon: Building2 },
              { num: '4', label: 'States in South India', icon: MapPin },
              { num: '2M+', label: 'Lives Reached', icon: Users },
              { num: 'Mysuru', label: 'Headquarters', icon: MapPin },
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-rlhp-green to-rlhp-darkgreen rounded-xl p-5 text-center text-white shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <stat.icon size={20} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold leading-none mb-1">{stat.num}</div>
                <div className="text-xs text-green-100 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: PROGRAMME PRIORITIES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-[#0f1b2d] text-white overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1b2d] via-[#12233a] to-[#0f1b2d]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Our Programme <span className="text-rlhp-accentgreen">Priorities</span>
            </h2>
            <p className="text-gray-300 text-base max-w-[650px] mx-auto">
              RLHP's approach to holistic, child-centred development focuses on
            </p>
          </div>

          {/* Cards Grid: 5 columns in a single line on desktop without scrolling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-5">
            {[
              {
                img: `${B}images/gallery/child_rights_workshop.jpg`,
                category: 'Age 0-18 Years',
                title: 'Child Rights and Protection',
                desc: "Promoting child rights and protection by preventing child marriage, child labour and abuse, while ensuring children's safety, participation and development.",
                metric: '80K+ Children Protected',
                page: 'projects',
                opt: 'education',
              },
              {
                img: `${B}images/gallery/adolescent_skill_training.jpg`,
                category: 'Youth & Leadership',
                title: 'Adolescent and Youth Empowerment',
                desc: 'Empowering adolescents and youth through life skills, leadership development, gender equality, health awareness and opportunities for personal and social growth.',
                metric: '15,000+ Youth Empowered',
                page: 'projects',
                opt: 'livelihood',
              },
              {
                img: `${B}images/gallery/iep_remedial_class.jpg`,
                category: 'Education',
                title: 'Education and Learning',
                desc: 'Ensuring access to quality education and improved learning opportunities through school enrolment, learning support, remedial education and academic development.',
                metric: 'Quality Education',
                page: 'projects',
                opt: 'education',
              },
              {
                img: `${B}images/gallery/gram_panchayat_interface.jpg`,
                category: 'Community & Govt',
                title: 'Community Development through Government Schemes',
                desc: 'Strengthening communities by creating awareness and facilitating access to government welfare schemes, entitlements and essential services to improve livelihoods and quality of life.',
                metric: 'Welfare & Entitlements',
                page: 'projects',
                opt: 'community',
              },
              {
                img: `${B}images/gallery/shg_leadership_training.jpg`,
                category: 'Livelihood',
                title: 'Livelihood Promotion and Economic Empowerment',
                desc: 'Promoting sustainable livelihoods through skill development, vocational training, self-employment opportunities and income-generating activities to strengthen the economic independence of individuals and families.',
                metric: 'Economic Independence',
                page: 'projects',
                opt: 'livelihood',
              },
            ].map((card, i) => (
              <div
                key={i}
                onClick={() => nav(card.page, card.opt)}
                className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-rlhp-green/30 hover:-translate-y-2 border-2 border-transparent hover:border-rlhp-green transition-all duration-300 group cursor-pointer flex flex-col text-gray-900"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-2 left-3 bg-rlhp-green text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                    {card.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-rlhp-green transition-colors mb-2 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Animated green hover line */}
                <div className="card-hover-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: TESTIMONIALS (8 Real Testimonials with View More/Less)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              TESTIMONIALS<br />
              <span className="relative inline-block text-rlhp-green">
                Voices of Transformation
                <svg className="absolute -bottom-2 left-0 w-full" height="15" viewBox="0 0 300 20">
                  <path
                    d="M5,12 Q30,8 60,13 T120,10 T180,12 T240,9 T295,14"
                    stroke="#236B28"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-base mt-4">
            </p>
          </div>

          {/* Testimonials List — Zigzag Organic Blob & Card Layout */}
          <div className="flex flex-col space-y-12 max-w-[1000px] mx-auto">
            {testimonials.map((t, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                >
                  {/* Organic Green Shape for Image Placeholder */}
                  <div className="flex-shrink-0 relative">
                    <div
                      className="w-28 h-28 sm:w-36 sm:h-36 shadow-lg transition-transform duration-300 hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, #2D8A35 0%, #1C5620 60%, #123C15 100%)',
                        borderRadius: isEven
                          ? '42% 58% 70% 30% / 45% 45% 55% 55%'
                          : '58% 42% 35% 65% / 55% 60% 40% 45%',
                      }}
                    />
                  </div>

                  {/* Testimonial Quote Card */}
                  <div className="flex-1 w-full relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:border-rlhp-green hover:shadow-xl hover:shadow-rlhp-green/10 transition-all duration-300 group">
                    {/* Top Quote Icon Badge */}
                    <div className="absolute -top-4 left-6 sm:left-8 w-8 h-8 rounded-full bg-green-50 border border-green-200 group-hover:bg-rlhp-green group-hover:border-rlhp-green transition-colors flex items-center justify-center shadow-sm">
                      <Quote size={16} className="text-rlhp-green group-hover:text-white transition-colors" />
                    </div>

                    {/* Testimonial Quote Text */}
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mt-2 mb-6 group-hover:text-gray-900 transition-colors">
                      “{t.text}”
                    </p>

                    {/* Footer Information */}
                    <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-gray-900 text-base group-hover:text-rlhp-green transition-colors">
                          {t.name}
                        </h4>
                        {t.designation && (
                          <p className="text-xs text-gray-500 font-medium">
                            {t.designation}
                          </p>
                        )}
                      </div>

                      {t.tag && (
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-rlhp-green border border-green-200/60 group-hover:bg-rlhp-green group-hover:text-white transition-all">
                          {t.tag}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stories Footer Handwritten Note */}
          <div className="text-center mt-8 pt-6">
            <p className="stories-footer-handwritten mb-2">
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: OUR IMPACT (Updated Stats)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Subtle blur circles */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-green-50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-50 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              OUR <span className="text-rlhp-green">IMPACT</span>
            </h2>
            <p className="text-gray-500 text-base mt-2">
              Transforming lives across Karnataka and South India through education and empowerment
            </p>
          </div>

          {/* 3 Impact Stat Cards — Updated */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-[900px] mx-auto mb-14">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl sm:text-5xl font-extrabold text-rlhp-green leading-none mb-2">
                9.5 Lakh+
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Lives Transformed
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl sm:text-5xl font-extrabold text-rlhp-green leading-none mb-2">
                3 Lakh+
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Children Mainstreamed
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl sm:text-5xl font-extrabold text-rlhp-green leading-none mb-2">
                42+ Years
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Of Impact
              </div>
            </div>
          </div>

          {/* Quote Box below stats */}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: Together, We Make a Difference
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-[#0c192c] text-white overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-rlhp-green/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rlhp-green/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Together, <span className="text-rlhp-accentgreen">We Make a Difference</span>
            </h2>
          </div>

          {/* 3 Action Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {/* Card 1: Donate Today */}
            <div
              onClick={() => nav('bank-details')}
              className="bg-[#13233c] border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:border-rlhp-accentgreen hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg"
            >
              <div className="text-rlhp-accentgreen mb-6 group-hover:scale-110 transition-transform">
                <Heart size={56} className="fill-rlhp-accentgreen/20" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-rlhp-accentgreen transition-colors">
                Donate Today
              </h3>
            </div>

            {/* Card 2: Corporate Partnership */}
            <div
              onClick={() => nav('contact')}
              className="bg-[#13233c] border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:border-rlhp-accentgreen hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg"
            >
              <div className="text-rlhp-accentgreen mb-6 group-hover:scale-110 transition-transform">
                <Handshake size={56} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-rlhp-accentgreen transition-colors">
                Corporate Partnership
              </h3>
            </div>

            {/* Card 3: Volunteer Your Skills */}
            <div
              onClick={() => nav('contact')}
              className="bg-[#13233c] border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:border-rlhp-accentgreen hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg"
            >
              <div className="text-rlhp-accentgreen mb-6 group-hover:scale-110 transition-transform">
                <Users size={56} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-rlhp-accentgreen transition-colors">
                Volunteer Your Skills
              </h3>
            </div>
          </div>

          {/* Action Banner (Green background without Donate Now button) */}
          <div className="bg-rlhp-green rounded-2xl p-8 sm:p-10 flex items-center justify-center text-center shadow-xl">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Transform a Child's Life Today
              </h3>
              <p className="text-green-100 text-sm sm:text-base">
                Your donation provides a child with education, nutrition, and hope for an entire year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7: OUR PROGRAMMES (Interactive Flipbook Reports matching reference 2)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="our-programmes" className="relative py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight uppercase mb-3">
              Our Programmes
            </h2>
            <div className="w-16 h-[3px] bg-rlhp-green mx-auto rounded-full mb-3" />
            <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
              Stay updated with our latest reports, programmes, newsletters and impact stories
            </p>
          </div>

          {/* 4 Cards Grid - Replicating Reference 2 Design with uploaded cover images 2, 3, 4, 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              {
                id: 'report-2022-2023',
                title: 'Annual Report 2022-2023',
                period: 'April 2022 to March 2023',
                cover: `${B}reports/report-2022-2023.jpg`,
                pdfUrl: `${B}reports/RLHP_Annual_Report_2022_2023.pdf`,
                date: 'March 31, 2023',
                pages: [
                  `${B}reports/report-2022-2023.jpg`
                ]
              },
              {
                id: 'report-2023-2024',
                title: 'Annual Report 2023-2024',
                period: 'April 2023 to March 2024',
                cover: `${B}reports/report-2023-2024.jpg`,
                pdfUrl: `${B}reports/RLHP_Annual_Report_2023_2024.pdf`,
                date: 'March 31, 2024',
                pages: [
                  `${B}reports/report-2023-2024.jpg`
                ]
              },
              {
                id: 'report-2024-2025',
                title: 'Annual Report 2024-2025',
                period: 'April 2024 to March 2025',
                cover: `${B}reports/report-2024-2025.jpg`,
                pdfUrl: `${B}reports/RLHP_Annual_Report_2024_2025.pdf`,
                date: 'March 31, 2025',
                pages: [
                  `${B}reports/report-2024-2025.jpg`
                ]
              },
              {
                id: 'report-2025-2026',
                title: 'Annual Report 2025-2026',
                period: 'April 2025 to March 2026',
                cover: `${B}reports/report-2025-2026.jpg`,
                pdfUrl: `${B}reports/RLHP_Annual_Report_2025_2026.pdf`,
                date: 'March 31, 2026',
                pages: [
                  `${B}reports/report-2025-2026.jpg`
                ]
              }
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFlipbook(item)}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-rlhp-green/50 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
              >
                {/* Book Cover Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 flex items-center justify-center p-3">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Book spine overlay */}
                    <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
                    {/* Hover badge */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-rlhp-green text-white text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <BookOpen size={14} /> Read Report
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-gray-400 block mb-1">
                      {item.date}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-rlhp-green transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-rlhp-green group-hover:underline flex items-center gap-1">
                      Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-rlhp-green/40 group-hover:bg-rlhp-green transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 3D Book Turn-Page Modal */}
      {activeFlipbook && (
        <FlipbookModal
          report={activeFlipbook}
          onClose={() => setActiveFlipbook(null)}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 8: OUR PARTNERS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Our Partners
            </h2>
            <div className="w-12 h-[3px] bg-rlhp-green mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
            {[
              { name: 'Wipro Foundation', img: `${B}images/partners/wipro-foundation-logo.png` },
              { name: 'Mission Inde', img: `${B}images/partners/mission-inde-logo.png` },
              { name: 'Azim Premji Foundation', img: `${B}images/partners/azim-premji-logo.png` },
              { name: 'ChildFund International', img: `${B}images/partners/childfund-logo.png` },
              { name: 'Klüber Lubrication', img: `${B}images/partners/kluber-lubrication-logo.png` },
            ].map((p, idx) => (
              <div
                key={idx}
                className="h-28 bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-center shadow-sm hover:shadow-lg hover:border-rlhp-green/40 transition-all duration-300 hover:-translate-y-1 group"
                title={p.name}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-16 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
