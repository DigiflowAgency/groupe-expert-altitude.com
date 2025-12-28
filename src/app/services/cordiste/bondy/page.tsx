import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Bondy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en travaux sur corde à Bondy, propose des solutions acrobatiques professionnelles et sécurisées pour',
  keywords: 'cordiste bondy, travaux sur corde bondy, travaux acrobatiques bondy, cordiste batiment bondy, intervention cordiste bondy, entreprise cordiste bondy',
};

export default function CordisteBondyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Bondy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en travaux sur corde à Bondy, propose des solutions acrobatiques professionnelles et sécurisées pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur l&apos;ensemble du département avec une expertise technique inégalée.</p>

        <h2>Nos services de travaux sur corde - cordistes a Bondy</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution ultime pour les interventions complexes en milieux verticaux et difficiles d&apos;accès. Nos cordistes professionnels maîtrisent parfaitement les techniques d&apos;accès et de positionnement, permettant des réalisations précises dans les domaines du bâtiment, de l&apos;industrie et de la rénovation. Chaque intervention est précédée d&apos;une analyse technique minutieuse garantissant sécurité et efficacité maximales. Notre équipe à Bondy dispose d&apos;équipements homologués et d&apos;une formation continue qui nous positionnent comme des experts reconnus dans le domaine des travaux acrobatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Certification IRATA internationale garantissant une qualité d&apos;intervention irréprochable
• Plus de 15 ans d&apos;expérience sur des chantiers complexes
• Équipe de 12 cordistes spécialisés basée à Bondy
• Assurance professionnelle complète couvrant tous types d&apos;interventions</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité technique, la hauteur d&apos;intervention et l&apos;équipement spécifique requis. Un devis personnalisé est systématiquement établi après une évaluation précise du chantier.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, une formation professionnelle est obligatoire avec certification IRATA/SPRAT. Le parcours inclut des formations théoriques et pratiques, des stages intensifs de techniques de sécurité, des tests physiques et techniques rigoureux, ainsi qu&apos;une expérience minimale de manipulation des équipements.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : leurs certifications IRATA/SPRAT, leur assurance professionnelle, les références de chantiers précédents, les avis clients et leur ancienneté sur le marché. Une entreprise sérieuse transmettra facilement ces justificatifs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Bondy ?
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
