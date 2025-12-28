import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Créteil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en travaux sur corde à Créteil, propose des solutions acrobatiques innovantes pour tous vos défis en hauteur. N',
  keywords: 'cordiste créteil, travaux sur corde créteil, travaux acrobatiques créteil, cordiste batiment créteil, intervention cordiste créteil, entreprise cordiste créteil',
};

export default function CordisteCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en travaux sur corde à Créteil, propose des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur l&apos;ensemble du Val-de-Marne avec une expertise technique et une sécurité irréprochable.</p>

        <h2>Nos services de travaux sur corde - cordistes a Créteil</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes représentent la solution technique ultime pour les interventions complexes en hauteur. Que ce soit pour des travaux de rénovation, de maintenance industrielle ou de nettoyage de façades, notre équipe maîtrise parfaitement les techniques d&apos;accès difficiles. Nos cordistes sont formés aux normes de sécurité les plus strictes et disposent d&apos;un équipement de pointe, garantissant des interventions rapides et précises. Sur Créteil et ses environs, nous intervenons aussi bien sur des bâtiments historiques que des infrastructures modernes, avec une flexibilité et une réactivité qui font notre réputation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Certification IRATA internationale pour tous nos cordistes
• Plus de 15 ans d&apos;expérience en travaux acrobatiques
• Interventions 100% sécurisées avec un taux de satisfaction client de 98%
• Devis gratuit et personnalisé sous 24h
• Équipe locale basée à Créteil, réactive et professionnelle</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, les équipements nécessaires et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation certifiante IRATA/SPRAT, obtenir des diplômes de travaux en hauteur (CACES, habilitations), justifier d&apos;une condition physique excellente et passer des examens techniques et médicaux rigoureux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications IRATA, les assurances professionnelles, les références clients, les attestations de formation et demandez un portfolio des réalisations précédentes de l&apos;entreprise de cordistes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Créteil ?
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
