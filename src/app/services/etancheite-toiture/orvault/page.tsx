import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Orvault | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité toiture terrasse à Orvault, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les d',
  keywords: 'etancheite toiture orvault, etancheite toit terrasse orvault, etancheite toiture terrasse orvault, reparation etancheite orvault, entreprise etancheite orvault, fuite toiture terrasse orvault',
};

export default function EtancheiteToitureOrvaultPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Orvault</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité toiture terrasse à Orvault, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dégradations. Notre expertise technique garantit des solutions durables pour tous vos défis d&apos;étanchéité dans la région nantaise.</p>

        <h2>Nos services de étanchéité toiture terrasse a Orvault</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité toiture terrasse répond aux problématiques spécifiques des bâtiments résidentiels et professionnels à Orvault. Nous intervenons avec des techniques modernes et des matériaux haute performance comme les membranes synthétiques, les résines liquides et les systèmes bicouches. Notre diagnostic précis permet d&apos;identifier chaque point faible et de proposer une solution personnalisée, avec un taux de réussite de 98% sur les réparations d&apos;étanchéité. Nos techniciens qualifiés réalisent un travail minutieux, en respectant les normes techniques et environnementales actuelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Orvault et ses environs
✓ Équipe de 12 techniciens certifiés et formés en continu
✓ Diagnostic gratuit et devis détaillé sous 48h
✓ Garantie décennale sur tous nos travaux d&apos;étanchéité
✓ Matériaux écologiques et techniques innovantes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité et les matériaux utilisés. Pour un toit terrasse moyen de 50m², comptez un investissement global entre 4 000€ et 12 500€. Un diagnostic précis permettra de définir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite sur une toiture terrasse incluent des traces d&apos;humidité sur les plafonds, des infiltrations, des zones de décoloration, des moisissures ou des déformations. Un professionnel détectera précisément l&apos;origine via une inspection thermique et un test d&apos;étanchéité avec marquage des zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité installée par des professionnels peut durer entre 15 et 25 ans. La durée de vie dépend des matériaux, de l&apos;exposition aux intempéries, de l&apos;entretien régulier et de la qualité de la pose initiale. Un suivi annuel permet de prolonger significativement cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Orvault ?
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
