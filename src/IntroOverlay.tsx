import React from 'react';
import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500); // Показ 2 сек
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-slate-900 transition-opacity duration-1000">
      <div className="animate-intro">
        <img src="/logo.svg" alt="Logo" className="h-54 w-auto opacity-95" />
      </div>

      <style>{`
        @keyframes introFade {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        .animate-intro {
          animation: introFade 2.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
