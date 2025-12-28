import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Draguignan | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Draguignan et ses environs. Spécialistes reconnus dan',
  keywords: 'etancheite toiture draguignan, etancheite toit terrasse draguignan, etancheite toiture terrasse draguignan, reparation etancheite draguignan, entreprise etancheite draguignan, fuite toiture terrasse draguignan',
};

export default function EtancheiteToitureDraguignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Draguignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Draguignan et ses environs. Spécialistes reconnus dans la protection de vos bâtiments contre les infiltrations, nous intervenons avec précision et expertise sur l&apos;ensemble du Var.</p>

        <h2>Nos services de étanchéité toiture terrasse a Draguignan</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité d&apos;une toiture terrasse représente un enjeu crucial pour préserver l&apos;intégrité structurelle de votre bâtiment. Notre équipe qualifiée utilise des techniques et matériaux de dernière génération pour garantir une protection optimale contre les infiltrations d&apos;eau. Nous réalisons un diagnostic précis avant toute intervention, identifiant les points faibles et proposant une solution sur-mesure adaptée à votre configuration. Nos interventions couvrent la réfection complète, les réparations localisées et les traitements préventifs, avec une attention particulière portée aux spécificités climatiques de la région de Draguignan.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique de plus de 15 ans dans le domaine de l&apos;étanchéité
- Équipe certifiée et formée aux dernières normes professionnelles
- Devis gratuit et transparent sans engagement
- Utilisation exclusive de matériaux haute performance garantissant une durabilité maximale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la complexité des travaux, les matériaux utilisés et l&apos;état initial de la toiture. Un diagnostic précis nous permet de vous proposer un devis détaillé et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme les traces d&apos;humidité sur les plafonds, les moisissures, les déformations ou écaillements de peinture. Notre équipe réalise un diagnostic complet avec des techniques de thermographie infrarouge permettant de localiser précisément les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. Nos solutions utilisent des membranes synthétiques et des traitements qui garantissent une protection optimale contre les agressions climatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Draguignan ?
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
