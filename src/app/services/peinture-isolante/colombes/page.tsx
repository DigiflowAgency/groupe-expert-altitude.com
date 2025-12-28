import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Colombes | Groupe Expert Altitude Com',
  description: 'À Colombes et ses environs, Groupe Expert Altitude Com révolutionne l&apos;isolation thermique grâce à des solutions de peinture innovantes. Nos techniques de p',
  keywords: 'peinture isolante colombes, peinture thermique colombes, peinture isolante toiture colombes, thermo reflect colombes, peinture reflechissante colombes, cool roof colombes',
};

export default function PeintureIsolanteColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">À Colombes et ses environs, Groupe Expert Altitude Com révolutionne l&apos;isolation thermique grâce à des solutions de peinture innovantes. Nos techniques de peinture isolante permettent de réduire jusqu&apos;à 30% des déperditions énergétiques pour les habitations et bâtiments professionnels.</p>

        <h2>Nos services de peinture isolante thermique a Colombes</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution moderne et économique pour améliorer le confort énergétique de votre propriété. Nous utilisons des technologies de pointe comme Thermo Reflect, une peinture réfléchissante qui crée une barrière thermique efficace sur toitures, façades et murs. Notre processus comprend un diagnostic précis, une préparation de surface minutieuse et l&apos;application de peintures certifiées avec une garantie de performance thermique pendant 10 ans. Pour les habitants de Colombes, nous proposons une solution sur-mesure qui s&apos;adapte à chaque type de bâtiment, qu&apos;il s&apos;agisse d&apos;une maison individuelle ou d&apos;un immeuble professionnel.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos experts maîtrisent parfaitement les techniques d&apos;isolation thermique par peinture. Nous garantissons : 1) Un devis personnalisé et transparent, 2) Des produits écologiques et certifiés, 3) Une équipe qualifiée avec plus de 15 ans d&apos;expérience, 4) Une intervention rapide et professionnelle sur Colombes et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, l&apos;accessibilité et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, mais avec un retour sur investissement estimé à 3-5 ans grâce aux économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace : elle peut réduire jusqu&apos;à 35% des déperditions thermiques, diminuer la température intérieure de 4 à 7°C en été et améliorer significativement le classement énergétique d&apos;un bâtiment. Les peintures réfléchissantes comme Thermo Reflect ont démontré leur performance lors de tests indépendants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : 1) Un nettoyage et décapage préalable, 2) Une réparation des éventuelles fissures, 3) L&apos;application d&apos;un primaire d&apos;accrochage, 4) Deux couches de peinture réfléchissante au rouleau ou par projection, 5) Un temps de séchage de 24-48h. Notre équipe réalise cette intervention en 1-2 jours selon la surface.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Colombes ?
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
