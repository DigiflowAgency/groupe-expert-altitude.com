import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Aulnay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Aulnay-sous-Bois. Spécialistes',
  keywords: 'gouttiere aulnay-sous-bois, pose gouttiere aulnay-sous-bois, reparation gouttiere aulnay-sous-bois, nettoyage gouttiere aulnay-sous-bois, descente pluviale aulnay-sous-bois, gouttiere bouchee aulnay-sous-bois',
};

export default function GouttiereAulnaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Aulnay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Aulnay-sous-Bois. Spécialistes depuis plus de 15 ans, nous protégeons efficacement votre habitat contre les risques d&apos;infiltration et de dommages structurels.</p>

        <h2>Nos services de gouttières et descentes pluviales a Aulnay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Nos solutions complètes de gestion des gouttières couvrent l&apos;installation, la réparation et l&apos;entretien avec une précision technique remarquable. Notre équipe intervient sur tous types de bâtiments, résidentiels et professionnels, en utilisant des matériaux haut de gamme garantissant une durabilité maximale. Nous réalisons un diagnostic personnalisé avant chaque intervention, permettant d&apos;identifier précisément vos besoins spécifiques. Notre process inclut un relevé technique, une proposition détaillée et une mise en œuvre rapide par des techniciens certifiés, assurant une protection optimale de votre propriété contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale reconnue à Aulnay-sous-Bois depuis 2008
- Techniciens hautement qualifiés et certifiés
- Devis gratuit sous 48h
- Matériaux garantis 10 ans
- Intervention rapide et professionnelle
- Solutions sur-mesure adaptées à chaque configuration</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire, selon le matériau choisi (PVC, zinc, aluminium) et la complexité de l&apos;installation. Un pavillon standard de 100m² nécessite généralement entre 120€ et 350€ de fourniture et pose.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris, puis nettoyez avec un produit spécifique. En cas de difficulté, contactez un professionnel pour éviter tout dommage.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans les zones très boisées d&apos;Aulnay-sous-Bois, une intervention supplémentaire peut être nécessaire pour prévenir les obstructions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Aulnay-sous-Bois ?
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
