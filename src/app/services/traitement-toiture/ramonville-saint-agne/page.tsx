import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Ramonville-Saint-Agne | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en traitement et démoussage de toiture à Ramonville-Saint-Agne et ses environs. Nos experts i',
  keywords: 'demoussage toiture ramonville-saint-agne, traitement toiture ramonville-saint-agne, nettoyage toiture ramonville-saint-agne, antimousse toiture ramonville-saint-agne, hydrofuge toiture ramonville-saint-agne, entretien toiture ramonville-saint-agne',
};

export default function TraitementToitureRamonvilleSaintAgnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Ramonville-Saint-Agne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en traitement et démoussage de toiture à Ramonville-Saint-Agne et ses environs. Nos experts interviennent sur tous types de toitures pour garantir leur longévité et leur esthétique, en utilisant des techniques professionnelles et des produits haute performance.</p>

        <h2>Nos services de traitement et démoussage toiture a Ramonville-Saint-Agne</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture représente bien plus qu&apos;un simple nettoyage. Nous réalisons un diagnostic précis de votre couverture, identifiant les zones sensibles et les risques potentiels. Notre processus comprend un traitement antimousse écologique, un nettoyage haute précision et une protection hydrofuge qui préserve votre toiture contre l&apos;humidité et les agressions extérieures. Nos techniciens utilisent du matériel professionnel permettant un travail sans dommage, avec une efficacité garantie jusqu&apos;à 5 ans. Sur Ramonville-Saint-Agne, nous intervenons aussi bien sur les tuiles, ardoises que les toitures en béton, en respectant les normes environnementales et de sécurité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre groupe, c&apos;est opter pour l&apos;expertise et la qualité. Nous proposons : un devis gratuit et détaillé, des techniciens certifiés, des produits écologiques sans chlore, une intervention rapide sous 15 jours, et une garantie de résultat. Notre connaissance du climat local de Ramonville-Saint-Agne nous permet d&apos;adapter parfaitement nos traitements.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son état et son accessibilité. Pour une maison moyenne de 100m², comptez un investissement entre 1500€ et 3500€. Notre devis gratuit vous donnera un tarif précis sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et septembre, période où les conditions météorologiques sont optimales. Il est recommandé d&apos;intervenir tous les 3 à 5 ans, ou dès que vous observez les premiers signes de prolifération de mousse et lichens.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. On utilise un pulvérisateur professionnel, en appliquant uniformément le produit par couches croisées, en respectant un temps de séchage de 24h. La température idéale se situe entre 15 et 25°C, sans risque de pluie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Ramonville-Saint-Agne ?
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
