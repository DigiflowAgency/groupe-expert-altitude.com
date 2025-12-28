import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Colomiers | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Colomiers pour un traitement et dé',
  keywords: 'demoussage toiture colomiers, traitement toiture colomiers, nettoyage toiture colomiers, antimousse toiture colomiers, hydrofuge toiture colomiers, entretien toiture colomiers',
};

export default function TraitementToitureColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Colomiers pour un traitement et démoussage toiture impeccable. Nous protégeons votre patrimoine immobilier avec des solutions techniques sur-mesure adaptées au climat local.</p>

        <h2>Nos services de traitement et démoussage toiture a Colomiers</h2>
        <div className="space-y-4">
          <p>Le démoussage et traitement de toiture représentent un enjeu crucial pour préserver la durabilité et l&apos;esthétique de votre habitat. Notre équipe intervient méticuleusement sur tous types de couvertures (tuiles, ardoises, béton) en utilisant des techniques professionnelles respectueuses des matériaux. Nous réalisons un diagnostic précis avant intervention, évaluant l&apos;état de votre toiture et les zones nécessitant un traitement spécifique. Notre processus comprend un nettoyage haute précision, l&apos;élimination des mousses et lichens, puis l&apos;application d&apos;un traitement antimousse et hydrofuge haute performance qui protégera durablement votre toiture contre les infiltrations et la détérioration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise à Colomiers se distingue par : un diagnostic technique gratuit, des produits écologiques certifiés, une intervention rapide sous 72h, une garantie décennale, et plus de 15 ans d&apos;expérience en traitement de toiture. Nous intervenons sur toute l&apos;agglomération toulousaine avec un engagement qualité total.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son état et l&apos;accessibilité. Un diagnostic précis vous permettra d&apos;obtenir un devis personnalisé sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe idéalement au printemps ou à l&apos;automne, lorsque les conditions météorologiques sont stables. Une intervention tous les 5-7 ans est recommandée pour maintenir l&apos;intégrité de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;un hydrofuge nécessite un nettoyage préalable et un séchage complet de la surface. On utilise un produit spécifique à la pulvérisation, en 2 couches croisées, avec un temps de séchage de 24h entre chaque application, garantissant une protection optimale contre l&apos;humidité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Colomiers ?
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
