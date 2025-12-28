import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Colomiers | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Colomiers et ses environs. Avec pl',
  keywords: 'couverture toiture colomiers, renovation toiture colomiers, reparation toiture colomiers, couvreur colomiers, refection toiture colomiers, entreprise couverture colomiers',
};

export default function CouvertureToitureColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Colomiers et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons et protégeons votre habitat grâce à des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Colomiers</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture couvrent l&apos;ensemble des besoins des propriétaires de Colomiers et de la région toulousaine. Notre équipe de professionnels qualifiés intervient aussi bien sur des rénovations partielles que des réfections complètes, en utilisant les matériaux les plus performants du marché. Nous réalisons un diagnostic précis de votre toiture, identifions les zones nécessitant des réparations et proposons une solution technique adaptée à votre budget. Notre approche combine expertise technique, respect des normes en vigueur et souci constant de la qualité, pour vous garantir une toiture durablement protégée contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale reconnue, 2) Des techniciens certifiés et formés en permanence, 3) Des interventions rapides et sur-mesure, 4) Un devis détaillé et transparent sans engagement. Nous sommes votre solution complète en couverture avec plus de 95% de clients satisfaits.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte généralement entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Un diagnostic précis permet d&apos;établir un budget personnalisé sans mauvaise surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes de vétusté comme des fuites, des tuiles cassées, de la mousse ou un affaissement. Un expert peut évaluer l&apos;état réel de votre couverture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez ses certifications (RGE, Qualibat), demandez des références, consultez les avis clients et assurez-vous qu&apos;il propose une garantie décennale. Un professionnel sérieux réalisera un diagnostic complet avant tous travaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Colomiers ?
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
