'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    // Vérifier si déjà vu
    const seen = sessionStorage.getItem('gea-loading-seen');
    if (seen) {
      setIsVisible(false);
      return;
    }

    // Afficher 1 seconde puis glisser vers le bas
    const timer = setTimeout(() => {
      setSlideOut(true);
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('gea-loading-seen', 'true');
      }, 700);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-transform duration-700 ease-in-out ${
        slideOut ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="animate-pulse">
        <Image
          src="/logo-gea-carre-simple-transparent.png"
          alt="GEA"
          width={120}
          height={120}
          priority
        />
      </div>
    </div>
  );
}
