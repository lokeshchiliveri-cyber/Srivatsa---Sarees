
import React, { useState } from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#fffaf0]/95 backdrop-blur-md border-b border-yellow-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Top Left: Clean version of the logo with no dots and no tagline */}
          <div className="flex-shrink-0 flex items-center">
             <Logo size="sm" showAccents={false} />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <a href="#" className="text-gray-800 hover:text-red-900 px-1 py-2 text-[11px] font-semibold tracking-[0.3em] transition-colors">COLLECTIONS</a>
              <a href="#" className="text-gray-800 hover:text-red-900 px-1 py-2 text-[11px] font-semibold tracking-[0.3em] transition-colors">HERITAGE</a>
              <a href="#" className="text-gray-800 hover:text-red-900 px-1 py-2 text-[11px] font-semibold tracking-[0.3em] transition-colors">BOUTIQUE</a>
              <a href="#" className="text-gray-800 hover:text-red-900 px-1 py-2 text-[11px] font-semibold tracking-[0.3em] transition-colors">ABOUT</a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-red-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fffaf0] border-b border-yellow-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2 text-center">
            <a href="#" className="block text-gray-800 hover:text-red-900 py-4 text-xs font-bold tracking-widest border-b border-orange-50/50 uppercase">COLLECTIONS</a>
            <a href="#" className="block text-gray-800 hover:text-red-900 py-4 text-xs font-bold tracking-widest border-b border-orange-50/50 uppercase">HERITAGE</a>
            <a href="#" className="block text-gray-800 hover:text-red-900 py-4 text-xs font-bold tracking-widest border-b border-orange-50/50 uppercase">BOUTIQUE</a>
            <a href="#" className="block text-gray-800 hover:text-red-900 py-4 text-xs font-bold tracking-widest uppercase">ABOUT</a>
          </div>
        </div>
      )}
    </nav>
  );
};
