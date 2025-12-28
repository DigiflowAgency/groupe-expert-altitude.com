import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Le Cannet | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en travaux sur corde sur Le Cannet et ses environs, propose des solutions acrobatiques innovantes pour tous vos',
  keywords: 'cordiste le cannet, travaux sur corde le cannet, travaux acrobatiques le cannet, cordiste batiment le cannet, intervention cordiste le cannet, entreprise cordiste le cannet',
};

export default function CordisteLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en travaux sur corde sur Le Cannet et ses environs, propose des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent avec précision et sécurité dans les domaines du bâtiment, de l&apos;industrie et de la rénovation.</p>

        <h2>Nos services de travaux sur corde - cordistes a Le Cannet</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique et sécurisée pour les interventions complexes en hauteur. Grâce à notre expertise, nous réalisons des missions variées : nettoyage de façades, rénovation de toitures, entretien de monuments historiques ou interventions industrielles. Chaque projet est étudié méticuleusement pour garantir une intervention optimale, avec un taux de réussite de 98%. Nos cordistes disposent de certifications IRATA internationales et utilisent un équipement de pointe homologué, assurant une qualité d&apos;intervention irréprochable et une sécurité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 cordistes certifiés IRATA International Level 3
- Interventions sur Le Cannet et tout le département des Alpes-Maritimes
- Matériel dernière génération renouvelé annuellement
- Devis gratuit et personnalisé sous 48h
- Assurance professionnelle complète couvrant tous types de chantiers</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, les équipements nécessaires et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de proposer un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle qualifiante, obtenir les certifications IRATA ou SPRAT, réussir des examens techniques et médicaux, et justifier d&apos;une condition physique irréprochable. Une formation continue est obligatoire pour maintenir ses compétences.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA, leur expérience professionnelle, leurs références clients, leur couverture assurantielle et leurs habilitations sécurité. Un entretien préalable et la transparence des documents sont également des gages de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Le Cannet ?
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
