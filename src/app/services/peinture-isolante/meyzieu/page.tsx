import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Meyzieu | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Meyzieu avec la peinture isolante thermique du Groupe Expert Altitude Com, la solution innovante pour réduire vos déperditions ',
  keywords: 'peinture isolante meyzieu, peinture thermique meyzieu, peinture isolante toiture meyzieu, thermo reflect meyzieu, peinture reflechissante meyzieu, cool roof meyzieu',
};

export default function PeintureIsolanteMeyzieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Meyzieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Meyzieu avec la peinture isolante thermique du Groupe Expert Altitude Com, la solution innovante pour réduire vos déperditions énergétiques. Nos solutions Thermo Reflect révolutionnent l&apos;isolation de vos murs et toitures avec des technologies de pointe.</p>

        <h2>Nos services de peinture isolante thermique a Meyzieu</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente bien plus qu&apos;un simple rafraîchissement esthétique. Grâce à nos revêtements haute performance, nous créons une barrière thermique intelligente qui régule efficacement la température intérieure de vos bâtiments. Notre technique spécialisée permet de réfléchir jusqu&apos;à 90% des rayons solaires, réduisant significativement les besoins en climatisation et chauffage. Sur les toitures de Meyzieu et ses environs, nous appliquons des peintures réfléchissantes qui diminuent jusqu&apos;à 30% des coûts énergétiques. Chaque intervention est précédée d&apos;un diagnostic thermique précis pour une solution sur-mesure.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expertise, nous garantissons une intervention professionnelle et rapide. Nos techniciens sont formés aux dernières technologies d&apos;isolation thermique. Nous proposons des solutions écologiques, économiques et durables. Nos produits bénéficient de garanties allant jusqu&apos;à 10 ans et sont conformes aux normes environnementales françaises.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, l&apos;accessibilité et le type de support. Pour une toiture moyenne à Meyzieu, comptez environ 1500€ à 3000€ pour une intervention complète, avec un retour sur investissement estimé entre 3 et 5 ans grâce aux économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace : elle peut réduire jusqu&apos;à 35% des déperditions thermiques, améliorer le confort intérieur et diminuer la consommation énergétique. Les technologies actuelles comme Thermo Reflect offrent une performance prouvée scientifiquement, avec des coefficients de réflexion solaire supérieurs à 80%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture avec des outils spécifiques. Notre équipe utilise du matériel professionnel pour garantir une pose parfaite et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Meyzieu ?
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
