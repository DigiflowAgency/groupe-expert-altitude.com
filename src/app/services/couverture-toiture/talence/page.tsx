import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Talence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture sur Talence et ses environs. Avec plus de 15 ans d&apos;expe',
  keywords: 'couverture toiture talence, renovation toiture talence, reparation toiture talence, couvreur talence, refection toiture talence, entreprise couverture talence',
};

export default function CouvertureToitureTalencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Talence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture sur Talence et ses environs. Avec plus de 15 ans d&apos;expertise, nous protégeons et valorisons votre patrimoine immobilier grâce à des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Talence</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences les plus strictes de qualité et de durabilité. Notre équipe de professionnels qualifiés intervient sur tous types de toitures - tuiles, ardoises, zinc ou bac acier - en réalisant un diagnostic précis avant toute intervention. Nous proposons des solutions complètes allant de la réparation ponctuelle à la réfection totale, en utilisant uniquement des matériaux premium et aux normes environnementales actuelles. Sur Talence, nous comprenons les spécificités climatiques locales et adaptons nos techniques en conséquence, garantissant une protection optimale contre l&apos;humidité et les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Devis gratuit et détaillé sous 48h
- Interventions rapides et précises
- Garantie décennale sur tous nos travaux
- Matériaux haute performance et éco-responsables</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte généralement entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Chez Groupe Expert Altitude Com, nous proposons des devis transparents sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes comme des fuites récurrentes, tuiles cassées, infiltrations, mousses importantes ou déformations structurelles. Un diagnostic annuel permet de prévenir ces problèmes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur qualifié en vérifiant ses certifications RGE, son immatriculation au registre du commerce, ses références clients, ses garanties décennales et en demandant plusieurs devis comparatifs. Vérifiez également les avis et recommandations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Talence ?
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
