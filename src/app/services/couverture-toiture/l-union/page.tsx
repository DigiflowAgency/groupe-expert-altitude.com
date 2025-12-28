import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a L\'Union | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à L&apos;Union et ses environs. Forts de ',
  keywords: 'couverture toiture l'union, renovation toiture l'union, reparation toiture l'union, couvreur l'union, refection toiture l'union, entreprise couverture l'union',
};

export default function CouvertureToitureLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à L&apos;Union et ses environs. Forts de plus de 15 ans d&apos;expérience, nous garantissons des interventions professionnelles qui protègent durablement votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a L'Union</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences les plus strictes de qualité et de durabilité. Notre équipe de professionnels qualifiés intervient sur tous types de toitures - tuiles, ardoises, zinc ou bac acier - en réalisant un diagnostic précis avant toute intervention. Nous proposons des solutions techniques sur-mesure, en privilégiant des matériaux haute performance et des techniques d&apos;isolation innovantes. Notre processus inclut un audit complet, un devis détaillé et transparent, et une réalisation méticuleuse respectant les normes en vigueur. À L&apos;Union, nous intervenons aussi bien sur les pavillons individuels que sur les bâtiments collectifs, avec une attention constante à la performance énergétique et à l&apos;esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique reconnue avec certification RGE, 2) Des artisans hautement qualifiés et formés en permanence, 3) Des matériaux sélectionnés auprès de fournisseurs français, 4) Une garantie décennale sur tous nos travaux, offrant une tranquillité d&apos;esprit totale à nos clients de L&apos;Union et de la région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte généralement entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Un pavillon standard de 100m² nécessite un budget moyen de 12 500€. Nous proposons systématiquement un devis détaillé et personnalisé sans frais.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou avant si vous observez des signes de vétusté : infiltrations, tuiles cassées, mousses importantes, affaissement de la charpente. Un diagnostic précis permet de déterminer le moment optimal de rénovation.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : la certification RGE, l&apos;existence d&apos;une assurance décennale, les avis clients, les références de chantiers précédents. Exigez un devis détaillé, rencontrez l&apos;artisan et demandez ses qualifications professionnelles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a L'Union ?
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
