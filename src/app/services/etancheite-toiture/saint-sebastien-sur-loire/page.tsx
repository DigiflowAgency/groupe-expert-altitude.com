import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Spécialistes de l&apos;étanchéité toiture terrasse à Saint-Sébastien-sur-Loire, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les inf',
  keywords: 'etancheite toiture saint-sébastien-sur-loire, etancheite toit terrasse saint-sébastien-sur-loire, etancheite toiture terrasse saint-sébastien-sur-loire, reparation etancheite saint-sébastien-sur-loire, entreprise etancheite saint-sébastien-sur-loire, fuite toiture terrasse saint-sébastien-sur-loire',
};

export default function EtancheiteToitureSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialistes de l&apos;étanchéité toiture terrasse à Saint-Sébastien-sur-Loire, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations. Nos solutions techniques garantissent une protection durable et une tranquillité totale pour les propriétaires de la région nantaise.</p>

        <h2>Nos services de étanchéité toiture terrasse a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques des bâtiments résidentiels et professionnels de Saint-Sébastien-sur-Loire. Nous intervenons avec une méthodologie précise : diagnostic technique complet, identification des zones sensibles et mise en œuvre de solutions sur-mesure. Notre équipe utilise uniquement des matériaux haute performance comme les membranes synthétiques EPDM et les résines polyuréthanes, offrant une résistance maximale aux intempéries. Chaque intervention fait l&apos;objet d&apos;un traitement personnalisé, avec un taux de réussite de 98% dans la résolution définitive des problèmes d&apos;étanchéité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : 15 ans d&apos;expertise technique, équipe certifiée, interventions rapides sous 48h, devis gratuit et détaillé, solutions garanties 10 ans. Nous sommes le partenaire de confiance pour tous vos projets d&apos;étanchéité sur Saint-Sébastien-sur-Loire et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier et les matériaux utilisés. Pour une surface moyenne de 30m², comptez un investissement global entre 1500€ et 4500€, travaux et matériaux compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, moisissures, décoloration des peintures, infiltrations lors de fortes pluies. Un test d&apos;étanchéité professionnel permet une détection précise et sans risque.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité installée par des professionnels peut durer entre 15 et 25 ans. Notre garantie décennale atteste de la durabilité de nos interventions, avec un suivi technique régulier recommandé tous les 5 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Saint-Sébastien-sur-Loire ?
          Demandez votre devis gratuit.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Demander un devis gratuit
        </a>
      </section>
    </main>
  );
}
