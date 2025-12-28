import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Montreuil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Montreuil, vous accompagne dans la protection et la valoris',
  keywords: 'couverture toiture montreuil, renovation toiture montreuil, reparation toiture montreuil, couvreur montreuil, refection toiture montreuil, entreprise couverture montreuil',
};

export default function CouvertureToitureMontreuilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Montreuil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Montreuil, vous accompagne dans la protection et la valorisation de votre patrimoine immobilier. Nos experts interviennent sur l&apos;ensemble des projets de toiture avec une précision et un professionnalisme garantis.</p>

        <h2>Nos services de couverture et rénovation toiture a Montreuil</h2>
        <div className="space-y-4">
          <p>Spécialistes de la rénovation et de la réfection de toiture, nous proposons des solutions complètes adaptées à chaque bâtiment de Montreuil et ses environs. Notre approche technique commence par un diagnostic précis de votre couverture, évaluant l&apos;état des matériaux, les potentiels points faibles et les nécessités de réparation. Nous utilisons uniquement des matériaux de haute qualité, résistants aux conditions climatiques françaises, pour assurer une durabilité maximale. Notre équipe maîtrise tous les types de toitures - tuiles, ardoises, zinc, bac acier - et intervient aussi bien sur les habitations individuelles que les bâtiments commerciaux. Chaque chantier fait l&apos;objet d&apos;un suivi rigoureux, avec un engagement de résultat et de performance énergétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos couvreurs sont certifiés RGE, garantissant une intervention professionnelle. Nous proposons des devis transparents sans surprise, un délai d&apos;intervention rapide de 72h et une garantie décennale sur tous nos travaux. Notre connaissance approfondie du territoire de Montreuil nous permet de répondre précisément aux normes architecturales locales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte en moyenne entre 120€ et 250€ par m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial de la toiture. Pour une maison de 100m², comptez un budget global entre 12 000€ et 25 000€. Nous réalisons un diagnostic précis pour un devis personnalisé sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs comme des infiltrations, des tuiles cassées, de la mousse, ou des déformations visibles. Les toitures exposées au nord ou soumises à des conditions climatiques difficiles peuvent nécessiter une rénovation plus précoce.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez impérativement sa certification RGE, ses références clients, son assurance décennale et la transparence de ses devis. Demandez plusieurs propositions détaillées, comparez les techniques proposées et n&apos;hésitez pas à consulter les avis clients. Un professionnel sérieux proposera toujours un diagnostic préalable complet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Montreuil ?
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
