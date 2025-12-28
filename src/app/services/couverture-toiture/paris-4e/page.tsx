import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Paris 4e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance pour la rénovation et la couverture de toiture à Paris 4e. Spécialistes reconnus dans le domaine,',
  keywords: 'couverture toiture paris 4e, renovation toiture paris 4e, reparation toiture paris 4e, couvreur paris 4e, refection toiture paris 4e, entreprise couverture paris 4e',
};

export default function CouvertureToitureParis4ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Paris 4e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance pour la rénovation et la couverture de toiture à Paris 4e. Spécialistes reconnus dans le domaine, nous intervenons avec précision et expertise pour protéger et valoriser votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Paris 4e</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous réalisons des interventions complètes, depuis le diagnostic technique jusqu&apos;à la réfection finale, en utilisant des matériaux de haute performance. Notre équipe de couvreurs qualifiés évalue méticuleusement chaque structure pour proposer des solutions sur-mesure adaptées à votre bâtiment. Nous traitons aussi bien les toitures traditionnelles que les constructions contemporaines, avec une attention particulière portée à l&apos;isolation thermique et à l&apos;étanchéité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est garantir : 1) Une expertise technique de plus de 15 ans dans le domaine de la couverture, 2) Des artisans certifiés et formés aux dernières normes réglementaires, 3) Un devis détaillé et transparent sans frais cachés, 4) Une intervention rapide et professionnelle sur Paris 4e et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 5 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Notre équipe réalise un diagnostic précis pour un devis personnalisé, incluant la main-d&apos;œuvre, les matériaux et les éventuels travaux annexes d&apos;isolation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes de détérioration comme des infiltrations, des tuiles cassées, des déformations ou des mousses. À Paris 4e, les conditions climatiques peuvent accélérer la dégradation, nécessitant une vigilance accrue.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder : des certifications professionnelles, une assurance décennale, des références vérifiables, une expertise technique démontrée, et la capacité de fournir un diagnostic précis et un devis détaillé. Vérifiez toujours ses références et ses avis clients.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Paris 4e ?
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
