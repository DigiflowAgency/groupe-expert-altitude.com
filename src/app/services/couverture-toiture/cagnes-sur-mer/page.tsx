import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation de toiture à Cagnes-sur-Mer, spécialiste des travaux de couverture adaptés aux s',
  keywords: 'couverture toiture cagnes-sur-mer, renovation toiture cagnes-sur-mer, reparation toiture cagnes-sur-mer, couvreur cagnes-sur-mer, refection toiture cagnes-sur-mer, entreprise couverture cagnes-sur-mer',
};

export default function CouvertureToitureCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation de toiture à Cagnes-sur-Mer, spécialiste des travaux de couverture adaptés aux spécificités architecturales de la région méditerranéenne. Nous protégeons et valorisons votre patrimoine immobilier avec des solutions techniques sur-mesure et une expertise reconnue.</p>

        <h2>Nos services de couverture et rénovation toiture a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nos équipes interviennent sur tous types de toitures - tuiles, ardoises, bacs acier - en réalisant un diagnostic précis avant toute intervention. Nous proposons des solutions complètes allant de la réparation ponctuelle à la réfection totale, en utilisant uniquement des matériaux haute performance garantissant une étanchéité optimale et une résistance aux conditions climatiques méditerranéennes. Notre processus inclut systématiquement un audit technique, un devis détaillé et une intervention professionnelle avec des techniques modernes de rénovation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Cagnes-sur-Mer, 2) Des artisans certifiés et formés aux dernières normes techniques, 3) Un engagement qualité avec des garanties décennales, 4) Une approche écologique privilégiant des matériaux durables et économes en énergie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², avec une moyenne de 150€/m² pour des travaux de qualité. Pour un pavillon standard de 100m², le budget global oscille entre 8 000€ et 25 000€, selon les matériaux et la complexité des travaux. Nous proposons des financements et des devis détaillés sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées, déformations structurelles, mousses/végétations, isolation défectueuse. Un diagnostic tous les 10 ans est recommandé pour prévenir les dégradations importantes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez impérativement : 1) Certifications professionnelles (RGE, Qualibat), 2) Assurances décennales et responsabilité civile, 3) Références locales vérifiables, 4) Devis détaillés et transparents, 5) Avis clients et recommandations. Notre entreprise répond à tous ces critères avec une expertise reconnue à Cagnes-sur-Mer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Cagnes-sur-Mer ?
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
