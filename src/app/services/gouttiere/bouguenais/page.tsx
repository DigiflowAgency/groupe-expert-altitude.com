import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Bouguenais | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en gouttières et descentes pluviales à Bouguenais, protège votre habitat contre les risques d&apos;infil',
  keywords: 'gouttiere bouguenais, pose gouttiere bouguenais, reparation gouttiere bouguenais, nettoyage gouttiere bouguenais, descente pluviale bouguenais, gouttiere bouchee bouguenais',
};

export default function GouttiereBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en gouttières et descentes pluviales à Bouguenais, protège votre habitat contre les risques d&apos;infiltration. Nous intervenons sur toute la métropole nantaise avec des solutions sur-mesure pour préserver l&apos;intégrité de votre toiture.</p>

        <h2>Nos services de gouttières et descentes pluviales a Bouguenais</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières proposent un service complet allant de l&apos;installation à la maintenance. Chaque intervention est précédée d&apos;un diagnostic technique précis, permettant d&apos;identifier les besoins spécifiques de votre habitation. Nous utilisons uniquement des matériaux de haute qualité - zinc, aluminium, PVC - garantissant une durabilité maximale. Notre processus inclut un relevé métrique précis, une pose professionnelle et un contrôle final assurant l&apos;étanchéité parfaite de votre système de récupération des eaux pluviales. Pour les habitants de Bouguenais, nous adaptons nos solutions aux conditions climatiques locales, offrant une protection optimale contre les intempéries fréquentes de la région.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre entreprise se distingue par son expertise technique et son engagement qualité. Nos techniciens sont certifiés et formés aux dernières normes d&apos;installation. Nous proposons une garantie de 5 ans sur nos travaux, un délai d&apos;intervention rapide de 48h et un devis gratuit sous 24h. 92% de nos clients nous recommandent à leur entourage, témoignant de notre professionnalisme.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ du mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un pavillon standard de 100m² nécessite environ 20-25 mètres linéaires, pour un budget total entre 500€ et 1125€. Nous proposons un devis personnalisé sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer manuellement les feuilles et débris visibles. Utilisez un produit désinfectant pour éliminer les mousses. En cas de difficulté, notre équipe à Bouguenais peut intervenir rapidement pour un débouchage professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières au minimum deux fois par an : au printemps et à l&apos;automne. Dans des zones boisées comme certains quartiers de Bouguenais, nous conseillons un nettoyage trimestriel pour éviter l&apos;accumulation de feuilles et de débris qui peuvent provoquer des obstructions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Bouguenais ?
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
