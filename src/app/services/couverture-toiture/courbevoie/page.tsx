import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Courbevoie | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Courbevoie et ses environs. Spécialistes depuis plus ',
  keywords: 'couverture toiture courbevoie, renovation toiture courbevoie, reparation toiture courbevoie, couvreur courbevoie, refection toiture courbevoie, entreprise couverture courbevoie',
};

export default function CouvertureToitureCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Courbevoie et ses environs. Spécialistes depuis plus de 15 ans, nous intervenons sur tous types de toitures résidentielles et professionnelles avec une expertise technique irréprochable.</p>

        <h2>Nos services de couverture et rénovation toiture a Courbevoie</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture s&apos;adapte à chaque configuration architecturale de Courbevoie. Nous réalisons un diagnostic précis avant toute intervention, en évaluant l&apos;état structural, les matériaux et les potentiels risques d&apos;infiltration. Notre équipe de couvreurs qualifiés utilise uniquement des matériaux de haute qualité, garantissant une étanchéité maximale et une durabilité supérieure à 25 ans. Nous proposons des solutions personnalisées, qu&apos;il s&apos;agisse de réparations ponctuelles, de réfection complète ou de pose de nouveaux matériaux de couverture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 couvreurs certifiés avec plus de 150 chantiers réalisés par an
- Devis gratuit et détaillé sous 48h
- Interventions rapides et sur-mesure
- Garantie décennale et assurance professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 5 000€ et 25 000€ selon la surface, les matériaux et la complexité. Comptez environ 80-120€ du m² pour une rénovation standard à Courbevoie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale tous les 30-40 ans, ou avant si signes de détérioration : tuiles cassées, infiltrations, mousses, déformations structurelles. Un diagnostic précis tous les 10 ans est recommandé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez systématiquement : qualification RGE, avis clients, années d&apos;expérience, assurances professionnelles, devis détaillé et références locales. Un bon couvreur propose toujours un diagnostic technique préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Courbevoie ?
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
