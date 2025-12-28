import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Saint-Denis | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Saint-Denis et dans toute la région parisienne. Nos cordistes hautement',
  keywords: 'cordiste saint-denis, travaux sur corde saint-denis, travaux acrobatiques saint-denis, cordiste batiment saint-denis, intervention cordiste saint-denis, entreprise cordiste saint-denis',
};

export default function CordisteSaintDenisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Saint-Denis</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Saint-Denis et dans toute la région parisienne. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes avec une expertise technique et une sécurité irréprochable.</p>

        <h2>Nos services de travaux sur corde - cordistes a Saint-Denis</h2>
        <div className="space-y-4">
          <p>Les travaux acrobatiques représentent une solution technique précise pour les interventions en milieux difficiles d&apos;accès. Notre équipe de cordistes professionnels dispose d&apos;une maîtrise totale des techniques d&apos;escalade industrielle, permettant des réalisations sur des bâtiments, monuments historiques ou structures industrielles à Saint-Denis. Chaque intervention est précédée d&apos;un diagnostic technique rigoureux, garantissant une analyse complète des contraintes et des solutions adaptées. Nos cordistes utilisent un équipement aux normes européennes, certifié et régulièrement contrôlé, assurant une intervention à la fois efficace et sécurisée.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Avec plus de 15 ans d&apos;expérience, notre entreprise se distingue par son expertise technique unique. Nos cordistes possèdent tous les certifications IRATA/SPRAT indispensables. Nous intervenons rapidement sur Saint-Denis, avec un délai moyen de 48h après votre premier contact. Notre engagement qualité se traduit par une assurance professionnelle complète et des interventions 100% conformes aux réglementations en vigueur.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, avec un devis personnalisé après diagnostic précis. Les facteurs influençant le prix sont la hauteur, la technicité requise et la durée d&apos;intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation professionnelle spécifique, incluant des certifications IRATA de niveau 1, 2 ou 3. Une condition physique excellente, une absence de vertige et des compétences techniques en travaux acrobatiques sont essentielles. La formation dure généralement entre 5 et 10 jours.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement leurs certifications IRATA/SPRAT, leur assurance professionnelle, et demandez des références clients. Un professionnel sérieux fournira systématiquement un devis détaillé et proposera une visite technique préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Saint-Denis ?
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
