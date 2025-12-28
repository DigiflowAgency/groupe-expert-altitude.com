import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Bouguenais | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Bouguenais et ses environs. Spécialistes reconnus dans',
  keywords: 'etancheite toiture bouguenais, etancheite toit terrasse bouguenais, etancheite toiture terrasse bouguenais, reparation etancheite bouguenais, entreprise etancheite bouguenais, fuite toiture terrasse bouguenais',
};

export default function EtancheiteToitureBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Bouguenais et ses environs. Spécialistes reconnus dans la protection de vos toitures, nous intervenons rapidement pour garantir l&apos;intégrité et la durabilité de vos espaces extérieurs.</p>

        <h2>Nos services de étanchéité toiture terrasse a Bouguenais</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente une solution professionnelle et durable contre les infiltrations d&apos;eau. Nous utilisons des techniques de pointe et des matériaux haute performance pour traiter chaque surface unique. Notre processus commence par un diagnostic précis, où nos experts évaluent l&apos;état exact de votre toiture terrasse. Nous proposons ensuite un traitement personnalisé, qu&apos;il s&apos;agisse d&apos;une rénovation complète ou d&apos;une réparation ciblée. Dans la région de Bouguenais, nous comptons plus de 15 ans d&apos;expérience dans la résolution des problèmes d&apos;étanchéité, avec un taux de satisfaction client de 98%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec des techniciens formés aux dernières normes d&apos;étanchéité, 2) Des interventions rapides et sur-mesure, 3) Des matériaux garantis 10 ans, 4) Un devis gratuit et transparent sans engagement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la complexité des travaux et les matériaux utilisés. Un diagnostic précis permet de vous fournir un devis détaillé et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme les traces d&apos;humidité, les infiltrations, les moisissures ou les déformations du plafond. Un professionnel utilisera des tests d&apos;étanchéité spécifiques pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend de la qualité des matériaux, de l&apos;exposition aux intempéries et de l&apos;entretien régulier.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Bouguenais ?
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
