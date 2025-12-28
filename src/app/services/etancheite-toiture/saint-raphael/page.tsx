import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Saint-Raphaël et ses environs. Avec plus de 15 ans d&apos;e',
  keywords: 'etancheite toiture saint-raphaël, etancheite toit terrasse saint-raphaël, etancheite toiture terrasse saint-raphaël, reparation etancheite saint-raphaël, entreprise etancheite saint-raphaël, fuite toiture terrasse saint-raphaël',
};

export default function EtancheiteToitureSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Saint-Raphaël et ses environs. Avec plus de 15 ans d&apos;expérience, nous protégeons efficacement vos bâtiments contre les infiltrations dans le climat méditerranéen exigeant.</p>

        <h2>Nos services de étanchéité toiture terrasse a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux spécificités techniques des constructions sur la Côte d&apos;Azur. Nous utilisons des membranes synthétiques haute performance garantissant une protection optimale contre l&apos;humidité et les intempéries. Notre processus comprend un diagnostic précis, un nettoyage approfondi de la surface, puis l&apos;application de systèmes d&apos;étanchéité adaptés à chaque configuration. Nos techniciens certifiés interviennent sur tous types de toitures terrasses : résidentielles, commerciales et industrielles à Saint-Raphaël.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec 98% de satisfaction client
- Interventions rapides sous 48h
- Garantie décennale sur nos travaux
- Techniques innovantes et écologiques
- Devis gratuit et personnalisé</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ par m², selon la complexité et les matériaux. Pour une surface moyenne de 50m², comptez un investissement global entre 2 500€ et 7 500€ avec notre entreprise à Saint-Raphaël.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations, des zones de décoloration ou des moisissures. Notre diagnostic technique utilise des caméras thermiques et des tests d&apos;infiltrométrie pour localiser précisément les zones endommagées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité installée par des professionnels peut durer entre 15 et 25 ans. Nos systèmes garantis bénéficient d&apos;un entretien préventif qui peut prolonger significativement leur durée de vie utile.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Saint-Raphaël ?
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
