import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Paris 8e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Paris 8e, offrant des solutions acrobatiques innovantes et sécurisées pou',
  keywords: 'cordiste paris 8e, travaux sur corde paris 8e, travaux acrobatiques paris 8e, cordiste batiment paris 8e, intervention cordiste paris 8e, entreprise cordiste paris 8e',
};

export default function CordisteParis8ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Paris 8e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Paris 8e, offrant des solutions acrobatiques innovantes et sécurisées pour tous vos défis en hauteur. Notre expertise en cordage professionnel répond aux besoins les plus exigeants du bâtiment et de l&apos;industrie.</p>

        <h2>Nos services de travaux sur corde - cordistes a Paris 8e</h2>
        <div className="space-y-4">
          <p>Nos cordistes hautement qualifiés interviennent sur tous types de chantiers complexes, de la rénovation de façades historiques aux maintenances industrielles. Grâce à des techniques d&apos;accès difficile parfaitement maîtrisées, nous réalisons des travaux là où les méthodes traditionnelles échouent. Nos équipes disposent d&apos;un équipement dernier cri et sont certifiées IRATA (International Rope Access Trade Association), garantissant une intervention précise et totalement sécurisée. Nos domaines d&apos;intervention couvrent la maintenance, le nettoyage, la rénovation et l&apos;inspection technique pour les professionnels du bâtiment et de l&apos;industrie parisienne.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Techniciens certifiés avec plus de 15 ans d&apos;expérience
✓ Interventions rapides sur Paris 8e et région parisienne
✓ Devis gratuit sous 24h
✓ Conformité totale aux normes de sécurité européennes
✓ Matériel professionnel de dernière génération
✓ Assurance responsabilité civile professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs d&apos;un cordiste varient entre 80€ et 250€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de définir un devis précis adapté à votre projet spécifique. Les prix incluent le matériel, les assurances et l&apos;intervention de techniciens hautement qualifiés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste professionnel, il faut suivre une formation spécialisée et obtenir a minima le niveau 1 IRATA, qui nécessite une formation de 3 à 5 jours, des tests techniques et théoriques. Une condition physique excellente, une absence de vertige et une certification médicale sont également obligatoires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : la certification IRATA des techniciens, l&apos;existence d&apos;une assurance responsabilité civile professionnelle, les références clients, l&apos;ancienneté de l&apos;entreprise et ses habilitations de sécurité. Un entretien préalable et un devis détaillé sont également des gages de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Paris 8e ?
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
