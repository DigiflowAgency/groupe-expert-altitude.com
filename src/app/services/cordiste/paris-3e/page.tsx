import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Paris 3e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde hautement sécurisés au cœur de Paris 3e. Nos cordistes professionne',
  keywords: 'cordiste paris 3e, travaux sur corde paris 3e, travaux acrobatiques paris 3e, cordiste batiment paris 3e, intervention cordiste paris 3e, entreprise cordiste paris 3e',
};

export default function CordisteParis3ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Paris 3e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde hautement sécurisés au cœur de Paris 3e. Nos cordistes professionnels réalisent des interventions techniques complexes avec une précision et une expertise inégalées dans le domaine des travaux acrobatiques.</p>

        <h2>Nos services de travaux sur corde - cordistes a Paris 3e</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes représentent une solution innovante pour tous les travaux en hauteur nécessitant une intervention technique et sécurisée. Spécialisés dans les interventions complexes, nous intervenons sur des bâtiments historiques du 3e arrondissement comme sur des structures contemporaines. Notre équipe dispose d&apos;équipements de pointe homologués et répond aux normes de sécurité les plus strictes, garantissant une réalisation parfaite de vos projets. Chaque intervention est précédée d&apos;un diagnostic précis et d&apos;une évaluation des risques, permettant une approche méthodique et professionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification IRATA internationale garantissant une expertise de haut niveau
- Plus de 15 ans d&apos;expérience sur des chantiers parisiens complexes
- Équipe de 12 cordistes hautement qualifiés et formés annuellement
- Assurance responsabilité civile professionnelle couvrant tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, l&apos;équipement nécessaire et la durée d&apos;intervention. Un devis personnalisé est systématiquement proposé après un diagnostic précis sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir une certification IRATA (International Rope Access Trade Association), suivre des formations intensives de sécurité, réussir des examens pratiques et théoriques, et justifier d&apos;une condition physique irréprochable. Une formation continue est obligatoire tous les 3 ans.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement leur certification IRATA, leur assurance professionnelle, leurs références clients, et demandez un portfolio détaillé de leurs réalisations précédentes. Les entreprises sérieuses proposent toujours un diagnostic préalable gratuit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Paris 3e ?
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
