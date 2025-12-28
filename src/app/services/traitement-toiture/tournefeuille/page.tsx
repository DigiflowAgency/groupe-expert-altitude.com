import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Tournefeuille | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Tournefeuille pour tous vos besoin',
  keywords: 'demoussage toiture tournefeuille, traitement toiture tournefeuille, nettoyage toiture tournefeuille, antimousse toiture tournefeuille, hydrofuge toiture tournefeuille, entretien toiture tournefeuille',
};

export default function TraitementToitureTournefeuillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Tournefeuille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Tournefeuille pour tous vos besoins en traitement et démoussage. Nous protégeons et restaurons votre patrimoine immobilier avec des solutions techniques sur-mesure.</p>

        <h2>Nos services de traitement et démoussage toiture a Tournefeuille</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est un service essentiel pour préserver la longévité et l&apos;esthétique de votre couverture. Notre équipe spécialisée intervient sur tous types de matériaux - tuiles terres cuites, ardoises, béton - avec une méthodologie précise et respectueuse de votre habitat. Nous réalisons un diagnostic complet avant intervention, identifiant les zones sensibles et les risques potentiels d&apos;infiltration. Notre traitement antimousse haute performance élimine les mousses, lichens et algues en profondeur, tout en protégeant la structure de votre toiture. Chaque intervention à Tournefeuille est réalisée avec des produits écologiques et homologués, garantissant un résultat durable et une protection renforcée contre l&apos;humidité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence repose sur trois piliers : expertise technique, respect environnemental et satisfaction client. Nous intervenons avec du matériel professionnel, nos techniciens sont formés aux dernières normes, et nous proposons une garantie de 5 ans sur nos traitements. Notre connaissance fine des spécificités climatiques locales nous permet d&apos;adapter précisément nos solutions.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et l&apos;état initial. Pour une maison moyenne de 100m² à Tournefeuille, comptez un budget global entre 1500€ et 3500€, incluant diagnostic, traitement et finition hydrofuge.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et octobre, période où les conditions météorologiques permettent un séchage optimal. Idéalement, intervenez tous les 3 à 5 ans, ou dès que vous observez les premiers signes de développement de mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;un hydrofuge nécessite un démoussage préalable impeccable. On utilise un produit spécifique pulvérisé uniformément, en deux couches croisées, avec un temps de séchage de 24h entre chaque application. Le résultat : une protection contre les infiltrations et les agressions climatiques pour 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Tournefeuille ?
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
