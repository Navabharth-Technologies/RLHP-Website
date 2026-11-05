import React from 'react';
import { X, Quote, MapPin, CheckCircle, Tag } from 'lucide-react';

export default function CaseStudyModal({ story, onClose }) {
  if (!story) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full my-8 relative border border-gray-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-rlhp-darkgreen via-[#0a5238] to-rlhp-green text-white p-6 sm:p-7 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors cursor-pointer"
            title="Close"
          >
            <X size={20} />
          </button>

          <div className="flex items-center space-x-2 text-rlhp-orange text-xs font-bold uppercase tracking-wider mb-2">
            <Tag size={13} />
            <span>Case Study & Life Transformation</span>
            {story.programme && (
              <>
                <span className="text-white/40">•</span>
                <span className="text-emerald-200">{story.programme}</span>
              </>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white pr-10">
            {story.name ? `Story of ${story.name}` : story.title}
          </h2>
          
          {(story.role || story.location) && (
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-200 mt-2 font-medium">
              <MapPin size={14} className="text-rlhp-orange" />
              <span>{story.role || story.location}</span>
            </div>
          )}
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Story Grid with Photo & Key Quote */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {story.image && (
              <div className="w-full sm:w-56 shrink-0 rounded-2xl overflow-hidden shadow-md border-2 border-rlhp-green/30 bg-gray-50 flex items-center justify-center">
                <img 
                  src={story.image.startsWith('/') ? `${import.meta.env.BASE_URL}${story.image.slice(1)}` : story.image}
                  alt={story.name || story.title}
                  className="w-full h-64 sm:h-72 object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            <div className="space-y-4 flex-1">
              <div className="bg-rlhp-lightgreen/40 border-l-4 border-rlhp-green p-4 rounded-r-2xl">
                <Quote size={20} className="text-rlhp-green mb-1" />
                <p className="text-xs sm:text-sm text-gray-800 italic font-medium leading-relaxed">
                  {story.quote || story.summary}
                </p>
                <div className="mt-2 text-right text-xs font-extrabold text-rlhp-darkgreen">
                  — {story.name || story.author}
                </div>
              </div>

              {story.tag && (
                <div className="inline-flex items-center gap-1.5 bg-orange-100 text-rlhp-darkorange text-xs font-bold px-3 py-1 rounded-full">
                  <CheckCircle size={13} />
                  <span>{story.tag}</span>
                </div>
              )}
            </div>
          </div>

          {/* Full Narrative Text */}
          {story.fullStory && (
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-rlhp-darkgreen">
                The Complete Journey
              </h4>
              <div className="text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-3 font-normal">
                {story.fullStory}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between items-center shrink-0">
          <span className="text-xs text-gray-500 font-medium">Rural Literacy & Health Programme (RLHP)</span>
          <button
            onClick={onClose}
            className="bg-rlhp-green hover:bg-rlhp-darkgreen text-white text-xs font-bold px-5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
}

