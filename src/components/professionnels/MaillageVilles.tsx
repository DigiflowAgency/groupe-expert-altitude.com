import Link from 'next/link';
import { villes } from '@/data/seo-locations';

type MaillageVillesProps = {
  serviceSlug: string;
  serviceName: string;
};

export default function MaillageVilles({ serviceSlug, serviceName }: MaillageVillesProps) {
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gea-black mb-4">
            {serviceName} dans toute la France
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos equipes interviennent sur l&apos;ensemble du territoire. Selectionnez votre ville pour obtenir un devis personnalise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {regionsTriees.map((region) => (
            <div key={region} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gea-black mb-4 pb-2 border-b border-gray-100">
                {region}
              </h3>
              <ul className="space-y-2">
                {villesParRegion[region].map((ville) => (
                  <li key={ville.slug}>
                    <Link
                      href={`/professionnels/services/${serviceSlug}/${ville.slug}`}
                      className="text-gray-600 hover:text-gea-blue transition-colors text-sm flex items-center gap-2"
                    >
                      <svg className="w-3 h-3 text-gea-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" clipRule="evenodd" />
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
