import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Villenave-d&apos;Ornon et ses enviro',
  keywords: 'couverture toiture villenave-d'ornon, renovation toiture villenave-d'ornon, reparation toiture villenave-d'ornon, couvreur villenave-d'ornon, refection toiture villenave-d'ornon, entreprise couverture villenave-d'ornon',
};

export default function CouvertureToitureVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Villenave-d&apos;Ornon et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre habitat avec des solutions sur-mesure adaptées à chaque type de toiture.</p>

        <h2>Nos services de couverture et rénovation toiture a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation répond aux exigences les plus strictes de qualité et de durabilité. Nous intervenons sur tous types de toitures : tuiles, ardoises, zinc ou bac acier, en proposant des solutions techniques innovantes. Notre équipe de professionnels réalise un diagnostic précis avant chaque intervention, évaluant l&apos;état structural, les éventuelles infiltrations et les besoins spécifiques de votre toiture. À Villenave-d&apos;Ornon, nous garantissons une rénovation complète qui améliore l&apos;isolation thermique, la résistance et l&apos;esthétique de votre habitat. Nos techniques modernes permettent une intervention rapide et minimisant les nuisances.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans 
✓ Équipe de couvreurs certifiés et formés 
✓ Devis gratuit et détaillé sous 48h 
✓ Matériaux haute qualité et garantie décennale 
✓ Interventions rapides sur Villenave-d&apos;Ornon et alentours</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte généralement entre 6 000€ et 25 000€, selon la surface (entre 50 et 200m²), les matériaux choisis et la complexité des travaux. Un diagnostic précis permettra d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses, déformations ou isolation dégradée. Un diagnostic expert permet de déterminer le bon moment.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié RGE, avec références vérifiables, assurance décennale, et proposant un devis détaillé. Vérifiez ses avis clients, sa maîtrise technique et ses certifications professionnelles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Villenave-d'Ornon ?
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
