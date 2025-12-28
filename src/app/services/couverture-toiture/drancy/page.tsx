import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Drancy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Drancy et ses environs. Spécialistes depuis plus de 1',
  keywords: 'couverture toiture drancy, renovation toiture drancy, reparation toiture drancy, couvreur drancy, refection toiture drancy, entreprise couverture drancy',
};

export default function CouvertureToitureDrancyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Drancy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Drancy et ses environs. Spécialistes depuis plus de 15 ans, nous intervenons sur tous types de toitures pour garantir la protection et la valorisation de votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a Drancy</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture couvrent l&apos;ensemble des besoins des particuliers et professionnels de Drancy. Notre expertise technique nous permet de réaliser des interventions complètes, depuis le diagnostic précis jusqu&apos;à la réfection totale. Nous utilisons uniquement des matériaux de haute qualité, sélectionnés pour leur durabilité et leur résistance aux conditions climatiques locales. Notre processus comprend un audit technique détaillé, la proposition d&apos;un devis transparent, et une réalisation méticuleuse respectant les normes en vigueur. Chaque chantier est suivi personnellement par nos experts pour assurer une qualité irréprochable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de couvreurs certifiés avec plus de 15 ans d&apos;expérience
- Interventions rapides et sur-mesure à Drancy
- Devis gratuit et sans engagement
- Garantie décennale sur tous nos travaux
- Matériaux écologiques et performants</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 5 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Un diagnostic précis permet d&apos;établir un budget exact. Nos experts proposent toujours plusieurs options adaptées à votre budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30 ans ou en cas de signes de vétusté : fuites, tuiles cassées, infiltrations, mousses importantes. Un diagnostic annuel permet de prévenir les dégradations et éviter des réparations coûteuses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez sa certification RGE, demandez des références clients, consultez ses avis en ligne, et assurez-vous qu&apos;il propose une garantie décennale. Un professionnel sérieux réalisera un diagnostic préalable détaillé et transparent.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Drancy ?
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
