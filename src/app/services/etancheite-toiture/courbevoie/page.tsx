import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Courbevoie | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Courbevoie et dans toute la région parisienne. Nos ',
  keywords: 'etancheite toiture courbevoie, etancheite toit terrasse courbevoie, etancheite toiture terrasse courbevoie, reparation etancheite courbevoie, entreprise etancheite courbevoie, fuite toiture terrasse courbevoie',
};

export default function EtancheiteToitureCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Courbevoie et dans toute la région parisienne. Nos experts interviennent rapidement pour protéger votre bâtiment contre les infiltrations et les dégradations potentielles.</p>

        <h2>Nos services de étanchéité toiture terrasse a Courbevoie</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un élément crucial pour préserver l&apos;intégrité structurelle de votre bâtiment. Notre équipe spécialisée utilise des techniques de pointe et des matériaux de haute qualité pour garantir une protection maximale contre les infiltrations d&apos;eau. Nous réalisons un diagnostic précis avant toute intervention, identifiant les points faibles et proposant des solutions sur-mesure adaptées à chaque configuration. Notre processus comprend un traitement complet : préparation de la surface, application de membranes d&apos;étanchéité haute performance, et finition soignée pour une protection durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence en étanchéité de toiture terrasse. Nos avantages clés : 15 ans d&apos;expérience à Courbevoie, une équipe certifiée, un diagnostic gratuit, des interventions rapides sous 48h, et une garantie décennale. Nous intervenons sur tous types de toitures terrassses, résidentielles et professionnelles.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la superficie, l&apos;état actuel et les matériaux choisis. Pour un appartement standard à Courbevoie, comptez entre 2 500€ et 5 000€ pour une rénovation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, décoloration des murs, moisissures, ou zones de stagnation d&apos;eau. Un professionnel utilisera des techniques comme la caméra thermique ou le test à l&apos;eau pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans avec un entretien régulier. Les membranes modernes en PVC ou EPDM offrent une durabilité et une résistance optimales aux conditions climatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Courbevoie ?
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
