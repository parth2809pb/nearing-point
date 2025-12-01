import React, { useEffect, useState } from "react";

export const NeonBeams: React.FC = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {/* Top-right Beam */}
            <div
                className={`absolute transition-all duration-1000 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                    } top-[-50%] right-[-20%] sm:top-[-60%] sm:right-[-10%]`}
                style={{
                    width: "80vw",
                    height: "80vw",
                    maxWidth: "800px",
                    maxHeight: "800px",
                }}
            >
                <div className="w-full h-full rounded-full relative transition-all duration-500">
                    <div className="beam-container beam-spin-slow">
                        <div className="beam-light-inner" />
                    </div>
                </div>
            </div>

            {/* Bottom-left Beam */}
            <div
                className={`absolute transition-all duration-1000 ease-out delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    } bottom-[-40%] left-[-20%] sm:bottom-[-50%] sm:left-[-10%]`}
                style={{
                    width: "70vw",
                    height: "70vw",
                    maxWidth: "700px",
                    maxHeight: "700px",
                }}
            >
                <div className="w-full h-full rounded-full relative transition-all duration-500">
                    <div className="beam-container beam-spin-reverse-slow">
                        <div className="beam-light-inner" />
                    </div>
                </div>
            </div>

            <style>{`
        .beam-container {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          will-change: transform;
        }
        
        .beam-light-inner {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          
          /* Create the gradient arc - slightly thinner/subtler than NeonOrbs */
          background: conic-gradient(
            from 0deg,
            transparent 0%, 
            transparent 70%, 
            rgba(99, 102, 241, 0.1) 80%,
            rgba(129, 140, 248, 0.6) 100%
          );
          
          /* Mask to create the ring shape */
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2px),
            black calc(100% - 2px)
          );
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2px),
            black calc(100% - 2px)
          );
          
          /* Glow */
          filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.4));
          
          transform: rotate(90deg);
        }
        
        .dark .beam-light-inner {
          background: conic-gradient(
            from 0deg,
            transparent 0%, 
            transparent 70%, 
            rgba(59, 130, 246, 0.1) 80%,
            rgba(150, 200, 255, 0.8) 100%
          );
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
        }
        
        .beam-spin-slow {
          animation: spin 15s linear infinite;
        }
        
        .beam-spin-reverse-slow {
          animation: spin-reverse 18s linear infinite;
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
