import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Nanterre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en travaux sur corde à Nanterre, offre des solutions acrobatiques professionnelles pour tous vos défis en haute',
  keywords: 'cordiste nanterre, travaux sur corde nanterre, travaux acrobatiques nanterre, cordiste batiment nanterre, intervention cordiste nanterre, entreprise cordiste nanterre',
};

export default function CordisteNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en travaux sur corde à Nanterre, offre des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés transforment les interventions complexes en missions de précision et de sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a Nanterre</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes couvrent un large éventail d&apos;interventions techniques, de la rénovation de façades aux travaux industriels complexes. Chaque mission à Nanterre est traitée avec une expertise technique pointue, garantissant des résultats de haute qualité et une sécurité optimale. Notre équipe maîtrise parfaitement les techniques d&apos;accès difficile, permettant des interventions là où les méthodes traditionnelles échouent. Nous utilisons un équipement dernier cri et des protocoles de sécurité conformes aux normes les plus strictes, assurant une efficacité et une précision remarquables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience en travaux acrobatiques
- Interventions 100% sécurisées avec un taux de réussite de 99,8%
- Matériel professionnel aux normes européennes
- Devis gratuit et personnalisé sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs d&apos;un cordiste varient entre 80€ et 250€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable permet de définir précisément le coût, avec des forfaits disponibles pour les grandes interventions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir le CQP Cordiste (Certificat de Qualification Professionnelle), suivre des formations en hauteur, détenir une aptitude médicale spécifique et justifier de compétences techniques et physiques rigoureuses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications AFCEE, leur assurance responsabilité civile professionnelle, leurs références clients et leur expérience dans des interventions similaires à votre projet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Nanterre ?
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
