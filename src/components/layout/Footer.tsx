import Link from 'next/link';
import Image from 'next/image';

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
    { name: 'Paris', href: '/gea-paris' },
    { name: 'Île-de-France', href: '/gea-ile-de-france' },
    { name: 'Lyon', href: '/gea-lyon' },
    { name: 'Marseille', href: '/gea-marseille' },
    { name: 'Toulouse', href: '/gea-toulouse' },
    { name: 'Bordeaux', href: '/gea-bordeaux' },
  ];

  return (
    <footer className="bg-gea-black text-white">
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
                  href="/gea-lille"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GEA Lille
                </Link>
              </li>
              <li>
                <Link
                  href="/gea-strasbourg"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GEA Strasbourg
                </Link>
              </li>
              <li>
                <Link
                  href="/gea-nantes"
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
                <Link href="/gea-paris" className="text-gea-light-blue hover:text-white transition-colors">
                  Paris
                </Link>
                , en{' '}
                <Link href="/gea-ile-de-france" className="text-gea-light-blue hover:text-white transition-colors">
                  Île-de-France
                </Link>
                , à{' '}
                <Link href="/gea-lyon" className="text-gea-light-blue hover:text-white transition-colors">
                  Lyon
                </Link>
                ,{' '}
                <Link href="/gea-marseille" className="text-gea-light-blue hover:text-white transition-colors">
                  Marseille
                </Link>
                ,{' '}
                <Link href="/gea-toulouse" className="text-gea-light-blue hover:text-white transition-colors">
                  Toulouse
                </Link>
                ,{' '}
                <Link href="/gea-bordeaux" className="text-gea-light-blue hover:text-white transition-colors">
                  Bordeaux
                </Link>{' '}
                et dans toute la France pour vos travaux en hauteur sur bâtiments professionnels, entrepôts et immeubles.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Links Section - Services par ville */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h4 className="text-white font-semibold mb-6 text-center">Nos services dans les principales villes</h4>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-xs">
            {/* Cordistes */}
            <div>
              <h5 className="text-white font-semibold mb-3">Cordistes</h5>
              <ul className="space-y-1.5">
                <li><Link href="/cordiste-paris" className="text-gray-400 hover:text-gea-light-blue transition-colors">Cordiste Paris</Link></li>
                <li><Link href="/cordiste-lyon" className="text-gray-400 hover:text-gea-light-blue transition-colors">Cordiste Lyon</Link></li>
                <li><Link href="/cordiste-marseille" className="text-gray-400 hover:text-gea-light-blue transition-colors">Cordiste Marseille</Link></li>
                <li><Link href="/cordiste-nice" className="text-gray-400 hover:text-gea-light-blue transition-colors">Cordiste Nice</Link></li>
                <li><Link href="/cordiste-toulouse" className="text-gray-400 hover:text-gea-light-blue transition-colors">Cordiste Toulouse</Link></li>
                <li><Link href="/cordiste-bordeaux" className="text-gray-400 hover:text-gea-light-blue transition-colors">Cordiste Bordeaux</Link></li>
              </ul>
            </div>

            {/* Ravalement façade */}
            <div>
              <h5 className="text-white font-semibold mb-3">Ravalement façade</h5>
              <ul className="space-y-1.5">
                <li><Link href="/ravalement-facade-paris" className="text-gray-400 hover:text-gea-light-blue transition-colors">Ravalement Paris</Link></li>
                <li><Link href="/ravalement-facade-lyon" className="text-gray-400 hover:text-gea-light-blue transition-colors">Ravalement Lyon</Link></li>
                <li><Link href="/ravalement-facade-marseille" className="text-gray-400 hover:text-gea-light-blue transition-colors">Ravalement Marseille</Link></li>
                <li><Link href="/ravalement-facade-nice" className="text-gray-400 hover:text-gea-light-blue transition-colors">Ravalement Nice</Link></li>
                <li><Link href="/ravalement-facade-bordeaux" className="text-gray-400 hover:text-gea-light-blue transition-colors">Ravalement Bordeaux</Link></li>
                <li><Link href="/ravalement-facade-lille" className="text-gray-400 hover:text-gea-light-blue transition-colors">Ravalement Lille</Link></li>
              </ul>
            </div>

            {/* Étanchéité toiture */}
            <div>
              <h5 className="text-white font-semibold mb-3">Étanchéité toiture</h5>
              <ul className="space-y-1.5">
                <li><Link href="/etancheite-toiture-paris" className="text-gray-400 hover:text-gea-light-blue transition-colors">Étanchéité Paris</Link></li>
                <li><Link href="/etancheite-toiture-lyon" className="text-gray-400 hover:text-gea-light-blue transition-colors">Étanchéité Lyon</Link></li>
                <li><Link href="/etancheite-toiture-marseille" className="text-gray-400 hover:text-gea-light-blue transition-colors">Étanchéité Marseille</Link></li>
                <li><Link href="/etancheite-toiture-toulouse" className="text-gray-400 hover:text-gea-light-blue transition-colors">Étanchéité Toulouse</Link></li>
                <li><Link href="/etancheite-toiture-nantes" className="text-gray-400 hover:text-gea-light-blue transition-colors">Étanchéité Nantes</Link></li>
                <li><Link href="/etancheite-toiture-nice" className="text-gray-400 hover:text-gea-light-blue transition-colors">Étanchéité Nice</Link></li>
              </ul>
            </div>

            {/* Panneaux photovoltaïques */}
            <div>
              <h5 className="text-white font-semibold mb-3">Photovoltaïque</h5>
              <ul className="space-y-1.5">
                <li><Link href="/panneaux-photovoltaiques-paris" className="text-gray-400 hover:text-gea-light-blue transition-colors">Solaire Paris</Link></li>
                <li><Link href="/panneaux-photovoltaiques-lyon" className="text-gray-400 hover:text-gea-light-blue transition-colors">Solaire Lyon</Link></li>
                <li><Link href="/panneaux-photovoltaiques-marseille" className="text-gray-400 hover:text-gea-light-blue transition-colors">Solaire Marseille</Link></li>
                <li><Link href="/panneaux-photovoltaiques-nice" className="text-gray-400 hover:text-gea-light-blue transition-colors">Solaire Nice</Link></li>
                <li><Link href="/panneaux-photovoltaiques-bordeaux" className="text-gray-400 hover:text-gea-light-blue transition-colors">Solaire Bordeaux</Link></li>
                <li><Link href="/panneaux-photovoltaiques-toulouse" className="text-gray-400 hover:text-gea-light-blue transition-colors">Solaire Toulouse</Link></li>
              </ul>
            </div>

            {/* Cool Roof */}
            <div>
              <h5 className="text-white font-semibold mb-3">Cool Roof</h5>
              <ul className="space-y-1.5">
                <li><Link href="/cool-roof-paris" className="text-gray-400 hover:text-gea-light-blue transition-colors">Cool Roof Paris</Link></li>
                <li><Link href="/cool-roof-lyon" className="text-gray-400 hover:text-gea-light-blue transition-colors">Cool Roof Lyon</Link></li>
                <li><Link href="/cool-roof-marseille" className="text-gray-400 hover:text-gea-light-blue transition-colors">Cool Roof Marseille</Link></li>
                <li><Link href="/cool-roof-nice" className="text-gray-400 hover:text-gea-light-blue transition-colors">Cool Roof Nice</Link></li>
                <li><Link href="/cool-roof-toulouse" className="text-gray-400 hover:text-gea-light-blue transition-colors">Cool Roof Toulouse</Link></li>
                <li><Link href="/cool-roof-bordeaux" className="text-gray-400 hover:text-gea-light-blue transition-colors">Cool Roof Bordeaux</Link></li>
              </ul>
            </div>

            {/* Terrasses bois */}
            <div>
              <h5 className="text-white font-semibold mb-3">Terrasse bois</h5>
              <ul className="space-y-1.5">
                <li><Link href="/terrasse-bois-paris" className="text-gray-400 hover:text-gea-light-blue transition-colors">Terrasse Paris</Link></li>
                <li><Link href="/terrasse-bois-lyon" className="text-gray-400 hover:text-gea-light-blue transition-colors">Terrasse Lyon</Link></li>
                <li><Link href="/terrasse-bois-marseille" className="text-gray-400 hover:text-gea-light-blue transition-colors">Terrasse Marseille</Link></li>
                <li><Link href="/terrasse-bois-nice" className="text-gray-400 hover:text-gea-light-blue transition-colors">Terrasse Nice</Link></li>
                <li><Link href="/terrasse-bois-bordeaux" className="text-gray-400 hover:text-gea-light-blue transition-colors">Terrasse Bordeaux</Link></li>
                <li><Link href="/terrasse-bois-nantes" className="text-gray-400 hover:text-gea-light-blue transition-colors">Terrasse Nantes</Link></li>
              </ul>
            </div>

            {/* Ligne de vie */}
            <div>
              <h5 className="text-white font-semibold mb-3">Ligne de vie</h5>
              <ul className="space-y-1.5">
                <li><Link href="/ligne-de-vie-paris" className="text-gray-400 hover:text-gea-light-blue transition-colors">Ligne de vie Paris</Link></li>
                <li><Link href="/ligne-de-vie-lyon" className="text-gray-400 hover:text-gea-light-blue transition-colors">Ligne de vie Lyon</Link></li>
                <li><Link href="/ligne-de-vie-marseille" className="text-gray-400 hover:text-gea-light-blue transition-colors">Ligne de vie Marseille</Link></li>
                <li><Link href="/ligne-de-vie-lille" className="text-gray-400 hover:text-gea-light-blue transition-colors">Ligne de vie Lille</Link></li>
                <li><Link href="/ligne-de-vie-toulouse" className="text-gray-400 hover:text-gea-light-blue transition-colors">Ligne de vie Toulouse</Link></li>
                <li><Link href="/ligne-de-vie-nantes" className="text-gray-400 hover:text-gea-light-blue transition-colors">Ligne de vie Nantes</Link></li>
              </ul>
            </div>

            {/* Gouttières */}
            <div>
              <h5 className="text-white font-semibold mb-3">Gouttières</h5>
              <ul className="space-y-1.5">
                <li><Link href="/gouttiere-paris" className="text-gray-400 hover:text-gea-light-blue transition-colors">Gouttière Paris</Link></li>
                <li><Link href="/gouttiere-lyon" className="text-gray-400 hover:text-gea-light-blue transition-colors">Gouttière Lyon</Link></li>
                <li><Link href="/gouttiere-marseille" className="text-gray-400 hover:text-gea-light-blue transition-colors">Gouttière Marseille</Link></li>
                <li><Link href="/gouttiere-bordeaux" className="text-gray-400 hover:text-gea-light-blue transition-colors">Gouttière Bordeaux</Link></li>
                <li><Link href="/gouttiere-nice" className="text-gray-400 hover:text-gea-light-blue transition-colors">Gouttière Nice</Link></li>
                <li><Link href="/gouttiere-toulouse" className="text-gray-400 hover:text-gea-light-blue transition-colors">Gouttière Toulouse</Link></li>
              </ul>
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
