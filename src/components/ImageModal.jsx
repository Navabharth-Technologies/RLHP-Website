import React, { useRef, useEffect } from 'react';
import { X, Play } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';

export default function ImageModal({ item, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const isVideo = item.videoUrl || item.type?.toLowerCase().includes('video') || item.format?.toLowerCase().includes('video') || item.isVideo;

  const videoSources = [
    item.videoUrl,
    item.downloadUrl,
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  ].filter(Boolean);

  const targetVideoUrl = isVideo ? videoSources[0] : null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative max-w-5xl w-full max-h-[92vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating "Wrong" / Close (X) button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 sm:-right-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer shadow-xl z-20 backdrop-blur-xs"
          title="Close (Esc)"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {/* Media Frame (Enlarged Image / Video Only) */}
        <div className="overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center bg-black/50 border border-white/10 max-h-[88vh] max-w-full">
          {item.youtubeId ? (
            <div className="w-[85vw] max-w-4xl aspect-video bg-black flex items-center justify-center">
              <iframe 
                src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`} 
                title={item.title || "Video"}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : isVideo ? (
            <div className="max-w-4xl max-h-[85vh] bg-black flex items-center justify-center">
              <video 
                ref={videoRef}
                src={targetVideoUrl}
                controls 
                autoPlay
                playsInline
                poster={item.image || item.poster} 
                className="max-h-[85vh] w-auto max-w-full object-contain"
              />
            </div>
          ) : (item.image || item.remoteImage || item.downloadUrl || item.fileUrl) ? (
            <img 
              src={getImageUrl(item.image || item.remoteImage || item.downloadUrl || item.fileUrl)} 
              alt={item.title || "RLHP"} 
              className="max-h-[86vh] w-auto max-w-full object-contain block select-none" 
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
