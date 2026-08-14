'use client';

import React, { useEffect, useState } from 'react';

export const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function recordVisit() {
      try {
        const res = await fetch('/api/visitor-count', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) return;

        const data = await res.json();
        if (isMounted && typeof data.count === 'number') {
          // Zero-pad to 6 digits (e.g., 001284)
          setCount(String(data.count).padStart(6, '0'));
        }
      } catch {
        // Fail silently to keep footer clean
      }
    }

    recordVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex items-center space-x-2 text-[10px] font-mono text-brand-muted select-none">
      <span className="text-brand-orange">//</span>
      <span>VISITS</span>
      <span className="text-brand-off-white font-bold tracking-wider">
        {count ?? '------'}
      </span>
    </div>
  );
};