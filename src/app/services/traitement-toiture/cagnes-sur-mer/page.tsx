import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Cagnes-sur-Mer et ses environs. Spécialistes ',
  keywords: 'demoussage toiture cagnes-sur-mer, traitement toiture cagnes-sur-mer, nettoyage toiture cagnes-sur-mer, antimousse toiture cagnes-sur-mer, hydrofuge toiture cagnes-sur-mer, entretien toiture cagnes-sur-mer',
};

export default function TraitementToitureCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Cagnes-sur-Mer et ses environs. Spécialistes du nettoyage et de la protection des toitures depuis plus de 15 ans, nous garantissons un service professionnel qui préserve la durabilité et l&apos;esthétique de votre habitat.</p>

        <h2>Nos services de traitement et démoussage toiture a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture représente bien plus qu&apos;un simple nettoyage. Nous intervenons méticuleusement pour éliminer les mousses, lichens et salissures qui détériorent vos tuiles et voiles votre toiture. Notre méthode exclusive combine un nettoyage haute pression contrôlé et un traitement antimousse écologique qui protège durablement votre couverture. Chaque intervention est précédée d&apos;un diagnostic précis permettant d&apos;adapter notre approche à la spécificité de votre toiture, qu&apos;il s&apos;agisse de tuiles traditionnelles, ardoises ou bacs acier. Nos techniciens certifiés utilisent des produits professionnels respectant les normes environnementales, garantissant un résultat optimal sans impact négatif sur votre habitat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient rapidement sur Cagnes-sur-Mer, avec un devis gratuit et détaillé. Nous proposons une garantie de 5 ans sur nos traitements, utilisons des techniques éco-responsables et disposons d&apos;une assurance professionnelle complète. Notre taux de satisfaction client dépasse les 95%, témoignant de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un démoussage de toiture varie entre 15€ et 35€ par m², selon la complexité du chantier, l&apos;état de la toiture et son accessibilité. À Cagnes-sur-Mer, nos tarifs sont compétitifs et incluent systématiquement le diagnostic, le nettoyage et le traitement antimousse.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse se situe entre avril et octobre, période où les conditions météorologiques sont optimales. Il est recommandé d&apos;intervenir tous les 3 à 5 ans, ou dès que les premières mousses apparaissent pour prévenir leur prolifération.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après le démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Nous utilisons un produit spécifique pulvérisé uniformément, qui forme un film protecteur invisible répulsif à l&apos;eau et aux micro-organismes. L&apos;opération doit être réalisée par des professionnels pour garantir une protection efficace et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Cagnes-sur-Mer ?
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
