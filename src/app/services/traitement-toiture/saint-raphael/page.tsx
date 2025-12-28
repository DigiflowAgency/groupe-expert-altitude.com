import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Saint-Raphaël et ses environs. Avec plus de 1',
  keywords: 'demoussage toiture saint-raphaël, traitement toiture saint-raphaël, nettoyage toiture saint-raphaël, antimousse toiture saint-raphaël, hydrofuge toiture saint-raphaël, entretien toiture saint-raphaël',
};

export default function TraitementToitureSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Saint-Raphaël et ses environs. Avec plus de 15 ans d&apos;expérience, nous protégeons et valorisons votre patrimoine immobilier grâce à des solutions techniques innovantes.</p>

        <h2>Nos services de traitement et démoussage toiture a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux spécificités climatiques de la région varoise. Nous intervenons sur tous types de couvertures - tuiles, ardoises, béton - en utilisant des techniques respectueuses de votre toiture. Notre processus complet comprend un diagnostic précis, un nettoyage haute précision sans détérioration des matériaux, puis l&apos;application d&apos;un traitement antimousse et hydrofuge haute performance. Notre intervention permet de prolonger la durée de vie de votre toiture de 10 à 15 ans, tout en améliorant son aspect esthétique et sa protection contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts locaux à Saint-Raphaël, connaissant parfaitement les problématiques climatiques du territoire
- Techniciens certifiés et équipements professionnels de dernière génération
- Devis gratuit et personnalisé sous 48h
- Garantie qualité de 5 ans sur nos traitements</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité et l&apos;accessibilité de votre toiture. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 3500€. Un investissement qui protège durablement votre bien.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin septembre/début octobre ou fin mars/début avril. Ces périodes offrent des conditions optimales : températures modérées et faible humidité, favorisant une application et une pénétration efficaces du produit.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite un nettoyage parfait, un séchage complet, puis l&apos;utilisation d&apos;un produit adapté à votre type de toiture. Nous recommandons une application par pulvérisation uniforme, en 2 couches croisées, avec un temps de séchage de 24h entre chaque application.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Saint-Raphaël ?
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
