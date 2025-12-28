import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Pessac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Pessac et ses environs. Spécialist',
  keywords: 'couverture toiture pessac, renovation toiture pessac, reparation toiture pessac, couvreur pessac, refection toiture pessac, entreprise couverture pessac',
};

export default function CouvertureToiturePessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Pessac et ses environs. Spécialistes des travaux de toiture, nous intervenons rapidement pour protéger et valoriser votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a Pessac</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture s&apos;étend à tous types de bâtiments, des maisons individuelles aux immeubles collectifs de Pessac. Nous proposons des solutions complètes de rénovation, allant du diagnostic précis à la réfection totale de votre toiture. Nos équipes qualifiées utilisent les techniques les plus modernes et les matériaux haute performance pour garantir une étanchéité parfaite et une durabilité maximale. Chaque intervention commence par un diagnostic technique approfondi, permettant d&apos;identifier précisément les désordres et de proposer la solution technique la plus adaptée à votre situation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Artisans certifiés avec plus de 15 ans d&apos;expérience
- Devis gratuit et détaillé sous 48h
- Interventions rapides sur Pessac et la Gironde
- Garantie décennale sur tous nos travaux
- Techniques innovantes et matériaux de haute qualité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte généralement entre 8 000€ et 25 000€, selon la surface (de 50 à 200m²), les matériaux choisis et la complexité des travaux. Un diagnostic précis permettra d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes évidents de vétusté : fuites récurrentes, tuiles cassées, infiltrations, mousses importantes. Un diagnostic annuel peut prévenir les dégradations majeures.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : la certification RGE, l&apos;existence d&apos;une garantie décennale, les avis clients, l&apos;ancienneté de l&apos;entreprise et ses références locales. N&apos;hésitez pas à demander plusieurs devis comparatifs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Pessac ?
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
