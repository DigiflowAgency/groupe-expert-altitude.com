import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Issy-les-Moulineaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en étanchéité de toiture terrasse à Issy-les-Moulineaux, protège votre patrimoine immobilier contre les infil',
  keywords: 'etancheite toiture issy-les-moulineaux, etancheite toit terrasse issy-les-moulineaux, etancheite toiture terrasse issy-les-moulineaux, reparation etancheite issy-les-moulineaux, entreprise etancheite issy-les-moulineaux, fuite toiture terrasse issy-les-moulineaux',
};

export default function EtancheiteToitureIssyLesMoulineauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Issy-les-Moulineaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en étanchéité de toiture terrasse à Issy-les-Moulineaux, protège votre patrimoine immobilier contre les infiltrations. Nous intervenons rapidement et efficacement sur tous types de toitures dans la région parisienne.</p>

        <h2>Nos services de étanchéité toiture terrasse a Issy-les-Moulineaux</h2>
        <div className="space-y-4">
          <p>Notre expertise en étanchéité de toiture terrasse répond aux problématiques complexes de l&apos;habitat moderne. Nous utilisons des techniques d&apos;application innovantes, garantissant une protection optimale contre les infiltrations d&apos;eau. Notre processus comprend un diagnostic précis, un traitement sur-mesure et une application professionnelle des membranes d&apos;étanchéité. Nos techniciens hautement qualifiés interviennent sur Issy-les-Moulineaux et ses environs, en respectant les normes techniques les plus strictes. Chaque chantier fait l&apos;objet d&apos;un suivi personnalisé, avec des matériaux de haute qualité offrant jusqu&apos;à 20 ans de garantie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique de plus de 15 ans en étanchéité de toiture
- Interventions rapides sous 48h à Issy-les-Moulineaux
- Diagnostic gratuit et devis détaillé sans engagement
- Certifications professionnelles et assurances décennales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, les matériaux et la complexité des travaux. Pour un appartement standard à Issy-les-Moulineaux, comptez entre 3 000€ et 8 000€ pour une rénovation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des moisissures, des déformations de peinture ou des écoulements visibles. Un professionnel détecte précisément l&apos;origine des infiltrations grâce à des tests d&apos;étanchéité et une inspection thermographique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend des matériaux utilisés, de la qualité de pose et de l&apos;entretien régulier. Nos solutions garantissent une protection durable contre les infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Issy-les-Moulineaux ?
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
