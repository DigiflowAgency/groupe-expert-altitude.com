import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a La Garde | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à La Garde, offre des solutions acrobatiques professionnelles pour tous vos dé',
  keywords: 'cordiste la garde, travaux sur corde la garde, travaux acrobatiques la garde, cordiste batiment la garde, intervention cordiste la garde, entreprise cordiste la garde',
};

export default function CordisteLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à La Garde, offre des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur des chantiers complexes avec précision et sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a La Garde</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions nécessitant agilité et expertise en milieux verticaux. Nos cordistes sont formés aux techniques les plus avancées, permettant des réalisations dans des zones inaccessibles par les méthodes traditionnelles. Que ce soit pour la rénovation de façades, l&apos;entretien industriel ou les travaux de maintenance, notre équipe de La Garde dispose d&apos;un équipement homologué et d&apos;une expérience de plus de 15 ans. Nous garantissons des interventions rapides, sécurisées et économiques, avec un taux de satisfaction client de 98%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Certification IRATA internationale garantissant une qualité d&apos;intervention irréprochable
• Équipe de 12 cordistes experts basée à La Garde
• Matériel de pointe renouvelé annuellement
• Devis gratuit et intervention sous 48h
• Assurance responsabilité civile professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier. Pour une intervention standard à La Garde, comptez environ 120€/heure, incluant le matériel et la main-d&apos;œuvre qualifiée.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation IRATA niveau 1, 2 ou 3, justifier d&apos;une condition physique excellente, posséder un CACES, et obtenir un certificat de travaux en hauteur. La formation dure généralement entre 5 et 10 jours.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement leur certification IRATA, leur assurance professionnelle, leurs références clients, et demandez un portfolio de réalisations précédentes. Groupe Expert Altitude Com répond à tous ces critères.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a La Garde ?
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
