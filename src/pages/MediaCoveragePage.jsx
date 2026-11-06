import React, { useState } from 'react';
import { ArrowRight, X, ZoomIn } from 'lucide-react';

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
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full">
      {/* ── Page Header ── */}
      <section className="bg-[#0f1b2d] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Media <span className="text-rlhp-accentgreen">Coverage</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-[650px] mx-auto">
            How leading Kannada and English regional dailies report on RLHP's campaigns, rescue operations, and community milestones across South India.
          </p>
        </div>
      </section>

      {/* ── Media Cards Grid ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArticles.map((media, idx) => (
              <article
                key={idx}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Newspaper Image (Clickable to open) */}
                <div 
                  onClick={() => setSelectedImage(media)}
                  className="relative h-64 sm:h-72 bg-slate-50 border-b border-gray-100 p-3 flex items-center justify-center overflow-hidden cursor-pointer"
                >
                  <img
                    src={media.img}
                    alt={media.headline}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                  />
                </div>

                {/* Card Footer with Read Clipping button */}
                <div className="p-5 border-t border-gray-100 bg-white flex items-center justify-between">
                  <button
                    onClick={() => setSelectedImage(media)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-rlhp-green text-rlhp-darkgreen hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-2xs hover:shadow-md cursor-pointer"
                  >
                    <span>Read Clipping</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal for Newspaper Image ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Wrong (Close X) Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 sm:-right-12 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg z-20 backdrop-blur-xs"
              title="Close (Esc)"
            >
              <X size={22} />
            </button>

            {/* Modal Image View */}
            <div className="overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center bg-black/40 p-2 border border-white/10">
              <img
                src={selectedImage.img}
                alt="Newspaper Clipping"
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

