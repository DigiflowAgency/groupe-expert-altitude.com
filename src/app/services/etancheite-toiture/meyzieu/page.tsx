import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Meyzieu | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Meyzieu et ses environs. Spécialistes reconnus, nous pr',
  keywords: 'etancheite toiture meyzieu, etancheite toit terrasse meyzieu, etancheite toiture terrasse meyzieu, reparation etancheite meyzieu, entreprise etancheite meyzieu, fuite toiture terrasse meyzieu',
};

export default function EtancheiteToitureMeyzieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Meyzieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Meyzieu et ses environs. Spécialistes reconnus, nous protégeons votre patrimoine immobilier contre les infiltrations et les dégradations avec des solutions techniques sur-mesure.</p>

        <h2>Nos services de étanchéité toiture terrasse a Meyzieu</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences techniques les plus strictes, garantissant une protection durable contre les intempéries. Nous intervenons sur tous types de structures - résidentielles, commerciales et industrielles - en utilisant des membranes haute performance adaptées à chaque configuration. Notre processus comprend un diagnostic précis par thermographie infrarouge, permettant de détecter les moindres points faibles, puis une intervention ciblée avec des matériaux d&apos;étanchéité dernière génération. À Meyzieu, plus de 95% de nos interventions bénéficient d&apos;une garantie décennale, témoignant de notre engagement qualité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise se distingue par : 1) Une équipe de techniciens certifiés avec plus de 15 ans d&apos;expérience, 2) Des solutions personnalisées évaluées sur-mesure, 3) Un diagnostic technique gratuit avant toute intervention, 4) Des matériaux écologiques et performants répondant aux normes environnementales actuelles.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 80€ et 250€ au m², selon la complexité des travaux, les matériaux utilisés et l&apos;état initial de la surface. Un diagnostic précis est nécessaire pour établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations, des déformations, des moisissures ou des zones de stagnation d&apos;eau. Un professionnel peut réaliser un test d&apos;étanchéité par caméra thermique pour identifier précisément les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans, avec un entretien régulier. La durée de vie dépend des matériaux utilisés, de la qualité de la pose et des conditions climatiques locales à Meyzieu.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Meyzieu ?
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
