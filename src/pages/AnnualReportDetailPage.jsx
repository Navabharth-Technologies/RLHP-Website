import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, ChevronRight, Calendar, Folder, Download, BookOpen, 
  ArrowLeft, Loader2, Maximize2, Minimize2, X, ZoomIn
} from 'lucide-react';
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
  const [currentPage, setCurrentPageNum] = useState(1); // 1 = cover
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState('next');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Store rendered high-res data URLs for instant, glitch-free viewing
  const [renderedPages, setRenderedPages] = useState([]);

  // Audio page turn sound
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
      // Audio blocked or silent
    }
  };

  // Pre-render all pages (Front cover + PDF pages + Back cover) into crystal-clear images
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setRenderedPages([]);
    setCurrentPageNum(1);

    const loadAndRender = async () => {
      try {
        if (!report?.pdfUrl) return;

        const loadingTask = pdfjsLib.getDocument(report.pdfUrl);
        const pdf = await loadingTask.promise;
        if (isCancelled) return;

        const count = pdf.numPages;
        setTotalPages(count + 2); // 1 front cover + count PDF pages + 1 back cover

        const pagesList = [];

        // 1. FRONT COVER (Page 1)
        if (report.cover) {
          pagesList.push({ type: 'img', src: report.cover, label: 'Front Cover' });
        }

        // Render first 2 pages immediately so book displays without delay
        const initialLoadCount = Math.min(count, 4);

        for (let i = 1; i <= initialLoadCount; i++) {
          if (isCancelled) return;
          const page = await pdf.getPage(i);
          // High clarity 2.2x scale for sharp text reading
          const viewport = page.getViewport({ scale: 2.2 });

          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const context = canvas.getContext('2d', { alpha: false });

          await page.render({ canvasContext: context, viewport }).promise;
          pagesList.push({ type: 'canvas', dataUrl: canvas.toDataURL('image/jpeg', 0.95), pageNum: i });
        }

        if (isCancelled) return;
        setRenderedPages([...pagesList]);
        setLoading(false);

        // Lazily render remaining pages in background
        for (let i = initialLoadCount + 1; i <= count; i++) {
          if (isCancelled) return;
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2.2 });

          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const context = canvas.getContext('2d', { alpha: false });

          await page.render({ canvasContext: context, viewport }).promise;
          pagesList.push({ type: 'canvas', dataUrl: canvas.toDataURL('image/jpeg', 0.95), pageNum: i });
          
          if (!isCancelled && i % 3 === 0) {
            setRenderedPages([...pagesList]);
          }
        }

        // 3. BACK COVER
        if (report.backCover) {
          pagesList.push({ type: 'img', src: report.backCover, label: 'Back Cover' });
        }

        if (!isCancelled) {
          setRenderedPages([...pagesList]);
        }
      } catch (err) {
        console.error('Error rendering PDF report pages:', err);
        if (!isCancelled) setLoading(false);
      }
    };

    loadAndRender();

    return () => {
      isCancelled = true;
    };
  }, [report]);

  const totalBookPages = renderedPages.length || (totalPages || 1);

  // Turn page handlers
  const turnNext = () => {
    if (isFlipping) return;
    if (currentPage === 1) {
      // From front cover, open to spread 2 & 3
      triggerFlip('next', 2);
    } else if (currentPage + 2 <= totalBookPages) {
      triggerFlip('next', currentPage + 2);
    } else if (currentPage + 1 <= totalBookPages) {
      triggerFlip('next', currentPage + 1);
    }
  };

  const turnPrev = () => {
    if (isFlipping) return;
    if (currentPage <= 3) {
      // Turn back to front cover
      triggerFlip('prev', 1);
    } else {
      triggerFlip('prev', Math.max(1, currentPage - 2));
    }
  };

  const triggerFlip = (direction, targetPage) => {
    setFlipDir(direction);
    setIsFlipping(true);
    playPageSound();

    setTimeout(() => {
      setCurrentPageNum(targetPage);
      setIsFlipping(false);
    }, 380);
  };

  // Keyboard navigation & Esc key listener
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        turnNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        turnPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isFullscreen, currentPage, totalBookPages, isFlipping]);

  const matchYear = report.title?.match(/\d{4}[–-]\d{4}/);
  const displayYear = matchYear ? matchYear[0].replace(/20(\d\d)$/, '$1') : report.title;
  const otherReports = allReports.filter(r => r.id !== report.id);

  const isCover = currentPage === 1;
  const isBackCover = currentPage >= totalBookPages && totalBookPages > 1;

  // For open book spread:
  // leftPage is even (currentPage % 2 === 0 ? currentPage : currentPage - 1)
  // rightPage is leftPage + 1
  const leftPageIdx = currentPage % 2 === 0 ? currentPage : currentPage - 1;
  const rightPageIdx = leftPageIdx + 1;

  const leftPageData = renderedPages[leftPageIdx - 1];
  const rightPageData = renderedPages[rightPageIdx - 1];

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
                {totalBookPages > 0 && (
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-rlhp-darkgreen px-2.5 py-0.5 rounded-full font-bold">
                    <BookOpen size={13} />
                    <span>{totalBookPages} Pages</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Slanted Cover Preview with Elevation Shadow */}
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
          2. MAIN CONTENT AREA: CLEAN FLIPBOOK + RELATED POSTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ── Left Column (8 Cols): Realistic Book-turn Flipbook Stage ── */}
          <div className="lg:col-span-8">
            <div 
              className={`relative bg-[#505254] rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center border border-gray-400/30 select-none transition-all duration-300 ${
                isFullscreen 
                  ? 'fixed inset-0 z-50 rounded-none border-0 w-screen h-screen bg-black/95 p-4 sm:p-12'
                  : 'min-h-[580px] sm:min-h-[720px] p-4 sm:p-8'
              }`}
            >
              
              {/* Fullscreen Close Button */}
              {isFullscreen ? (
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="absolute top-5 right-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/25 hover:bg-white/40 text-white font-bold text-xs sm:text-sm shadow-2xl backdrop-blur-md cursor-pointer transition-all border border-white/20 hover:scale-105"
                  title="Exit Fullscreen (Esc)"
                >
                  <X size={20} />
                  <span>Exit Fullscreen (Esc)</span>
                </button>
              ) : (
                /* Fullscreen Enlarge Button */
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-4 right-4 z-40 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/50 hover:bg-rlhp-green text-white shadow-xl transition-all cursor-pointer backdrop-blur-xs hover:scale-105 text-xs font-bold border border-white/20"
                  title="Enlarge to Full Screen"
                >
                  <Maximize2 size={16} />
                  <span className="hidden sm:inline">Full Screen</span>
                </button>
              )}

              {/* Left Navigation Arrow */}
              <button
                onClick={turnPrev}
                disabled={currentPage <= 1 || isFlipping}
                className={`absolute left-3 sm:left-6 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-black/60 hover:bg-rlhp-green text-white border border-white/20 transition-all shadow-2xl cursor-pointer ${
                  currentPage <= 1 ? 'opacity-20 cursor-not-allowed pointer-events-none' : 'hover:scale-110 active:scale-95'
                }`}
                title="Turn to Previous Page"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Loading Indicator */}
              {loading && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xs gap-3 text-white">
                  <Loader2 size={42} className="animate-spin text-emerald-400" />
                  <p className="text-xs font-semibold tracking-wide">
                    Rendering High-Clarity Book Pages...
                  </p>
                </div>
              )}

              {/* Realistic 3D Book Stage */}
              <div 
                className="w-full flex items-center justify-center overflow-hidden py-4"
                style={{ perspective: '2200px' }}
              >
                {isCover ? (
                  /* ─── SINGLE FRONT COVER BOOK ─── */
                  <div 
                    onClick={turnNext}
                    className={`relative w-full max-w-[420px] sm:max-w-[460px] aspect-[1/1.38] rounded-r-2xl rounded-l-md shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-white overflow-hidden border border-black/20 cursor-pointer transition-all duration-500 ${
                      isFlipping
                        ? 'rotate-y-[-40deg] scale-[0.98] origin-left brightness-90 shadow-2xl'
                        : 'rotate-y-0 scale-100 origin-center brightness-100 hover:scale-[1.02]'
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                    title="Click to Open Book"
                  >
                    {/* Left Spine Depth & Gloss */}
                    <div className="absolute top-0 bottom-0 left-0 w-8 pointer-events-none z-10 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-white/40 z-10" />

                    <img 
                      src={report.cover} 
                      alt="Front Cover" 
                      className="w-full h-full object-cover select-none block" 
                    />

                    {/* Paper Light Reflection */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/15" />
                    <div className="absolute bottom-0 right-0 w-14 h-14 pointer-events-none bg-gradient-to-tl from-black/25 via-transparent to-transparent" />
                  </div>
                ) : isBackCover && !leftPageData ? (
                  /* ─── SINGLE BACK COVER BOOK (Closing Page) ─── */
                  <div 
                    onClick={turnPrev}
                    className={`relative w-full max-w-[420px] sm:max-w-[460px] aspect-[1/1.38] rounded-l-2xl rounded-r-md shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-white overflow-hidden border border-black/20 cursor-pointer transition-all duration-500 ${
                      isFlipping
                        ? 'rotate-y-[40deg] scale-[0.98] origin-right brightness-90 shadow-2xl'
                        : 'rotate-y-0 scale-100 origin-center brightness-100 hover:scale-[1.02]'
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                    title="Click to Flip Back"
                  >
                    <div className="absolute top-0 bottom-0 right-0 w-8 pointer-events-none z-10 bg-gradient-to-l from-black/50 via-black/15 to-transparent" />
                    <img 
                      src={report.backCover} 
                      alt="Back Cover" 
                      className="w-full h-full object-cover select-none block" 
                    />
                  </div>
                ) : (
                  /* ─── OPEN TWO-PAGE SPREAD ─── */
                  <div 
                    className={`relative w-full flex items-center justify-center rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden border border-black/30 transition-all duration-300 ${
                      isFullscreen ? 'max-w-6xl max-h-[85vh]' : 'max-w-4xl max-h-[75vh]'
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* LEFT PAGE */}
                    <div 
                      onClick={turnPrev}
                      className={`relative flex-1 aspect-[1/1.38] bg-white overflow-hidden border-r border-gray-300 origin-right transition-all duration-400 cursor-pointer ${
                        isFlipping && flipDir === 'prev'
                          ? 'rotate-y-[40deg] brightness-75 shadow-2xl'
                          : 'rotate-y-0 brightness-100'
                      }`}
                      style={{ transformStyle: 'preserve-3d' }}
                      title="Click Left Page to Turn Back"
                    >
                      {leftPageData ? (
                        <img 
                          src={leftPageData.dataUrl || leftPageData.src} 
                          alt="Left Page" 
                          className="w-full h-full object-contain select-none block bg-white" 
                        />
                      ) : (
                        <div className="w-full h-full bg-white flex items-center justify-center text-gray-300 text-xs">
                          {report.title}
                        </div>
                      )}

                      {/* Left spine shadow */}
                      <div className="absolute top-0 bottom-0 right-0 w-10 pointer-events-none bg-gradient-to-l from-black/40 via-black/10 to-transparent" />
                      <div className="absolute top-0 bottom-0 left-0 w-4 pointer-events-none bg-gradient-to-r from-black/15 to-transparent" />
                    </div>

                    {/* CENTER BOOK SPINE */}
                    <div className="w-[4px] h-full bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-700 z-20 shadow-inner shrink-0" />

                    {/* RIGHT PAGE */}
                    <div 
                      onClick={turnNext}
                      className={`relative flex-1 aspect-[1/1.38] bg-white overflow-hidden border-l border-gray-300 origin-left transition-all duration-400 cursor-pointer ${
                        isFlipping && flipDir === 'next'
                          ? 'rotate-y-[-40deg] brightness-75 shadow-2xl'
                          : 'rotate-y-0 brightness-100'
                      }`}
                      style={{ transformStyle: 'preserve-3d' }}
                      title="Click Right Page to Turn Next"
                    >
                      {rightPageData ? (
                        <img 
                          src={rightPageData.dataUrl || rightPageData.src} 
                          alt="Right Page" 
                          className="w-full h-full object-contain select-none block bg-white" 
                        />
                      ) : report.backCover ? (
                        /* Use Back Cover as the closing page so there are NO blank pages */
                        <img 
                          src={report.backCover} 
                          alt="Back Cover" 
                          className="w-full h-full object-cover select-none block bg-white" 
                        />
                      ) : null}

                      {/* Right spine shadow */}
                      <div className="absolute top-0 bottom-0 left-0 w-10 pointer-events-none bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
                      <div className="absolute top-0 bottom-0 right-0 w-4 pointer-events-none bg-gradient-to-l from-black/15 to-transparent" />
                      <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none bg-gradient-to-tl from-black/25 via-transparent to-transparent" />
                    </div>
                  </div>
                )}
              </div>

              {/* Right Navigation Arrow */}
              <button
                onClick={turnNext}
                disabled={currentPage >= totalBookPages || isFlipping}
                className={`absolute right-3 sm:right-6 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-black/60 hover:bg-rlhp-green text-white border border-white/20 transition-all shadow-2xl cursor-pointer ${
                  currentPage >= totalBookPages ? 'opacity-20 cursor-not-allowed pointer-events-none' : 'hover:scale-110 active:scale-95'
                }`}
                title="Turn to Next Page"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>

          {/* ── Right Column (4 Cols): Related Posts ── */}
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
