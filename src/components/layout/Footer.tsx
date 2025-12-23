'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isParticuliers = pathname.startsWith('/particuliers');

  const servicesPro = [
    { name: 'Espace Professionnels', href: '/professionnels' },
    { name: 'Photovoltaïque', href: '/professionnels/services/photovoltaique' },
    { name: 'Travaux en hauteur', href: '/professionnels/services/travaux-en-hauteur' },
    { name: 'Peintures isolantes', href: '/professionnels/services/peintures-isolantes' },
    { name: 'Eaux pluviales & fuites', href: '/professionnels/services/eaux-pluviales' },
  ];

  const servicesParticuliers = [
    { name: 'Espace Particuliers', href: '/particuliers' },
    { name: 'Panneaux solaires', href: '/particuliers/services/photovoltaique' },
    { name: 'Eaux pluviales & fuites', href: '/particuliers/services/eaux-pluviales' },
    { name: 'Terrasses sur plot', href: '/particuliers/services/terrasses' },
    { name: 'Peintures isolantes', href: '/particuliers/services/peintures-isolantes' },
  ];

  // Footer Particuliers - Style chaleureux
  if (isParticuliers) {
    return (
      <footer className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative z-50">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <Image
                  src="/logo-gea-carre-simple-transparent.png"
                  alt="Groupe Expert Altitude"
                  width={100}
                  height={100}
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-amber-800 text-sm mb-4 leading-relaxed">
                Experts en rénovation et amélioration de l&apos;habitat.
                On s&apos;occupe de tout, du devis à la réalisation !
              </p>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-3 text-amber-700">
                  <span className="text-xl">📍</span>
                  <span>229 rue Saint-Honoré<br />75001 Paris</span>
                </p>
                <a
                  href="tel:0972143065"
                  className="flex items-center gap-3 text-amber-700 hover:text-orange-600 transition-colors group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="font-semibold">09 72 14 30 65</span>
                </a>
                <a
                  href="mailto:contact@groupe-expert-altitude.fr"
                  className="flex items-center gap-3 text-amber-700 hover:text-orange-600 transition-colors group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">✉️</span>
                  <span>contact@groupe-expert-altitude.fr</span>
                </a>
              </div>
            </div>

            {/* Services Particuliers */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-amber-900">Nos services</h3>
              <ul className="space-y-2 text-sm">
                {servicesParticuliers.slice(1).map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-amber-700 hover:text-orange-600 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full group-hover:scale-150 transition-transform" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Espace Pro */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-amber-900">Vous êtes professionnel ?</h3>
              <p className="text-amber-700 text-sm mb-4">
                Nous intervenons aussi sur les bâtiments professionnels et industriels.
              </p>
              <Link
                href="/professionnels"
                className="inline-flex items-center gap-2 bg-gea-blue/10 text-gea-blue px-4 py-2 rounded-full text-sm font-semibold hover:bg-gea-blue/20 transition-colors"
              >
                Espace Pro
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Trust & Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-amber-900">Pourquoi nous ?</h3>
              <ul className="space-y-3 text-sm text-amber-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  Devis gratuit et sans engagement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  Artisans qualifiés et certifiés
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  Garantie décennale
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  Accompagnement aides financières
                </li>
              </ul>

              <h4 className="font-semibold mt-6 mb-2 text-amber-900">On intervient partout</h4>
              <p className="text-sm text-amber-700">
                Paris, Lyon, Marseille, Toulouse, Bordeaux, Nantes et toute la France
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-amber-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-amber-700">
              <p>
                © {new Date().getFullYear()} Groupe Expert Altitude (GEA SAS) - SIRET 942 173 972
              </p>
              <div className="flex items-center gap-4">
                <Link href="/mentions-legales" className="hover:text-orange-600 transition-colors">
                  Mentions légales
                </Link>
                <span className="text-amber-300">•</span>
                <p>
                  Réalisé par{' '}
                  <a
                    href="https://digiflow-agency.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  >
                    DIGIFLOW AGENCY
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Footer Professionnels - Style corporate (original)
  return (
    <footer className="bg-gea-black text-white relative z-50">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo-gea-carre-simple-transparent.png"
                alt="Groupe Expert Altitude"
                width={128}
                height={128}
                className="h-32 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              5 pôles d&apos;expertise : travaux en hauteur, terrasses & extérieurs,
              traitements thermiques, photovoltaïque et assainissement.
              Interventions sur bâtiments professionnels et industriels.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>229 rue Saint-Honoré<br />75001 Paris</span>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
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
                <a
                  href="tel:0972143065"
                  className="hover:text-gea-blue transition-colors"
                >
                  09 72 14 30 65
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@groupe-expert-altitude.fr"
                  className="hover:text-gea-blue transition-colors"
                >
                  contact@groupe-expert-altitude.fr
                </a>
              </p>
            </div>
          </div>

          {/* Services Pro */}
          <div>
            <h3 className="font-bold text-lg mb-4">Professionnels</h3>
            <ul className="space-y-2 text-sm">
              {servicesPro.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Particuliers */}
          <div>
            <h3 className="font-bold text-lg mb-4">Particuliers</h3>
            <ul className="space-y-2 text-sm">
              {servicesParticuliers.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2">Zones d&apos;intervention</h4>
            <p className="text-sm text-gray-300">
              Paris, Lyon, Marseille, Toulouse, Bordeaux, Nantes et toute la France
            </p>
          </div>
        </div>

        {/* Internal Linking Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="text-white font-semibold mb-3">Services Professionnels</h4>
              <p className="leading-relaxed">
                Spécialistes des{' '}
                <Link href="/professionnels/services/travaux-en-hauteur" className="text-gea-light-blue hover:text-white transition-colors">
                  travaux en hauteur sur corde
                </Link>
                , nous proposons également l&apos;installation de{' '}
                <Link href="/professionnels/services/photovoltaique" className="text-gea-light-blue hover:text-white transition-colors">
                  panneaux photovoltaïques
                </Link>
                , les{' '}
                <Link href="/professionnels/services/peintures-isolantes" className="text-gea-light-blue hover:text-white transition-colors">
                  peintures isolantes
                </Link>{' '}
                et la gestion des{' '}
                <Link href="/professionnels/services/eaux-pluviales" className="text-gea-light-blue hover:text-white transition-colors">
                  eaux pluviales
                </Link>
                {' '}pour bâtiments industriels et hôtels.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Services Particuliers</h4>
              <p className="leading-relaxed">
                Pour les particuliers, nous installons des{' '}
                <Link href="/particuliers/services/photovoltaique" className="text-gea-light-blue hover:text-white transition-colors">
                  panneaux solaires
                </Link>
                , des{' '}
                <Link href="/particuliers/services/terrasses" className="text-gea-light-blue hover:text-white transition-colors">
                  terrasses sur plot
                </Link>
                , et proposons des solutions de{' '}
                <Link href="/particuliers/services/peintures-isolantes" className="text-gea-light-blue hover:text-white transition-colors">
                  peintures isolantes
                </Link>{' '}
                et de{' '}
                <Link href="/particuliers/services/eaux-pluviales" className="text-gea-light-blue hover:text-white transition-colors">
                  gestion des eaux pluviales
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Groupe Expert Altitude (GEA SAS) - SIRET 942 173 972 - Tous droits réservés
            </p>
            <p>
              Réalisé par{' '}
              <a
                href="https://digiflow-agency.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gea-light-blue font-semibold hover:text-white transition-colors"
              >
                DIGIFLOW AGENCY
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
