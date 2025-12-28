import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Spécialiste du traitement et démoussage toiture à Villeurbanne, le Groupe Expert Altitude Com protège votre patrimoine immobilier avec des solutions innova',
  keywords: 'demoussage toiture villeurbanne, traitement toiture villeurbanne, nettoyage toiture villeurbanne, antimousse toiture villeurbanne, hydrofuge toiture villeurbanne, entretien toiture villeurbanne',
};

export default function TraitementToitureVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste du traitement et démoussage toiture à Villeurbanne, le Groupe Expert Altitude Com protège votre patrimoine immobilier avec des solutions innovantes et durables. Nos experts interviennent sur l&apos;ensemble de la métropole lyonnaise pour redonner à votre toiture sa brillance et son intégrité.</p>

        <h2>Nos services de traitement et démoussage toiture a Villeurbanne</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est une étape cruciale pour préserver la longévité et l&apos;esthétique de votre couverture. Notre méthode professionnelle élimine méticuleusement les mousses, lichens et salissures qui peuvent dégrader vos tuiles et ardoises. Grâce à des produits écologiques et des techniques de traitement haute précision, nous nettoyons en profondeur sans endommager les matériaux. Notre process complet comprend un diagnostic initial, un traitement antimousse ciblé et une protection hydrofuge qui garantit jusqu&apos;à 10 ans de résistance contre les proliférations biologiques. À Villeurbanne, nous intervenons sur tous types de toitures, avec une efficacité et un professionnalisme reconnus.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée dispose de plus de 15 ans d&apos;expérience, un stock de produits professionnels adaptés à chaque configuration, un diagnostic précis avant intervention et des tarifs transparents. Nous proposons une garantie de 5 ans sur nos traitements et un service après-vente réactif.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un démoussage de toiture varie entre 15€ et 35€ au m², selon la surface, l&apos;accessibilité et l&apos;état initial. Pour une maison moyenne de 100 m², comptez un budget entre 1500€ et 3500€. Nous réalisons un devis personnalisé gratuit après expertise technique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et septembre, lors de périodes sèches et avec des températures entre 10°C et 25°C. Idéalement, prévoyez un traitement tous les 5 à 7 ans ou dès l&apos;apparition des premiers signes de prolifération.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un nettoyage préalable, un séchage complet, puis l&apos;utilisation d&apos;un produit adapté à votre type de toiture. Nous pulvérisons le produit uniformément, en deux couches croisées, avec un matériel professionnel garantissant une protection optimale contre l&apos;humidité et les infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Villeurbanne ?
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
