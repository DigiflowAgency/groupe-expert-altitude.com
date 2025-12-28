import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Protégez votre patrimoine immobilier avec l&apos;expertise en étanchéité de toiture terrasse du Groupe Expert Altitude Com, votre partenaire de référence à Aix-',
  keywords: 'etancheite toiture aix-en-provence, etancheite toit terrasse aix-en-provence, etancheite toiture terrasse aix-en-provence, reparation etancheite aix-en-provence, entreprise etancheite aix-en-provence, fuite toiture terrasse aix-en-provence',
};

export default function EtancheiteToitureAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Protégez votre patrimoine immobilier avec l&apos;expertise en étanchéité de toiture terrasse du Groupe Expert Altitude Com, votre partenaire de référence à Aix-en-Provence. Nos solutions sur-mesure garantissent une protection durable contre les infiltrations et les dégradations climatiques.</p>

        <h2>Nos services de étanchéité toiture terrasse a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente bien plus qu&apos;une simple intervention technique. Nos experts interviennent sur tous types de toitures, en réalisant un diagnostic précis avant toute intervention. Nous utilisons des membranes d&apos;étanchéité haute performance, adaptées à chaque configuration architecturale, avec une attention particulière aux spécificités climatiques d&apos;Aix-en-Provence. Notre processus inclut un relevé méticuleux, une préparation de surface optimale et une application rigoureuse, assurant une imperméabilité totale et une protection à long terme de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans à Aix-en-Provence
• Techniciens certifiés et formés aux dernières technologies
• Garantie décennale sur tous nos travaux
• Devis détaillés et transparents sous 48h
• Interventions rapides et adaptées à chaque problématique</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité et les matériaux utilisés. Pour un projet moyen de 30m², comptez entre 2 500€ et 7 500€. Un diagnostic préalable gratuit permet d&apos;affiner précisément le devis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez des signes comme des traces d&apos;humidité, des infiltrations, des décolorations au plafond, ou des remontées d&apos;eau. Notre équipe utilise des techniques professionnelles comme la thermographie infrarouge et des tests d&apos;étanchéité précis pour localiser exactement l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. Notre garantie décennale et l&apos;utilisation de matériaux haut de gamme assurent une protection optimale. L&apos;entretien régulier et les interventions préventives prolongent significativement la durée de vie de votre toiture terrasse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Aix-en-Provence ?
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
