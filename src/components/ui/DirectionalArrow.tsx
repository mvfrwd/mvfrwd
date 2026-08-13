import React from 'react';

export const DirectionalArrow: React.FC = () => {
  return (
    <div className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none">
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono text-brand-muted tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          SCROLL
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-brand-orange to-transparent" />
      </div>
    </div>
  );
};
