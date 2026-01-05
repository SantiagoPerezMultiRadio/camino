import React from 'react';

export function FuturisticBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-[#050505] -z-10">
      <style>{`
        @keyframes grid-movement {
          0% { background-position: 0 0; }
          100% { background-position: 0 50px; }
        }
        @keyframes warp-speed {
          0% { transform: translateZ(0) scale(1); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateZ(500px) scale(2); opacity: 0; }
        }
      `}</style>
      
     {/* Retro Sun */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-yellow-500/20 to-transparent blur-[100px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 opacity-40">
        {/* Grid lines - Floor */}
        <div className="absolute inset-0 bottom-[-50%]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(168, 85, 247, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(234, 179, 8, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top',
            animation: 'grid-movement 1s linear infinite'
          }}
        />
        {/* Grid lines - Ceiling (Reflection) */}
         <div className="absolute inset-0 top-[-50%] rotate-180" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(168, 85, 247, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(234, 179, 8, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top',
            animation: 'grid-movement 1s linear infinite'
          }}
        />
      </div>
    </div>
  );
}
