import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, ChevronRight, Calendar, Folder, Download, BookOpen, 
  ArrowLeft, Volume2, VolumeX, Maximize2, Minimize2, Loader2, Share2, Eye
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
  const [pdfDoc, setPdfDoc] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const canvasRef = useRef(null);
  const viewerContainerRef = useRef(null);
  const renderTaskRef = useRef(null);

  // Play subtle realistic page turn sound
  const playPageSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
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

  // Load PDF document on mount or report change
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setPdfDoc(null);
    setCurrentPageNum(1);

    const loadPdf = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(report.pdfUrl);
        const doc = await loadingTask.promise;
        if (!isCancelled) {
          setPdfDoc(doc);
          setTotalPages(doc.numPages);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error loading PDF in report detail view:', err);
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    if (report?.pdfUrl) {
      loadPdf();
    } else {
      setLoading(false);
    }

    return () => {
      isCancelled = true;
    };
  }, [report]);

  // Render current page onto canvas
  useEffect(() => {
    if (!pdfDoc || !canvasRef.current || currentPageNum < 1) return;

    let isCancelled = false;

    const renderPage = async () => {
      try {
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
        }

        const page = await pdfDoc.getPage(currentPageNum);
        if (isCancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        // Determine responsive scale based on container width
        const containerWidth = canvas.parentElement?.clientWidth || 700;
        const unscaledViewport = page.getViewport({ scale: 1 });
        const scale = Math.min(2.0, Math.max(1.1, (containerWidth - 40) / unscaledViewport.width));
        const viewport = page.getViewport({ scale });

        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;
        await renderTask.promise;
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException') {
          console.warn('Canvas render issue:', err);
        }
      }
    };

    renderPage();

    return () => {
      isCancelled = true;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [pdfDoc, currentPageNum]);

  // Navigation handlers with 3D page flip animation
  const turnNext = () => {
    if (isFlipping || currentPageNum >= totalPages) return;
    setFlipDirection('next');
    setIsFlipping(true);
    playPageSound();

    setTimeout(() => {
      setCurrentPageNum(prev => Math.min(totalPages, prev + 1));
      setIsFlipping(false);
    }, 320);
  };

  const turnPrev = () => {
    if (isFlipping || currentPageNum <= 1) return;
    setFlipDirection('prev');
    setIsFlipping(true);
    playPageSound();

    setTimeout(() => {
      setCurrentPageNum(prev => Math.max(1, prev - 1));
      setIsFlipping(false);
    }, 320);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      viewerContainerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Keyboard arrow listeners
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') turnNext();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') turnPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  // Extract short year like "2024-25" from title
  const matchYear = report.title?.match(/\d{4}[–-]\d{4}/);
  const displayYear = matchYear ? matchYear[0].replace(/20(\d\d)$/, '$1') : report.title;

  // Filter out current report for Related Posts list
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
                {/* Book ambient drop shadow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-70" />
                
                <div className="relative aspect-[1/1.38] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
                  <img
                    src={report.cover}
                    alt={report.title}
                    className="w-full h-full object-cover select-none"
                  />
                  {/* Subtle glossy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. MAIN CONTENT AREA: FLIPBOOK VIEWER + RELATED POSTS SIDEBAR
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ── Left Column (8 Cols): Realistic Book-turn Flipbook Viewer ── */}
          <div className="lg:col-span-8">
            <div 
              ref={viewerContainerRef}
              className="relative bg-[#68696b] rounded-2xl shadow-xl overflow-hidden flex flex-col border border-gray-300 min-h-[580px] sm:min-h-[720px]"
            >
              
              {/* Viewer Top Toolbar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#4a4c4e] text-white text-xs shrink-0 select-none border-b border-gray-600">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-emerald-300" />
                  <span className="font-bold tracking-wide">
                    Page {currentPageNum} of {totalPages || '...'}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Audio page turn sound toggle */}
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-gray-200 transition-colors cursor-pointer"
                    title={soundEnabled ? 'Mute page sound' : 'Enable page sound'}
                  >
                    {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
                  </button>

                  {/* Fullscreen toggle */}
                  <button
                    onClick={toggleFullscreen}
                    className="p-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-gray-200 transition-colors cursor-pointer hidden sm:block"
                    title="Toggle Fullscreen"
                  >
                    {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                  </button>

                  {/* PDF Download */}
                  {report.pdfUrl && (
                    <a
                      href={report.pdfUrl}
                      download
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-bold transition-all shadow-xs cursor-pointer text-xs"
                      title="Download original PDF"
                    >
                      <Download size={13} />
                      <span className="hidden sm:inline">Download PDF</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Central Realistic 3D Flipping Book Stage */}
              <div 
                className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden bg-[#5a5c5e]"
                style={{ perspective: '2000px' }}
              >
                {/* Left Navigation Arrow */}
                <button
                  onClick={turnPrev}
                  disabled={currentPageNum <= 1 || isFlipping}
                  className={`absolute left-3 sm:left-6 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/60 hover:bg-rlhp-green text-white border border-white/20 transition-all shadow-2xl cursor-pointer ${
                    currentPageNum <= 1 ? 'opacity-20 cursor-not-allowed pointer-events-none' : 'hover:scale-110 active:scale-95'
                  }`}
                  title="Previous Page (Left Arrow)"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Loading indicator */}
                {loading && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/50 backdrop-blur-xs gap-3 text-white">
                    <Loader2 size={36} className="animate-spin text-emerald-400" />
                    <p className="text-xs font-semibold tracking-wide">Loading report pages...</p>
                  </div>
                )}

                {/* Realistic 3D Turned Book Page */}
                <div 
                  className={`relative max-w-full max-h-[82vh] bg-white rounded-r-xl rounded-l-xs shadow-[0_20px_50px_rgba(0,0,0,0.65)] overflow-hidden transition-all duration-300 ${
                    isFlipping
                      ? flipDirection === 'next'
                        ? 'rotate-y-[-30deg] scale-[0.98] origin-left brightness-90 shadow-2xl'
                        : 'rotate-y-[30deg] scale-[0.98] origin-right brightness-90 shadow-2xl'
                      : 'rotate-y-0 scale-100 origin-center brightness-100'
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Book Spine Shadow Left */}
                  <div className="absolute top-0 bottom-0 left-0 w-6 pointer-events-none z-10 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
                  <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-white/40 z-10" />

                  {/* Canvas for rendered PDF Page */}
                  <canvas 
                    ref={canvasRef} 
                    className="block w-auto max-w-full max-h-[75vh] object-contain select-none bg-white" 
                  />

                  {/* Fallback image if PDF cannot render */}
                  {!loading && !pdfDoc && (
                    <img 
                      src={report.cover} 
                      alt={report.title} 
                      className="max-h-[75vh] w-auto object-contain" 
                    />
                  )}

                  {/* Gentle page curl shadow bottom right */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none bg-gradient-to-tl from-black/20 via-transparent to-transparent" />
                </div>

                {/* Right Navigation Arrow */}
                <button
                  onClick={turnNext}
                  disabled={currentPageNum >= totalPages || isFlipping}
                  className={`absolute right-3 sm:right-6 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/60 hover:bg-rlhp-green text-white border border-white/20 transition-all shadow-2xl cursor-pointer ${
                    currentPageNum >= totalPages ? 'opacity-20 cursor-not-allowed pointer-events-none' : 'hover:scale-110 active:scale-95'
                  }`}
                  title="Next Page (Right Arrow)"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Bottom Quick Page Scrubber */}
              <div className="px-4 sm:px-6 py-3 bg-[#3f4143] text-gray-300 text-xs flex flex-wrap items-center justify-between gap-3 border-t border-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-semibold text-gray-200">
                    Use arrows or click on side to turn pages like a book
                  </span>
                </div>

                {/* Page Indicator and Slider */}
                {totalPages > 1 && (
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min={1}
                      max={totalPages}
                      value={currentPageNum}
                      onChange={(e) => {
                        const target = parseInt(e.target.value, 10);
                        if (!isNaN(target)) {
                          playPageSound();
                          setCurrentPageNum(target);
                        }
                      }}
                      className="w-28 sm:w-40 accent-emerald-500 cursor-pointer h-1.5 bg-gray-600 rounded-lg"
                    />
                    <span className="text-[11px] font-bold text-white min-w-[50px] text-right">
                      {currentPageNum} / {totalPages}
                    </span>
                  </div>
                )}
              </div>

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

