import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Toulon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Toulon avec des solutions de peinture innovantes. Nos techniques de peinture isolante trans',
  keywords: 'peinture isolante toulon, peinture thermique toulon, peinture isolante toiture toulon, thermo reflect toulon, peinture reflechissante toulon, cool roof toulon',
};

export default function PeintureIsolanteToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Toulon avec des solutions de peinture innovantes. Nos techniques de peinture isolante transforment vos bâtiments en espaces économes en énergie, parfaitement adaptés au climat méditerranéen.</p>

        <h2>Nos services de peinture isolante thermique a Toulon</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime pour optimiser le confort et les performances énergétiques de votre habitat ou entreprise à Toulon. Nous utilisons des technologies de pointe comme Thermo Reflect, une peinture réfléchissante qui peut réduire jusqu&apos;à 30% des déperditions thermiques. Notre processus comprend un diagnostic précis, le choix du revêtement adapté et une application professionnelle garantissant une isolation maximale. Chaque intervention est personnalisée, que ce soit pour une toiture, une façade ou des murs intérieurs, en privilégiant des produits écologiques et durables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux depuis 15 ans, nous maîtrisons parfaitement les spécificités climatiques de Toulon. Notre équipe certifiée intervient avec un matériel de haute précision. Nous proposons des garanties jusqu&apos;à 10 ans sur nos travaux. Nos solutions sont éligibles à des aides gouvernementales et crédits d&apos;impôts, vous faisant économiser jusqu&apos;à 40% sur vos frais d&apos;isolation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité du support et la technologie utilisée. Pour une maison moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, amortissable par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace, avec des performances prouvées scientifiquement. Elle peut réduire jusqu&apos;à 15°C la température intérieure en été et limiter les déperditions de chaleur en hiver. Son efficacité dépend de la qualité du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : un nettoyage approfondi, une préparation de surface, l&apos;utilisation de rouleaux spécifiques, et l&apos;application de 2 à 3 couches. La température extérieure doit être entre 10°C et 30°C pour une pose optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Toulon ?
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
