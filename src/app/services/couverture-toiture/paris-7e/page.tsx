import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Paris 7e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Paris 7e, vous apporte des solutions sur-mesure pour protég',
  keywords: 'couverture toiture paris 7e, renovation toiture paris 7e, reparation toiture paris 7e, couvreur paris 7e, refection toiture paris 7e, entreprise couverture paris 7e',
};

export default function CouvertureToitureParis7ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Paris 7e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Paris 7e, vous apporte des solutions sur-mesure pour protéger et valoriser votre patrimoine immobilier. Nos experts interviennent rapidement dans tout l&apos;arrondissement pour des prestations de haute qualité.</p>

        <h2>Nos services de couverture et rénovation toiture a Paris 7e</h2>
        <div className="space-y-4">
          <p>Spécialisés dans la rénovation et la réfection de toitures, nous proposons une expertise complète adaptée aux spécificités architecturales parisiennes. Notre approche technique garantit une intervention précise, depuis le diagnostic initial jusqu&apos;à la réalisation finale. Nous travaillons avec des matériaux premium, sélectionnés pour leur durabilité et leur résistance aux conditions climatiques franciliennes. Notre équipe maîtrise tous les types de couvertures : tuiles, ardoises, zinc, et met en œuvre des techniques modernes qui prolongent significativement la durée de vie de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : certification RGE, plus de 15 ans d&apos;expérience à Paris, devis gratuit sous 48h, interventions rapides, équipe de 12 couvreurs qualifiés. Nous garantissons une intervention professionnelle, un conseil technique personnalisé et des solutions économiquement avantageuses. Notre taux de satisfaction client dépasse 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Paris 7e varie entre 8 000€ et 25 000€, selon la superficie, les matériaux et la complexité des travaux. Nous proposons des financements flexibles et des aides potentielles pour réduire le coût.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes comme des infiltrations, tuiles cassées, mousses, déformations ou fuites. Un diagnostic précis permet de déterminer l&apos;urgence des travaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur avec certification RGE, références vérifiables, assurances professionnelles complètes, devis détaillé et transparent. Vérifiez son expérience locale, ses avis clients et demandez plusieurs expertises comparatives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Paris 7e ?
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
