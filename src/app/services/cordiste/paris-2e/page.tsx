import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Paris 2e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde innovants et sécurisés au cœur de Paris 2e. Nos cordistes hautement',
  keywords: 'cordiste paris 2e, travaux sur corde paris 2e, travaux acrobatiques paris 2e, cordiste batiment paris 2e, intervention cordiste paris 2e, entreprise cordiste paris 2e',
};

export default function CordisteParis2ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Paris 2e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde innovants et sécurisés au cœur de Paris 2e. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus techniques de la capitale, garantissant des solutions acrobatiques sur mesure.</p>

        <h2>Nos services de travaux sur corde - cordistes a Paris 2e</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution ultime pour toute intervention en hauteur nécessitant précision et expertise technique. Nos cordistes professionnels sont spécialisés dans des missions complexes allant de la rénovation de façades à l&apos;entretien de monuments historiques dans Paris 2e. Chaque intervention est minutieusement préparée, avec des équipements de pointe certifiés et une évaluation précise des risques. Notre approche combine technicité et sécurité maximale, permettant des travaux acrobatiques efficaces sur des structures urbaines variées, depuis les immeubles haussmanniens jusqu&apos;aux bâtiments contemporains.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Certification IRATA internationale garantissant une expertise mondiale
• Plus de 15 ans d&apos;expérience exclusive en travaux verticaux
• Équipe de 12 cordistes spécialisés basée à Paris 2e
• Matériel dernier cri renouvelé annuellement
• Zéro accident depuis notre création, sécurité absolue</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, avec un devis personnalisé gratuit. Les facteurs déterminants incluent la hauteur, l&apos;accessibilité et le type de travaux à réaliser.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste requiert une formation IRATA niveau 1, 2 ou 3, un certificat de travaux en hauteur, une condition physique irréprochable et une absence de vertige. Une formation initiale de 5 jours et des recyclages annuels sont obligatoires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : la certification IRATA, l&apos;assurance responsabilité civile professionnelle, les références clients, les attestations de formation des techniciens et un historique de réalisations dans votre secteur d&apos;activité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Paris 2e ?
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
