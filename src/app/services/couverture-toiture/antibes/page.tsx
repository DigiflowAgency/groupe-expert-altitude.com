import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Antibes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Antibes, offrant des solutions sur-mesure pour pro',
  keywords: 'couverture toiture antibes, renovation toiture antibes, reparation toiture antibes, couvreur antibes, refection toiture antibes, entreprise couverture antibes',
};

export default function CouvertureToitureAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Antibes, offrant des solutions sur-mesure pour protéger votre patrimoine immobilier contre les intempéries méditerranéennes.</p>

        <h2>Nos services de couverture et rénovation toiture a Antibes</h2>
        <div className="space-y-4">
          <p>Spécialisés dans la rénovation de toiture sur Antibes et sa région, nous intervenons avec une expertise technique pointue pour tous types de bâtiments. Notre approche complète commence par un diagnostic précis de votre structure, évaluant chaque élément - charpente, tuiles, étanchéité - afin de proposer une solution adaptée. Nos équipes utilisent uniquement des matériaux de haute qualité, garantissant une durabilité de 20 à 30 ans. Nous maîtrisons aussi bien les techniques traditionnelles que les solutions modernes d&apos;isolation et de rénovation énergétique, assurant performance et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre expertise locale, notre certification RGE, notre équipe de 12 professionnels qualifiés et notre engagement qualité. Nous proposons un devis gratuit sous 48h, une intervention rapide et une garantie décennale. 95% de nos clients nous recommandent grâce à notre professionnalisme et notre précision technique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Antibes coûte entre 150€ et 350€ au m², selon les matériaux et la complexité des travaux. Pour une maison moyenne de 100m², comptez un budget entre 15 000€ et 35 000€. Nos devis détaillés incluent main-d&apos;œuvre, matériaux et dépose de l&apos;ancienne toiture.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 25-30 ans, ou en cas de signes comme infiltrations récurrentes, tuiles cassées à plus de 20%, déformation de charpente ou isolation dégradée. À Antibes, le climat méditerranéen impose une vigilance particulière pour maintenir l&apos;intégrité de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez sa certification RGE, son assurance décennale, ses références locales et demandez plusieurs devis comparatifs. Un professionnel sérieux proposera un diagnostic précis, des solutions techniques adaptées et une garantie écrite de ses interventions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Antibes ?
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
