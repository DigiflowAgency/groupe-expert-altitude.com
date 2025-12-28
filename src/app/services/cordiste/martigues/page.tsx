import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Martigues | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Martigues, offrant des solutions acrobatiques professionnelles pour to',
  keywords: 'cordiste martigues, travaux sur corde martigues, travaux acrobatiques martigues, cordiste batiment martigues, intervention cordiste martigues, entreprise cordiste martigues',
};

export default function CordisteMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Martigues, offrant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes experts interviennent sur l&apos;ensemble du territoire martégal avec précision et sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a Martigues</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions complexes en milieux verticaux et difficiles d&apos;accès. Nos cordistes hautement qualifiés réalisent des missions dans les domaines industriels, du bâtiment, de la rénovation et de la maintenance. Chaque intervention est précédée d&apos;une analyse détaillée des risques et équipée des dernières normes de sécurité. Nos techniciens maîtrisent parfaitement les techniques d&apos;accès sur cordes, garantissant une efficacité et une rapidité d&apos;exécution qui distinguent notre entreprise sur Martigues et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique : des cordistes certifiés IRATA, plus de 15 ans d&apos;expérience, un taux de satisfaction client de 98%, et un engagement total envers la sécurité et la qualité. Nous possédons tous les agréments nécessaires et un parc matériel constamment renouvelé pour répondre aux exigences les plus strictes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Pour une intervention standard à Martigues, comptez environ 100€/heure, incluant le matériel et les équipements de sécurité spécifiques. Un devis personnalisé reste toujours recommandé après évaluation technique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation professionnelle rigoureuse : obtention du CMIC (Certificat Monteur Intervenant Cordiste), formation IRATA niveau 1, 2 ou 3, aptitude médicale spécifique, et une condition physique irréprochable. La formation dure généralement entre 6 et 12 mois avec des certifications régulières.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : les certifications IRATA, l&apos;assurance responsabilité civile professionnelle, les références clients, l&apos;ancienneté sur le marché, et les attestations de formations continues de l&apos;équipe. Un entretien préalable et un devis détaillé sont également des gages de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Martigues ?
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
