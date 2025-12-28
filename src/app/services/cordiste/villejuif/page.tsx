import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Villejuif | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire référence en travaux sur corde à Villejuif et en région parisienne. Nos cordistes hautement qualifiés ré',
  keywords: 'cordiste villejuif, travaux sur corde villejuif, travaux acrobatiques villejuif, cordiste batiment villejuif, intervention cordiste villejuif, entreprise cordiste villejuif',
};

export default function CordisteVillejuifPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Villejuif</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire référence en travaux sur corde à Villejuif et en région parisienne. Nos cordistes hautement qualifiés réalisent des interventions techniques et sécurisées pour tous vos projets de bâtiment et d&apos;infrastructure.</p>

        <h2>Nos services de travaux sur corde - cordistes a Villejuif</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques représentent la solution ultime pour les interventions complexes en hauteur. Grâce à une expertise technique pointue, nous intervenons sur des chantiers variés : rénovation de façades, nettoyage de vitres, maintenance industrielle et travaux de peinture. Notre équipe de cordistes à Villejuif dispose d&apos;un équipement de pointe homologué et respecte scrupuleusement les normes de sécurité AFPS. Chaque intervention est précédée d&apos;un diagnostic technique précis permettant une planification optimale et une réalisation sans compromis.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Certification OPPBTP et habilitations officielles
• Plus de 15 ans d&apos;expérience en travaux acrobatiques
• Équipe de 12 cordistes professionnels
• Interventions rapides sur Villejuif et départements limitrophes
• Devis gratuit et transparent sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité technique, la hauteur d&apos;intervention et l&apos;équipement spécifique requis. Un diagnostic préalable permet d&apos;établir un devis précis et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation qualifiante de niveau CAP/BEP, une certification CACES, une aptitude médicale stricte et une formation spécifique en travaux sur cordes (IRATA/SPIR). Une condition physique excellente et une absence de vertige sont essentielles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : les habilitations officielles, l&apos;assurance responsabilité civile professionnelle, les certifications OPPBTP, les références clients et les avis en ligne. Une entreprise transparente fournira systématiquement ses justificatifs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Villejuif ?
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
