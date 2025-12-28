import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture sur La Seyne-sur-Mer et ses environs. Avec plus de 15 ans ',
  keywords: 'couverture toiture la seyne-sur-mer, renovation toiture la seyne-sur-mer, reparation toiture la seyne-sur-mer, couvreur la seyne-sur-mer, refection toiture la seyne-sur-mer, entreprise couverture la seyne-sur-mer',
};

export default function CouvertureToitureLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture sur La Seyne-sur-Mer et ses environs. Avec plus de 15 ans d&apos;expertise, nous protégeons et valorisons votre habitat grâce à des solutions techniques sur-mesure et un savoir-faire artisanal.</p>

        <h2>Nos services de couverture et rénovation toiture a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences les plus strictes de qualité et de durabilité. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc ou bac acier - en proposant des solutions adaptées à chaque configuration. Notre équipe de professionnels réalise un diagnostic précis avant toute intervention, garantissant une rénovation optimale qui préservera votre patrimoine immobilier. Nous utilisons uniquement des matériaux haute performance, certifiés et respectueux de l&apos;environnement, pour des toitures qui résistent durablement aux conditions climatiques méditerranéennes de La Seyne-sur-Mer.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec intervention rapide sur La Seyne-sur-Mer
- Devis gratuit et transparent sans engagement
- Artisans certifiés et assurés
- Techniques innovantes et matériaux de qualité
- Plus de 95% de clients satisfaits</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 150€ par m², selon les matériaux et la complexité des travaux. Pour une maison moyenne de 100m², comptez un budget global entre 8 000€ et 15 000€. Nos experts réalisent un diagnostic précis pour un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 25-30 ans, ou en cas de signes comme infiltrations récurrentes, tuiles cassées, déformations, mousses importantes ou après des événements climatiques majeurs. Un diagnostic annuel permet de prévenir les dégradations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié RGE, avec références vérifiables, assurance décennale, et plusieurs années d&apos;expérience. Demandez systématiquement un devis détaillé, comparez plusieurs professionnels et vérifiez leurs avis clients et leur immatriculation au registre du commerce.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a La Seyne-sur-Mer ?
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
