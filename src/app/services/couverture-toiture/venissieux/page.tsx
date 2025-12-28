import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Vénissieux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Vénissieux et ses environs. Spécialistes de la protec',
  keywords: 'couverture toiture vénissieux, renovation toiture vénissieux, reparation toiture vénissieux, couvreur vénissieux, refection toiture vénissieux, entreprise couverture vénissieux',
};

export default function CouvertureToitureVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Vénissieux et ses environs. Spécialistes de la protection de votre habitat, nous intervenons avec expertise et précision pour garantir la longévité et la qualité de vos toitures.</p>

        <h2>Nos services de couverture et rénovation toiture a Vénissieux</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nos équipes qualifiées réalisent un diagnostic précis de votre toiture, évaluant chaque élément structural avec une attention méticuleuse. Nous proposons des solutions personnalisées adaptées à l&apos;architecture de votre bâtiment, qu&apos;il s&apos;agisse d&apos;une rénovation partielle ou complète. Notre approche technique intègre les dernières normes environnementales et techniques, utilisant des matériaux haute performance qui assurent une isolation optimale et une résistance aux conditions climatiques de la région lyonnaise.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience
- Intervention rapide sur Vénissieux et l&apos;agglomération
- Devis gratuit et transparent sans engagement
- Équipe de professionnels certifiés et assurés
- Matériaux de haute qualité garantissant une durabilité maximale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte généralement entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Notre équipe propose systématiquement un diagnostic précis avec un devis détaillé adapté à votre situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes de détérioration comme des infiltrations, tuiles cassées, mousses, ou déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations importantes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours ses certifications RGE, ses références clients, son assurance décennale et demandez plusieurs devis comparatifs. Chez Groupe Expert Altitude Com, nous mettons à votre disposition tous nos justificatifs professionnels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Vénissieux ?
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
