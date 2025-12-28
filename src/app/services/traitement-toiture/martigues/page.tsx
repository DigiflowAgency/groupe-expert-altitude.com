import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Martigues | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Martigues et ses environs. Spécialistes du netto',
  keywords: 'demoussage toiture martigues, traitement toiture martigues, nettoyage toiture martigues, antimousse toiture martigues, hydrofuge toiture martigues, entretien toiture martigues',
};

export default function TraitementToitureMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Martigues et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous intervenons rapidement pour préserver la durabilité de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Martigues</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage représente une solution complète et professionnelle pour protéger votre toiture contre les dégradations liées aux mousses et lichens. Notre équipe technique utilise des techniques éprouvées et des produits écologiques pour éliminer efficacement les végétations parasitaires qui peuvent fragiliser vos tuiles et ardoises. Chaque intervention commence par un diagnostic précis de l&apos;état de votre toiture, permettant d&apos;adapter notre traitement antimousse spécifiquement à vos besoins. Nous réalisons un nettoyage haute précision sans endommager les matériaux, suivi d&apos;un traitement hydrofuge qui protège durablement contre les infiltrations et la repousse de mousse.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expérience sur Martigues et la région PACA. Nos techniciens sont formés aux dernières normes de sécurité et de traitement. Nous proposons une garantie de 5 ans contre la repousse de mousse. Intervention rapide sous 48h et devis gratuit sans engagement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son accessibilité et le type de traitement nécessaire. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3000€ incluant nettoyage et traitement antimousse.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avec des températures entre 10°C et 25°C. Idéalement tous les 3-5 ans ou dès que vous observez plus de 30% de surface recouverte de mousse ou de lichens.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite un séchage complet de la surface. Utilisez un produit spécifique compatible avec votre type de toiture, appliquez uniformément au rouleau ou par pulvérisation, en 2 couches croisées, par temps sec et température entre 12-22°C.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Martigues ?
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
