import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Toulon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture sur Toulon et ses environs. Spécialistes depuis plus de',
  keywords: 'couverture toiture toulon, renovation toiture toulon, reparation toiture toulon, couvreur toulon, refection toiture toulon, entreprise couverture toulon',
};

export default function CouvertureToitureToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture sur Toulon et ses environs. Spécialistes depuis plus de 15 ans, nous garantissons des interventions de qualité pour protéger durablement votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a Toulon</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture répond aux exigences les plus strictes des propriétaires toulonnais. Nous intervenons sur tous types de toitures : tuiles, ardoises, bacs acier, avec une approche technique précise et personnalisée. Notre processus commence par un diagnostic complet, réalisé gratuitement, qui nous permet d&apos;évaluer précisément l&apos;état de votre couverture. Nos équipes qualifiées utilisent uniquement des matériaux de haute qualité, conformes aux normes françaises, pour assurer une rénovation durable et esthétique. Chaque intervention est pensée pour maximiser l&apos;isolation thermique et la résistance de votre toiture aux conditions climatiques méditerranéennes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Toulon, 2) Des artisans certifiés et formés en permanence, 3) Un devis détaillé et transparent sans engagement, 4) Une garantie décennale sur tous nos travaux. Nous plaçons la satisfaction client au cœur de notre démarche.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte en moyenne entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité du chantier. Notre diagnostic gratuit permet un devis précis sans mauvaise surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : fuites récurrentes, tuiles cassées, infiltrations, mousses importantes. Un diagnostic annuel peut prévenir des dégradations coûteuses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications professionnelles, son assurance décennale, ses avis clients, ses références locales. Demandez plusieurs devis détaillés et comparez les propositions techniques, pas uniquement les prix.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Toulon ?
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
