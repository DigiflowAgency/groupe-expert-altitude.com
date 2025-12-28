import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Clichy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Clichy, offrant des solutions acrobatiques professionnelles et sécurisées',
  keywords: 'cordiste clichy, travaux sur corde clichy, travaux acrobatiques clichy, cordiste batiment clichy, intervention cordiste clichy, entreprise cordiste clichy',
};

export default function CordisteClichyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Clichy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Clichy, offrant des solutions acrobatiques professionnelles et sécurisées pour tous vos défis en hauteur. Notre équipe de cordistes hautement qualifiés intervient sur des chantiers complexes avec une expertise technique unique.</p>

        <h2>Nos services de travaux sur corde - cordistes a Clichy</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes couvrent une large gamme d&apos;interventions techniques dans le bâtiment et l&apos;industrie. Grâce à des techniques d&apos;accès difficile, nous réalisons des travaux de maintenance, rénovation et inspection sur des structures verticales où les méthodes traditionnelles sont impossibles. Notre approche combine technicité et sécurité maximale, permettant des interventions précises sur des façades, monuments historiques, ouvrages industriels et sites sensibles. Chaque mission est évaluée individuellement pour proposer une solution sur-mesure adaptée aux contraintes spécifiques de votre projet à Clichy ou dans la région parisienne.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certifications professionnelles IRATA/SFETH garantissant une qualité d&apos;intervention irréprochable
- Plus de 15 ans d&apos;expérience dans les travaux acrobatiques
- Équipements de dernière génération conformes aux normes de sécurité les plus strictes
- Interventions rapides et devis personnalisés sous 48h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité des travaux, l&apos;accessibilité du site et les équipements nécessaires. Un diagnostic préalable gratuit permet d&apos;établir un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation qualifiante, obtenir des certifications IRATA (niveau 1, 2 ou 3), justifier d&apos;une condition physique excellente et réussir des examens théoriques et pratiques portant sur les techniques de travail en hauteur et les protocoles de sécurité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs références, demandez leurs certifications IRATA/SFETH, consultez leurs avis clients, assurez-vous de leur couverture d&apos;assurance professionnelle et exigez un devis détaillé avec les modalités d&apos;intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Clichy ?
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
