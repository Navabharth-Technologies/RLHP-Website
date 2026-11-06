import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, ChevronRight, Calendar, Folder, Download, BookOpen, 
  ArrowLeft, Loader2
} from 'lucide-react';
import { PageFlip } from 'page-flip';
import * as pdfjsLib from 'pdfjs-dist';

// Point pdfjs to local worker file copied to public
if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.js`;
}

export default function AnnualReportDetailPage({ 
  report, 
  allReports = [], 
  onSelectReport, 
  onBack, 
  setCurrentPage 
}) {
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const bookContainerRef = useRef(null);
  const pageFlipInstanceRef = useRef(null);

  // Play realistic page turn audio sound
  const playPageSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(160, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(35, audioCtx.currentTime + 0.16);
      
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.16);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.16);
    } catch {
      // AudioContext unavailable or silent
    }
  };

  // Render all PDF pages into the DOM and initialize StPageFlip (page-flip)
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    const initBook = async () => {
      try {
        if (!report?.pdfUrl) return;

        const loadingTask = pdfjsLib.getDocument(report.pdfUrl);
        const pdf = await loadingTask.promise;
        if (isCancelled) return;

        const count = pdf.numPages;
        setTotalPages(count);

        const container = bookContainerRef.current;
        if (!container) return;

        // Clean container previous pages
        container.innerHTML = '';

        // Render each page into a canvas wrapped in a div.page
        for (let i = 1; i <= count; i++) {
          if (isCancelled) return;
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1.5 });

          const pageDiv = document.createElement('div');
          pageDiv.className = 'page bg-white shadow-md overflow-hidden flex items-center justify-center';
          pageDiv.style.backgroundColor = '#ffffff';

          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = '100%';
          canvas.style.height = '100%';
          canvas.style.objectFit = 'contain';
          canvas.style.display = 'block';

          const context = canvas.getContext('2d');
          await page.render({ canvasContext: context, viewport }).promise;

          pageDiv.appendChild(canvas);
          container.appendChild(pageDiv);
        }

        if (isCancelled) return;

        // Destroy previous PageFlip instance if any
        if (pageFlipInstanceRef.current) {
          pageFlipInstanceRef.current.destroy();
          pageFlipInstanceRef.current = null;
        }

        // Initialize PageFlip library
        const isMobile = window.innerWidth < 768;
        const pageFlip = new PageFlip(container, {
          width: isMobile ? 360 : 450,
          height: isMobile ? 500 : 620,
          size: 'stretch',
          minWidth: 280,
          maxWidth: 600,
          minHeight: 400,
          maxHeight: 850,
          drawShadow: true,
          flippingTime: 700,
          usePortrait: true,
          startPage: 0,
          showCover: true,
          maxShadowOpacity: 0.5,
          mobileScrollSupport: false
        });

        pageFlip.loadFromHTML(container.querySelectorAll('.page'));

        pageFlip.on('flip', (e) => {
          setCurrentPageIndex(e.data);
          playPageSound();
        });

        pageFlipInstanceRef.current = pageFlip;
        setLoading(false);
      } catch (err) {
        console.error('Error rendering flipbook pages:', err);
        if (!isCancelled) setLoading(false);
      }
    };

    initBook();

    return () => {
      isCancelled = true;
      if (pageFlipInstanceRef.current) {
        pageFlipInstanceRef.current.destroy();
        pageFlipInstanceRef.current = null;
      }
    };
  }, [report]);

  const turnNext = () => {
    if (pageFlipInstanceRef.current) {
      pageFlipInstanceRef.current.flipNext();
    }
  };

  const turnPrev = () => {
    if (pageFlipInstanceRef.current) {
      pageFlipInstanceRef.current.flipPrev();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') turnNext();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') turnPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  const matchYear = report.title?.match(/\d{4}[–-]\d{4}/);
  const displayYear = matchYear ? matchYear[0].replace(/20(\d\d)$/, '$1') : report.title;
  const otherReports = allReports.filter(r => r.id !== report.id);

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#fbfdfa] via-white to-gray-50/60 pb-24">
      
      {/* ═══════════════════════════════════════════════════════════════════
          1. TOP HERO BANNER (Exact Replica of Reference Image)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f4f9f4] via-[#fbfdfa] to-white border-b border-gray-100 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-emerald-50/70 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <button
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-600 hover:text-rlhp-green transition-colors cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Programmes & Reports</span>
          </button>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-none">
                Activity Report
              </h1>

              {/* Yellow/Orange Hand-drawn Styled Highlight for Year */}
              <div className="text-4xl sm:text-6xl lg:text-7xl font-extrabold italic font-serif text-[#E49E23] tracking-wide">
                {displayYear}
              </div>

              {/* Breadcrumb row */}
              <div className="pt-3 text-xs sm:text-sm font-semibold text-gray-600">
                <span 
                  onClick={() => setCurrentPage?.('home')} 
                  className="hover:text-rlhp-green cursor-pointer transition-colors"
                >
                  Home
                </span>
                {' / '}
                <span 
                  onClick={onBack} 
                  className="hover:text-rlhp-green cursor-pointer transition-colors"
                >
                  Reports
                </span>
                {' / '}
                <span className="text-gray-900 font-bold">
                  Activity Report {displayYear}
                </span>
              </div>

              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 pt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-rlhp-green" />
                  <span>{report.date || 'March 31, 2025'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Folder size={14} className="text-[#E49E23]" />
                  <span>Reports</span>
                </div>
                {totalPages > 0 && (
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-rlhp-darkgreen px-2.5 py-0.5 rounded-full font-bold">
                    <BookOpen size={13} />
                    <span>{totalPages} Pages</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Slanted Cover Preview with Realistic Elevation Shadow */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-[280px] sm:max-w-[320px] w-full transform sm:rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-70" />
                
                <div className="relative aspect-[1/1.38] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
                  <img
                    src={report.cover}
                    alt={report.title}
                    className="w-full h-full object-cover select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. MAIN CONTENT AREA: CLEAN FLIPBOOK (NO TOOLBARS) + RELATED POSTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ── Left Column (8 Cols): Realistic Book-turn Flipbook (Clean Stage) ── */}
          <div className="lg:col-span-8">
            <div className="relative bg-[#626466] rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center border border-gray-400/30 min-h-[550px] sm:min-h-[720px] p-2 sm:p-6 select-none">
              
              {/* Left Navigation Arrow */}
              <button
                onClick={turnPrev}
                className="absolute left-3 sm:left-5 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center bg-black/60 hover:bg-rlhp-green text-white border border-white/20 transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95"
                title="Turn to Previous Page"
              >
                <ChevronLeft size={26} />
              </button>

              {/* Loading Indicator */}
              {loading && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xs gap-3 text-white">
                  <Loader2 size={38} className="animate-spin text-emerald-400" />
                  <p className="text-xs font-semibold tracking-wide">
                    Opening Realistic Book Flip Pages...
                  </p>
                </div>
              )}

              {/* Realistic 3D Turn Over Book Stage (StPageFlip container) */}
              <div className="w-full flex items-center justify-center overflow-hidden py-4">
                <div 
                  ref={bookContainerRef} 
                  id="flipbook-book"
                  className="mx-auto"
                />
              </div>

              {/* Right Navigation Arrow */}
              <button
                onClick={turnNext}
                className="absolute right-3 sm:right-5 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center bg-black/60 hover:bg-rlhp-green text-white border border-white/20 transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95"
                title="Turn to Next Page"
              >
                <ChevronRight size={26} />
              </button>
            </div>
          </div>

          {/* ── Right Column (4 Cols): Related Posts (Exact Replica of Reference Image) ── */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              
              {/* Header with Orange Accent Underline */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  Related Posts
                </h3>
                <div className="w-full h-0.5 bg-[#E49E23] mt-2 rounded-full" />
              </div>

              {/* Related Reports List */}
              <div className="divide-y divide-gray-100 space-y-5">
                {otherReports.map((other, idx) => {
                  const mYear = other.title?.match(/\d{4}[–-]\d{4}/);
                  const relYear = mYear ? mYear[0] : other.period;

                  return (
                    <div
                      key={idx}
                      onClick={() => onSelectReport(other)}
                      className={`group flex items-center gap-4 cursor-pointer transition-all ${idx > 0 ? 'pt-5' : ''}`}
                    >
                      {/* Thumbnail */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200 shadow-2xs group-hover:shadow-md group-hover:border-rlhp-green transition-all">
                        <img
                          src={other.cover}
                          alt={other.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-rlhp-green transition-colors leading-snug line-clamp-2">
                          Activity Report {relYear || other.title}
                        </h4>
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                          <Calendar size={12} className="text-gray-400" />
                          <span>{other.date || 'March 31, 2025'}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Direct Document Action Box */}
            <div className="bg-gradient-to-br from-emerald-50 to-[#edf6ee] rounded-2xl border border-emerald-200/80 p-6 space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-rlhp-green text-white flex items-center justify-center shadow-md">
                <Download size={20} />
              </div>
              <h4 className="text-base font-extrabold text-gray-900">
                Download Full PDF Copy
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Access the complete published high-resolution document with official financial statements and impact metrics.
              </p>
              {report.pdfUrl && (
                <a
                  href={report.pdfUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download Document</span>
                </a>
              )}
            </div>
          </aside>

        </div>
      </section>

    </div>
  );
}
