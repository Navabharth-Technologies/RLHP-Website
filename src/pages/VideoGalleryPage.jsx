import React, { useState } from 'react';
import { videoGalleryData, orgDetails } from '../data/rlhpData';
import { Play, Video, Film, Download, FileText, ExternalLink, CheckCircle, Youtube } from 'lucide-react';
import { downloadPDFDocument } from '../utils/fileDownloader';
import ResourcesMediaHub from '../components/ResourcesMediaHub';
import GlobalSearchBar from '../components/GlobalSearchBar';

export default function VideoGalleryPage({ onSelectMedia, setCurrentPage, onNavClick, onSelectNews }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [downloadingId, setDownloadingId] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState('');

  const categories = [
    'All', 
    'Child Development', 
    'Women Empowerment', 
    'Health & Sanitation', 
    'Child Protection', 
    'Youth Empowerment', 
    'Education & IEP', 
    'Organization Overview'
  ];

  const filteredVideos = videoGalleryData.filter(v => activeCategory === 'All' || v.category === activeCategory);

  const handleDownloadDoc = async (video) => {
    setDownloadingId(video.id);
    setDownloadSuccess(`Generating PDF transcript for "${video.title}"...`);

    await downloadPDFDocument({
      title: video.title,
      category: video.category,
      date: video.year,
      location: 'Mysuru, Karnataka, India',
      content: `Official Video Gallery Document from Rural Literacy & Health Programme (RLHP), Mysuru.\n\nVideo Title: ${video.title}\nCategory: ${video.category}\nPublication Year: ${video.year}\nDuration: ${video.duration}\nYouTube Link: https://www.youtube.com/watch?v=${video.youtubeId}\n\nDescription:\n${video.description}\n\nThis video documents the ground-level social development interventions, community empowerment drives, and rights advocacy led by RLHP across Karnataka since 1983.`,
      image: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
    });

    setDownloadingId(null);
    setDownloadSuccess(`Downloaded "${video.title}.pdf" successfully!`);
    setTimeout(() => setDownloadSuccess(''), 4000);
  };

  return (
    <div className="space-y-12 font-sans pb-16">
      {/* Hero Header */}
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rlhp-darkgreen via-emerald-900 to-rlhp-darkgreen opacity-90" />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-rlhp-green/30 border border-rlhp-lightgreen/30 px-3.5 py-1 rounded-full text-rlhp-lightgreen text-xs font-semibold">
            <Film size={14} />
            <span>17 Original Official Field Operations Videos</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">RLHP Official Video Gallery</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-2xl mx-auto font-medium leading-relaxed">
            Watch ground-level video documentations capturing 42+ years of child protection, AshaKirana shelters, women sanghas, health camps, and community empowerment in Mysuru & Karnataka.
          </p>
          <div className="pt-2">
            <a
              href={orgDetails.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer hover:scale-105"
            >
              <Youtube size={16} />
              <span>Visit RLHP Official YouTube Channel</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Static Resources & Media Hub */}
        <ResourcesMediaHub activePage="video-gallery" onNavClick={onNavClick} setCurrentPage={setCurrentPage} />

        {/* Global Search */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
          <GlobalSearchBar
            onNavClick={onNavClick}
            setCurrentPage={setCurrentPage}
            onSelectNews={onSelectNews}
            className="w-full sm:w-96"
          />
        </div>

        {downloadSuccess && (
          <div className="p-3.5 bg-green-100 border border-green-300 text-green-800 rounded-xl text-xs flex items-center space-x-2 animate-in fade-in">
            <CheckCircle size={16} />
            <span>{downloadSuccess}</span>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => {
            const count = cat === 'All' ? videoGalleryData.length : videoGalleryData.filter(v => v.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-rlhp-green text-white shadow-md shadow-rlhp-green/20' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div 
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-xl hover:border-rlhp-green/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* YouTube Thumbnail Preview */}
                <div 
                  onClick={() => onSelectMedia(video)}
                  className="h-52 relative overflow-hidden bg-black cursor-pointer group/thumb"
                >
                  <img 
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover/thumb:scale-108 transition-transform duration-500 opacity-90 group-hover/thumb:opacity-100" 
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category & Duration Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-rlhp-orange bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      {video.category}
                    </span>
                    <span className="text-[10px] font-extrabold text-white bg-black/70 backdrop-blur-md px-2 py-0.5 rounded">
                      {video.duration}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-rlhp-green/90 hover:bg-rlhp-green text-white flex items-center justify-center shadow-xl group-hover/thumb:scale-115 transition-transform border-2 border-white/30">
                    <Play size={28} className="ml-1 fill-white" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="px-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>Year: {video.year}</span>
                    <span className="text-rlhp-green font-semibold">Official RLHP Video</span>
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 leading-snug line-clamp-2">{video.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{video.description}</p>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="p-5 pt-3 border-t border-gray-100 flex items-center gap-2 mt-4">
                <button
                  onClick={() => onSelectMedia(video)}
                  className="flex-1 bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-bold text-xs py-2.5 rounded-xl shadow-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Play size={14} className="fill-white" />
                  <span>Watch Video</span>
                </button>

                <button
                  onClick={() => handleDownloadDoc(video)}
                  disabled={downloadingId === video.id}
                  className="px-3 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold text-xs transition-colors flex items-center justify-center space-x-1 cursor-pointer"
                  title="Download Document PDF"
                >
                  <FileText size={14} className="text-rlhp-green" />
                  <span>PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
