import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Bègles | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Bègles et ses environs. Spécialistes de la protecti',
  keywords: 'etancheite toiture bègles, etancheite toit terrasse bègles, etancheite toiture terrasse bègles, reparation etancheite bègles, entreprise etancheite bègles, fuite toiture terrasse bègles',
};

export default function EtancheiteToitureBeglesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Bègles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Bègles et ses environs. Spécialistes de la protection contre les infiltrations, nous garantissons des solutions durables et sur-mesure pour préserver l&apos;intégrité de votre bâtiment.</p>

        <h2>Nos services de étanchéité toiture terrasse a Bègles</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques des constructions girondines, en utilisant des techniques de pointe et des matériaux haute performance. Nous réalisons un diagnostic précis avant toute intervention, identifiant chaque point faible et proposant une solution adaptée. Notre processus comprend un traitement complet : préparation de la surface, application de membranes d&apos;étanchéité renforcées, et finition soignée pour une protection maximale contre les intempéries. Nos équipes interviennent sur tous types de toitures terrasses, qu&apos;il s&apos;agisse de bâtiments résidentiels, commerciaux ou industriels à Bègles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience, nous utilisons uniquement des matériaux garantis 10 ans, et nous proposons un suivi personnalisé. Notre taux de satisfaction client dépasse 95% et nous intervenons sous 48h en cas d&apos;urgence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la toiture. Pour une surface moyenne de 50m², comptez un investissement global entre 4 000€ et 12 500€, incluant diagnostic, matériaux et main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, recherchez des signes comme des traces d&apos;humidité sur les plafonds, des infiltrations, des zones de décoloration ou des moisissures. Des tests d&apos;étanchéité avec simulation de pluie permettent de localiser précisément les points faibles. Notre diagnostic complet utilise des techniques infrarouges et des tests d&apos;étanchéité avancés.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée a une durée de vie moyenne de 15 à 25 ans. Nos solutions atteignent jusqu&apos;à 30 ans avec un entretien régulier. Les facteurs déterminants sont la qualité des matériaux, la pose, l&apos;exposition aux intempéries et la maintenance annuelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Bègles ?
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
