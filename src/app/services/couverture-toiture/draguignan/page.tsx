import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Draguignan | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation de toiture sur Draguignan et ses environs. Spécialistes de la couverture depuis ',
  keywords: 'couverture toiture draguignan, renovation toiture draguignan, reparation toiture draguignan, couvreur draguignan, refection toiture draguignan, entreprise couverture draguignan',
};

export default function CouvertureToitureDraguignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Draguignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation de toiture sur Draguignan et ses environs. Spécialistes de la couverture depuis plus de 15 ans, nous intervenons rapidement pour protéger et valoriser votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Draguignan</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences techniques les plus strictes. Notre équipe de professionnels qualifiés analyse précisément l&apos;état de votre toiture, diagnostique les désordres potentiels et propose des solutions sur-mesure. Nous travaillons avec des matériaux haute performance : tuiles terre cuite, ardoises, bacs acier, garantissant une étanchéité maximale et une durabilité exceptionnelle. Notre processus complet comprend le diagnostic technique, la dépose de l&apos;ancienne couverture, le renforcement de la charpente si nécessaire et la pose de nouveaux éléments selon les normes en vigueur. Dans la région de Draguignan, nous adaptons nos interventions aux spécificités climatiques locales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Pourquoi nous faire confiance ? Notre expertise technique, nos certifications RGE, notre engagement qualité et notre réactivité font la différence. Nous proposons des devis détaillés et transparents, un délai d&apos;intervention rapide, et une garantie décennale sur tous nos travaux. Notre connaissance du territoire varois nous permet de répondre précisément aux contraintes architecturales et réglementaires locales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité des travaux. Pour une maison de 100m², comptez un budget moyen de 12 000€ à 25 000€. Nos devis personnalisés incluent tous les détails techniques et financiers pour éviter toute mauvaise surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées, déformation de la charpente, mousses et infiltrations. Un diagnostic professionnel permet de déterminer le moment opportun avec précision.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez ses certifications RGE, son expérience locale, ses références clients, ses garanties décennales. Demandez plusieurs devis détaillés, comparez les prestations techniques et rencontrez directement l&apos;artisan pour évaluer son professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Draguignan ?
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
