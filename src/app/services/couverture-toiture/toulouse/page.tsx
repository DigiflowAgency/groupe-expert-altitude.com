import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Toulouse | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Toulouse et ses environs. Spécialistes depuis plus de',
  keywords: 'couverture toiture toulouse, renovation toiture toulouse, reparation toiture toulouse, couvreur toulouse, refection toiture toulouse, entreprise couverture toulouse',
};

export default function CouvertureToitureToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Toulouse et ses environs. Spécialistes depuis plus de 15 ans, nous intervenons sur tous types de toitures pour garantir la protection et la valorisation de votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a Toulouse</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous proposons un diagnostic précis et personnalisé, en analysant chaque élément structural de votre toiture. Notre équipe de professionnels qualifiés utilise les techniques et matériaux les plus performants, adaptés à l&apos;architecture toulousaine et aux contraintes climatiques locales. Nous intervenons aussi bien sur les maisons individuelles que sur les bâtiments commerciaux, avec une attention particulière portée à l&apos;isolation thermique et à l&apos;étanchéité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de proximité à Toulouse, 2) Des techniciens certifiés et formés en permanence, 3) Un devis gratuit et détaillé sous 48h, 4) Une garantie décennale sur tous nos travaux. Nous sommes reconnus pour notre professionnalisme et notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité. Pour une maison moyenne de 100m², comptez entre 8 000€ et 25 000€. Nos devis personnalisés incluent toujours une analyse précise et transparente.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 25-30 ans, ou en cas de signes comme infiltrations récurrentes, tuiles cassées, déformation de la charpente, ou après des événements climatiques majeurs. Un diagnostic annuel permet de prévenir les dégradations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez systématiquement : la certification RGE, l&apos;assurance décennale, les avis clients, l&apos;ancienneté de l&apos;entreprise. Demandez plusieurs devis détaillés, comparez les propositions techniques et rencontrez directement les artisans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Toulouse ?
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
