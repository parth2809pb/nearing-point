import React, { useEffect, useState } from "react";

export const NeonOrbs: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-gray-50 dark:bg-nearing-black transition-colors duration-500 z-0">
      {/* Top-left orb */}
      <div
        className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          } sm:top-[-40%] sm:left-[-20%] top-[-10%] left-[-10%]`}
        style={{
          width: "80vw",
          height: "80vw",
          maxWidth: "800px",
          maxHeight: "800px",
        }}
      >
        <div className="w-full h-full rounded-full relative orb-light transition-all duration-500">
          <div className="beam-container beam-spin-8">
            <div className="beam-light" />
          </div>
        </div>
      </div>

      {/* Bottom-center orb */}
      <div
        className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } sm:bottom-[-50%] bottom-[-20%] left-1/2 -translate-x-1/2`}
        style={{
          width: "100vw",
          height: "100vw",
          maxWidth: "1000px",
          maxHeight: "1000px",
        }}
      >
        <div className="w-full h-full rounded-full relative orb-light transition-all duration-500">
          <div className="beam-container beam-spin-10-reverse">
            <div className="beam-light" />
          </div>
        </div>
      </div>

      {/* Top-right orb */}
      <div
        className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] delay-500 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } sm:top-[-30%] sm:right-[-25%] top-[-10%] right-[-10%]`}
        style={{
          width: "70vw",
          height: "70vw",
          maxWidth: "700px",
          maxHeight: "700px",
        }}
      >
        <div className="w-full h-full rounded-full relative orb-light transition-all duration-500">
          <div className="beam-container beam-spin-6">
            <div className="beam-light" />
          </div>
        </div>
      </div>

      {/* Bottom-right orb */}
      <div
        className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } sm:bottom-[-35%] sm:right-[-15%] bottom-[-10%] right-[-5%]`}
        style={{
          width: "75vw",
          height: "75vw",
          maxWidth: "750px",
          maxHeight: "750px",
        }}
      >
        <div className="w-full h-full rounded-full relative orb-light transition-all duration-500">
          <div className="beam-container beam-spin-7-reverse">
            <div className="beam-light" />
          </div>
        </div>
      </div>

      <style>{`
        .beam-container {
          position: absolute;
          inset: -1px; /* Tighter fit */
          border-radius: 50%;
          will-change: transform;
        }
        
        .beam-light {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          
          /* Create the gradient arc */
          background: conic-gradient(
            from 0deg,
            transparent 0%, 
            transparent 85%, 
            rgba(99, 102, 241, 0.2) 90%,
            rgba(129, 140, 248, 1) 100%
          );
          
          /* Mask to create the ring shape */
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 3px),
            black calc(100% - 3px)
          );
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 3px),
            black calc(100% - 3px)
          );
          
          /* Glow */
          filter: drop-shadow(0 0 4px rgba(99, 102, 241, 0.6));
          
          /* Ensure rotation center is correct */
          transform: rotate(90deg); /* Adjust start position if needed */
        }
        
        .dark .beam-light {
          background: conic-gradient(
            from 0deg,
            transparent 0%, 
            transparent 85%, 
            rgba(59, 130, 246, 0.2) 90%,
            rgba(150, 200, 255, 1) 100%
          );
          filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.6));
        }
        
        .orb-light {
          background: radial-gradient(circle at 50% 50%, #f0f4ff 0%, #f0f4ff 90%, transparent 100%);
          box-shadow: 
            0 0 60px 2px rgba(99, 102, 241, 0.3),
            0 0 100px 5px rgba(99, 102, 241, 0.15),
            inset 0 0 60px 2px rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.4);
        }
        
        .dark .orb-light {
          background: radial-gradient(circle at 50% 50%, #050a18 0%, #050a18 90%, transparent 100%);
          box-shadow: 
            0 0 60px 2px rgba(59, 130, 246, 0.4),
            0 0 100px 5px rgba(59, 130, 246, 0.2),
            inset 0 0 60px 2px rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(100, 180, 255, 0.3);
        }
        
        .beam-spin-6 {
          animation: spin 6s linear infinite;
        }
        
        .beam-spin-7-reverse {
          animation: spin-reverse 7s linear infinite;
        }
        
        .beam-spin-8 {
          animation: spin 8s linear infinite;
        }
        
        .beam-spin-10-reverse {
          animation: spin-reverse 10s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  )
};