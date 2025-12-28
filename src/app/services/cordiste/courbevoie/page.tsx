import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Courbevoie | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en travaux sur corde à Courbevoie, propose des solutions acrobatiques innovantes pour tous vos défis',
  keywords: 'cordiste courbevoie, travaux sur corde courbevoie, travaux acrobatiques courbevoie, cordiste batiment courbevoie, intervention cordiste courbevoie, entreprise cordiste courbevoie',
};

export default function CordisteCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en travaux sur corde à Courbevoie, propose des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes de la région parisienne.</p>

        <h2>Nos services de travaux sur corde - cordistes a Courbevoie</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent une solution technique et sécurisée pour les interventions en milieux verticaux complexes. Nos cordistes professionnels maîtrisent parfaitement les techniques d&apos;accès difficile, permettant des réalisations précises sur des structures industrielles, bâtiments historiques ou équipements techniques à Courbevoie et ses environs. Chaque intervention fait l&apos;objet d&apos;une préparation méticuleuse, avec des équipements homologués et des techniciens certifiés IRATA (International Rope Access Trade Association). Notre approche combine rapidité d&apos;exécution, coût optimisé et respect total des normes de sécurité, garantissant des prestations de haute qualité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : 15 ans d&apos;expérience, une équipe de 12 cordistes certifiés, un taux de satisfaction client de 98%, et une couverture complète des interventions complexes. Nos techniciens disposent des habilitations les plus exigeantes du marché, avec une formation continue annuelle.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, l&apos;équipement nécessaire et la durée d&apos;intervention. Un diagnostic préalable gratuit permet de définir un devis précis adapté à votre projet spécifique à Courbevoie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste requiert une formation professionnelle spécialisée, un diplôme de niveau III minimum, une condition physique irréprochable et des certifications comme IRATA niveau 1, 2 ou 3. Une formation continue et des stages pratiques sont essentiels pour maintenir ses compétences.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : les certifications IRATA, l&apos;assurance responsabilité civile professionnelle, les références clients, l&apos;ancienneté sur le marché et les habilitations sécurité de l&apos;entreprise.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Courbevoie ?
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
