import Link from 'next/link';
import { villes } from '@/data/seo-locations';

type MaillageVillesProps = {
  serviceSlug: string;
  serviceName: string;
  accentColor?: 'orange' | 'blue' | 'green';
};

export default function MaillageVilles({ serviceSlug, serviceName, accentColor = 'orange' }: MaillageVillesProps) {
  // Grouper les villes par région
  const villesParRegion = villes.reduce((acc, ville) => {
    if (!acc[ville.region]) {
      acc[ville.region] = [];
    }
    acc[ville.region].push(ville);
    return acc;
  }, {} as Record<string, typeof villes>);

  // Trier les régions par ordre alphabétique
  const regionsTriees = Object.keys(villesParRegion).sort();

  const colorClasses = {
    orange: {
      text: 'text-orange-500',
      hover: 'hover:text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-100',
    },
    blue: {
      text: 'text-blue-500',
      hover: 'hover:text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
    },
    green: {
      text: 'text-green-500',
      hover: 'hover:text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-100',
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <section className={`py-16 ${colors.bg}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {serviceName} pres de chez vous
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous intervenons dans toute la France. Trouvez nos services dans votre ville.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {regionsTriees.map((region) => (
            <div key={region} className={`bg-white rounded-2xl p-5 shadow-sm border ${colors.border}`}>
              <h3 className="font-bold text-gray-800 mb-3 pb-2 border-b border-gray-100 text-sm">
                {region}
              </h3>
              <ul className="space-y-1.5">
                {villesParRegion[region].map((ville) => (
                  <li key={ville.slug}>
                    <Link
                      href={`/particuliers/services/${serviceSlug}/${ville.slug}`}
                      className={`text-gray-600 ${colors.hover} transition-colors text-sm flex items-center gap-2`}
                    >
                      <svg className={`w-3 h-3 ${colors.text}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {ville.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
