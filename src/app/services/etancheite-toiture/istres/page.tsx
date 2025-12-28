import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Istres | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Istres et ses environs. Spécialistes reconnus, nous prot',
  keywords: 'etancheite toiture istres, etancheite toit terrasse istres, etancheite toiture terrasse istres, reparation etancheite istres, entreprise etancheite istres, fuite toiture terrasse istres',
};

export default function EtancheiteToitureIstresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Istres</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Istres et ses environs. Spécialistes reconnus, nous protégeons efficacement vos bâtiments contre les infiltrations grâce à des solutions techniques sur-mesure adaptées au climat provençal.</p>

        <h2>Nos services de étanchéité toiture terrasse a Istres</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente bien plus qu&apos;une simple intervention technique. Nous réalisons un diagnostic précis avant toute intervention, en analysant la structure, les matériaux et les potentielles zones de faiblesse. Notre équipe utilise uniquement des membranes d&apos;étanchéité haute performance, garantissant une protection optimale contre l&apos;eau et les intempéries. Chaque chantier à Istres est traité avec une attention méticuleuse, en privilégiant des techniques modernes qui assurent une durabilité minimale de 15 ans. Nos interventions couvrent aussi bien les bâtiments résidentiels que professionnels, avec des solutions personnalisées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans sur Istres et la région PACA
• Techniciens certifiés et formés aux dernières normes d&apos;étanchéité
• Devis gratuit et transparent sous 48h
• Garantie décennale sur tous nos travaux
• Matériaux de haute qualité sélectionnés avec rigueur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la toiture. Pour une surface moyenne de 50m², comptez un budget global entre 2 500€ et 7 500€. Un diagnostic précalable permet d&apos;affiner ce chiffrage.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, zones de décoloration, moisissures ou boursoufflures. Un test à l&apos;eau ou une inspection thermographique par nos experts permet de localiser précisément les points faibles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans, avec un entretien régulier. La qualité des matériaux, la pose et les conditions climatiques influencent directement cette durée de vie. Nos solutions intègrent des membranes garanties 20 ans, avec un suivi technique annuel recommandé.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Istres ?
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
