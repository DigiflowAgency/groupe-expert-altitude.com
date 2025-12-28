import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Pantin | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité de toiture terrasse à Pantin, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les',
  keywords: 'etancheite toiture pantin, etancheite toit terrasse pantin, etancheite toiture terrasse pantin, reparation etancheite pantin, entreprise etancheite pantin, fuite toiture terrasse pantin',
};

export default function EtancheiteToiturePantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité de toiture terrasse à Pantin, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dégradations. Nos solutions techniques garantissent une protection maximale adaptée aux spécificités architecturales de votre bâtiment.</p>

        <h2>Nos services de étanchéité toiture terrasse a Pantin</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse représente un enjeu crucial pour la préservation de votre habitat ou local professionnel. Notre équipe intervient sur tous types de structures à Pantin et ses environs, en réalisant un diagnostic précis avant toute intervention. Nous utilisons des membranes techniques haute performance (EPDM, PVC, bitume) qui assurent une imperméabilité totale et durable. Notre processus comprend un état des lieux complet, un traitement des points singuliers, et une application méthodique des matériaux d&apos;étanchéité selon les normes en vigueur. Plus de 92% de nos interventions permettent de résoudre définitivement les problématiques d&apos;infiltration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expérience, nous proposons une expertise technique reconnue. Nos techniciens sont formés aux dernières technologies d&apos;étanchéité. Nous garantissons nos interventions pendant 10 ans. Devis gratuit et transparent, intervention rapide sur Pantin et la région parisienne.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la toiture. Pour un appartement de 50m², comptez un budget global entre 4 000€ et 12 500€ avec notre entreprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes révélateurs d&apos;une fuite sur toiture terrasse incluent des traces d&apos;humidité sur les plafonds, des infiltrations lors de fortes pluies, des zones de décoloration, des moisissures ou des gonflements au niveau des cloisons. Un diagnostic professionnel permet de localiser précisément l&apos;origine de la fuite.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée a une durée de vie moyenne entre 15 et 25 ans. Nos solutions atteignent jusqu&apos;à 30 ans avec un entretien régulier. Un contrôle annuel et des interventions préventives permettent de maximiser la longévité de l&apos;étanchéité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Pantin ?
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
