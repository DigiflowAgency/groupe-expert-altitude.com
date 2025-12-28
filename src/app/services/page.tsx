import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nos services | Groupe Expert Altitude Com',
  description: 'Decouvrez tous les services proposes par Groupe Expert Altitude Com. Devis gratuit.',
};

export default function ServicesPage() {
  const services = [
  {
    "name": "Travaux sur corde - Cordistes",
    "slug": "cordiste"
  },
  {
    "name": "Installation panneaux solaires photovoltaïques",
    "slug": "panneaux-solaires"
  },
  {
    "name": "Ravalement de façade",
    "slug": "ravalement-facade"
  },
  {
    "name": "Étanchéité toiture terrasse",
    "slug": "etancheite-toiture"
  },
  {
    "name": "Recherche et détection de fuites",
    "slug": "recherche-fuite"
  },
  {
    "name": "Terrasse bois sur plot",
    "slug": "terrasse-bois"
  },
  {
    "name": "Peinture isolante thermique",
    "slug": "peinture-isolante"
  },
  {
    "name": "Gouttières et descentes pluviales",
    "slug": "gouttiere"
  },
  {
    "name": "Nettoyage vitres en hauteur",
    "slug": "nettoyage-vitres-hauteur"
  },
  {
    "name": "Traitement et démoussage toiture",
    "slug": "traitement-toiture"
  },
  {
    "name": "Couverture et rénovation toiture",
    "slug": "couverture-toiture"
  },
  {
    "name": "Travaux de zinguerie",
    "slug": "zinguerie"
  },
  {
    "name": "Maintenance et nettoyage panneaux solaires",
    "slug": "maintenance-photovoltaique"
  }
];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nos services</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="p-6 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
          >
            <h2 className="text-xl font-semibold">{service.name}</h2>
          </Link>
        ))}
      </section>
    </main>
  );
}
