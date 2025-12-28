import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Toulon | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire référent en travaux sur corde à Toulon et dans tout le Var. Spécialistes des interventions acrobatiques,',
  keywords: 'cordiste toulon, travaux sur corde toulon, travaux acrobatiques toulon, cordiste batiment toulon, intervention cordiste toulon, entreprise cordiste toulon',
};

export default function CordisteToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire référent en travaux sur corde à Toulon et dans tout le Var. Spécialistes des interventions acrobatiques, nous intervenons avec précision et sécurité sur les chantiers les plus complexes en hauteur.</p>

        <h2>Nos services de travaux sur corde - cordistes a Toulon</h2>
        <div className="space-y-4">
          <p>Nos cordistes professionnels réalisent des interventions techniques sur tous types de structures à Toulon : bâtiments industriels, monuments historiques, façades commerciales et résidentielles. Notre technique unique permet d&apos;accéder aux zones les plus difficiles d&apos;accès, garantissant une intervention rapide et économique. Nos équipes sont équipées des derniers matériels de sécurité aux normes ISO 45001, assurant une prestation de haute qualité dans le respect des réglementations en vigueur. Plus de 15 ans d&apos;expérience nous permettent de proposer des solutions sur-mesure adaptées à chaque configuration architecturale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Certification IRATA internationale garantissant une expertise technique maximale
• Équipe de 12 cordistes hautement qualifiés basée à Toulon
• Intervention sous 48h après diagnostic gratuit
• Assurance professionnelle complète couvrant tous types de travaux
• Matériel de pointe renouvelé annuellement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité technique, la hauteur et l&apos;équipement nécessaire. Un devis personnalisé est systématiquement établi après un diagnostic précis sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir une certification IRATA/SPRAT, suivre des formations spécifiques de 3 à 6 mois, valider des compétences techniques et physiques, et disposer d&apos;un certificat médical d&apos;aptitude aux travaux en hauteur.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours la certification IRATA du prestataire, son numéro SIRET, ses assurances professionnelles, et demandez des références clients récentes. Un professionnel sérieux transmettra spontanément ces justificatifs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Toulon ?
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
