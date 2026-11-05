import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Quote,
  FileText, GraduationCap, Handshake, ShieldCheck, Download,
  Baby, Heart, Users, Building2, MapPin, Phone, Mail, ExternalLink,
  Calendar, Check, Camera, Eye, ChevronDown
} from 'lucide-react';
import { downloadPDFDocument } from '../utils/fileDownloader';

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

  const heroSlides = [
    {
      img: `${B}images/hero_slide_1.jpg`,
      titleWord: 'Community',
      sub: 'Over 2 million lives touched across 10 districts in Karnataka and 4 states in South India. Reaching children and women with education, health, and holistic empowerment.',
    },
    {
      img: `${B}images/hero_slide_2.jpg`,
      titleWord: 'Generations',
      sub: 'Education is the foundation of change. Reaching over 80,000 children with quality learning, remedial coaching, and child protection.',
    },
    {
      img: `${B}images/hero_slide_3.jpg`,
      titleWord: 'Children',
      sub: 'Providing safe shelter, nutrition, and education for vulnerable and street-connected children through Asha Kirana and Asha Bhavana homes.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  /* ─── TESTIMONIALS DATA ─── */
  const testimonials = [
    {
      text: "I spent my childhood on the streets, struggling to meet my basic needs while continuing my education through hardships. RLHP identified me and provided care, education and support at Asha Bhavana Girls' Home. With these opportunities, I was able to transform my life. Today, I am proud to be an advocate practising at the Magistrate Court in Bengaluru. I am grateful to RLHP for helping me build a life of dignity, confidence and independence.",
      name: "Nagarathna",
      designation: "Advocate, Bengaluru",
      badge: "Adv.",
      badgeSub: "Magistrate Court",
      badgeColor: "bg-rlhp-green",
    },
    {
      text: "After losing both my parents at a young age, I found a safe home, care and guidance at Asha Kirana Boys' Shelter Home. With RLHP's support, I completed my 10th standard with 437 marks and received vocational training in two-wheeler repair. Today, I work as a mechanic at a reputed TVS showroom in Mysuru, earning ₹14,000 per month and living independently. I am grateful to RLHP and Asha Kirana for helping me become self-reliant and build a better future.",
      name: "Prashanth",
      designation: "Mysuru",
      badge: "TVS",
      badgeSub: "Mechanic",
      badgeColor: "bg-[#154219]",
    },
    {
      text: "After losing my parents at the age of three, I spent my childhood collecting rags and struggling for basic needs. RLHP identified me and brought me to Asha Kirana Boys' Shelter Home, where I received care, education and a safe environment. With RLHP's support, I completed my SSLC and received vocational training in carpentry at Seva Sadhana, Bengaluru. Today, I am a skilled carpenter, earning ₹15,000 per month and living independently. My dream is to start my own carpentry business and support children from disadvantaged backgrounds. I am forever grateful to RLHP and Asha Kirana for giving me the opportunity to build a dignified life.",
      name: "Narayana",
      designation: "Bengaluru",
      badge: "Carpenter",
      badgeSub: "Skilled Trade",
      badgeColor: "bg-rlhp-green",
    },
    {
      text: "My three-year-old son Manoj was underweight, weighing just 10.5 kg, and was not attending the Anganwadi regularly. With the guidance and support of RLHP, he was enrolled in the Anganwadi and began receiving nutritious food and supplements. Gradually, his health improved, and today he weighs 13.1 kg, is active and happy. I am grateful to RLHP and the Anganwadi worker for helping my child move towards a healthier future and educating me about the importance of child nutrition.",
      name: "Shruti",
      designation: "Kumbrallimata Village",
      badge: "Health",
      badgeSub: "Nutrition",
      badgeColor: "bg-[#154219]",
    },
    {
      text: "I came to Asha Bhavana in 2009 at the age of five, having lost my parents' care and support. At Asha Bhavana, I received a safe home, education, counselling and guidance that helped me grow in confidence. With RLHP's continued support, I completed my schooling and pursued paramedical studies in Channarayapatna. Today, I am independent and able to support myself. I am deeply grateful to Asha Bhavana and RLHP for helping me build a life of dignity and self-reliance.",
      name: "Sneha",
      designation: "",
      badge: "Medical",
      badgeSub: "Graduate",
      badgeColor: "bg-rlhp-green",
    },
    {
      text: "My brother and I were brought to Asha Kirana Child Care Centre after RLHP identified our family's vulnerable situation. At Asha Kirana, I received care, education and encouragement that helped me grow in confidence. I completed my SSLC with 501 marks and later pursued a two-year Electrician and Plumbing course at Seva Sadhana Institute, Bengaluru. Today, I work as an Electrician at St. John's Hospital, Bengaluru, earning ₹18,000 per month. I am financially independent and dream of supporting my mother and giving back to Asha Kirana by helping other children build a better future. I am deeply grateful to RLHP for shaping my life.",
      name: "Guna",
      designation: "Bengaluru",
      badge: "Electrician",
      badgeSub: "St. John's",
      badgeColor: "bg-[#154219]",
    },
    {
      text: "My family faced financial difficulties, and supporting the education of three children was a challenge. Through RLHP's sponsorship programme in partnership with ChildFund International, I received educational support, guidance and opportunities to develop life skills and confidence. The programme also supported my mother through entrepreneurship training and a seed grant of ₹20,000, enabling her to start a flower business. Today, her business contributes to our family income and helps us continue our education. I am grateful to RLHP and ChildFund International for empowering my family and giving us hope for a better future.",
      name: "Zoya Sulthana",
      designation: "",
      badge: "Education",
      badgeSub: "Sponsored",
      badgeColor: "bg-rlhp-green",
    },
    {
      text: "I am grateful to ChildFund and my sponsor for supporting my education through DFC assistance, which helped me successfully complete my M.Com with Distinction. The youth development programme also strengthened my leadership, teamwork and communication skills. With a strong interest in accountancy, I aspire to become a Bank Manager. Their continued encouragement has given me the confidence and motivation to pursue my dreams and build a bright future.",
      name: "Neha Anjum",
      designation: "",
      badge: "M.Com",
      badgeSub: "Distinction",
      badgeColor: "bg-[#154219]",
    },
  ];

  const visibleTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 3);

  return (
    <div className="w-full">
      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#0a1628] text-white min-h-[640px] lg:min-h-[720px] flex items-center">
        {/* Background Image with cross-fade */}
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
          >
            <img
              src={slide.img}
              alt="RLHP Hero"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/40 z-[1]" />

        {/* Curved Green SVG Element */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 pointer-events-none overflow-hidden z-[2] hidden md:block">
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

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="max-w-[720px]">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#236B28]/20 border border-[#236B28]/40 text-[#4CAF50] text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
              Rural Literacy and Health Programme (RLHP)
            </div>

            {/* Main Headline with SVG Paint Stroke Highlight */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.15] mb-5 tracking-tight">
              Transforming Lives of Children, Women and{' '}
              <span className="relative inline-block text-white">
                {heroSlides[currentSlide].titleWord}
                <svg
                  className="absolute -bottom-2 left-0 w-full overflow-visible"
                  height="12"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,6 Q75,0 150,6 T300,6"
                    stroke="#236B28"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-gray-200/90 leading-relaxed mb-8 max-w-[620px]">
              {heroSlides[currentSlide].sub}
            </p>

            {/* Hero CTA Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={() => nav('bank-details')}
                className="inline-flex items-center gap-2.5 bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Heart size={18} className="fill-white" />
                Donate
              </button>
              <button
                onClick={() => nav('about', 'identity')}
                className="inline-flex items-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg transition-all duration-200"
              >
                Learn Our Story
              </button>
            </div>

            {/* Hero Metrics Strip */}
            <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-6 max-w-[500px]">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">2M+</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium uppercase tracking-wider mt-0.5">Lives Reached</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">80K</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium uppercase tracking-wider mt-0.5">Children Helped</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">42+</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium uppercase tracking-wider mt-0.5">Years Impact</div>
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

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Story & Bullets (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
                42+ Years Working for Children's Rights
              </h3>

              <div className="text-gray-600 text-base leading-relaxed space-y-4">
                <p>
                  Since 1984, <strong className="text-gray-900">Rural Literacy and Health Programme (RLHP)</strong> has been working towards holistic, child-centred development. What began with a focus on the health and education of scavengers (Pourakarmikas) and their children has grown into a wider community development movement, reaching over <strong className="text-gray-900">2 million lives</strong> across 10 districts in Karnataka and four states in South India.
                </p>
                <p>
                  We work in the most marginalized communities—from urban informal settlements to rural villages. Where others see impossibility, we see children full of potential and communities ready to transform.
                </p>
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
            <div className="lg:col-span-5">
              <div className="relative bg-gradient-to-br from-gray-50 to-green-50/40 border border-green-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-rlhp-green/10 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-rlhp-green" />
                </div>
                <p className="text-gray-800 text-base leading-relaxed font-medium">
                  "Our commitment is to ensure that every child has access to education and opportunities that uplift their families from poverty."
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

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Our Programme <span className="text-rlhp-accentgreen">Priorities</span>
            </h2>
            <p className="text-gray-300 text-base max-w-[650px] mx-auto">
              RLHP's approach to holistic, child-centred development focuses on breaking the cycle of poverty through targeted interventions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: `${B}images/gallery/iep_remedial_class.jpg`,
                category: 'Age 0-18 Years',
                title: 'Child Rights and Protection',
                desc: 'Promoting child rights and protection by preventing child marriage, child labour and abuse, while ensuring children\'s safety, participation and development.',
                metric: '80K+ Children Protected',
                page: 'projects',
                opt: 'education',
              },
              {
                img: `${B}images/gallery/shg_leadership_training.jpg`,
                category: 'Youth & Women',
                title: 'Adolescent & Youth Empowerment',
                desc: 'Empowering adolescents and youth through life skills, career guidance and leadership development, while supporting women self-help groups with livelihood opportunities.',
                metric: '15,000+ Youth & Women Empowered',
                page: 'projects',
                opt: 'livelihood',
              },
              {
                img: `${B}images/gallery/ashabhavana_girls_learning.jpg`,
                category: 'Alternative Care',
                title: 'Childhood & Alternative Care',
                desc: 'Providing safe shelter, nutrition, healthcare, and education for vulnerable and street-connected children through Asha Kirana (Boys) and Asha Bhavana (Girls) homes.',
                metric: '2,100+ Children Sheltered',
                page: 'projects',
                opt: 'care',
              },
            ].map((card, i) => (
              <div
                key={i}
                onClick={() => nav(card.page, card.opt)}
                className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col text-gray-900"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-4 bg-rlhp-green text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                    {card.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {card.desc}
                  </p>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-rlhp-green uppercase tracking-wide">
                      {card.metric}
                    </span>
                    <span className="text-xs font-semibold text-rlhp-green flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={13} />
                    </span>
                  </div>
                </div>

                {/* Animated green hover line */}
                <div className="card-hover-line" />
              </div>
            ))}
          </div>

          {/* Explore all button */}
          <div className="text-center mt-12">
            <button
              onClick={() => nav('projects')}
              className="inline-flex items-center gap-2 bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-semibold text-sm px-7 py-3 rounded-lg shadow transition-all duration-200"
            >
              Explore Our All Programmes <ArrowRight size={16} />
            </button>
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
              Real experiences from individuals, children, and communities whose lives have been transformed through RLHP's care and empowerment
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            {visibleTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Quote Icon */}
                <Quote size={28} className="text-rlhp-green/40 mb-3 flex-shrink-0" />

                {/* Testimonial Text */}
                <p className="text-gray-700 italic text-sm leading-relaxed mb-5 flex-1">
                  "{t.text}"
                </p>

                {/* Footer: Name + Badge */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className={`w-12 h-12 rounded-full ${t.badgeColor} text-white flex flex-col items-center justify-center text-center shadow-inner flex-shrink-0`}>
                    <span className="text-[10px] font-extrabold leading-none">{t.badge}</span>
                    <span className="text-[7px] uppercase tracking-wider mt-0.5 text-green-100">{t.badgeSub}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                    {t.designation && (
                      <span className="text-xs text-gray-400">{t.designation}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More / View Less Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllTestimonials(!showAllTestimonials)}
              className="inline-flex items-center gap-2 bg-white border-2 border-rlhp-green text-rlhp-green hover:bg-rlhp-green hover:text-white font-semibold text-sm px-8 py-3 rounded-full shadow-sm transition-all duration-300"
            >
              {showAllTestimonials ? 'View Less' : 'View More'}
              <ChevronDown size={16} className={`transition-transform duration-300 ${showAllTestimonials ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Stories Footer Handwritten Note */}
          <div className="text-center mt-8 pt-6">
            <p className="stories-footer-handwritten mb-2">
              Every story starts with someone who cares...
            </p>
            <p className="text-gray-600 text-sm">
              Your support of <strong className="text-rlhp-green font-bold">₹2,000</strong> can write the next testimony of hope and self-reliance.
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
          <div className="max-w-[850px] mx-auto bg-green-50/60 border-l-4 border-rlhp-green rounded-r-xl p-6 sm:p-8">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic">
              "Every year, we reach <strong className="text-rlhp-green font-bold">thousands of marginalized children</strong> who would otherwise never have access to education and protection. Your support doesn't just change one life—it transforms entire families and communities across generations."
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: YOUR ACTION CHANGES EVERYTHING
          - Buttons removed from cards, content kept
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-[#0c192c] text-white overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-rlhp-green/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rlhp-green/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              YOUR ACTION <br />
              <span className="text-rlhp-accentgreen">CHANGES EVERYTHING</span>
            </h2>
            <p className="text-gray-300 text-base max-w-[650px] mx-auto">
              Right now, thousands of children are waiting for a chance at education and safety. You can be that chance.
            </p>
          </div>

          {/* 3 Action Cards — Buttons Removed */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {/* Card 1: Donate Today */}
            <div className="bg-[#13233c] border border-white/10 rounded-xl p-8 flex flex-col hover:border-rlhp-green/60 transition-colors">
              <div className="text-rlhp-accentgreen mb-5">
                <Heart size={36} className="fill-rlhp-accentgreen/20" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Donate Today</h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                ₹2,000 provides a child with education, meals, and school supplies. Contributions are eligible for 80G tax exemption.
              </p>
            </div>

            {/* Card 2: Corporate Partnership */}
            <div className="bg-[#13233c] border border-white/10 rounded-xl p-8 flex flex-col hover:border-rlhp-green/60 transition-colors">
              <div className="text-rlhp-accentgreen mb-5">
                <Handshake size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Corporate Partnership</h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                Transform hundreds of lives through CSR initiatives. Partner with RLHP on education, healthcare, and livelihood programs.
              </p>
            </div>

            {/* Card 3: Volunteer Your Skills */}
            <div className="bg-[#13233c] border border-white/10 rounded-xl p-8 flex flex-col hover:border-rlhp-green/60 transition-colors">
              <div className="text-rlhp-accentgreen mb-5">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Volunteer Your Skills</h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                Teach, mentor, conduct healthcare camps, or support digital learning. Give your time to directly change a child's future.
              </p>
            </div>
          </div>

          {/* Action Banner (Green background with Donate CTA) */}
          <div className="bg-rlhp-green rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Transform a Child's Life Today
              </h3>
              <p className="text-green-100 text-sm sm:text-base max-w-xl">
                Your donation provides a child with education, nutrition, and hope for an entire year.
              </p>
            </div>
            <button
              onClick={() => nav('bank-details')}
              className="bg-white text-rlhp-darkgreen hover:bg-gray-100 font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-md transition-all flex-shrink-0"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7: OUR ACTIVITIES - ANNUAL REPORTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="our-activities" className="relative py-20 bg-gray-50 border-t border-gray-200 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-extrabold tracking-[0.2em] text-rlhp-green uppercase mb-2">
              OUR ACTIVITIES
            </h2>
            <div className="w-12 h-[3px] bg-rlhp-green mx-auto rounded-full mb-3" />
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Annual Reports &amp; Field Documentation
            </h3>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
              Transparent reporting on four decades of child education, community interventions, and statutory audits across South India.
            </p>
          </div>

          {/* Sub-section: Annual Reports */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-150">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-rlhp-darkgreen text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck size={14} className="text-rlhp-green" /> Official Audits &amp; Filings
                </div>
                <h4 className="text-2xl font-black text-gray-900">
                  Annual Reports
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Download or inspect certified audit reports, balance sheets, and annual activity evaluations.
                </p>
              </div>

              <button
                onClick={() => nav('financials')}
                className="inline-flex items-center gap-2 bg-rlhp-lightgreen text-rlhp-darkgreen hover:bg-rlhp-green hover:text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors duration-200 self-start sm:self-auto"
              >
                View Financial Hub <ArrowRight size={14} />
              </button>
            </div>

            {/* Reports Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 'ar-2025',
                  title: 'Annual Report 2024-2025',
                  year: '2024-2025',
                  type: 'Official Signed Audit',
                  desc: 'Comprehensive audit, operational review & audited balance sheet certified by Chartered Accountants (UDIN: 25251076BMIISA9978).',
                  file: `${B}documents/audit-report-2024-2025.pdf`,
                  fileName: 'RLHP_Audit_Report_2024-2025.pdf',
                  badgeColor: 'bg-emerald-100 text-emerald-800',
                  pages: '3 Pages • Signed PDF'
                },
                {
                  id: 'ar-2024',
                  title: 'Annual Report 2023-2024',
                  year: '2023-2024',
                  type: 'Annual Impact Review',
                  desc: 'Key milestones, impact metrics across 10 districts & community outreach in child protection, nutrition, and schooling.',
                  badgeColor: 'bg-blue-100 text-blue-800',
                  pages: 'Official Report • PDF'
                },
                {
                  id: 'ar-2023',
                  title: 'Annual Report 2022-2023',
                  year: '2022-2023',
                  type: 'Annual Review & Audit',
                  desc: 'Post-pandemic community recovery, livelihood drives, women SHG micro-enterprises & audited financial statements.',
                  badgeColor: 'bg-purple-100 text-purple-800',
                  pages: 'Official Report • PDF'
                },
                {
                  id: 'ar-base',
                  title: 'Baseline Survey Report',
                  year: '2024',
                  type: 'Socio-Economic Survey',
                  desc: 'In-depth socio-economic baseline assessment of Pourakarmika families and rural habitations across Karnataka.',
                  badgeColor: 'bg-amber-100 text-amber-800',
                  pages: 'Field Survey • PDF'
                },
                {
                  id: 'ar-iep',
                  title: 'IEP Activity Report',
                  year: '2024',
                  type: 'Education Framework',
                  desc: 'Individualized Education Plan diagnostic evaluation & remediation methodologies for learning difficulties in rural schools.',
                  badgeColor: 'bg-teal-100 text-teal-800',
                  pages: 'Activity Report • PDF'
                },
                {
                  id: 'ar-pta',
                  title: 'PTA Governance Report',
                  year: '2024',
                  type: 'Community Governance',
                  desc: 'Strengthening community school governance, Anganwadi monitoring, child dropout prevention and parent participation.',
                  badgeColor: 'bg-rose-100 text-rose-800',
                  pages: 'Governance Report • PDF'
                },
              ].map((report, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50/60 rounded-xl border border-gray-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-rlhp-green/50 transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${report.badgeColor}`}>
                        {report.type}
                      </span>
                      <span className="text-xs font-semibold text-gray-400">
                        {report.year}
                      </span>
                    </div>

                    <h5 className="font-bold text-gray-900 text-base mb-2 group-hover:text-rlhp-green transition-colors leading-snug">
                      {report.title}
                    </h5>

                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {report.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between gap-3">
                    <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
                      <FileText size={13} className="text-rlhp-green" /> {report.pages}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleViewReport(report)}
                        className="px-3 py-1.5 rounded-md bg-white border border-gray-200 text-gray-700 hover:text-rlhp-green hover:border-rlhp-green text-xs font-semibold flex items-center gap-1 transition-colors shadow-2xs"
                        title="View Report"
                      >
                        <Eye size={12} /> View
                      </button>
                      <button
                        onClick={() => handleDownloadReport(report)}
                        disabled={downloadingReport === report.title}
                        className="px-3 py-1.5 rounded-md bg-rlhp-green hover:bg-rlhp-darkgreen text-white text-xs font-semibold flex items-center gap-1 transition-colors shadow-2xs"
                        title="Download PDF"
                      >
                        <Download size={12} />
                        {downloadingReport === report.title ? 'Downloading...' : 'PDF'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                className="h-28 bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
                title={p.name}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
