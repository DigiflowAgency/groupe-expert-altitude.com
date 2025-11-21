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
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Link href="/" className="flex items-center">
            {/* Desktop: Ultrawide logo */}
            <img
              src="/logo-gea-ultrawide-transparent.png"
              alt="Groupe Expert Altitude"
              className="hidden md:block h-24 w-auto object-contain"
            />
            {/* Mobile: Square simple logo */}
            <img
              src="/logo-gea-carre-simple-transparent.png"
              alt="Groupe Expert Altitude"
              className="md:hidden h-16 w-auto object-contain"
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-gea-blue transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>

              {/* Services Mobile Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-gray-700 font-medium"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    {servicesData.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/categories/${category.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gea-blue/10 transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-2xl">{category.icon}</span>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gea-black">
                            {category.category}
                          </div>
                          <div className="text-xs text-gray-600">
                            {category.services.length} services
                          </div>
                        </div>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block text-sm text-gea-blue hover:underline font-semibold mt-3 pl-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Voir tous les services →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="text-gray-700 hover:text-gea-blue transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Actualités
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gea-blue transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:0972143065"
                className="flex items-center gap-2 text-gea-black hover:text-gea-blue transition-colors font-semibold"
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
                09 72 14 30 65
              </a>
              <Link
                href="/contact"
                className="bg-gea-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-gea-blue/90 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Devis gratuit
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
