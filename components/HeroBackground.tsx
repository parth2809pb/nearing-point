import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-gray-50 dark:bg-nearing-black transition-colors duration-300">
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20"></div>
      
      {/* Abstract gradients - Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-300/30 dark:bg-blue-900/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-indigo-300/30 dark:bg-blue-800/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute -bottom-32 left-1/3 w-[40%] h-[40%] bg-sky-200/30 dark:bg-nearing-accent/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen"></div>
      </div>
      
      {/* Floating abstract elements - Tech lines */}
      <svg className="absolute top-1/4 right-1/4 w-64 h-64 text-nearing-accent opacity-10 dark:opacity-5 animate-pulse" viewBox="0 0 100 100">
         <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
         <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
         <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="animate-[spin_10s_linear_infinite]" />
      </svg>

      <svg className="absolute bottom-1/4 left-10 w-96 h-96 text-nearing-blue opacity-5 dark:opacity-5" viewBox="0 0 200 200">
         <path d="M0 100 Q 50 0 100 100 T 200 100" fill="none" stroke="currentColor" strokeWidth="1" />
         <path d="M0 120 Q 50 20 100 120 T 200 120" fill="none" stroke="currentColor" strokeWidth="1" />
         <path d="M0 140 Q 50 40 100 140 T 200 140" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default HeroBackground;