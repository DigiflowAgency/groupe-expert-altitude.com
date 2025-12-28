import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Rillieux-la-Pape | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Rillieux-la-Pape, offre des solutions acrobatiques professionnelles pour tou',
  keywords: 'cordiste rillieux-la-pape, travaux sur corde rillieux-la-pape, travaux acrobatiques rillieux-la-pape, cordiste batiment rillieux-la-pape, intervention cordiste rillieux-la-pape, entreprise cordiste rillieux-la-pape',
};

export default function CordisteRillieuxLaPapePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Rillieux-la-Pape</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Rillieux-la-Pape, offre des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes avec précision et sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a Rillieux-la-Pape</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent une solution technique innovante pour les interventions en milieux difficiles d&apos;accès. Nos équipes de cordistes experts réalisent des prestations sur mesure, qu&apos;il s&apos;agisse de maintenance industrielle, de ravalement de façades ou de travaux de rénovation à Rillieux-la-Pape et ses environs. Chaque intervention est minutieusement préparée, avec un diagnostic précis et un équipement de pointe garantissant une efficacité maximale. Notre approche combine technicité et respect des normes de sécurité les plus strictes, permettant des interventions rapides et économiques sans nécessiter d&apos;installations complexes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : 15 ans d&apos;expérience en travaux acrobatiques, certification IRATA internationale, équipe de 12 cordistes experts, matériel de dernière génération, interventions sur tout type de structure. Nous proposons une approche sur-mesure, avec un engagement qualité et sécurité total pour chaque mission à Rillieux-la-Pape.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier, la hauteur d&apos;intervention et les équipements spécifiques nécessaires. Un devis personnalisé est toujours établi après un diagnostic précis sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation certifiante IRATA, justifier d&apos;une condition physique excellente, obtenir un certificat d&apos;aptitude médicale, et réussir des examens théoriques et pratiques portant sur les techniques de travail en hauteur et les protocoles de sécurité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : la certification IRATA, l&apos;assurance responsabilité civile professionnelle, les références clients, l&apos;ancienneté de l&apos;entreprise et les qualifications individuelles des techniciens intervenants.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Rillieux-la-Pape ?
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
