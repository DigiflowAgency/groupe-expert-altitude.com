import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Paris 9e | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture dans le 9e arrondissement parisien. Spécial',
  keywords: 'couverture toiture paris 9e, renovation toiture paris 9e, reparation toiture paris 9e, couvreur paris 9e, refection toiture paris 9e, entreprise couverture paris 9e',
};

export default function CouvertureToitureParis9ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Paris 9e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture dans le 9e arrondissement parisien. Spécialistes depuis plus de 15 ans, nous intervenons sur tous types de bâtiments avec une expertise technique irréprochable.</p>

        <h2>Nos services de couverture et rénovation toiture a Paris 9e</h2>
        <div className="space-y-4">
          <p>Notre service de rénovation de toiture répond aux exigences les plus strictes de performance et de durabilité. Nous proposons un diagnostic précis de votre structure, évaluant chaque élément (charpente, étanchéité, isolation) pour définir l&apos;intervention optimale. Notre équipe de couvreurs qualifiés utilise uniquement des matériaux de haute qualité, garantissant une rénovation qui protège durablement votre patrimoine immobilier. Chaque projet fait l&apos;objet d&apos;un devis détaillé et personnalisé, avec des solutions techniques adaptées à votre budget et à l&apos;architecture spécifique de votre bâtiment à Paris.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 250 chantiers réalisés à Paris
- Délais d&apos;intervention garantis et planning respecté
- Matériaux premium sélectionnés avec le souci de la performance énergétique
- Équipe de professionnels formés aux dernières normes réglementaires</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Paris coûte entre 150€ et 350€ par m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial de la toiture. Pour un pavillon de 100m², comptez un budget global entre 15 000€ et 35 000€ TTC.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, déformations structurelles, mousses ou infiltrations récurrentes. Un diagnostic professionnel tous les 10 ans est conseillé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez impérativement : ses certifications professionnelles, son numéro SIRET, ses références clients, ses assurances professionnelles, et demandez plusieurs devis détaillés comparatifs avec descriptif précis des interventions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Paris 9e ?
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
