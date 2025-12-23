'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Services Pro
const servicesProData = [
  {
    name: 'Photovoltaïque',
    href: '/professionnels/services/photovoltaique',
    icon: '☀️',
    description: 'Installation panneaux solaires pour bâtiments professionnels',
  },
  {
    name: 'Travaux en hauteur',
    href: '/professionnels/services/travaux-en-hauteur',
    icon: '🧗',
    description: 'Cordistes certifiés pour nettoyage, traitement et ravalement',
  },
  {
    name: 'Peintures isolantes',
    href: '/professionnels/services/peintures-isolantes',
    icon: '🎨',
    description: 'Thermo-Reflect, Vitro-Reflect, Zinco-Reflect',
  },
  {
    name: 'Eaux pluviales & fuites',
    href: '/professionnels/services/eaux-pluviales',
    icon: '💧',
    description: 'Descentes, détection fuites sur bâtiments industriels',
  },
];

// Services Particuliers - 5 catégories principales
const servicesParticuliersData = [
  {
    name: 'Panneaux solaires',
    href: '/particuliers/services/photovoltaique',
    icon: '☀️',
    description: 'Réduisez vos factures avec l\'énergie solaire',
  },
  {
    name: 'Terrasses sur plot',
    href: '/particuliers/services/terrasses',
    icon: '🏡',
    description: 'Création de terrasses bois et carrelage',
  },
  {
    name: 'Isolation toiture, façade & vitre',
    href: '/particuliers/services/peintures-isolantes',
    icon: '🌡️',
    description: 'Peintures isolantes thermiques innovantes',
  },
  {
    name: 'Recherche de fuites',
    href: '/particuliers/services/recherche-fuites',
    icon: '🔍',
    description: 'Détection non destructive par thermographie',
  },
  {
    name: 'Descentes pluviales',
    href: '/particuliers/services/eaux-pluviales',
    icon: '💧',
    description: 'Installation et réparation gouttières',
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Détecter si on est sur une page particuliers ou professionnels
  const isParticuliers = pathname.startsWith('/particuliers');
  const isProfessionnels = pathname.startsWith('/professionnels');
  const isLandingPage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Fermer le menu mobile au scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Navigation pour particuliers (style chaleureux)
  const particuliersNav = (
    <>
      <Link
        href="/particuliers"
        className="text-amber-900 hover:text-amber-600 transition-colors font-medium"
      >
        Accueil
      </Link>

      {/* Services Mega Menu Particuliers */}
      <div className="relative group">
        <button className="text-amber-900 hover:text-amber-600 transition-colors font-medium flex items-center gap-1">
          Nos services
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Mega Menu Dropdown - Style chaleureux */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-gradient-to-br from-orange-50 to-amber-50 shadow-2xl rounded-2xl border border-amber-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="p-5">
            <p className="text-amber-800 text-sm font-medium mb-3">Nos services pour votre maison</p>
            <div className="grid grid-cols-2 gap-2">
              {servicesParticuliersData.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/80 hover:shadow-md transition-all group/item"
                >
                  <span className="text-xl flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover/item:scale-110 transition-transform">
                    {service.icon}
                  </span>
                  <span className="font-medium text-amber-900 group-hover/item:text-orange-600 transition-colors text-sm">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
            {/* Lien vers contact */}
            <div className="mt-4 pt-4 border-t border-amber-200">
              <Link
                href="/particuliers/contact"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Demander un devis gratuit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/particuliers/contact"
        className="text-amber-900 hover:text-amber-600 transition-colors font-medium"
      >
        Contact
      </Link>
    </>
  );

  // Navigation pour professionnels
  const professionnelsNav = (
    <>
      <Link
        href="/professionnels"
        className="text-gray-700 hover:text-gea-blue transition-colors font-medium"
      >
        Accueil Pro
      </Link>

      {/* Services Mega Menu Pro */}
      <div className="relative group">
        <button className="text-gray-700 hover:text-gea-blue transition-colors font-medium flex items-center gap-1">
          Services
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Mega Menu Dropdown */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="p-6">
            <div className="grid grid-cols-1 gap-3">
              {servicesProData.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gea-blue/10 transition-all group/item"
                >
                  <span className="text-3xl group-hover/item:scale-110 transition-transform">
                    {service.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gea-black group-hover/item:text-gea-blue transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-1">
                      {service.description}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover/item:text-gea-blue group-hover/item:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/contact"
        className="text-gray-700 hover:text-gea-blue transition-colors font-medium"
      >
        Contact
      </Link>
    </>
  );

  // Navigation mobile pour particuliers (style chaleureux)
  const particuliersMobileNav = (
    <>
      <Link
        href="/particuliers"
        className="text-lg text-amber-900 hover:text-orange-600 transition-all font-semibold py-3 px-4 rounded-xl hover:bg-orange-50"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Accueil
      </Link>

      {/* Services Mobile Accordion Particuliers - Style chaleureux */}
      <div className="border-b border-amber-100 pb-2">
        <button
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          className="w-full flex items-center justify-between text-lg text-amber-900 font-semibold py-3 px-4 rounded-xl hover:bg-orange-50 transition-all"
        >
          Nos services
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              mobileServicesOpen ? 'rotate-180 text-orange-500' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {mobileServicesOpen && (
          <div className="mt-2 space-y-1 pl-2 bg-gradient-to-br from-orange-50/50 to-amber-50/50 rounded-xl p-2">
            {servicesParticuliersData.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
                <div className="flex-1">
                  <div className="font-semibold text-amber-900 group-hover:text-orange-600 transition-colors">
                    {service.name}
                  </div>
                  <div className="text-xs text-amber-700/80">
                    {service.description}
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-amber-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/particuliers/contact"
        className="text-lg text-amber-900 hover:text-orange-600 transition-all font-semibold py-3 px-4 rounded-xl hover:bg-orange-50"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Contact
      </Link>
    </>
  );

  // Navigation mobile pour professionnels
  const professionnelsMobileNav = (
    <>
      <Link
        href="/professionnels"
        className="text-lg text-gray-800 hover:text-gea-blue transition-all font-semibold py-3 px-4 rounded-xl hover:bg-gea-blue/5"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Accueil Pro
      </Link>

      {/* Services Mobile Accordion Pro */}
      <div className="border-b border-gray-100 pb-2">
        <button
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          className="w-full flex items-center justify-between text-lg text-gray-800 font-semibold py-3 px-4 rounded-xl hover:bg-gea-blue/5 transition-all"
        >
          Services
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              mobileServicesOpen ? 'rotate-180 text-gea-blue' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {mobileServicesOpen && (
          <div className="mt-2 space-y-1 pl-2">
            {servicesProData.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gea-blue/10 transition-all group"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
                <div className="flex-1">
                  <div className="font-semibold text-gea-black group-hover:text-gea-blue transition-colors">
                    {service.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {service.description}
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gea-blue group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/contact"
        className="text-lg text-gray-800 hover:text-gea-blue transition-all font-semibold py-3 px-4 rounded-xl hover:bg-gea-blue/5"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Contact
      </Link>
    </>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
          isScrolled
            ? isParticuliers
              ? 'bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg py-1'
              : 'bg-white shadow-lg py-1'
            : isParticuliers
              ? 'bg-gradient-to-r from-orange-50/95 to-amber-50/95 backdrop-blur-sm py-2'
              : 'bg-white/95 backdrop-blur-sm py-2'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 relative">
            {/* Desktop: Ultrawide logo */}
            <Image
              src="/logo-gea-ultrawide-transparent.png"
              alt="Groupe Expert Altitude"
              width={200}
              height={56}
              priority
              className={`hidden md:block w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-14'
              }`}
            />
            {/* Mobile: Square simple logo - plus compact */}
            <Image
              src="/logo-gea-carre-simple-transparent.png"
              alt="Groupe Expert Altitude"
              width={48}
              height={48}
              priority
              className={`md:hidden w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-12'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Boutons de sélection Pro/Particulier */}
            {!isLandingPage && (
              <div className={`flex items-center gap-1 rounded-full p-1 mr-4 ${
                isParticuliers ? 'bg-amber-100/80' : 'bg-gray-100'
              }`}>
                <Link
                  href="/professionnels"
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isProfessionnels
                      ? 'bg-gea-blue text-white shadow-sm'
                      : isParticuliers
                        ? 'text-amber-700 hover:text-amber-900'
                        : 'text-gray-600 hover:text-gea-black'
                  }`}
                >
                  Pro
                </Link>
                <Link
                  href="/particuliers"
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isParticuliers
                      ? 'bg-gradient-to-r from-orange-400 to-amber-400 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gea-black'
                  }`}
                >
                  Particulier
                </Link>
              </div>
            )}

            {/* Navigation contextuelle */}
            {isLandingPage ? (
              <>
                <Link
                  href="/professionnels"
                  className="text-gray-700 hover:text-gea-blue transition-colors font-medium"
                >
                  Professionnels
                </Link>
                <Link
                  href="/particuliers"
                  className="text-gray-700 hover:text-gea-blue transition-colors font-medium"
                >
                  Particuliers
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-gea-blue transition-colors font-medium"
                >
                  Contact
                </Link>
              </>
            ) : isParticuliers ? (
              particuliersNav
            ) : (
              professionnelsNav
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0972143065"
              className={`flex items-center gap-2 transition-colors ${
                isParticuliers
                  ? 'text-amber-900 hover:text-orange-600'
                  : 'text-gea-black hover:text-gea-blue'
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-semibold">09 72 14 30 65</span>
            </a>
            <Link
              href={isParticuliers ? '/particuliers/contact' : '/contact'}
              className={`px-6 py-2.5 font-semibold transition-all ${
                isParticuliers
                  ? 'bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-full hover:shadow-lg hover:scale-105'
                  : 'bg-gea-blue text-white rounded-lg hover:bg-gea-blue/90'
              }`}
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile Menu Button - Hamburger animé */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 z-[100] relative rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gea-black transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gea-black transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gea-black transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Menu Fullscreen avec animations - En dehors du header */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden pt-24 pb-8 overflow-y-auto transition-all duration-300 ease-in-out ${
          isParticuliers
            ? 'bg-gradient-to-br from-orange-50 to-amber-50'
            : 'bg-white'
        } ${
          isMobileMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
          <nav className={`flex flex-col gap-2 max-w-md mx-auto px-4 transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
              {/* Sélecteur Pro/Particulier en mobile */}
              {!isLandingPage && (
                <div className={`flex items-center gap-2 rounded-2xl p-2 mb-4 ${
                  isParticuliers ? 'bg-amber-100/80' : 'bg-gray-100'
                }`}>
                  <Link
                    href="/professionnels"
                    className={`flex-1 py-3 rounded-xl text-center font-semibold transition-all ${
                      isProfessionnels
                        ? 'bg-gea-blue text-white shadow-sm'
                        : isParticuliers
                          ? 'text-amber-700 hover:text-amber-900'
                          : 'text-gray-600 hover:text-gea-black'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Professionnels
                  </Link>
                  <Link
                    href="/particuliers"
                    className={`flex-1 py-3 rounded-xl text-center font-semibold transition-all ${
                      isParticuliers
                        ? 'bg-gradient-to-r from-orange-400 to-amber-400 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gea-black'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Particuliers
                  </Link>
                </div>
              )}

              {/* Navigation contextuelle mobile */}
              {isLandingPage ? (
                <>
                  <Link
                    href="/professionnels"
                    className="text-lg text-gray-800 hover:text-gea-blue transition-all font-semibold py-3 px-4 rounded-xl hover:bg-gea-blue/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Professionnels
                  </Link>
                  <Link
                    href="/particuliers"
                    className="text-lg text-gray-800 hover:text-gea-blue transition-all font-semibold py-3 px-4 rounded-xl hover:bg-gea-blue/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Particuliers
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg text-gray-800 hover:text-gea-blue transition-all font-semibold py-3 px-4 rounded-xl hover:bg-gea-blue/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              ) : isParticuliers ? (
                particuliersMobileNav
              ) : (
                professionnelsMobileNav
              )}

              {/* Divider */}
              <div className={`border-t my-4 ${isParticuliers ? 'border-amber-200' : 'border-gray-200'}`} />

              {/* Phone CTA - Plus visible */}
              <a
                href="tel:0972143065"
                className={`flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-lg transition-all group ${
                  isParticuliers
                    ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                    : 'bg-gea-blue/10 text-gea-blue hover:bg-gea-blue/20'
                }`}
              >
                <svg
                  className="w-6 h-6 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                09 72 14 30 65
              </a>

              {/* Devis Button - Plus proéminent */}
              <Link
                href={isParticuliers ? '/particuliers/contact' : '/contact'}
                className={`px-8 py-4 font-bold text-lg text-center mt-2 transition-all hover:scale-105 ${
                  isParticuliers
                    ? 'bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-full hover:shadow-xl'
                    : 'bg-gradient-to-r from-gea-blue to-gea-light-blue text-white rounded-xl hover:shadow-xl'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isParticuliers ? 'Je veux mon devis gratuit' : 'Demander un devis gratuit'}
              </Link>
            </nav>
      </div>
    </>
  );
}
