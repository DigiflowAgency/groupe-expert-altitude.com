import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Paris 2e | Groupe Expert Altitude Com',
  description: 'Experts en couverture et rénovation toiture depuis plus de 15 ans, Groupe Expert Altitude Com est votre partenaire de confiance au cœur de Paris 2e. Nous p',
  keywords: 'couverture toiture paris 2e, renovation toiture paris 2e, reparation toiture paris 2e, couvreur paris 2e, refection toiture paris 2e, entreprise couverture paris 2e',
};

export default function CouvertureToitureParis2ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Paris 2e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Experts en couverture et rénovation toiture depuis plus de 15 ans, Groupe Expert Altitude Com est votre partenaire de confiance au cœur de Paris 2e. Nous protégeons et valorisons votre patrimoine immobilier avec des solutions techniques sur-mesure et un savoir-faire artisanal.</p>

        <h2>Nos services de couverture et rénovation toiture a Paris 2e</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de performance et de durabilité. Nos équipes interviennent sur tous types de bâtiments à Paris 2e, des immeubles historiques aux constructions contemporaines. Nous réalisons un diagnostic précis avant toute intervention, évaluant l&apos;état structural, l&apos;étanchéité et les potentiels points faibles. Notre approche combine techniques traditionnelles et innovations technologiques pour garantir une réfection optimale, avec des matériaux haute qualité et une isolation thermique performante. Chaque chantier fait l&apos;objet d&apos;un suivi rigoureux et d&apos;un accompagnement personnalisé.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Artisans certifiés avec plus de 15 ans d&apos;expérience
- Interventions rapides et devis gratuits à Paris 2e
- Garantie décennale sur tous nos travaux
- Matériaux écologiques et normes énergétiques respectées
- Solutions techniques sur-mesure adaptées à chaque configuration</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Paris 2e varie entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Notre estimation précise prend en compte la structure, l&apos;isolation et les spécificités architecturales de votre bien.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses, déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations et optimiser la longévité de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié RGE, avec références vérifiables, assurance décennale, et proposant un diagnostic technique complet. Vérifiez ses certifications, demandez plusieurs devis détaillés et contactez ses précédents clients pour garantir la qualité de ses interventions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Paris 2e ?
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
