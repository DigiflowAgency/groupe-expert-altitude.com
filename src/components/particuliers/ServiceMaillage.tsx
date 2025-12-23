import Link from 'next/link';

// Configuration des services particuliers avec leurs slugs SEO
const servicesConfig = [
  {
    slug: 'photovoltaique',
    seoSlug: 'panneaux-photovoltaiques',
    name: 'Panneaux solaires',
    icon: '☀️',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    slug: 'terrasses',
    seoSlug: 'terrasse-bois',
    name: 'Terrasses sur plot',
    icon: '🌿',
    color: 'from-amber-500 to-green-500',
  },
  {
    slug: 'eaux-pluviales',
    seoSlug: 'gouttiere',
    name: 'Gouttières & eaux pluviales',
    icon: '🌧️',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    slug: 'peintures-isolantes',
    seoSlug: 'ravalement-facade',
    name: 'Peintures isolantes',
    icon: '🎨',
    color: 'from-emerald-400 to-sky-500',
  },
  {
    slug: 'recherche-fuites',
    seoSlug: 'etancheite-toiture',
    name: 'Recherche de fuites',
    icon: '🔍',
    color: 'from-cyan-400 to-blue-500',
  },
];

// Villes principales pour le maillage (12 grandes villes)
const villesPrincipales = [
  { slug: 'paris', name: 'Paris' },
  { slug: 'lyon', name: 'Lyon' },
  { slug: 'marseille', name: 'Marseille' },
  { slug: 'toulouse', name: 'Toulouse' },
  { slug: 'bordeaux', name: 'Bordeaux' },
  { slug: 'nantes', name: 'Nantes' },
  { slug: 'lille', name: 'Lille' },
  { slug: 'nice', name: 'Nice' },
  { slug: 'montpellier', name: 'Montpellier' },
  { slug: 'strasbourg', name: 'Strasbourg' },
  { slug: 'rennes', name: 'Rennes' },
  { slug: 'grenoble', name: 'Grenoble' },
];

interface ServiceMaillageProps {
  currentService: string; // slug du service actuel (ex: 'photovoltaique')
  accentColor?: string; // couleur d'accent pour le thème (ex: 'yellow', 'emerald', 'blue')
}

export default function ServiceMaillage({ currentService, accentColor = 'orange' }: ServiceMaillageProps) {
  // Filtrer les autres services (exclure le service actuel)
  const autresServices = servicesConfig.filter(s => s.slug !== currentService);

  // Trouver le service actuel pour récupérer son seoSlug
  const serviceActuel = servicesConfig.find(s => s.slug === currentService);
  const seoSlug = serviceActuel?.seoSlug || currentService;

  // Couleurs d'accent basées sur le thème
  const colorClasses: Record<string, { bg: string; text: string; hover: string; border: string }> = {
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', hover: 'hover:bg-yellow-100', border: 'border-yellow-200' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', hover: 'hover:bg-orange-100', border: 'border-orange-200' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', hover: 'hover:bg-emerald-100', border: 'border-emerald-200' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'hover:bg-blue-100', border: 'border-blue-200' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', hover: 'hover:bg-cyan-100', border: 'border-cyan-200' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', hover: 'hover:bg-amber-100', border: 'border-amber-200' },
  };

  const colors = colorClasses[accentColor] || colorClasses.orange;

  return (
    <>
      {/* Section Autres Services */}
      <section className={`py-16 ${colors.bg}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className={`${colors.text} font-semibold text-sm uppercase tracking-wider`}>Maillage interne</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
              Nos autres services pour particuliers
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Découvrez l&apos;ensemble de nos prestations pour améliorer votre habitat
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {autresServices.map((service) => (
              <Link
                key={service.slug}
                href={`/particuliers/services/${service.slug}`}
                className={`group bg-white rounded-xl p-5 text-center shadow-sm border ${colors.border} hover:shadow-md transition-all duration-300`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm leading-tight">{service.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Localisations */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className={`${colors.text} font-semibold text-sm uppercase tracking-wider`}>Intervention nationale</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
              Nous intervenons partout en France
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Retrouvez nos équipes dans les principales villes françaises
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {villesPrincipales.map((ville) => (
              <Link
                key={ville.slug}
                href={`/particuliers/services/${seoSlug}/${ville.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium ${colors.bg} ${colors.text} ${colors.hover} border ${colors.border} transition-all duration-200`}
              >
                {ville.name}
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Et dans plus de 30 autres villes en France...
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
