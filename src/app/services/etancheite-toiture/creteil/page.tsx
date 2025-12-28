import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Créteil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en étanchéité de toiture terrasse à Créteil et dans le Val-de-Marne. Nous protégeons votre patrim',
  keywords: 'etancheite toiture créteil, etancheite toit terrasse créteil, etancheite toiture terrasse créteil, reparation etancheite créteil, entreprise etancheite créteil, fuite toiture terrasse créteil',
};

export default function EtancheiteToitureCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en étanchéité de toiture terrasse à Créteil et dans le Val-de-Marne. Nous protégeons votre patrimoine immobilier contre les infiltrations avec des solutions sur-mesure et une expertise technique irréprochable.</p>

        <h2>Nos services de étanchéité toiture terrasse a Créteil</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente la solution ultime contre les risques d&apos;infiltrations et de dégradations structurelles. Notre équipe de professionnels intervient sur tous types de toitures terrasses, qu&apos;elles soient résidentielles ou commerciales, à Créteil et ses environs. Nous utilisons des techniques et matériaux de dernière génération, garantissant une imperméabilisation optimale et durable. Notre processus complet comprend un diagnostic précis, une préparation minutieuse de la surface, l&apos;application de membranes techniques haute performance et un contrôle qualité rigoureux. Nos interventions permettent de prolonger la durée de vie de votre toiture de 15 à 25 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans à Créteil
• Techniciens certifiés et formés en permanence
• Devis gratuit et transparents
• Garantie décennale sur nos travaux
• Solutions personnalisées adaptées à chaque configuration de toiture</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 70€ et 150€ au m², selon la surface, la complexité et les matériaux utilisés. Pour un appartement standard à Créteil, comptez un budget global entre 3 000€ et 8 000€. Un diagnostic précis permettra d&apos;établir un devis détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des taches d&apos;humidité sur les plafonds, des infiltrations lors de fortes pluies, des zones de décoloration, des moisissures ou des déformations. Notre équipe réalise un diagnostic complet avec caméra thermique et tests d&apos;étanchéité pour identifier précisément les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité professionnelle dure généralement entre 15 et 25 ans. Notre garantie décennale couvre les travaux, et nos techniques d&apos;application permettent une durabilité maximale. L&apos;entretien régulier et des réparations préventives peuvent significativement prolonger cette durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Créteil ?
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
