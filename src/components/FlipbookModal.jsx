import React, { useState, useEffect, useRef } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Loader2, Download, Maximize2, Minimize2
} from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';

if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.js`;
}

export default function FlipbookModal({ report, onClose }) {
  if (!report) return null;

  const [pdfDoc, setPdfDoc] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');
  const [renderedPages, setRenderedPages] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Audio page turn sound
  const playPageSound = () => {
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
      // Audio unavailable
    }
  };

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setRenderedPages([]);
    setCurrentPage(1);

    const loadPdf = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(report.pdfUrl);
        const doc = await loadingTask.promise;
        if (isCancelled) return;

        setPdfDoc(doc);
        const count = doc.numPages;
        setTotalPages(count);

        const pages = [];
        for (let i = 1; i <= count; i++) {
          if (isCancelled) return;
          const page = await doc.getPage(i);
          const viewport = page.getViewport({ scale: 2.2 });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const context = canvas.getContext('2d', { alpha: false });
          await page.render({ canvasContext: context, viewport }).promise;
          pages.push(canvas.toDataURL('image/jpeg', 0.95));
        }

        if (!isCancelled) {
          setRenderedPages(pages);
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to load PDF in FlipbookModal:', err);
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

  // Turn page handlers
  const handleNext = () => {
    if (isFlipping) return;
    if (currentPage === 1) {
      triggerFlip('next', 2);
    } else if (currentPage + 2 <= totalPages) {
      triggerFlip('next', currentPage + 2);
    } else if (currentPage + 1 <= totalPages) {
      triggerFlip('next', currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (isFlipping) return;
    if (currentPage <= 3) {
      triggerFlip('prev', 1);
    } else {
      triggerFlip('prev', Math.max(1, currentPage - 2));
    }
  };

  const triggerFlip = (dir, targetPage) => {
    setFlipDirection(dir);
    setIsFlipping(true);
    playPageSound();

    setTimeout(() => {
      setCurrentPage(targetPage);
      setIsFlipping(false);
    }, 380);
  };

  // Keyboard and Esc listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') handleNext();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, currentPage, totalPages, isFlipping]);

  const isCover = currentPage === 1;
  const leftPageIdx = currentPage % 2 === 0 ? currentPage : currentPage - 1;
  const rightPageIdx = leftPageIdx + 1;

  const leftData = renderedPages[leftPageIdx - 1];
  const rightData = renderedPages[rightPageIdx - 1];

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center select-none animate-fadeIn ${
        isFullscreen ? 'p-0 bg-[#505254]' : 'p-3 sm:p-8 bg-black/85 backdrop-blur-md'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget && !isFullscreen) onClose();
      }}
    >
      <div 
        className={`relative w-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
          isFullscreen 
            ? 'w-screen h-screen rounded-none bg-[#505254] border-0 max-w-none max-h-none' 
            : 'max-w-6xl h-[92vh] max-h-[880px] bg-[#3a3b3d] rounded-3xl shadow-2xl border border-white/10'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Actions: Fullscreen Toggle and Close */}
        <div className="absolute top-5 right-6 z-50 flex items-center gap-3">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/60 hover:bg-black/90 text-white font-bold text-xs sm:text-sm shadow-xl backdrop-blur-md cursor-pointer transition-all border border-white/20 hover:scale-105"
            title={isFullscreen ? "Exit Fullscreen" : "Full Screen"}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            <span className="hidden sm:inline">{isFullscreen ? 'Exit Fullscreen' : 'Full Screen'}</span>
          </button>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 hover:bg-black/90 text-white font-bold text-xs sm:text-sm shadow-2xl backdrop-blur-md cursor-pointer transition-all border border-white/20 hover:scale-105"
            title="Close (Esc)"
          >
            <X size={20} />
            <span>Close (Esc)</span>
          </button>
        </div>

        {/* Left Navigation Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentPage <= 1 || isFlipping}
          className={`absolute left-3 sm:left-6 z-40 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-black/75 hover:bg-black text-white border-2 border-white/40 hover:border-white transition-all shadow-2xl cursor-pointer ${
            currentPage <= 1 ? 'opacity-20 cursor-not-allowed pointer-events-none' : 'hover:scale-110 active:scale-95'
          }`}
          title="Turn to Previous Page"
        >
          <ChevronLeft size={34} />
        </button>

        {/* Loading Indicator */}
        {loading && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xs gap-3 text-white">
            <Loader2 size={42} className="animate-spin text-emerald-400" />
            <p className="text-xs font-semibold tracking-wide">
              Loading High-Clarity Pages...
            </p>
          </div>
        )}

        {/* Realistic Book Stage */}
        <div 
          className={`w-full flex items-center justify-center overflow-hidden p-4 sm:p-8 ${
            isFullscreen ? 'max-w-[1300px] h-[92vh]' : ''
          }`}
          style={{ perspective: '2200px' }}
        >
          {isCover ? (
            /* Single Front Cover Page 1 */
            <div
              onClick={handleNext}
              className={`relative w-full aspect-[1/1.38] rounded-r-2xl rounded-l-md shadow-[0_30px_70px_rgba(0,0,0,0.85)] bg-white overflow-hidden border border-black/20 cursor-pointer transition-all duration-400 ${
                isFullscreen ? 'max-w-[540px] max-h-[86vh]' : 'max-w-[460px]'
              } ${
                isFlipping
                  ? 'flip-page-right-turning'
                  : 'scale-100 origin-center brightness-100 hover:scale-[1.02]'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
              title="Click to Open Document"
            >
              <div className="absolute top-0 bottom-0 left-0 w-8 pointer-events-none z-10 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
              {renderedPages[0] && (
                <img 
                  src={renderedPages[0]} 
                  alt="Page 1" 
                  className="w-full h-full object-contain block bg-white" 
                />
              )}
            </div>
          ) : (
            /* Open Two-Page Spread */
            <div 
              className={`relative w-full flex items-center justify-center rounded-2xl shadow-[0_35px_80px_rgba(0,0,0,0.95)] overflow-hidden border border-black/30 ${
                isFullscreen ? 'max-w-[1240px] max-h-[88vh]' : 'max-w-5xl'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Left Page */}
              <div
                onClick={handlePrev}
                className={`relative flex-1 aspect-[1/1.38] bg-white overflow-hidden border-r border-gray-300 origin-right transition-all duration-400 cursor-pointer ${
                  isFlipping && flipDirection === 'prev'
                    ? 'flip-page-left-turning'
                    : 'brightness-100'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
                title="Click Left to Flip Back"
              >
                {leftData && (
                  <img src={leftData} alt="Left Page" className="w-full h-full object-contain block bg-white" />
                )}
                <div className="absolute top-0 bottom-0 right-0 w-10 pointer-events-none bg-gradient-to-l from-black/35 via-black/10 to-transparent" />
              </div>

              {/* Center Spine */}
              <div className="w-[4px] h-full bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-700 z-20 shrink-0" />

              {/* Right Page */}
              <div
                onClick={handleNext}
                className={`relative flex-1 aspect-[1/1.38] bg-white overflow-hidden border-l border-gray-300 origin-left transition-all duration-400 cursor-pointer ${
                  isFlipping && flipDirection === 'next'
                    ? 'flip-page-right-turning'
                    : 'brightness-100'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
                title="Click Right to Flip Next"
              >
                {rightData && (
                  <img src={rightData} alt="Right Page" className="w-full h-full object-contain block bg-white" />
                )}
                <div className="absolute top-0 bottom-0 left-0 w-10 pointer-events-none bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
              </div>
            </div>
          )}
        </div>

        {/* Right Navigation Arrow */}
        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages || isFlipping}
          className={`absolute right-3 sm:right-6 z-40 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-black/75 hover:bg-black text-white border-2 border-white/40 hover:border-white transition-all shadow-2xl cursor-pointer ${
            currentPage >= totalPages ? 'opacity-20 cursor-not-allowed pointer-events-none' : 'hover:scale-110 active:scale-95'
          }`}
          title="Turn to Next Page"
        >
          <ChevronRight size={34} />
        </button>
      </div>
    </div>
  );
}
