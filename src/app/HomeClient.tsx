'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<'pro' | 'particulier' | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative bg-gea-black">
      {/* Video Background Fullscreen */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gea-black/60" />
      </div>

      {/* Grille animée en arrière-plan */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 163, 224, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 163, 224, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          animation: 'gridMove 20s linear infinite',
        }} />
      </div>

      {/* Particules lumineuses animées */}
      <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gea-blue/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gea-light-blue/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gea-blue/10 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Cards de sélection - Prend l'espace disponible */}
        <div className={`flex-1 min-h-0 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="grid md:grid-cols-2 h-full">

            {/* Card Professionnel */}
            <Link
              href="/professionnels"
              className="group relative block h-full"
              onMouseEnter={() => setActiveCard('pro')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`relative h-full overflow-hidden transition-all duration-700 ${
                activeCard === 'particulier' ? 'opacity-50' : 'opacity-100'
              }`}>

                {/* Image de fond */}
                <div className="absolute inset-0">
                  <Image
                    src="https://image-flow.fr/uploads/firefly-large-industrial-building-exterior-modern--f4d7f00d-e039-4170-a6c4-297e2fe804e2.webp"
                    alt="Bâtiments professionnels"
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110"
                    priority
                  />
                  {/* Overlay dynamique */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gea-black via-gea-black/50 to-gea-black/20 group-hover:from-gea-blue/95 group-hover:via-gea-blue/40 group-hover:to-transparent transition-all duration-700" />
                </div>

                {/* Ligne de séparation centrale */}
                <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-white/20 md:block hidden" />

                {/* Contenu */}
                <div className="relative z-10 p-5 md:p-8 lg:p-12 xl:p-16 h-full flex flex-col justify-end">
                  {/* Badge */}
                  <div className="absolute top-5 left-5 md:top-8 md:left-8 lg:top-12 lg:left-12">
                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 group-hover:bg-gea-blue group-hover:border-gea-blue transition-all duration-500">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      ESPACE B2B
                    </span>
                  </div>

                  {/* Titre et description */}
                  <div>
                    <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-2 md:mb-4 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                      PRO
                    </h2>
                    <p className="text-gray-300 text-sm md:text-lg lg:text-xl xl:text-2xl mb-4 md:mb-6 max-w-lg group-hover:text-white transition-colors duration-500">
                      Copropriétés, industries, hôtels, entrepôts, commerces...
                    </p>

                    {/* Tags services */}
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                      {['Cordistes', 'Toiture', 'Étanchéité', 'Photovoltaïque', '+20'].map((tag, i) => (
                        <span
                          key={tag}
                          className="text-sm md:text-base lg:text-lg bg-white/5 backdrop-blur-sm text-white/80 px-3 md:px-5 py-1.5 md:py-2.5 rounded-full border border-white/10 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-white font-bold text-base md:text-xl lg:text-2xl">
                        Accéder
                      </span>
                      <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                        <svg className="w-5 h-5 md:w-7 md:h-7 text-white group-hover:text-gea-black group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card Particulier */}
            <Link
              href="/particuliers"
              className="group relative block h-full"
              onMouseEnter={() => setActiveCard('particulier')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`relative h-full overflow-hidden transition-all duration-700 ${
                activeCard === 'pro' ? 'opacity-50' : 'opacity-100'
              }`}>

                {/* Image de fond */}
                <div className="absolute inset-0">
                  <Image
                    src="https://image-flow.fr/uploads/firefly-contemporary-residential-building-fac-ade--cfd6831b-ef5a-42e3-aa66-36c28ff20215.webp"
                    alt="Maison particulier"
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110"
                    priority
                  />
                  {/* Overlay dynamique */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gea-black via-gea-black/50 to-gea-black/20 group-hover:from-gea-blue/95 group-hover:via-gea-blue/40 group-hover:to-transparent transition-all duration-700" />
                </div>

                {/* Contenu */}
                <div className="relative z-10 p-5 md:p-8 lg:p-12 xl:p-16 h-full flex flex-col justify-end">
                  {/* Badge */}
                  <div className="absolute top-5 left-5 md:top-8 md:left-8 lg:top-12 lg:left-12">
                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 group-hover:bg-gea-blue group-hover:border-gea-blue transition-all duration-500">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      VOTRE MAISON
                    </span>
                  </div>

                  {/* Titre et description */}
                  <div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-2 md:mb-4 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                      PARTICULIER
                    </h2>
                    <p className="text-gray-300 text-sm md:text-lg lg:text-xl xl:text-2xl mb-4 md:mb-6 max-w-lg group-hover:text-white transition-colors duration-500">
                      Maison individuelle, appartement, résidence...
                    </p>

                    {/* Tags services */}
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                      {['Isolation', 'Solaire', 'Terrasse', 'Façade', 'Gouttières'].map((tag, i) => (
                        <span
                          key={tag}
                          className="text-sm md:text-base lg:text-lg bg-white/5 backdrop-blur-sm text-white/80 px-3 md:px-5 py-1.5 md:py-2.5 rounded-full border border-white/10 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-white font-bold text-base md:text-xl lg:text-2xl">
                        Découvrir
                      </span>
                      <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                        <svg className="w-5 h-5 md:w-7 md:h-7 text-white group-hover:text-gea-black group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bandeau téléphone et footer - Sous les cartes */}
        <div className={`relative z-30 bg-gradient-to-t from-gea-black via-gea-black/95 to-gea-black/80 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          {/* Téléphone */}
          <div className="flex justify-center py-3 md:py-4">
            <a
              href="tel:0972143065"
              className="group relative inline-flex items-center gap-3 md:gap-4 bg-gea-black/90 hover:bg-gea-blue backdrop-blur-xl rounded-full px-4 md:px-6 py-2.5 md:py-3 border border-white/20 hover:border-gea-blue transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,163,224,0.5)]"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gea-blue rounded-full animate-ping opacity-20 group-hover:opacity-0" />
                <div className="relative w-8 h-8 md:w-10 md:h-10 bg-gea-blue group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-500">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-gea-blue transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <span className="text-white text-base md:text-lg lg:text-xl font-bold">
                09 72 14 30 65
              </span>
            </a>
          </div>

          {/* Footer minimal */}
          <div className="flex items-center justify-center gap-3 md:gap-6 text-gray-500 text-[9px] md:text-xs pb-2 md:pb-3">
            <span>© {new Date().getFullYear()} GEA</span>
            <Link href="/mentions-legales" className="hover:text-gea-blue transition-colors cursor-pointer">
              Mentions légales
            </Link>
            <Link href="/contact" className="hover:text-gea-blue transition-colors cursor-pointer">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Section Où nous trouver */}
      <section className="relative z-40 py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block px-4 py-2 bg-gea-blue/10 text-gea-blue rounded-full text-sm font-semibold mb-4">
              NOS IMPLANTATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gea-black mb-4">Où nous trouver</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Présents à Paris et sur la Côte d&apos;Azur pour vous accompagner
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Paris */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-[250px] md:h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5906758951937!2d2.3245471976101446!3d48.8660152974182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2e1a161985%3A0x262161d5a23b4d6c!2s229%20Rue%20Saint-Honor%C3%A9%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1763545286862!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gea-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-gea-blue/10 text-gea-blue text-xs font-semibold rounded-full mb-2">
                      SIEGE SOCIAL
                    </span>
                    <h3 className="font-bold text-xl text-gea-black">Paris 1er</h3>
                    <p className="text-gray-700">
                      229 rue Saint-Honoré<br />
                      75001 Paris
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Juan-les-Pins */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-[250px] md:h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11551.529216!2d7.1023!3d43.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce9c1e1d9d0001%3A0x408ab2ae4bc64c0!2sJuan-les-Pins%2C%2006160%20Antibes!5e0!3m2!1sfr!2sfr!4v1703578200000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gea-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-gea-blue/10 text-gea-blue text-xs font-semibold rounded-full mb-2">
                      AGENCE SUD
                    </span>
                    <h3 className="font-bold text-xl text-gea-black">Juan-les-Pins</h3>
                    <p className="text-gray-700">
                      Juan-les-Pins<br />
                      06160 Antibes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 md:mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gea-blue text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-gea-blue/90 transition-all hover:scale-105 shadow-lg shadow-gea-blue/30"
            >
              Nous contacter
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Styles pour l'animation du gradient */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
      `}</style>
    </div>
  );
}