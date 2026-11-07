import React, { useState } from 'react';
import { ArrowRight, X, ZoomIn, Newspaper } from 'lucide-react';

const B = import.meta.env.BASE_URL;

// Placeholder empty array ready for new photos/clippings to be uploaded
const allArticles = [];

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
          {allArticles.length > 0 ? (
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
          ) : (
            <div className="py-20 text-center bg-white rounded-3xl border-2 border-dashed border-gray-200 p-8 max-w-xl mx-auto shadow-xs">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-50 text-rlhp-green flex items-center justify-center">
                <Newspaper size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Media Coverage Ready</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
                Press clippings and news photos have been cleared. New media coverage uploads will be displayed here with full clipping previews.
              </p>
            </div>
          )}
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

