import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Nantes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Nantes, proposant des solutions acrobatiques innovantes et sécurisées p',
  keywords: 'cordiste nantes, travaux sur corde nantes, travaux acrobatiques nantes, cordiste batiment nantes, intervention cordiste nantes, entreprise cordiste nantes',
};

export default function CordisteNantesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Nantes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Nantes, proposant des solutions acrobatiques innovantes et sécurisées pour tous vos projets en hauteur. Nos cordistes experts interviennent rapidement sur l&apos;ensemble du territoire nantais avec un savoir-faire technique et une précision remarquable.</p>

        <h2>Nos services de travaux sur corde - cordistes a Nantes</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent une solution technique révolutionnaire pour les interventions en milieux complexes et verticaux. Nos cordistes hautement qualifiés réalisent des missions variées : ravalement de façades, nettoyage de vitres, rénovation de monuments historiques, inspections techniques et maintenance industrielle. Chaque intervention est précédée d&apos;une analyse approfondie des risques et nécessite un équipement de pointe homologué. Notre approche combine technicité, sécurité et efficacité, permettant des réalisations impossibles avec des méthodes traditionnelles. Nos équipes possèdent les certifications IRATA et CARSAT, garantissant un niveau de professionnalisme optimal.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 15 ans d&apos;expérience
- Équipement dernier cri aux normes de sécurité européennes
- Interventions rapides sur Nantes et sa région (délai moyen 24h)
- Devis gratuit et transparent sans engagement
- Assurance responsabilité professionnelle complète
- Solutions sur-mesure adaptées à chaque projet</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité des travaux, l&apos;équipement nécessaire et la durée d&apos;intervention. Un diagnostic préalable gratuit permet de définir un devis précis et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications spécifiques comme le niveau IRATA (International Rope Access Trade Association), suivre des formations techniques intensives, réussir des examens pratiques et théoriques, et justifier d&apos;une excellente condition physique et d&apos;un sens aigu de la sécurité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA, consultez leurs références clients, assurez-vous de leur couverture d&apos;assurance, demandez des preuves de formations continues et examinez leurs équipements de sécurité récents.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Nantes ?
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
