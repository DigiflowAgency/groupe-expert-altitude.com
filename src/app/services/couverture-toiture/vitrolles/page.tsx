import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Vitrolles | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Vitrolles et dans toute la région provençale. Avec pl',
  keywords: 'couverture toiture vitrolles, renovation toiture vitrolles, reparation toiture vitrolles, couvreur vitrolles, refection toiture vitrolles, entreprise couverture vitrolles',
};

export default function CouvertureToitureVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Vitrolles et dans toute la région provençale. Avec plus de 15 ans d&apos;expertise, nous garantissons des interventions professionnelles qui protègent durablement votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a Vitrolles</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de sécurité. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc - en proposant des solutions techniques adaptées à chaque configuration architecturale. Notre équipe de couvreurs qualifiés réalise un diagnostic précis avant toute intervention, évaluant l&apos;état structural, l&apos;isolation et les potentiels points faibles. À Vitrolles, nous comprenons les contraintes climatiques locales et sélectionnons rigoureusement nos matériaux pour assurer une protection optimale contre le mistral et les variations météorologiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Artisans certifiés avec plus de 15 ans d&apos;expérience
- Devis gratuit et détaillé sous 48h
- Matériaux de haute qualité garantis 10 ans
- Interventions rapides et sur-mesure
- Respect des normes RT2012 et réglementations en vigueur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité des travaux. Pour une maison moyenne de 100m², le budget oscille entre 8 000€ et 25 000€. Nous proposons des financements et aides adaptés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses, déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations et éviter des réparations coûteuses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez sa certification RGE, son assurance décennale, ses références clients et demandez plusieurs devis comparatifs. Un professionnel sérieux proposera un diagnostic technique détaillé et transparent avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Vitrolles ?
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
