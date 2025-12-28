import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Bordeaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Bordeaux et ses environs. Nos experts mettent leur savo',
  keywords: 'etancheite toiture bordeaux, etancheite toit terrasse bordeaux, etancheite toiture terrasse bordeaux, reparation etancheite bordeaux, entreprise etancheite bordeaux, fuite toiture terrasse bordeaux',
};

export default function EtancheiteToitureBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Bordeaux et ses environs. Nos experts mettent leur savoir-faire au service de la protection de votre patrimoine immobilier contre les infiltrations et les dégradations.</p>

        <h2>Nos services de étanchéité toiture terrasse a Bordeaux</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un enjeu crucial pour préserver la structure et la longévité de votre bâtiment. Notre équipe hautement qualifiée réalise des interventions sur mesure, en utilisant les techniques les plus récentes et les matériaux les plus performants. Nous diagnostiquons précisément chaque situation, qu&apos;il s&apos;agisse d&apos;une rénovation complète ou d&apos;une réparation ciblée. Notre processus comprend un audit technique détaillé, la préparation de la surface, l&apos;application de membranes d&apos;étanchéité haute résistance et un contrôle final garantissant une protection optimale contre les infiltrations d&apos;eau.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est l&apos;assurance d&apos;un service premium : notre équipe cumule plus de 25 ans d&apos;expérience à Bordeaux, nous proposons une garantie décennale, nos interventions sont rapides et précises, et nous utilisons uniquement des matériaux certifiés de haute qualité. Notre taux de satisfaction client dépasse 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité des travaux et les matériaux choisis. Pour une terrasse moyenne de 50m², comptez un budget entre 4 000€ et 12 500€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, moisissures, infiltrations lors de fortes pluies, déformations ou cloques sur la surface. Un professionnel utilisera des techniques comme la thermographie ou des tests d&apos;étanchéité pour identifier précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée a une durée de vie moyenne de 15 à 25 ans. Cette longévité dépend de la qualité des matériaux, de l&apos;application, de l&apos;exposition aux intempéries et de l&apos;entretien régulier. Un suivi annuel permet de prolonger significativement cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Bordeaux ?
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
