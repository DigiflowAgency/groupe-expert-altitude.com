import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitement et démoussage imp',
  keywords: 'demoussage toiture la chapelle-sur-erdre, traitement toiture la chapelle-sur-erdre, nettoyage toiture la chapelle-sur-erdre, antimousse toiture la chapelle-sur-erdre, hydrofuge toiture la chapelle-sur-erdre, entretien toiture la chapelle-sur-erdre',
};

export default function TraitementToitureLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitement et démoussage impeccable à La Chapelle-sur-Erdre. Nos experts interviennent rapidement pour protéger et valoriser votre patrimoine immobilier contre les agressions extérieures.</p>

        <h2>Nos services de traitement et démoussage toiture a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>Le démoussage et traitement de toiture sont essentiels pour préserver la longévité et l&apos;esthétique de votre couverture. Notre méthode exclusive permet d&apos;éliminer efficacement les mousses, lichens et algues qui détériorent vos tuiles et ardoises. Grâce à des produits écologiques et des techniques innovantes, nous nettoyons en profondeur sans endommager les matériaux. Notre équipe spécialisée de La Chapelle-sur-Erdre utilise un équipement haute précision pour traiter chaque surface avec soin. Le traitement antimousse que nous proposons offre une protection durable de 5 à 7 ans, limitant la repousse et préservant l&apos;intégrité de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à La Chapelle-sur-Erdre
- Techniciens certifiés et assurés
- Diagnostic gratuit avant intervention
- Produits écologiques et biodégradables
- Devis transparent sans surprise
- Garantie satisfaction de 2 ans</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son état et son accessibilité. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3500€. Un diagnostic précis sur place permettra un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avec des températures entre 10°C et 25°C. Idéalement tous les 5 à 7 ans, ou dès que vous observez plus de 30% de surface envahie par la mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, appliquez l&apos;hydrofuge en 3 étapes : 1) Nettoyage complet et séchage total de la surface, 2) Application au pulvérisateur en couche uniforme, 3) Temps de séchage de 24h. Utilisez un produit compatible avec votre type de toiture pour une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a La Chapelle-sur-Erdre ?
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
