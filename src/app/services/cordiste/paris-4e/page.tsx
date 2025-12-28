import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Paris 4e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde dans le cœur historique de Paris 4e. Nos cordistes professionnels intervien',
  keywords: 'cordiste paris 4e, travaux sur corde paris 4e, travaux acrobatiques paris 4e, cordiste batiment paris 4e, intervention cordiste paris 4e, entreprise cordiste paris 4e',
};

export default function CordisteParis4ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Paris 4e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde dans le cœur historique de Paris 4e. Nos cordistes professionnels interviennent sur les sites les plus techniques et sensibles de la capitale, garantissant des solutions acrobatiques sécurisées et précises.</p>

        <h2>Nos services de travaux sur corde - cordistes a Paris 4e</h2>
        <div className="space-y-4">
          <p>Nos experts cordistes proposent des interventions hautement qualifiées pour tous types de bâtiments et structures complexes. Que ce soit pour de la rénovation, maintenance, nettoyage ou inspection technique, notre équipe maîtrise parfaitement les techniques d&apos;accès difficile. Nos techniciens sont équipés des derniers matériels de sécurité et disposent de certifications professionnelles rigoureuses. Dans le 4e arrondissement, nous intervenons sur des bâtiments historiques, immeubles contemporains et sites patrimoniaux avec une efficacité et une précision remarquables. Chaque intervention fait l&apos;objet d&apos;un diagnostic préalable et d&apos;un plan d&apos;action personnalisé.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- 15 ans d&apos;expertise dans les travaux acrobatiques
- Certification IRATA internationale
- Équipements de sécurité dernière génération
- Interventions rapides sur Paris et sa région
- Devis gratuit et transparents
- Assurance responsabilité civile professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 180€ par heure selon la complexité technique, la hauteur d&apos;intervention et les équipements spécifiques requis. Un diagnostic préalable gratuit permet de définir un devis précis adapté à votre projet spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste professionnel, il est nécessaire d&apos;obtenir des certifications comme l&apos;IRATA niveau 1, 2 ou 3. La formation comprend des modules théoriques et pratiques de 5 à 10 jours, avec des tests techniques rigoureux sur les techniques de sécurité, les nœuds et les protocoles d&apos;urgence.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA ou SPRAT, leur expérience professionnelle, leurs références clients, leur couverture assurantielle et leurs équipements de sécurité. Un entretien technique préalable permet de valider leurs compétences spécifiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Paris 4e ?
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
