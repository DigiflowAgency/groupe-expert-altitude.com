import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Paris | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Paris. Spécialistes depuis plus de 15 ans, nous proté',
  keywords: 'couverture toiture paris, renovation toiture paris, reparation toiture paris, couvreur paris, refection toiture paris, entreprise couverture paris',
};

export default function CouvertureToitureParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Paris. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre patrimoine immobilier avec des solutions sur-mesure adaptées à chaque type de bâtiment parisien.</p>

        <h2>Nos services de couverture et rénovation toiture a Paris</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences les plus strictes de l&apos;habitat parisien. Notre équipe de professionnels qualifiés intervient sur tous types de toitures : tuiles, ardoises, zinc, bac acier. Nous réalisons un diagnostic précis avant toute intervention, évaluant l&apos;état structural, l&apos;étanchéité et les potentiels risques d&apos;infiltration. Notre processus inclut un audit technique complet, des recommandations personnalisées et une exécution méticuleuse garantissant une protection optimale de votre bien. Nous utilisons uniquement des matériaux haute qualité homologués, offrant une durabilité de 20 à 30 ans selon les configurations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre certification RGE, notre équipe de 15 professionnels expérimentés, un devis gratuit sous 48h, des interventions rapides sur Paris et sa région, une garantie décennale et un accompagnement personnalisé de A à Z. Nous sommes reconnus pour notre transparence et notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Paris varie entre 8 000€ et 25 000€, selon la surface (de 50 à 200m²), les matériaux choisis et la complexité des travaux. Nos devis détaillés incluent main-d&apos;œuvre, matériaux et garanties.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 25-30 ans, ou en cas de signes précurseurs : fuites récurrentes, tuiles cassées, infiltrations, déformations structurelles, mousses ou végétation. Un diagnostic annuel permet de prévenir ces problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder : une certification RGE, une assurance décennale, des références vérifiables, une expertise technique prouvée, des avis clients positifs, une proposition de devis détaillé et transparent, et une connaissance approfondie des normes parisiennes d&apos;habitat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Paris ?
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
