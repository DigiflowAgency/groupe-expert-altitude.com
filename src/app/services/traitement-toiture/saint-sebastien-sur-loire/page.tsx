import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Saint-Sébastien-sur-Loire pour un ',
  keywords: 'demoussage toiture saint-sébastien-sur-loire, traitement toiture saint-sébastien-sur-loire, nettoyage toiture saint-sébastien-sur-loire, antimousse toiture saint-sébastien-sur-loire, hydrofuge toiture saint-sébastien-sur-loire, entretien toiture saint-sébastien-sur-loire',
};

export default function TraitementToitureSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Saint-Sébastien-sur-Loire pour un traitement et démoussage impeccable. Nos experts interviennent rapidement pour préserver la longévité et l&apos;esthétique de votre couverture.</p>

        <h2>Nos services de traitement et démoussage toiture a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est un service essentiel pour maintenir l&apos;intégrité et l&apos;apparence de votre habitat. À Saint-Sébastien-sur-Loire, notre équipe utilise des techniques innovantes pour éliminer efficacement les mousses, lichens et salissures qui peuvent détériorer vos tuiles. Notre processus complet comprend un nettoyage haute précision, un traitement antimousse puissant et une protection hydrofuge qui garantit jusqu&apos;à 5 ans de protection contre les nouvelles infiltrations. Chaque intervention est personnalisée, en respectant les spécificités de votre toiture et les matériaux qui la composent.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique, notre approche éco-responsable et notre engagement local. Nos techniciens sont certifiés, utilisent du matériel professionnel et des produits de traitement respectueux de l&apos;environnement. Nous proposons un diagnostic gratuit, une intervention rapide et une garantie de qualité. Notre connaissance précise des toitures de Saint-Sébastien-sur-Loire nous permet d&apos;offrir un service sur-mesure.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son accessibilité et l&apos;état des surfaces. Un diagnostic précis permet de définir un devis personnalisé, sans surprise. Pour une maison moyenne de 100m², comptez entre 1500€ et 3000€ pour un traitement complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin septembre ou début octobre, après l&apos;été et avant les premières gelées. Cette période permet une application optimale des produits et une protection efficace pour l&apos;hiver. Un traitement tous les 3 à 5 ans est généralement recommandé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. On utilise un pulvérisateur professionnel, en appliquant uniformément le produit par couches fines. L&apos;objectif est de créer un film protecteur qui repousse l&apos;eau sans boucher les micropores des matériaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Saint-Sébastien-sur-Loire ?
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
