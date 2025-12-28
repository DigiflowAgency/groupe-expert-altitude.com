import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à La Chapelle-sur-Erdre avec sa peinture isolante de dernière génération. Nos solutions in',
  keywords: 'peinture isolante la chapelle-sur-erdre, peinture thermique la chapelle-sur-erdre, peinture isolante toiture la chapelle-sur-erdre, thermo reflect la chapelle-sur-erdre, peinture reflechissante la chapelle-sur-erdre, cool roof la chapelle-sur-erdre',
};

export default function PeintureIsolanteLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à La Chapelle-sur-Erdre avec sa peinture isolante de dernière génération. Nos solutions innovantes permettent de réduire jusqu&apos;à 30% des déperditions énergétiques pour les habitations et bâtiments professionnels de la région.</p>

        <h2>Nos services de peinture isolante thermique a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution moderne et écologique pour améliorer le confort énergétique. Nous utilisons des technologies Thermo Reflect qui créent une barrière réfléchissante contre la chaleur et le froid, garantissant une régulation thermique optimale. Notre processus commence par un diagnostic précis de votre bâtiment, suivi d&apos;une préparation minutieuse des surfaces et d&apos;une application professionnelle. Les peintures que nous proposons offrent une protection multicouche qui agit comme un bouclier thermique, réduisant significativement les consommations énergétiques et améliorant le confort intérieur. Spécifiquement adaptées aux conditions climatiques de La Chapelle-sur-Erdre, nos solutions s&apos;appliquent aussi bien sur toitures que murs extérieurs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise se distingue par : 1) Une technologie Cool Roof certifiée et performante, 2) Une équipe de techniciens hautement qualifiés, 3) Des matériaux écologiques et durables, 4) Un service sur-mesure avec diagnostic thermique gratuit. Nous garantissons une intervention rapide et professionnelle sur tout le territoire de La Chapelle-sur-Erdre et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ au m², selon la complexité de la surface et la technologie utilisée. Pour une maison moyenne de 100m², comptez un investissement global entre 2500€ et 5000€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace, avec des performances prouvées scientifiquement. Elle peut réduire jusqu&apos;à 40% des déperditions thermiques, stabiliser la température intérieure et diminuer la consommation énergétique. Les technologies modernes comme Thermo Reflect offrent une réflectivité solaire supérieure à 80%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : 1) Un nettoyage et décapage préalable, 2) Une couche d&apos;impression spécifique, 3) Deux couches de peinture réfléchissante appliquées uniformément, 4) Un temps de séchage de 24h. Notre équipe garantit une pose professionnelle et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a La Chapelle-sur-Erdre ?
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
