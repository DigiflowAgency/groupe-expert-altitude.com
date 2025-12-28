import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Colombes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Colombes et dans toute la région parisienne. Spéciali',
  keywords: 'couverture toiture colombes, renovation toiture colombes, reparation toiture colombes, couvreur colombes, refection toiture colombes, entreprise couverture colombes',
};

export default function CouvertureToitureColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Colombes et dans toute la région parisienne. Spécialistes depuis plus de 15 ans, nous garantissons des interventions de qualité pour protéger durablement votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a Colombes</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture répond aux besoins spécifiques de chaque bâtiment à Colombes. Nous intervenons sur tous types de structures : pavillons, immeubles, bâtiments commerciaux. Notre processus démarre par un diagnostic précis, permettant d&apos;identifier les désordres et de proposer une solution technique adaptée. Nos équipes utilisent uniquement des matériaux haute performance, résistant aux conditions climatiques françaises. Chaque chantier fait l&apos;objet d&apos;un suivi méticuleux, avec un engagement de résultat et de durabilité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Artisans certifiés avec plus de 150 chantiers réalisés par an
- Devis gratuit et détaillé sous 48h
- Garantie décennale sur tous nos travaux
- Techniques innovantes et matériaux écologiques
- Intervention rapide sur Colombes et communes limitrophes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité. Pour une maison moyenne de 100m², comptez environ 12 500€ avec une durée de vie garantie de 30 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 25-30 ans, ou en cas de signes précurseurs : fuites récurrentes, tuiles cassées, infiltrations, déformations structurelles, mousses importantes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez systématiquement : certification RGE, assurance décennale, avis clients, ancienneté de l&apos;entreprise, références de chantiers similaires et proposition d&apos;un diagnostic technique préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Colombes ?
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
