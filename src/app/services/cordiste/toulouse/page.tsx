import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Toulouse | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Toulouse, proposant des solutions acrobatiques innovantes pour tous vos',
  keywords: 'cordiste toulouse, travaux sur corde toulouse, travaux acrobatiques toulouse, cordiste batiment toulouse, intervention cordiste toulouse, entreprise cordiste toulouse',
};

export default function CordisteToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Toulouse, proposant des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur l&apos;ensemble de la région toulousaine avec précision et sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a Toulouse</h2>
        <div className="space-y-4">
          <p>Les travaux sur corde représentent une technique spécialisée permettant d&apos;intervenir dans des zones difficiles d&apos;accès, que ce soit sur des bâtiments historiques de Toulouse, des structures industrielles ou des sites patrimoniaux. Notre équipe maîtrise parfaitement les techniques d&apos;escalade professionnelle, garantissant des interventions rapides et sécurisées. Nos cordistes sont équipés des dernières technologies et normes de sécurité, ce qui nous permet d&apos;réaliser des missions complexes comme le nettoyage de façades, la rénovation, l&apos;inspection technique ou la maintenance industrielle. Chaque intervention est précédée d&apos;un diagnostic précis pour optimiser l&apos;efficacité et minimiser les risques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification IRATA internationale garantissant une expertise de haut niveau
- Plus de 15 ans d&apos;expérience sur Toulouse et sa région
- Équipe de 12 cordistes professionnels formés annuellement
- Matériel dernier cri et contrôlé mensuellement
- Assurance responsabilité civile professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, l&apos;équipement nécessaire et la durée d&apos;intervention. Un diagnostic préalable gratuit permet de définir un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir un diplôme IRATA/SPRAT, suivre des formations de sécurité intensives, justifier d&apos;une condition physique excellente, et réussir des certifications techniques incluant des tests pratiques et théoriques sur les techniques de travail en hauteur.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA, leur ancienneté, leurs références clients, leurs assurances professionnelles et demandez systématiquement un portfolio de réalisations précédentes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Toulouse ?
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
