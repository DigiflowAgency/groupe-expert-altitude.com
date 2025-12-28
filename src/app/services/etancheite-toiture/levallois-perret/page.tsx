import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Levallois-Perret | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Levallois-Perret, spécialiste des solutions durables co',
  keywords: 'etancheite toiture levallois-perret, etancheite toit terrasse levallois-perret, etancheite toiture terrasse levallois-perret, reparation etancheite levallois-perret, entreprise etancheite levallois-perret, fuite toiture terrasse levallois-perret',
};

export default function EtancheiteToitureLevalloisPerretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Levallois-Perret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Levallois-Perret, spécialiste des solutions durables contre les infiltrations d&apos;eau. Avec plus de 15 ans d&apos;expérience, nous protégeons efficacement votre patrimoine immobilier dans toute la région parisienne.</p>

        <h2>Nos services de étanchéité toiture terrasse a Levallois-Perret</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente la solution technique ultime contre les risques d&apos;infiltration et de dégradation structurelle. Nous intervenons sur tous types de toitures terrasses, qu&apos;elles soient en béton, métalliques ou en bois, en utilisant des techniques de pointe et des matériaux haute performance. Notre processus comprend un diagnostic précis, un traitement personnalisé et une application rigoureuse des membranes d&apos;étanchéité, garantissant une protection optimale contre l&apos;humidité. À Levallois-Perret, nous adaptons chaque intervention aux spécificités architecturales locales, assurant une imperméabilisation durable et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise technique certifiée avec des techniciens formés aux dernières normes d&apos;étanchéité
✓ Diagnostic gratuit et devis détaillé sous 48h
✓ Garantie décennale sur tous nos travaux
✓ Solutions sur-mesure respectant les contraintes techniques de votre toiture terrasse</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de votre toiture. Pour un projet moyen de 50m², comptez un investissement global entre 4 000€ et 12 500€, incluant diagnostic, matériaux et main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite sur une toiture terrasse incluent des traces d&apos;humidité sur les plafonds, des infiltrations lors de fortes pluies, des zones de décoloration, des moisissures ou des boursoufflures sur les revêtements. Un professionnel détectera précisément l&apos;origine des infiltrations grâce à des tests d&apos;étanchéité et une inspection thermographique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans, avec un entretien régulier. Les membranes modernes en PVC ou en élastomère offrent une durabilité maximale. Un diagnostic annuel et des réparations préventives permettent de prolonger significativement cette durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Levallois-Perret ?
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
