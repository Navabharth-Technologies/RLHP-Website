import React, { useState, useEffect, useRef } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Download, BookOpen, ZoomIn, ZoomOut, 
  RotateCw, Loader2, Sparkles, Volume2, VolumeX, Maximize2, Minimize2 
} from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';

// Configure pdfjs worker to use CDN or local bundle
if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
}

export default function FlipbookModal({ report, onClose }) {
  if (!report) return null;

  const [pdfDoc, setPdfDoc] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // 1-based page index (odd = right side or single cover)
  const [loading, setLoading] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);
  const singleCanvasRef = useRef(null);
  const modalContainerRef = useRef(null);

  // Play subtle page-turn swoosh sound using Web Audio API
  const playPageSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.15);
      
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch {
      // AudioContext unavailable or blocked
    }
  };

  // Load PDF Document
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    const loadPdf = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(report.pdfUrl || report.cover);
        const doc = await loadingTask.promise;
        if (!isCancelled) {
          setPdfDoc(doc);
          setTotalPages(doc.numPages);
          setCurrentPage(1);
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to load PDF in flipbook:', err);
        if (!isCancelled) setLoading(false);
      }
    };

    if (report.pdfUrl) {
      loadPdf();
    } else {
      setLoading(false);
    }

    return () => {
      isCancelled = true;
    };
  }, [report.pdfUrl]);

  // Helper to render a single PDF page into a canvas
  const renderPdfPage = async (pageNumber, canvas) => {
    if (!pdfDoc || !canvas || pageNumber < 1 || pageNumber > totalPages) return;
    try {
      const page = await pdfDoc.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1.5 });
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      await page.render(renderContext).promise;
    } catch (err) {
      console.warn(`Error rendering page ${pageNumber}:`, err);
    }
  };

  // Determine whether to show single page (Cover page 1, or mobile) or two-page spread (pages 2-3, 4-5...)
  const isCover = currentPage === 1;

  // Render pages when currentPage or pdfDoc changes
  useEffect(() => {
    if (!pdfDoc) return;

    if (isCover) {
      if (singleCanvasRef.current) {
        renderPdfPage(1, singleCanvasRef.current);
      }
    } else {
      // Left page is even, Right page is odd
      const leftPageNum = currentPage % 2 === 0 ? currentPage : currentPage - 1;
      const rightPageNum = leftPageNum + 1;

      if (leftCanvasRef.current) renderPdfPage(leftPageNum, leftCanvasRef.current);
      if (rightCanvasRef.current && rightPageNum <= totalPages) {
        renderPdfPage(rightPageNum, rightCanvasRef.current);
      }
    }
  }, [currentPage, pdfDoc, isCover, totalPages]);

  // Navigation handlers with 3D animation
  const handleNext = () => {
    if (isFlipping) return;
    if (isCover) {
      if (totalPages > 1) {
        triggerFlip('next', 2);
      }
    } else if (currentPage + 2 <= totalPages) {
      triggerFlip('next', currentPage + 2);
    } else if (currentPage + 1 <= totalPages) {
      triggerFlip('next', currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (isFlipping) return;
    if (currentPage === 2 || currentPage === 3) {
      triggerFlip('prev', 1);
    } else if (currentPage > 2) {
      triggerFlip('prev', Math.max(1, currentPage - 2));
    }
  };

  const triggerFlip = (direction, targetPage) => {
    setFlipDirection(direction);
    setIsFlipping(true);
    playPageSound();

    setTimeout(() => {
      setCurrentPage(targetPage);
      setIsFlipping(false);
    }, 450);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      modalContainerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md select-none animate-fadeIn">
      <div 
        ref={modalContainerRef}
        className="relative w-full max-w-6xl bg-[#141a15] border border-emerald-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white transition-all duration-300"
        style={{ height: '92vh', maxHeight: '860px' }}
      >
        {/* Header Toolbar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 bg-[#0f1410] border-b border-emerald-500/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rlhp-green/20 border border-rlhp-green/40 flex items-center justify-center text-rlhp-accent">
              <BookOpen size={19} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide truncate max-w-xs sm:max-w-md">
                {report.title}
              </h3>
              <p className="text-[11px] text-emerald-400/80">
                {isCover ? 'Cover Page' : `Pages ${currentPage % 2 === 0 ? currentPage : currentPage - 1} - ${Math.min(totalPages, (currentPage % 2 === 0 ? currentPage : currentPage - 1) + 1)}`} of {totalPages || '...'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors"
              title={soundEnabled ? 'Mute page turn sound' : 'Enable page turn sound'}
            >
              {soundEnabled ? <Volume2 size={17} /> : <VolumeX size={17} />}
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors hidden sm:block"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
            </button>

            {/* Download PDF */}
            {report.pdfUrl && (
              <a
                href={report.pdfUrl}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rlhp-green hover:bg-rlhp-accent text-white text-xs font-bold transition-all shadow-md hover:shadow-emerald-900/40"
                title="Download original PDF"
              >
                <Download size={14} /> <span className="hidden sm:inline">Download</span>
              </a>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/25 text-gray-300 hover:text-white transition-colors ml-1"
              aria-label="Close flipbook"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* 3D Realistic Book Viewing Area */}
        <div className="flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden bg-gradient-to-b from-[#111612] via-[#0b0e0c] to-[#080a08] relative">
          {/* Previous Page Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1 || isFlipping}
            className={`absolute left-2 sm:left-5 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-black/70 hover:bg-rlhp-green text-white border border-white/20 hover:border-rlhp-green transition-all shadow-2xl ${
              currentPage === 1 ? 'opacity-25 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
            }`}
            title="Turn to previous page"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Loading state indicator */}
          {loading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm gap-3">
              <Loader2 size={36} className="text-rlhp-accent animate-spin" />
              <p className="text-xs text-emerald-300 font-medium tracking-wide">
                Preparing Book Flip Experience...
              </p>
            </div>
          )}

          {/* Realistic 3D Book Turn Stage */}
          <div 
            className="relative w-full max-w-4xl h-full flex items-center justify-center"
            style={{ perspective: '2200px' }}
          >
            {isCover ? (
              /* Single Cover Book (Front or Back) */
              <div 
                className={`relative h-[88%] max-h-[640px] aspect-[1/1.38] rounded-r-2xl rounded-l-md shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-white overflow-hidden border border-emerald-950/40 transition-all duration-500 ${
                  isFlipping
                    ? 'rotate-y-[-35deg] scale-[0.97] origin-left brightness-90 shadow-2xl'
                    : 'rotate-y-0 scale-100 origin-center brightness-100'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Book Spine depth */}
                <div className="absolute top-0 bottom-0 left-0 w-8 pointer-events-none z-10 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-white/40 z-10" />

                {/* Render canvas for page 1 or fallback image */}
                {pdfDoc ? (
                  <canvas ref={singleCanvasRef} className="w-full h-full object-contain bg-white" />
                ) : (
                  <img src={report.cover} alt="Cover" className="w-full h-full object-cover" />
                )}

                {/* Subtle paper gloss */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
                <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none bg-gradient-to-tl from-black/20 to-transparent" />
              </div>
            ) : (
              /* Open Two-Page Spread Book */
              <div 
                className="relative h-[88%] max-h-[640px] w-full max-w-4xl flex items-center justify-center rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden border border-emerald-900/30"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Left Page (Even) */}
                <div 
                  className={`relative flex-1 h-full bg-white overflow-hidden border-r border-gray-300 origin-right transition-all duration-500 ${
                    isFlipping && flipDirection === 'prev'
                      ? 'rotate-y-[45deg] brightness-75 shadow-2xl'
                      : 'rotate-y-0 brightness-100'
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <canvas ref={leftCanvasRef} className="w-full h-full object-contain bg-white" />
                  {/* Left inner spine shadow */}
                  <div className="absolute top-0 bottom-0 right-0 w-8 pointer-events-none bg-gradient-to-l from-black/35 via-black/10 to-transparent" />
                  <div className="absolute top-0 bottom-0 left-0 w-3 pointer-events-none bg-gradient-to-r from-black/15 to-transparent" />
                </div>

                {/* Center Book Spine */}
                <div className="w-[3px] h-full bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-700 z-20 shadow-inner" />

                {/* Right Page (Odd) */}
                <div 
                  className={`relative flex-1 h-full bg-white overflow-hidden border-l border-gray-300 origin-left transition-all duration-500 ${
                    isFlipping && flipDirection === 'next'
                      ? 'rotate-y-[-45deg] brightness-75 shadow-2xl'
                      : 'rotate-y-0 brightness-100'
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <canvas ref={rightCanvasRef} className="w-full h-full object-contain bg-white" />
                  {/* Right inner spine shadow */}
                  <div className="absolute top-0 bottom-0 left-0 w-8 pointer-events-none bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
                  <div className="absolute top-0 bottom-0 right-0 w-3 pointer-events-none bg-gradient-to-l from-black/15 to-transparent" />
                  {/* Page corner curl hint */}
                  <div className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none bg-gradient-to-tl from-black/25 via-transparent to-transparent" />
                </div>
              </div>
            )}
          </div>

          {/* Next Page Button */}
          <button
            onClick={handleNext}
            disabled={currentPage >= totalPages || isFlipping}
            className={`absolute right-2 sm:right-5 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-black/70 hover:bg-rlhp-green text-white border border-white/20 hover:border-rlhp-green transition-all shadow-2xl ${
              currentPage >= totalPages ? 'opacity-25 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
            }`}
            title="Turn to next page"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Footer controls & page jumper */}
        <div className="px-5 sm:px-8 py-3 bg-[#0f1410] border-t border-emerald-500/20 flex flex-wrap items-center justify-between text-xs text-gray-300 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rlhp-green animate-pulse" />
            <span className="font-semibold text-white">Realistic 3D Book Flip Viewer</span>
          </div>

          {/* Quick Page Jump Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full sm:max-w-md py-1 px-1">
            <button
              onClick={() => triggerFlip('prev', 1)}
              className={`h-6 px-3 rounded-full text-[11px] font-bold transition-all ${
                currentPage === 1 ? 'bg-rlhp-green text-white shadow-md' : 'bg-white/5 hover:bg-white/15 text-gray-400'
              }`}
            >
              Cover
            </button>
            {Array.from({ length: Math.ceil((totalPages - 1) / 2) }).map((_, idx) => {
              const spreadStart = 2 + idx * 2;
              const spreadEnd = Math.min(totalPages, spreadStart + 1);
              const isActive = (currentPage === spreadStart || currentPage === spreadEnd) && currentPage !== 1;
              return (
                <button
                  key={idx}
                  onClick={() => triggerFlip(spreadStart > currentPage ? 'next' : 'prev', spreadStart)}
                  className={`h-6 px-2.5 rounded-full text-[11px] font-semibold transition-all ${
                    isActive ? 'bg-rlhp-green text-white shadow-md' : 'bg-white/5 hover:bg-white/15 text-gray-400'
                  }`}
                >
                  {spreadStart}-{spreadEnd}
                </button>
              );
            })}
          </div>

          <div className="text-[11px] text-gray-400 hidden md:block">
            Click arrows or page numbers to turn pages like a book
          </div>
        </div>
      </div>
    </div>
  );
}
