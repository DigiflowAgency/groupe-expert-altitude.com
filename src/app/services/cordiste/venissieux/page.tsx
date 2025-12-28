import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Vénissieux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Vénissieux, offre des solutions professionnelles et sécurisées pour tous vos',
  keywords: 'cordiste vénissieux, travaux sur corde vénissieux, travaux acrobatiques vénissieux, cordiste batiment vénissieux, intervention cordiste vénissieux, entreprise cordiste vénissieux',
};

export default function CordisteVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Vénissieux, offre des solutions professionnelles et sécurisées pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus techniques de la région lyonnaise.</p>

        <h2>Nos services de travaux sur corde - cordistes a Vénissieux</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques couvrent un large spectre d&apos;interventions complexes, de la rénovation de façades à l&apos;entretien industriel. Grâce à notre technique unique de travaux sur corde, nous garantissons des prestations précises et rapides, sans nécessiter d&apos;échafaudages coûteux. Nos cordistes sont formés aux dernières normes de sécurité et disposent d&apos;un équipement de pointe, permettant des interventions dans des zones difficiles d&apos;accès à Vénissieux et ses environs. Notre expertise technique nous permet d&apos;optimiser chaque intervention, réduisant les temps de réalisation et les coûts pour nos clients.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification IRATA internationale garantissant une qualité de service irréprochable
- Plus de 15 ans d&apos;expérience sur des chantiers complexes
- Équipe de 12 cordistes spécialisés basée dans la métropole lyonnaise
- Assurance professionnelle complète et matériel aux normes les plus récentes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de proposer un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir une certification IRATA de niveau 1 à 3, suivre des formations de sécurité intensives, avoir une condition physique excellente et réussir des examens théoriques et pratiques très exigeants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leur certification IRATA, leur expérience sur des chantiers similaires, leurs références clients, leurs assurances professionnelles et leur parc de matériel de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Vénissieux ?
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
