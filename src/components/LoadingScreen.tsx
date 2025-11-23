'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    // Vérifier si déjà vu
    const seen = sessionStorage.getItem('gea-loading-seen');
    if (seen) {
      setIsVisible(false);
      return;
    }

    // Animation en 3 étapes
    // 1. Fade in du fond bleu (200ms)
    setTimeout(() => setFadeIn(true), 50);

    // 2. Afficher pendant 1.8 secondes
    // 3. Slide out vers le bas (800ms)
    const timer = setTimeout(() => {
      setSlideOut(true);
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('gea-loading-seen', 'true');
      }, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-800 ease-in-out ${
        slideOut ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Fond bleu avec animation de flou */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-gea-blue to-gea-light-blue transition-all duration-500 ${
          fadeIn ? 'opacity-100 backdrop-blur-0' : 'opacity-0 backdrop-blur-xl'
        }`}
      />

      {/* Logo GEA qui apparaît */}
      <div
        className={`relative z-10 transition-all duration-700 ${
          fadeIn ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <div className="animate-pulse">
          <Image
            src="/logo-gea-carre-simple-transparent.png"
            alt="GEA"
            width={140}
            height={140}
            priority
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
