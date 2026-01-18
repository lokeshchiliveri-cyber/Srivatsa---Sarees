
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
  showTagline?: boolean;
  showAccents?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  id = 'srivatsa-logo', 
  showTagline = false,
  showAccents = true
}) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-8xl'
  };

  const vatsaSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const containerPadding = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-4',
    xl: 'p-6'
  };

  return (
    <div id={id} className={`flex flex-col items-center justify-center text-center bg-transparent ${className} ${containerPadding[size]}`}>
      {/* Top area left free as requested */}
      
      <div className="flex flex-row items-baseline gap-3">
        {/* "Sri" in Telugu - Kumkum Red */}
        <span 
          className={`font-telugu kumkum-red ${sizeClasses[size]} leading-none`}
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
        >
          శ్రీ
        </span>
        
        {/* "VATSA" in English - Animated Silk Gold */}
        <span 
          className={`font-serif-cinzel font-bold tracking-[0.25em] animated-silk-gold ${vatsaSizes[size]} leading-none uppercase`}
        >
          VATSA
        </span>
      </div>

      {/* Brand Subtitle */}
      <div className={`mt-2 font-serif-playfair italic gold-gradient tracking-[0.4em] ${size === 'xl' ? 'text-2xl' : 'text-xs'} transition-all duration-700`}>
        SAREES
      </div>

      {/* Tagline - Conditionally rendered */}
      {showTagline && (
        <div className={`mt-6 border-t border-yellow-200/50 pt-3 px-6 font-serif-playfair text-[#5c4033] tracking-[0.15em] ${size === 'xl' ? 'text-xl' : 'text-[10px] uppercase italic'}`}>
          Prathi intlo undalsindhe!
        </div>
      )}
      
      {/* Minimal Decorative Bottom Accents - Conditionally rendered */}
      {showAccents && (
        <div className="flex items-center gap-1.5 mt-4">
          <div className="w-1 h-1 rounded-full bg-yellow-600/40"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-600"></div>
          <div className="w-1 h-1 rounded-full bg-yellow-600/40"></div>
        </div>
      )}
    </div>
  );
};
