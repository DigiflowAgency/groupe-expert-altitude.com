import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Martigues | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Martigues et ses environs. Spécialistes depuis plus d',
  keywords: 'etancheite toiture martigues, etancheite toit terrasse martigues, etancheite toiture terrasse martigues, reparation etancheite martigues, entreprise etancheite martigues, fuite toiture terrasse martigues',
};

export default function EtancheiteToitureMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Martigues et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons efficacement vos bâtiments contre les infiltrations et les dégradations climatiques.</p>

        <h2>Nos services de étanchéité toiture terrasse a Martigues</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente une solution technique complète et sur-mesure pour sécuriser votre patrimoine immobilier. Nous intervenons sur tous types de toitures terrasses, qu&apos;elles soient résidentielles, commerciales ou industrielles à Martigues et dans le département des Bouches-du-Rhône. Notre expertise technique nous permet de diagnostiquer précisément les zones fragiles, puis de proposer un traitement adapté utilisant les membranes et produits les plus performants du marché. Chaque intervention fait l&apos;objet d&apos;un protocole rigoureux : expertise initiale, préparation des surfaces, application des systèmes d&apos;étanchéité haute résistance et contrôle final garantissant une protection durable contre les infiltrations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un service premium : notre équipe certifiée intervient avec du matériel professionnel de dernière génération, nous proposons 10 ans de garantie décennale, nos devis sont transparents sans frais cachés, et nous intervenons rapidement sur Martigues avec un délai moyen de 72h après diagnostic.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie généralement entre 50€ et 120€ au m², selon la surface, l&apos;état initial et les matériaux utilisés. Pour une terrasse moyenne de 30m², comptez un investissement global entre 1500€ et 3600€. Un diagnostic précis permettra d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, décoloration des peintures, moisissures suspectes ou zones de stagnation d&apos;eau. Un professionnel utilisera des techniques comme la thermographie ou le test à l&apos;eau pour identifier précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. Les membranes modernes en élastomère ou en PVC offrent une très haute résistance aux variations climatiques et aux UV, garantissant une protection optimale de votre toiture terrasse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Martigues ?
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
