
import React from 'react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with traditional pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="templePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="#8B0000" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#templePattern)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <div className="animate-float">
          <Logo size="xl" showTagline={true} />
        </div>
        
        <p className="mt-8 text-xl text-gray-700 font-serif-playfair max-w-2xl leading-relaxed italic">
          "Celebrating the sacred threads of tradition. From the looms of Gadwal to the hearts of every Telugu household."
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6">
          <button className="px-10 py-4 kumkum-bg text-white font-medium tracking-[0.2em] rounded-sm hover:bg-red-900 transition-all duration-300 shadow-xl">
            VIEW COLLECTIONS
          </button>
          <button className="px-10 py-4 border border-yellow-700 text-yellow-800 font-medium tracking-[0.2em] rounded-sm hover:bg-yellow-50 transition-all duration-300">
            OUR HERITAGE
          </button>
        </div>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center gap-4 w-full justify-center">
          <div className="h-[1px] bg-yellow-300 flex-grow max-w-[100px]"></div>
          <div className="w-3 h-3 rotate-45 border-2 border-yellow-600"></div>
          <div className="h-[1px] bg-yellow-300 flex-grow max-w-[100px]"></div>
        </div>
      </div>

      {/* Hero Image accents */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none translate-x-[-20%] translate-y-[20%]">
         <img src="https://picsum.photos/400/600?grayscale" alt="Traditional Loom" className="w-full h-full object-cover rounded-full" />
      </div>
    </div>
  );
};
