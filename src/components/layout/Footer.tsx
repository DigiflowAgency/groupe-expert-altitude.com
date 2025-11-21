import Link from 'next/link';

export default function Footer() {
  const services = [
    { name: 'Travaux en hauteur', href: '/services/travaux-en-hauteur' },
    { name: 'Enveloppe du bâtiment', href: '/services/enveloppe-batiment' },
    { name: 'Couverture & Toiture', href: '/services/couverture-toiture' },
    { name: 'Cordistes professionnels', href: '/services/cordistes' },
    { name: 'Sécurisation', href: '/services/securisation' },
    { name: 'Maintenance technique', href: '/services/maintenance-technique' },
  ];

  const cities = [
    { name: 'Paris', href: '/seo/paris' },
    { name: 'Île-de-France', href: '/seo/ile-de-france' },
    { name: 'Lyon', href: '/seo/lyon' },
    { name: 'Marseille', href: '/seo/marseille' },
    { name: 'Toulouse', href: '/seo/toulouse' },
    { name: 'Bordeaux', href: '/seo/bordeaux' },
  ];

  return (
    <footer className="bg-gea-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="/logo-gea-carre-simple-transparent.png"
                alt="Groupe Expert Altitude"
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

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
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

          {/* Zones d'intervention */}
          <div>
            <h3 className="font-bold text-lg mb-4">Zones d'intervention</h3>
            <ul className="space-y-2 text-sm">
              {cities.map((city) => (
                <li key={city.href}>
                  <Link
                    href={city.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    GEA {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/seo/lille"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GEA Lille
                </Link>
              </li>
              <li>
                <Link
                  href="/seo/strasbourg"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GEA Strasbourg
                </Link>
              </li>
              <li>
                <Link
                  href="/seo/nantes"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GEA Nantes
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
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
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Actualités
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

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Horaires</h4>
              <p className="text-gray-300 text-sm">
                Lundi - Vendredi<br />
                8h00 - 18h00
              </p>
            </div>
          </div>
        </div>

        {/* Internal Linking Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="text-white font-semibold mb-3">Expertises techniques</h4>
              <p className="leading-relaxed">
                Spécialistes des{' '}
                <Link href="/services/travaux-en-hauteur" className="text-gea-light-blue hover:text-white transition-colors">
                  travaux en hauteur
                </Link>
                , nous intervenons sur{' '}
                <Link href="/services/couverture-toiture" className="text-gea-light-blue hover:text-white transition-colors">
                  couverture et toiture
                </Link>
                , l&apos;{' '}
                <Link href="/services/enveloppe-batiment" className="text-gea-light-blue hover:text-white transition-colors">
                  enveloppe du bâtiment
                </Link>{' '}
                et la{' '}
                <Link href="/services/maintenance-technique" className="text-gea-light-blue hover:text-white transition-colors">
                  maintenance technique
                </Link>
                . Nos{' '}
                <Link href="/services/cordistes" className="text-gea-light-blue hover:text-white transition-colors">
                  cordistes professionnels
                </Link>{' '}
                assurent la{' '}
                <Link href="/services/securisation" className="text-gea-light-blue hover:text-white transition-colors">
                  sécurisation
                </Link>{' '}
                de vos installations.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Interventions géographiques</h4>
              <p className="leading-relaxed">
                Nous intervenons à{' '}
                <Link href="/seo/paris" className="text-gea-light-blue hover:text-white transition-colors">
                  Paris
                </Link>
                , en{' '}
                <Link href="/seo/ile-de-france" className="text-gea-light-blue hover:text-white transition-colors">
                  Île-de-France
                </Link>
                , à{' '}
                <Link href="/seo/lyon" className="text-gea-light-blue hover:text-white transition-colors">
                  Lyon
                </Link>
                ,{' '}
                <Link href="/seo/marseille" className="text-gea-light-blue hover:text-white transition-colors">
                  Marseille
                </Link>
                ,{' '}
                <Link href="/seo/toulouse" className="text-gea-light-blue hover:text-white transition-colors">
                  Toulouse
                </Link>
                ,{' '}
                <Link href="/seo/bordeaux" className="text-gea-light-blue hover:text-white transition-colors">
                  Bordeaux
                </Link>{' '}
                et dans toute la France pour vos travaux en hauteur sur bâtiments professionnels, entrepôts et immeubles.
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
