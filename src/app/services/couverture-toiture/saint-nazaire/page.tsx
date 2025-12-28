import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation de toiture à Saint-Nazaire. Spécialistes de la protection de votre',
  keywords: 'couverture toiture saint-nazaire, renovation toiture saint-nazaire, reparation toiture saint-nazaire, couvreur saint-nazaire, refection toiture saint-nazaire, entreprise couverture saint-nazaire',
};

export default function CouvertureToitureSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation de toiture à Saint-Nazaire. Spécialistes de la protection de votre habitat, nous intervenons sur tous types de toitures avec un savoir-faire artisanal et des solutions techniques innovantes.</p>

        <h2>Nos services de couverture et rénovation toiture a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>Notre expertise en rénovation de toiture répond aux exigences les plus strictes de qualité et de durabilité. Sur Saint-Nazaire et ses environs, nous diagnostiquons précisément l&apos;état de votre couverture pour proposer des solutions sur-mesure. Nos interventions couvrent la réfection complète, les réparations partielles, le traitement contre les infiltrations et la mise aux normes énergétiques. Nous travaillons avec des matériaux haute performance : tuiles céramiques, ardoises naturelles, bacs acier, garantissant une étanchéité optimale et une esthétique irréprochable. Chaque chantier fait l&apos;objet d&apos;un suivi personnalisé, avec des équipes qualifiées et un engagement de résultat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Plus de 15 ans d&apos;expérience en couverture sur la région nazairienne
- Équipe de 12 couvreurs certifiés et formés aux techniques modernes
- Devis gratuit et détaillé sous 48h
- Interventions rapides et adaptées à tous budgets</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Un diagnostic précis permettra d&apos;établir un budget personnalisé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes visibles de dégradation : fuites, tuiles cassées, mousses importantes, déformations structurelles. Un expert peut vous conseiller sur l&apos;état réel de votre couverture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder des certifications RGE, une assurance décennale, des références clients vérifiables et proposer un diagnostic technique complet avant intervention. Demandez systématiquement ces garanties.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Saint-Nazaire ?
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
