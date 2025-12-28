import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Marignane | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Marignane, intervient depuis plus de 15 ans pour protéger e',
  keywords: 'couverture toiture marignane, renovation toiture marignane, reparation toiture marignane, couvreur marignane, refection toiture marignane, entreprise couverture marignane',
};

export default function CouvertureToitureMarignanePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Marignane</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Marignane, intervient depuis plus de 15 ans pour protéger et valoriser votre habitat. Nous sommes spécialisés dans la rénovation et la réparation de toitures pour les particuliers et professionnels de la région marseillaise.</p>

        <h2>Nos services de couverture et rénovation toiture a Marignane</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture couvre l&apos;ensemble des besoins techniques et esthétiques des toitures sur Marignane et ses environs. Nous réalisons des interventions complètes, depuis le diagnostic précis jusqu&apos;à la réfection totale, en utilisant uniquement des matériaux de haute qualité. Notre équipe de couvreurs professionnels maîtrise parfaitement les techniques traditionnelles et innovantes, garantissant une étanchéité optimale et une durabilité maximale. Chaque chantier fait l&apos;objet d&apos;une étude personnalisée, avec un devis détaillé et transparent, pour répondre spécifiquement aux contraintes architecturales et budgétaires de chaque client.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience locale
- Interventions rapides et sur-mesure à Marignane
- Garantie décennale sur tous nos travaux de couverture
- Diagnostic technique gratuit et sans engagement
- Matériaux sélectionnés auprès de fournisseurs français reconnus</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 5 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Notre expertise permet de vous proposer des solutions adaptées à tous les budgets, avec des financements et aides possibles.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses importantes, déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations et optimiser la longévité de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder : une certification professionnelle, une assurance décennale, des références vérifiables, des avis clients positifs, et proposer un devis détaillé avec descriptif technique précis. Vérifiez toujours ces critères avant tout engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Marignane ?
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
