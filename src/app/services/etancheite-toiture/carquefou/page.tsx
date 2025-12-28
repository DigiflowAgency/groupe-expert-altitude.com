import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Carquefou | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Carquefou et ses environs. Spécialistes de la prote',
  keywords: 'etancheite toiture carquefou, etancheite toit terrasse carquefou, etancheite toiture terrasse carquefou, reparation etancheite carquefou, entreprise etancheite carquefou, fuite toiture terrasse carquefou',
};

export default function EtancheiteToitureCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Carquefou et ses environs. Spécialistes de la protection contre les infiltrations, nous garantissons des solutions durables pour préserver l&apos;intégrité de votre bâtiment.</p>

        <h2>Nos services de étanchéité toiture terrasse a Carquefou</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un service essentiel pour protéger votre patrimoine contre les risques d&apos;infiltration et de dégradation. Notre équipe technique intervient sur tous types de surfaces, en utilisant des membranes haute performance adaptées à chaque configuration. Nous réalisons un diagnostic précis avant toute intervention, identifiant les points faibles et proposant une solution sur-mesure. Notre processus comprend le nettoyage approfondi de la surface, la préparation du support, l&apos;application de primaire d&apos;accrochage et la pose d&apos;une membrane d&apos;étanchéité garantissant une protection optimale contre l&apos;eau et les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise se distingue par : 1) Une intervention rapide sur Carquefou et la Loire-Atlantique, 2) Des techniciens certifiés et formés aux dernières techniques, 3) Un diagnostic gratuit et transparent, 4) Des matériaux de haute qualité avec garantie décennale. Plus de 95% de nos clients recommandent nos services après intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et les matériaux utilisés. Un diagnostic précis permet un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations lors de fortes pluies, des déformations ou cloques sur la membrane, et des zones de stagnation d&apos;eau. Un professionnel peut réaliser un test d&apos;étanchéité avec précision.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. La durée de vie dépend des matériaux utilisés, de l&apos;exposition aux intempéries et de la qualité de la pose initiale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Carquefou ?
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
