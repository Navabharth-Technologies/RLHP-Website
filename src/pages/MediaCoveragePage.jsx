import React, { useState } from 'react';
import { Newspaper, Calendar, ArrowRight, Search } from 'lucide-react';

const B = import.meta.env.BASE_URL;

const allArticles = [
  {
    img: `${B}images/newspaper/news_andolana_child_labour_rally_2024.jpg`,
    publication: 'Andolana Daily',
    date: 'June 2024',
    headline: 'Massive Anti-Child Labour Rally Organised in Mysuru City by RLHP',
    summary: 'Over 600 school children and social workers marched to raise awareness against child labour in hazardous trades.',
  },
  {
    img: `${B}images/newspaper/news_kannadaprabha_womens_day_2025.jpg`,
    publication: 'Kannada Prabha',
    date: 'March 2025',
    headline: 'Women Self-Help Groups Celebrate Collective Leadership & Financial Freedom',
    summary: 'Federation members in Varuna & Gundlupet recognized for exemplary community intervention and micro-savings achievements.',
  },
  {
    img: `${B}images/newspaper/news_starofmysore_youth_nation_growth_jose_2024.jpg`,
    publication: 'Star of Mysore',
    date: 'January 2024',
    headline: 'Empowering Youth for Nation Building — RLHP Director Addresses Seminar',
    summary: 'Discussion on youth skills, constitutional values, and preventing vulnerable adolescents from falling into street migration.',
  },
  {
    img: `${B}images/newspaper/news_kannadaprabha_nutrition_month_2024.jpg`,
    publication: 'Kannada Prabha',
    date: 'September 2024',
    headline: 'National Nutrition Month Awareness & Child Health Drive',
    summary: 'RLHP partners with Anganwadi workers to conduct child health screenings and nutrition education sessions across Mysuru.',
  },
  {
    img: `${B}images/newspaper/news_andolana_anti_child_labour_2023.jpg`,
    publication: 'Andolana Daily',
    date: 'June 2023',
    headline: 'Anti-Child Labour Campaign — Street Plays & Community Awareness',
    summary: 'RLHP volunteers and partner organizations performed street plays to educate communities on child rights and education.',
  },
  {
    img: `${B}images/newspaper/news_andolana_cancer_awareness_2025.jpg`,
    publication: 'Andolana Daily',
    date: 'February 2025',
    headline: 'Cancer Awareness Camp Conducted for Marginalized Communities',
    summary: 'Free health screening and awareness sessions organized for Pourakarmika families and urban slum communities.',
  },
  {
    img: `${B}images/newspaper/news_kannadaprabha_breastfeeding_week_2024.jpg`,
    publication: 'Kannada Prabha',
    date: 'August 2024',
    headline: 'World Breastfeeding Week — Awareness Drive for Mothers',
    summary: 'RLHP Anganwadi programme educates young mothers on importance of breastfeeding and child nutrition in first 1000 days.',
  },
  {
    img: `${B}images/newspaper/news_andolana_national_youth_day_2024.jpg`,
    publication: 'Andolana Daily',
    date: 'January 2024',
    headline: 'National Youth Day Celebrated with Skill Development Workshops',
    summary: 'Youth from RLHP\'s community programmes participate in leadership and vocational skill development activities.',
  },
  {
    img: `${B}images/newspaper/news_child_marriage_free_india_2024.jpg`,
    publication: 'Regional Daily',
    date: 'October 2024',
    headline: 'Child Marriage-Free India Campaign — RLHP Leads Drive in Villages',
    summary: 'Awareness campaign conducted in 12 villages highlighting legal provisions and community responsibility to prevent child marriage.',
  },
  {
    img: `${B}images/newspaper/news_kannadaprabha_health_kits_2024.jpg`,
    publication: 'Kannada Prabha',
    date: 'July 2024',
    headline: 'Health Kits Distributed to Anganwadi Children Across Districts',
    summary: 'RLHP distributes hygiene and health kits to over 500 Anganwadi children as part of its child health initiative.',
  },
  {
    img: `${B}images/newspaper/news_kannadaprabha_tree_planting_2024.jpg`,
    publication: 'Kannada Prabha',
    date: 'June 2024',
    headline: 'Tree Planting Drive — Children Lead Environmental Awareness',
    summary: 'Children from RLHP learning centres plant 1,000 saplings under the Green Mysuru initiative.',
  },
  {
    img: `${B}images/newspaper/news_prajavani_girl_child_day_chincholi.jpg`,
    publication: 'Prajavani',
    date: 'January 2024',
    headline: 'Girl Child Day Celebrated — Education is Every Girl\'s Right',
    summary: 'RLHP celebrates National Girl Child Day with awareness programmes on girls\' education and protection.',
  },
  {
    img: `${B}images/newspaper/news_andolana_womens_day_purabhavana_manju_2025.jpg`,
    publication: 'Andolana Daily',
    date: 'March 2025',
    headline: 'International Women\'s Day — Celebrating Women\'s Resilience & Leadership',
    summary: 'Self-Help Group women leaders felicitated for outstanding contributions to community development and financial inclusion.',
  },
  {
    img: `${B}images/newspaper/news_kannadaprabha_int_youth_day_siddaramanahundi_2025.jpg`,
    publication: 'Kannada Prabha',
    date: 'August 2025',
    headline: 'International Youth Day — Youth Champions for Change',
    summary: 'RLHP youth programme graduates share their success stories and inspire peers at community celebration event.',
  },
  {
    img: `${B}images/newspaper/news_vijaykarnataka_bus_facility_students_2025.jpg`,
    publication: 'Vijay Karnataka',
    date: 'May 2025',
    headline: 'Bus Facility Secured for Students in Remote Areas',
    summary: 'RLHP advocates for and secures government bus facility for school-going children in underserved villages.',
  },
  {
    img: `${B}images/newspaper/news_prajavani_school_safety_kscpcr_2023.jpg`,
    publication: 'Prajavani',
    date: 'December 2023',
    headline: 'School Safety Standards — KSCPCR & RLHP Joint Inspection Drive',
    summary: 'Joint inspection of schools to assess safety standards and child-friendly learning environments across Mysuru district.',
  },
  {
    img: `${B}images/newspaper/news_andolana_nomadic_protection_2025.jpg`,
    publication: 'Andolana Daily',
    date: 'April 2025',
    headline: 'Protection of Nomadic Children — RLHP Intervention Programme',
    summary: 'Special programme launched to identify and support nomadic tribe children who are out of school and at risk.',
  },
  {
    img: `${B}images/newspaper/news_kannadaprabha_world_water_day_2025.jpg`,
    publication: 'Kannada Prabha',
    date: 'March 2025',
    headline: 'World Water Day — Awareness on Water Conservation & Sanitation',
    summary: 'RLHP conducts water conservation workshops in schools and communities to build environmental consciousness.',
  },
  {
    img: `${B}images/newspaper/news_vishwavani_womens_day_varuna_2026.jpg`,
    publication: 'Vishwavani',
    date: 'March 2026',
    headline: 'Women Federation Marks Women\'s Day with Empowerment Pledge',
    summary: 'RLHP Women Federation in Varuna takes collective pledge for financial independence and community leadership.',
  },
  {
    img: `${B}images/newspaper/news_andolana_environment_awareness_shivaraju_2026.jpg`,
    publication: 'Andolana Daily',
    date: 'June 2026',
    headline: 'Environment Awareness — RLHP Leads Eco-Education in Schools',
    summary: 'Environmental education sessions conducted for 2,000+ school children across Mysuru urban and rural clusters.',
  },
];

export default function MediaCoveragePage({ setCurrentPage, onNavClick }) {
  const [search, setSearch] = useState('');

  const filtered = allArticles.filter(
    (a) =>
      a.headline.toLowerCase().includes(search.toLowerCase()) ||
      a.publication.toLowerCase().includes(search.toLowerCase()) ||
      a.date.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* ── Page Header ── */}
      <section className="bg-[#0f1b2d] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold uppercase tracking-wider mb-5">
            <Newspaper size={15} />
            In The Press
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Media <span className="text-rlhp-accentgreen">Coverage</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-[650px] mx-auto">
            How leading Kannada and English regional dailies report on RLHP's campaigns, rescue operations, and community milestones across South India.
          </p>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            {[
              { num: '25+', label: 'Media Articles' },
              { num: '8+', label: 'Publications' },
              { num: '42+', label: 'Years of Coverage' },
            ].map((s, i) => (
              <div key={i} className="py-6 text-center">
                <div className="text-2xl font-extrabold text-rlhp-darkgreen">{s.num}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Search + Grid ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          {/* Search Bar */}
          <div className="mb-10 max-w-md mx-auto">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by headline or publication..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-rlhp-green shadow-sm"
              />
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-400 mb-6">
            Showing <span className="font-semibold text-gray-700">{filtered.length}</span> of {allArticles.length} articles
          </p>

          {/* Media Cards Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((media, idx) => (
                <article
                  key={idx}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                >
                  {/* Newspaper Image */}
                  <div className="relative h-64 bg-slate-50 border-b border-gray-100 p-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={media.img}
                      alt={media.headline}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                    />
                    <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded">
                      {media.publication}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 font-medium">
                      <Calendar size={13} className="text-rlhp-green" />
                      {media.date}
                    </div>
                    <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-rlhp-green transition-colors mb-2 flex-1">
                      {media.headline}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {media.summary}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-5 pt-2 border-t border-gray-50">
                    <span className="text-xs font-bold text-rlhp-green flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Clipping <ArrowRight size={13} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <Newspaper size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">No articles found for "{search}"</p>
              <p className="text-sm mt-1">Try a different search term</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

