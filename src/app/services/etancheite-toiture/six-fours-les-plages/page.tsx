import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Six-Fours-les-Plages | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Six-Fours-les-Plages et ses environs. Nos experts inte',
  keywords: 'etancheite toiture six-fours-les-plages, etancheite toit terrasse six-fours-les-plages, etancheite toiture terrasse six-fours-les-plages, reparation etancheite six-fours-les-plages, entreprise etancheite six-fours-les-plages, fuite toiture terrasse six-fours-les-plages',
};

export default function EtancheiteToitureSixFoursLesPlagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Six-Fours-les-Plages</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Six-Fours-les-Plages et ses environs. Nos experts interviennent rapidement pour protéger votre bâtiment contre les infiltrations d&apos;eau et garantir la longévité de votre toiture.</p>

        <h2>Nos services de étanchéité toiture terrasse a Six-Fours-les-Plages</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques des habitations et locaux professionnels de Six-Fours-les-Plages. Nous utilisons des techniques et matériaux de pointe comme les membranes synthétiques EPDM et les résines polyuréthanes, garantissant une protection optimale contre les infiltrations. Notre processus comprend un diagnostic précis, un traitement personnalisé et une intervention minutieuse, avec un taux de réussite de 98% sur les chantiers d&apos;étanchéité. Chaque intervention est réalisée par des techniciens hautement qualifiés, formés aux dernières normes techniques et environnementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans à Six-Fours-les-Plages
• Diagnostic gratuit et devis détaillé sous 48h
• Techniciens certifiés et assurés
• Garantie décennale sur nos interventions
• Solutions techniques adaptées à chaque type de toiture terrasse</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la surface, l&apos;état initial et les matériaux utilisés. Pour une terrasse moyenne de 30m², comptez un investissement global entre 1500€ et 4500€, travaux et matériaux compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, recherchez des signes comme des taches d&apos;humidité sur les plafonds, des infiltrations lors de fortes pluies, des déformations ou moisissures. Un test d&apos;étanchéité par nos experts permet de localiser précisément l&apos;origine des infiltrations avec une précision de 95%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. Notre garantie décennale couvre les défauts d&apos;étanchéité, et nos interventions sont conçues pour maximiser la durabilité de votre toiture terrasse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Six-Fours-les-Plages ?
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
