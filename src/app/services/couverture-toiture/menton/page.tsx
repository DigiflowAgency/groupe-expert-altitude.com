import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Menton | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Menton et dans la région des Alpes-Maritimes. Spécialistes ',
  keywords: 'couverture toiture menton, renovation toiture menton, reparation toiture menton, couvreur menton, refection toiture menton, entreprise couverture menton',
};

export default function CouvertureToitureMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Menton et dans la région des Alpes-Maritimes. Spécialistes des travaux de toiture, nous protégeons et valorisons votre patrimoine immobilier avec une expertise technique inégalée.</p>

        <h2>Nos services de couverture et rénovation toiture a Menton</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture couvrent l&apos;ensemble des besoins des propriétaires de Menton et ses environs. Notre équipe de professionnels intervient sur tous types de toitures : tuiles, ardoises, zinc, bac acier, avec une précision chirurgicale et un souci constant de qualité. Nous réalisons des diagnostics complets avant intervention, identifiant chaque désordre potentiel pour proposer la solution technique la plus adaptée. Notre processus inclut un audit précis, un devis détaillé et transparent, et une réalisation utilisant les matériaux les plus performants du marché. Chaque chantier bénéficie d&apos;une garantie décennale, gage de notre engagement qualité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans dans le domaine de la couverture, 2) Des techniciens certifiés et formés aux dernières normes réglementaires, 3) Un engagement environnemental avec des matériaux éco-responsables, 4) Une approche sur-mesure adaptée à chaque configuration architecturale de Menton.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux choisis et la complexité des travaux. Pour une maison moyenne de 100m², le budget global oscille entre 8 000€ et 25 000€, incluant dépose, fourniture et pose des nouveaux matériaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées, déformation de la charpente, mousses et végétations parasites. Un diagnostic tous les 10 ans permet d&apos;anticiper les rénovations nécessaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez impérativement : la qualification RGE, l&apos;assurance décennale, les références clients, les certifications professionnelles. Demandez systématiquement plusieurs devis détaillés, comparez les propositions techniques et sollicitez des recommandations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Menton ?
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
