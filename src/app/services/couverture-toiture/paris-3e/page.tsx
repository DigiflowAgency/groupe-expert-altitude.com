import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Paris 3e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance pour la couverture et rénovation toiture à Paris 3e, transforme vos défis de toiture en solutions',
  keywords: 'couverture toiture paris 3e, renovation toiture paris 3e, reparation toiture paris 3e, couvreur paris 3e, refection toiture paris 3e, entreprise couverture paris 3e',
};

export default function CouvertureToitureParis3ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Paris 3e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance pour la couverture et rénovation toiture à Paris 3e, transforme vos défis de toiture en solutions durables. Spécialistes reconnus dans l&apos;arrondissement, nous garantissons une expertise technique et un service sur-mesure pour protéger votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Paris 3e</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de l&apos;habitat parisien. Nous intervenons sur tous types de structures, des immeubles historiques aux résidences contemporaines du 3e arrondissement. Notre processus débute par un diagnostic précis, réalisé par nos experts, qui évaluent l&apos;état structural et les besoins spécifiques de votre toiture. Nous utilisons uniquement des matériaux de haute qualité, certifiés pour résister aux conditions climatiques parisiennes, avec une garantie décennale. Notre équipe maîtrise parfaitement les techniques traditionnelles et innovantes, assurant une rénovation qui préserve l&apos;authenticité architecturale tout en apportant des performances techniques optimales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos couvreurs sont certifiés RGE, notre entreprise dispose d&apos;une assurance professionnelle complète. Nous réalisons 98% de nos chantiers dans les délais prévus, avec un taux de satisfaction client de 95%. Notre engagement : transparence totale, devis détaillé sans surprise et intervention rapide.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Paris 3e varie entre 150€ et 350€ au m², selon la complexité et les matériaux. Pour un pavillon standard de 100m², comptez un investissement global entre 15 000€ et 35 000€. Nos devis détaillés incluent main-d&apos;œuvre, matériaux et garanties.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, déformation de la charpente, mousses/lichens importants. Dans le 3e arrondissement, l&apos;âge et l&apos;exposition aux intempéries peuvent accélérer la dégradation.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez impérativement : certification RGE, assurance décennale, avis clients vérifiables, ancienneté de l&apos;entreprise. Exigez un diagnostic préalable détaillé, un devis précis et demandez les références de chantiers similaires réalisés à Paris.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Paris 3e ?
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
