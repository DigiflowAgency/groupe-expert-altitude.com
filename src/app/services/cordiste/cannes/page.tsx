import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Cannes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour tous vos travaux acrobatiques sur la Côte d&apos;Azur. Spécialisés en interventions cordist',
  keywords: 'cordiste cannes, travaux sur corde cannes, travaux acrobatiques cannes, cordiste batiment cannes, intervention cordiste cannes, entreprise cordiste cannes',
};

export default function CordisteCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour tous vos travaux acrobatiques sur la Côte d&apos;Azur. Spécialisés en interventions cordistes à Cannes et ses environs, nous garantissons des solutions techniques sûres et précises en hauteur.</p>

        <h2>Nos services de travaux sur corde - cordistes a Cannes</h2>
        <div className="space-y-4">
          <p>Nos cordistes professionnels interviennent sur des chantiers complexes nécessitant une expertise technique et une maîtrise parfaite des techniques de travail en suspension. Que ce soit pour des rénovations de façades, des travaux de maintenance industrielle ou des interventions sur des sites difficiles d&apos;accès à Cannes, notre équipe dispose des certifications et du matériel homologué pour réaliser des missions à haute technicité. Chaque intervention est précédée d&apos;une analyse détaillée des risques et planifiée avec une méthodologie rigoureuse, assurant la sécurité totale de nos équipes et la qualité irréprochable de nos prestations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Plus de 15 ans d&apos;expérience en travaux acrobatiques
• Équipe certifiée IRATA et SFETH
• Intervention rapide sur Cannes et la Côte d&apos;Azur
• Matériel aux normes de sécurité les plus récentes
• Devis gratuit et personnalisé sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Les facteurs influençant le prix incluent la hauteur, la difficulté technique, le type de bâtiment et la durée d&apos;intervention. Un diagnostic préalable gratuit permet d&apos;établir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle spécialisée, obtenir des certifications internationales comme IRATA, justifier d&apos;une condition physique excellente et réussir des examens théoriques et pratiques portant sur les techniques de travail en hauteur et les protocoles de sécurité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA/SFETH, consultez leurs références clients, assurez-vous de leur couverture d&apos;assurance professionnelle, et demandez systématiquement les attestations de compétences de leurs techniciens.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Cannes ?
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
