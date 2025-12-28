import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Fréjus | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Fréjus, offrant des solutions acrobatiques professionnelles pour tous vos',
  keywords: 'cordiste fréjus, travaux sur corde fréjus, travaux acrobatiques fréjus, cordiste batiment fréjus, intervention cordiste fréjus, entreprise cordiste fréjus',
};

export default function CordisteFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Fréjus, offrant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus techniques du littoral varois avec précision et sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a Fréjus</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution ultime pour les interventions complexes en hauteur. Que ce soit pour la rénovation de façades, l&apos;entretien industriel ou des missions de maintenance spécialisée, nos cordistes disposent d&apos;une expertise technique unique. Chaque intervention est méticuleusement planifiée, avec un protocole de sécurité rigoureux conforme aux normes AFPS et OPPBTP. Sur Fréjus et ses environs, nous intervenons aussi bien sur des bâtiments historiques que des structures contemporaines, garantissant une prestation sans égal. Notre équipe maîtrise parfaitement les techniques d&apos;accès difficile, permettant des réalisations là où les méthodes traditionnelles échouent.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos cordistes possèdent plus de 15 ans d&apos;expérience collective. Nous sommes certifiés ISO 9001, disposons d&apos;un équipement de pointe et proposons une assurance responsabilité civile professionnelle complète. Notre taux de satisfaction client dépasse 95%, témoignant de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier. Pour une intervention standard à Fréjus, comptez environ 120€/heure, incluant le matériel et les équipements de sécurité. Un devis personnalisé sera toujours établi après expertise technique précise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation qualifiante de niveau CAP/BP avec une spécialisation en techniques de travaux acrobatiques. La certification CACES, une expérience minimale de 2 ans et une condition physique irréprochable sont indispensables. Une formation continue annuelle est obligatoire pour maintenir ses compétences.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez trois critères essentiels : la certification AFPS, les attestations de formations professionnelles à jour et une assurance responsabilité civile spécifique aux travaux en hauteur. Demandez systématiquement les références et les justificatifs avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Fréjus ?
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
