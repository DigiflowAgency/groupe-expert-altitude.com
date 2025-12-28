import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Villenave-d&apos;Ornon et ses environs. Spécialistes rec',
  keywords: 'etancheite toiture villenave-d'ornon, etancheite toit terrasse villenave-d'ornon, etancheite toiture terrasse villenave-d'ornon, reparation etancheite villenave-d'ornon, entreprise etancheite villenave-d'ornon, fuite toiture terrasse villenave-d'ornon',
};

export default function EtancheiteToitureVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Villenave-d&apos;Ornon et ses environs. Spécialistes reconnus dans la protection de vos bâtiments contre les infiltrations, nous intervenons avec précision et expertise sur tous types de toitures.</p>

        <h2>Nos services de étanchéité toiture terrasse a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques de chaque bâtiment. Nous réalisons un diagnostic précis avant toute intervention, en analysant la structure, les matériaux et les potentielles zones de faiblesse. Notre méthode exclusive combine des techniques modernes et des produits haute performance garantissant une protection durable contre les infiltrations. Chaque intervention à Villenave-d&apos;Ornon est personnalisée, avec des solutions adaptées à l&apos;architecture et aux contraintes environnementales locales, assurant une étanchéité optimale et une protection long terme de votre patrimoine.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans dans l&apos;étanchéité 
• Équipe certifiée et formée aux dernières technologies 
• Diagnostic gratuit et devis détaillé sous 48h 
• Interventions rapides et précises 
• Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la complexité, les matériaux et la surface. Pour un projet moyen de 50m², comptez un investissement global entre 2 500€ et 7 500€. Un diagnostic précis permettra d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations, des zones de moisissures, des déformations ou des taches. Un professionnel détectera les points faibles par inspection visuelle, tests d&apos;étanchéité et utilisation de caméras thermiques pour identifier précisément les zones endommagées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée de vie dépend de plusieurs facteurs : qualité des matériaux, technique de pose, exposition aux intempéries et maintenance régulière. Un entretien annuel peut significativement prolonger cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Villenave-d'Ornon ?
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
