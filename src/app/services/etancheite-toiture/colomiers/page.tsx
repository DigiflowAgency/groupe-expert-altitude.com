import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Colomiers | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Colomiers et ses environs. Spécialistes reconnus dans l',
  keywords: 'etancheite toiture colomiers, etancheite toit terrasse colomiers, etancheite toiture terrasse colomiers, reparation etancheite colomiers, entreprise etancheite colomiers, fuite toiture terrasse colomiers',
};

export default function EtancheiteToitureColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Colomiers et ses environs. Spécialistes reconnus dans la protection de vos bâtiments, nous intervenons avec précision pour garantir l&apos;intégrité et la durabilité de vos toitures.</p>

        <h2>Nos services de étanchéité toiture terrasse a Colomiers</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences techniques les plus strictes. Nous réalisons un diagnostic complet avant toute intervention, identifiant précisément les zones de fragilité et les solutions adaptées. Notre méthodologie s&apos;appuie sur des techniques modernes : application de membranes synthétiques, résines spéciales et systèmes d&apos;imperméabilisation haute performance. Chaque chantier à Colomiers est traité sur-mesure, en fonction de la structure, de l&apos;exposition aux intempéries et des contraintes spécifiques de votre bâtiment. Nos interventions permettent de prévenir les infiltrations, protéger la structure et éviter des dégradations coûteuses à long terme.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique, notre réactivité et notre engagement qualité. 95% de nos clients recommandent nos services. Notre équipe certifiée intervient sous 48h, propose un devis gratuit et utilise uniquement des matériaux de haute qualité. Nous garantissons nos interventions pendant 10 ans, offrant une tranquillité d&apos;esprit totale aux propriétaires de Colomiers et de l&apos;agglomération toulousaine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la superficie, la complexité des travaux et les matériaux utilisés. Pour un toit moyen de 50m², comptez un budget entre 2500€ et 7500€. Un diagnostic précis permettra d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations, des moisissures, des déformations ou des taches. Nous recommandons une inspection annuelle et une vigilance particulière après des épisodes climatiques intenses. Un test d&apos;étanchéité par nos experts permet de localiser précisément les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée de vie dépend de plusieurs facteurs : qualité des matériaux, technique de pose, entretien régulier et exposition aux conditions climatiques. Nos solutions intègrent des garanties décennales pour vous assurer une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Colomiers ?
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
