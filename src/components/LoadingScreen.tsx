'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initialisation');

  useEffect(() => {
    // Vérifier si l'animation a déjà été vue dans cette session
    const hasSeenLoading = sessionStorage.getItem('gea-loading-seen');

    if (hasSeenLoading === 'true') {
      setIsLoading(false);
      return;
    }

    // Textes de chargement progressifs
    const texts = [
      'Initialisation',
      'Chargement des services',
      'Préparation de l\'interface',
      'Presque prêt',
      'Finalisation'
    ];

    // Simuler le chargement avec progression
    const duration = 3000; // 3 secondes
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + increment, 100);

        // Changer le texte selon la progression
        const textIndex = Math.floor((newProgress / 100) * texts.length);
        setLoadingText(texts[Math.min(textIndex, texts.length - 1)]);

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('gea-loading-seen', 'true');
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleSkip = () => {
    setIsLoading(false);
    sessionStorage.setItem('gea-loading-seen', 'true');
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-gea-black via-gray-900 to-gea-black flex items-center justify-center overflow-hidden"
        >
          {/* Grille animée en arrière-plan */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(29, 67, 129, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(29, 67, 129, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '60px 60px'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </div>

          {/* Cercles animés flous en arrière-plan */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gea-blue/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gea-blue/20 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              x: [0, -60, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Contenu central */}
          <div className="relative z-20 text-center px-4">
            {/* Logo GEA animé */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-12"
            >
              {/* Cercle externe tournant */}
              <div className="relative w-48 h-48 mx-auto mb-8">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent border-t-gea-blue border-r-gea-blue"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border-4 border-transparent border-b-white/30 border-l-white/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                {/* Logo GEA au centre */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-32 h-32 bg-gea-blue rounded-full flex items-center justify-center shadow-2xl shadow-gea-blue/50">
                    <span className="text-white font-black text-5xl">GEA</span>
                  </div>
                </motion.div>

                {/* Particules orbitales */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gea-blue rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      marginTop: '-6px',
                      marginLeft: '-6px',
                    }}
                    animate={{
                      rotate: 360,
                      x: [0, Math.cos(i * 60 * Math.PI / 180) * 80, 0],
                      y: [0, Math.sin(i * 60 * Math.PI / 180) * 80, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: 'linear'
                    }}
                  />
                ))}
              </div>

              {/* Nom complet */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide"
              >
                GROUPE EXPERT ALTITUDE
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-gea-blue to-transparent"
              />
            </motion.div>

            {/* Barre de progression moderne */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="max-w-md mx-auto"
            >
              {/* Pourcentage */}
              <div className="flex justify-between items-center mb-3">
                <motion.span
                  key={loadingText}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-gray-300 text-sm font-medium"
                >
                  {loadingText}
                </motion.span>
                <span className="text-gea-blue text-sm font-bold">
                  {Math.floor(progress)}%
                </span>
              </div>

              {/* Barre de progression */}
              <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-gea-blue via-gea-light-blue to-gea-blue rounded-full relative"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Effet de brillance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Tags en bas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-12 left-0 right-0 flex flex-wrap justify-center gap-3 px-4"
          >
            {[
              { icon: '🏔️', text: 'Travaux en hauteur' },
              { icon: '⚡', text: 'Intervention 7j/7' },
              { icon: '✓', text: 'Certifiés' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-sm"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-white font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bouton Skip */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            onClick={handleSkip}
            className="absolute top-8 right-8 text-white/50 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 group hover:bg-white/5 px-4 py-2 rounded-full"
          >
            <span>Passer</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>

          {/* Particules flottantes ambiantes */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut'
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
