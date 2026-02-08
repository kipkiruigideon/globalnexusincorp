'use client';

import { useEffect, useState } from 'react';

export default function PageLoading() {
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Start fade out after content loads
    const timer = setTimeout(() => {
      setIsActive(false);
      // Remove from DOM after animation completes
      setTimeout(() => {
        setIsVisible(false);
      }, 600);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-all duration-600 ease-out ${
        isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{
        background: 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.12) 0%, rgba(15, 23, 42, 0.98) 50%, rgba(15, 23, 42, 1) 100%)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-400 ease-out ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center relative">
          {/* Floating Particles */}
          <div className="absolute w-[300px] h-[300px] pointer-events-none">
            <div className="absolute w-1 h-1 bg-gradient-to-br from-[#0ea5e9] to-[#4f46e5] rounded-full opacity-60 top-[20%] left-[20%] animate-[floatParticle_4s_ease-in-out_infinite]" />
            <div className="absolute w-1 h-1 bg-gradient-to-br from-[#0ea5e9] to-[#4f46e5] rounded-full opacity-60 top-[80%] left-[80%] animate-[floatParticle_4s_ease-in-out_infinite_0.5s]" />
            <div className="absolute w-1 h-1 bg-gradient-to-br from-[#0ea5e9] to-[#4f46e5] rounded-full opacity-60 top-[60%] left-[20%] animate-[floatParticle_4s_ease-in-out_infinite_1s]" />
            <div className="absolute w-1 h-1 bg-gradient-to-br from-[#0ea5e9] to-[#4f46e5] rounded-full opacity-60 top-[30%] left-[70%] animate-[floatParticle_4s_ease-in-out_infinite_1.5s]" />
            <div className="absolute w-1 h-1 bg-gradient-to-br from-[#0ea5e9] to-[#4f46e5] rounded-full opacity-60 top-[70%] left-[30%] animate-[floatParticle_4s_ease-in-out_infinite_2s]" />
            <div className="absolute w-1 h-1 bg-gradient-to-br from-[#0ea5e9] to-[#4f46e5] rounded-full opacity-60 top-[10%] left-[60%] animate-[floatParticle_4s_ease-in-out_infinite_2.5s]" />
          </div>

          {/* Loading Animation */}
          <div className="relative w-[120px] h-[120px] mb-8 drop-shadow-[0_0_20px_rgba(14,165,233,0.2)]">
            {/* Outer orbit ring */}
            <div 
              className="absolute inset-0 rounded-full border-2 border-[rgba(14,165,233,0.2)] animate-[rotateOrbit_2s_linear_infinite]"
              style={{
                borderTopColor: '#0ea5e9',
                borderRightColor: 'rgba(14, 165, 233, 0.3)',
              }}
            />
            
            {/* Middle orbit ring */}
            <div 
              className="absolute rounded-full border-2 border-[rgba(14,165,233,0.2)] animate-[rotateOrbit_2.5s_linear_infinite_reverse]"
              style={{
                width: '80%',
                height: '80%',
                top: '10%',
                left: '10%',
                borderBottomColor: '#0ea5e9',
                borderLeftColor: 'rgba(14, 165, 233, 0.3)',
              }}
            />
            
            {/* Inner orbit ring */}
            <div 
              className="absolute rounded-full border-2 border-[rgba(14,165,233,0.2)] animate-[rotateOrbit_3s_linear_infinite]"
              style={{
                width: '60%',
                height: '60%',
                top: '20%',
                left: '20%',
                borderTopColor: '#0ea5e9',
                borderRightColor: 'rgba(14, 165, 233, 0.3)',
              }}
            />
            
            {/* Inner spinning circles */}
            <div 
              className="absolute w-[15px] h-[15px] rounded-full bg-[#0ea5e9] shadow-[0_0_10px_rgba(14,165,233,0.6)] animate-[spinInner_2s_cubic-bezier(0.5,0,0.5,1)_infinite]"
              style={{
                top: '50%',
                left: '50%',
                marginTop: '-7.5px',
                marginLeft: '-7.5px',
              }}
            />
            
            {/* Glowing core */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full animate-[coreGlow_2s_ease-in-out_infinite]"
              style={{
                background: 'linear-gradient(45deg, #0ea5e9, #4f46e5)',
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(14, 165, 233, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.3)',
              }}
            />
          </div>
          
          {/* Text */}
          <div 
            className="font-bold tracking-[0.1em] text-lg animate-[textShimmer_3s_linear_infinite]"
            style={{
              background: 'linear-gradient(90deg, #0ea5e9, #0ea5e9, #4f46e5, #0ea5e9, #0ea5e9)',
              backgroundSize: '300% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Global Nexus Inc
          </div>
          
          {/* Subtitle */}
          <div className="text-xs text-gray-400 font-medium mt-2 tracking-wider animate-[subtitleFade_2s_ease-in-out_infinite]">
            Secure Banking Platform
          </div>
          
          {/* Progress bar */}
          <div className="w-[200px] h-0.5 bg-gray-700 rounded-full mt-6 overflow-hidden relative">
            <div 
              className="absolute inset-0 animate-[progressSlide_2s_ease-in-out_infinite]"
              style={{
                background: 'linear-gradient(90deg, transparent, #0ea5e9, transparent)',
                left: '-100%',
              }}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-20px); opacity: 1; }
        }
        
        @keyframes rotateOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes spinInner {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes coreGlow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
        }
        
        @keyframes textShimmer {
          0% { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        
        @keyframes subtitleFade {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes progressSlide {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}
