
import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1310] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
           <Logo size="sm" className="mb-4" />
           <p className="mt-4 text-sm leading-relaxed text-gray-400 italic">
             Bringing divine elegance to every home. SRIVATSA is not just a brand, but a legacy of Telugu craftsmanship.
           </p>
        </div>

        <div>
          <h4 className="text-white font-serif-cinzel mb-6 tracking-widest text-lg">QUICK LINKS</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Bulk Orders</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif-cinzel mb-6 tracking-widest text-lg">COLLECTIONS</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Bridal Weaves</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Daily Elegance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Festival Special</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gifting Studio</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif-cinzel mb-6 tracking-widest text-lg">BOUTIQUE</h4>
          <p className="text-sm text-gray-400 mb-4">
            Banjara Hills, Road No. 12<br />
            Hyderabad, TS 500034
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Jubilee Hills, Opp. Metro<br />
            Hyderabad, TS 500033
          </p>
          <div className="flex justify-center md:justify-start gap-4">
             {/* Simple Social Icons placeholders */}
             <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-900 transition-colors cursor-pointer">f</div>
             <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-900 transition-colors cursor-pointer">ig</div>
             <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-900 transition-colors cursor-pointer">yt</div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 border-t border-gray-800 pt-8 text-center text-[10px] tracking-widest text-gray-500 uppercase px-4">
        &copy; {new Date().getFullYear()} SRIVATSA SAREES PRIVATE LIMITED. PRATHI INTLO UNDALSINDHE! ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};
