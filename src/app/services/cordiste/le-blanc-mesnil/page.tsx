import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Le Blanc-Mesnil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde, offre des solutions acrobatiques professionnelles sur Le Blanc-Mesnil et ses ',
  keywords: 'cordiste le blanc-mesnil, travaux sur corde le blanc-mesnil, travaux acrobatiques le blanc-mesnil, cordiste batiment le blanc-mesnil, intervention cordiste le blanc-mesnil, entreprise cordiste le blanc-mesnil',
};

export default function CordisteLeBlancMesnilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Le Blanc-Mesnil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde, offre des solutions acrobatiques professionnelles sur Le Blanc-Mesnil et ses environs. Nos cordistes hautement qualifiés interviennent avec précision et sécurité pour tous vos projets en hauteur.</p>

        <h2>Nos services de travaux sur corde - cordistes a Le Blanc-Mesnil</h2>
        <div className="space-y-4">
          <p>Nos experts cordistes réalisent des interventions techniques complexes dans le bâtiment, l&apos;industrie et les sites sensibles. Équipés de matériel homologué et formés aux dernières normes de sécurité, nous intervenons sur des chantiers nécessitant des accès difficiles où les méthodes traditionnelles sont inadaptées. Au Blanc-Mesnil, nous proposons des services de nettoyage de façades, rénovation, maintenance industrielle et expertise technique en hauteur, avec une garantie de résultat et de sécurité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Plus de 15 ans d&apos;expérience en travaux acrobatiques
- Certification IRATA internationale pour nos cordistes
- Interventions rapides sur Le Blanc-Mesnil et toute l&apos;Île-de-France
- Devis gratuit et transparent
- Assurance responsabilité civile professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs d&apos;un cordiste varient entre 80€ et 150€ de l&apos;heure selon la complexité du chantier, l&apos;équipement nécessaire et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de proposer un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications comme IRATA niveau 1, 2 ou 3, suivre des formations de sécurité intensives, avoir une condition physique excellente et réussir des examens théoriques et pratiques très sélectifs. Une formation continue est également obligatoire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA, leur expérience, les références clients, l&apos;assurance professionnelle, et demandez systématiquement les attestations de compétences de leurs techniciens avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Le Blanc-Mesnil ?
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
