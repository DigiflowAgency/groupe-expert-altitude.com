'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import servicesData from '@/data/services.json';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 relative">
            {/* Desktop: Ultrawide logo */}
            <img
              src="/logo-gea-ultrawide-transparent.png"
              alt="Groupe Expert Altitude"
              className="hidden md:block h-24 w-auto object-contain transition-all duration-300"
            />
            {/* Mobile: Square simple logo - plus compact */}
            <img
              src="/logo-gea-carre-simple-transparent.png"
              alt="Groupe Expert Altitude"
              className={`md:hidden w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-14'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gea-blue transition-colors font-medium"
            >
              Accueil
            </Link>

            {/* Services Mega Menu */}
            <div className="relative group">
              <Link
                href="/services"
                className="text-gray-700 hover:text-gea-blue transition-colors font-medium flex items-center gap-1"
              >
                Services
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    {servicesData.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/categories/${category.slug}`}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-gea-blue/10 transition-all group/item"
                      >
                        <span className="text-3xl group-hover/item:scale-110 transition-transform">
                          {category.icon}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-bold text-gea-black group-hover/item:text-gea-blue transition-colors">
                            {category.category}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-1">
                            {category.description}
                          </p>
                          <p className="text-xs text-gea-blue mt-1">
                            {category.services.length} services disponibles
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
                  <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-gea-blue hover:text-gea-blue/80 font-semibold"
                    >
                      Voir tous nos services
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-gea-blue transition-colors font-medium"
            >
              Actualités
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gea-blue transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0972143065"
              className="flex items-center gap-2 text-gea-black hover:text-gea-blue transition-colors"
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
              href="/contact"
              className="bg-gea-blue text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gea-blue/90 transition-colors"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile Menu Button - Hamburger animé */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 z-50 relative rounded-lg hover:bg-gray-100 transition-colors"
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

        {/* Mobile Menu Fullscreen avec animations */}
        <div
          className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          {/* Contenu du menu avec scroll */}
          <div className="h-full overflow-y-auto pt-24 pb-8 px-4">
            <nav className="flex flex-col gap-2 max-w-md mx-auto">
              {/* Accueil */}
              <Link
                href="/"
                className="text-lg text-gray-800 hover:text-gea-blue transition-all font-semibold py-3 px-4 rounded-xl hover:bg-gea-blue/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>

              {/* Services Mobile Accordion - Design amélioré */}
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

                {/* Sous-menu services avec animation */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileServicesOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="mt-2 space-y-1 pl-2">
                    {servicesData.map((category, index) => (
                      <Link
                        key={category.slug}
                        href={`/categories/${category.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gea-blue/10 transition-all group"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <span className="text-3xl group-hover:scale-110 transition-transform">
                          {category.icon}
                        </span>
                        <div className="flex-1">
                          <div className="font-semibold text-gea-black group-hover:text-gea-blue transition-colors">
                            {category.category}
                          </div>
                          <div className="text-xs text-gray-600">
                            {category.services.length} services disponibles
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
                    <Link
                      href="/services"
                      className="block text-sm text-gea-blue hover:text-gea-blue/80 font-semibold mt-3 py-2 px-4 text-center hover:underline"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Voir tous nos services →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Actualités */}
              <Link
                href="/blog"
                className="text-lg text-gray-800 hover:text-gea-blue transition-all font-semibold py-3 px-4 rounded-xl hover:bg-gea-blue/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Actualités
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="text-lg text-gray-800 hover:text-gea-blue transition-all font-semibold py-3 px-4 rounded-xl hover:bg-gea-blue/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4" />

              {/* Phone CTA - Plus visible */}
              <a
                href="tel:0972143065"
                className="flex items-center justify-center gap-3 bg-gea-blue/10 text-gea-blue py-4 px-6 rounded-xl font-bold text-lg hover:bg-gea-blue/20 transition-all group"
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
                href="/contact"
                className="bg-gradient-to-r from-gea-blue to-gea-light-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all text-center hover:scale-105 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demander un devis gratuit
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
