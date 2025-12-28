import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Rezé | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité toiture terrasse à Rezé, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations d&apos;eau. Nos ',
  keywords: 'etancheite toiture rezé, etancheite toit terrasse rezé, etancheite toiture terrasse rezé, reparation etancheite rezé, entreprise etancheite rezé, fuite toiture terrasse rezé',
};

export default function EtancheiteToitureRezePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Rezé</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité toiture terrasse à Rezé, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations d&apos;eau. Nos solutions techniques garantissent une protection durable et performante pour tous vos bâtiments résidentiels et professionnels.</p>

        <h2>Nos services de étanchéité toiture terrasse a Rezé</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un enjeu crucial pour préserver l&apos;intégrité structurelle de votre bâtiment. Notre équipe hautement qualifiée intervient sur l&apos;ensemble de la métropole de Rezé avec des techniques de pointe, utilisant des membranes synthétiques haute résistance et des systèmes d&apos;imperméabilisation innovants. Nous réalisons un diagnostic précis avant toute intervention, identifiant les points faibles et proposant une solution sur-mesure. Notre processus comprend le nettoyage approfondi, la préparation du support, l&apos;application de primaire d&apos;accrochage et la pose d&apos;une membrane d&apos;étanchéité garantissant une protection optimale contre les infiltrations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : une expertise de plus de 15 ans, des techniciens certifiés, un diagnostic gratuit, des matériaux de haute qualité, une intervention rapide sur Rezé et ses environs. Nous proposons des garanties décennales et un suivi personnalisé pour chaque chantier d&apos;étanchéité de toiture terrasse.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la superficie, la complexité technique et les matériaux utilisés. Pour un toit terrasse moyen de 50m², comptez un investissement global entre 2 500€ et 7 500€. Un devis personnalisé gratuit permet d&apos;obtenir un prix précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, décoloration des murs, moisissures, ou zones de stagnation d&apos;eau. Un professionnel utilisera des méthodes comme la thermographie infrarouge ou des tests d&apos;étanchéité pour identifier précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée est de 15 à 25 ans. Les facteurs déterminants sont la qualité des matériaux, la pose, l&apos;entretien régulier et l&apos;exposition aux conditions climatiques. Un diagnostic et des interventions préventives tous les 5-7 ans permettent de prolonger significativement cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Rezé ?
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
