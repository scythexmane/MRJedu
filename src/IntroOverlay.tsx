import React, { useEffect, useState } from "react";

/**
 * IntroOverlay – a lightweight splash screen that fades out after 2.5 s.
 * • Uses viewport‑relative sizing so the logo always fits on phones, tablets and desktops.
 * • Tailwind responsive utilities (sm/md/lg/…) progressively enlarge the logo on wider screens.
 * • pointer-events-none → underlying page can’t be blocked if JS lags.
 */
export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-slate-900 transition-opacity duration-700 pointer-events-none">
      <div className="animate-intro select-none">
        {/*
          h-[20vh] → 20% of viewport height on the smallest screens
          sm: / md: / … steps gently scale up for tablets/desktop
        */}
        <img
          src="/logo.svg"
          alt="Logo"
          className="h-[20vh] sm:h-[22vh] md:h-[24vh] lg:h-[26vh] xl:h-[28vh] 2xl:h-[30vh] w-auto opacity-95"
        />
      </div>

      {/* Inline keyframes keep the component self‑contained.
          You can move them to tailwind.config.js if preferred. */}
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
