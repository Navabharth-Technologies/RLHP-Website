import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, BookOpen, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

export default function FlipbookModal({ report, onClose }) {
  if (!report) return null;

  // Each page can be an image or content. When user provides PDF pages, they map here.
  const pages = report.pages || [report.coverImage, report.coverImage];
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // 0-based spread or single page
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');

  const totalPages = pages.length;

  const handleNext = () => {
    if (currentPageIndex < totalPages - 1 && !isFlipping) {
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPageIndex((prev) => Math.min(prev + 1, totalPages - 1));
        setIsFlipping(false);
      }, 400);
    }
  };

  const handlePrev = () => {
    if (currentPageIndex > 0 && !isFlipping) {
      setFlipDirection('prev');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
        setIsFlipping(false);
      }, 400);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl bg-[#1a1f1b] border border-emerald-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white"
        style={{ height: '90vh', maxHeight: '820px' }}
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#121613] border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rlhp-green/20 border border-rlhp-green/40 flex items-center justify-center text-rlhp-accent">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide truncate max-w-md">
                {report.title}
              </h3>
              <p className="text-xs text-gray-400">
                {report.date || 'RLHP Annual Report'} • Page {currentPageIndex + 1} of {totalPages}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {report.pdfUrl && (
              <a
                href={report.pdfUrl}
                download
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-700/40 hover:bg-emerald-700/70 border border-emerald-500/40 text-xs font-semibold text-emerald-200 transition-colors"
                title="Download PDF"
              >
                <Download size={14} /> Download PDF
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
              aria-label="Close flipbook"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Flipbook stage (3D Perspective Book Effect) */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden bg-gradient-to-b from-[#141815] to-[#0c0e0c] relative select-none">
          {/* Navigation arrow left */}
          <button
            onClick={handlePrev}
            disabled={currentPageIndex === 0 || isFlipping}
            className={`absolute left-3 sm:left-6 z-20 w-12 h-12 rounded-full flex items-center justify-center bg-black/60 hover:bg-rlhp-green text-white border border-white/20 hover:border-rlhp-green transition-all shadow-xl ${
              currentPageIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
            }`}
            title="Previous Page"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Book container */}
          <div 
            className="relative w-full max-w-3xl h-full flex items-center justify-center"
            style={{ perspective: '1800px' }}
          >
            {/* Book spine & 3D shadow */}
            <div className="relative h-[85%] max-h-[640px] aspect-[1/1.38] rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-white overflow-hidden border-2 border-emerald-900/40 transition-transform duration-500">
              {/* Book Spine shadow overlay */}
              <div className="absolute top-0 bottom-0 left-0 w-8 pointer-events-none z-10 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
              <div className="absolute top-0 bottom-0 right-0 w-4 pointer-events-none z-10 bg-gradient-to-l from-black/20 to-transparent" />

              {/* Page content with turn animation */}
              <div 
                className={`w-full h-full relative transition-all duration-500 ease-out ${
                  isFlipping
                    ? flipDirection === 'next'
                      ? 'rotate-y-[-25deg] scale-[0.98] brightness-90'
                      : 'rotate-y-[25deg] scale-[0.98] brightness-90'
                    : 'rotate-y-0 scale-100 brightness-100'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={pages[currentPageIndex]}
                  alt={`Page ${currentPageIndex + 1}`}
                  className="w-full h-full object-contain bg-white"
                />
              </div>

              {/* Page corner fold effect */}
              <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none bg-gradient-to-tl from-black/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* Navigation arrow right */}
          <button
            onClick={handleNext}
            disabled={currentPageIndex >= totalPages - 1 || isFlipping}
            className={`absolute right-3 sm:right-6 z-20 w-12 h-12 rounded-full flex items-center justify-center bg-black/60 hover:bg-rlhp-green text-white border border-white/20 hover:border-rlhp-green transition-all shadow-xl ${
              currentPageIndex >= totalPages - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
            }`}
            title="Next Page"
          >
            <ChevronRight size={26} />
          </button>
        </div>

        {/* Footer controls & page indicator */}
        <div className="px-6 py-3.5 bg-[#121613] border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-rlhp-green animate-pulse" />
            <span>Interactive Turn-Page Viewer</span>
          </div>

          {/* Page thumbnails / pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-[50%] py-1">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPageIndex(idx)}
                className={`h-6 px-2.5 rounded-full text-[11px] font-semibold transition-all ${
                  idx === currentPageIndex
                    ? 'bg-rlhp-green text-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-gray-300'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <div className="text-gray-400">
            Use arrows or click buttons to turn pages
          </div>
        </div>
      </div>
    </div>
  );
}

