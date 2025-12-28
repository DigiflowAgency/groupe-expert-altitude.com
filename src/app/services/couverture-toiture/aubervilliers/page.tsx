import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Aubervilliers | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture à Aubervilliers, offrant des solutions professionnelles po',
  keywords: 'couverture toiture aubervilliers, renovation toiture aubervilliers, reparation toiture aubervilliers, couvreur aubervilliers, refection toiture aubervilliers, entreprise couverture aubervilliers',
};

export default function CouvertureToitureAubervilliersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Aubervilliers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture à Aubervilliers, offrant des solutions professionnelles pour protéger et valoriser votre patrimoine immobilier. Notre expertise technique garantit des interventions de qualité adaptées aux spécificités architecturales de votre région.</p>

        <h2>Nos services de couverture et rénovation toiture a Aubervilliers</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture couvrent l&apos;ensemble des besoins des propriétaires d&apos;Aubervilliers et ses environs. Notre équipe hautement qualifiée intervient sur tous types de toitures - tuiles, ardoises, zinc ou bac acier - en réalisant des diagnostics précis et des rénovations complètes. Nous utilisons uniquement des matériaux certifiés et proposons des solutions durables qui améliorent l&apos;isolation thermique et l&apos;étanchéité de votre habitat. Notre processus inclut un audit technique détaillé, un devis personnalisé et une intervention méthodique respectant les normes professionnelles les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans le domaine de la couverture, 2) Des techniciens certifiés et formés en continu, 3) Un engagement qualité avec une garantie décennale, 4) Des solutions sur-mesure adaptées à chaque configuration architecturale. Nous sommes reconnus pour notre réactivité et notre professionnalisme.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Aubervilliers coûte généralement entre 150€ et 350€ au m², avec des variations selon la complexité des travaux, les matériaux choisis et l&apos;état initial de la toiture. Pour une maison moyenne de 100m², le budget total oscille entre 15 000€ et 35 000€, incluant dépose, matériaux et pose.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans ou en cas de signes manifestes de dégradation : fuites récurrentes, tuiles cassées, infiltrations, mousses importantes, déformations structurelles. Un diagnostic professionnel tous les 10 ans permet d&apos;anticiper les travaux nécessaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez impérativement : ses certifications professionnelles, son immatriculation au registre du commerce, ses références clients, ses assurances professionnelles. Demandez systématiquement plusieurs devis détaillés, comparez les propositions techniques et sollicitez des recommandations ou avis vérifiés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Aubervilliers ?
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
