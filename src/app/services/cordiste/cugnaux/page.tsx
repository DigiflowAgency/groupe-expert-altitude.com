import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Cugnaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en travaux sur corde à Cugnaux, propose des solutions acrobatiques innovantes pour tous vos défis en hauteur. N',
  keywords: 'cordiste cugnaux, travaux sur corde cugnaux, travaux acrobatiques cugnaux, cordiste batiment cugnaux, intervention cordiste cugnaux, entreprise cordiste cugnaux',
};

export default function CordisteCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en travaux sur corde à Cugnaux, propose des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur l&apos;ensemble de la région toulousaine avec une expertise technique et une sécurité irréprochable.</p>

        <h2>Nos services de travaux sur corde - cordistes a Cugnaux</h2>
        <div className="space-y-4">
          <p>Les travaux sur corde représentent une solution technique précise et sécurisée pour les interventions complexes en milieux verticaux. Notre équipe de cordistes professionnels maîtrise parfaitement les techniques d&apos;accès difficiles, permettant des réalisations impossibles avec des méthodes traditionnelles. Que ce soit pour la rénovation de façades, l&apos;entretien de monuments historiques, les travaux industriels ou les inspections de structures, nos experts disposent d&apos;un équipement de pointe et de certifications officielles garantissant une intervention optimale. À Cugnaux et ses environs, nous intervenons avec une réactivité et une précision qui font notre réputation, en respectant strictement les normes de sécurité et les réglementations en vigueur.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe certifiée IRATA/SPIR avec plus de 15 ans d&apos;expérience
• Interventions rapides sur Cugnaux et la métropole toulousaine
• Matériel professionnel dernière génération
• Devis gratuit et personnalisé sous 48h
• Garantie qualité et satisfaction client</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 180€ de l&apos;heure selon la complexité du chantier, les équipements nécessaires et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de définir un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications officielles comme IRATA (International Rope Access Trade Association), suivre des formations intensives de 3 à 5 jours, justifier d&apos;une condition physique irréprochable et passer des examens théoriques et pratiques de sécurité et de techniques d&apos;accès.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA/SPIR, leur expérience sur des chantiers similaires, leurs références clients, leurs assurances professionnelles et leur capacité à fournir un dossier technique détaillé avant intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Cugnaux ?
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
