import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Villeurbanne et ses environs. Spécialistes depuis plu',
  keywords: 'couverture toiture villeurbanne, renovation toiture villeurbanne, reparation toiture villeurbanne, couvreur villeurbanne, refection toiture villeurbanne, entreprise couverture villeurbanne',
};

export default function CouvertureToitureVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Villeurbanne et ses environs. Spécialistes depuis plus de 15 ans, nous transformons et protégeons votre habitat avec des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Villeurbanne</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture répond aux exigences les plus strictes de durabilité et de performance. À Villeurbanne, nous intervenons sur tous types de structures : tuiles, ardoises, zinc ou bacs acier. Notre processus complet commence par un diagnostic précis, réalisé par nos techniciens hautement qualifiés. Nous évaluons l&apos;état structural, identifions les zones fragilisées et proposons un devis transparent détaillant chaque intervention. Notre approche technique privilégie des matériaux haute qualité garantissant une étanchéité optimale et une résistance aux conditions climatiques locales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une équipe certifiée avec plus de 150 chantiers réalisés par an, 2) Des interventions rapides sous 48h, 3) Une garantie décennale sur tous nos travaux, 4) Un engagement écologique avec des matériaux éco-responsables.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Villeurbanne varie entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité technique. Un diagnostic précis permettra d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, déformations structurelles, mousses importantes ou isolation défectueuse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez systématiquement : la certification RGE, l&apos;assurance décennale, les avis clients, les références de chantiers et demandez plusieurs devis comparatifs détaillés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Villeurbanne ?
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
