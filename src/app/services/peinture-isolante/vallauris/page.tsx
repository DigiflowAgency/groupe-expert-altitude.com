import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Vallauris | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec le Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Va',
  keywords: 'peinture isolante vallauris, peinture thermique vallauris, peinture isolante toiture vallauris, thermo reflect vallauris, peinture reflechissante vallauris, cool roof vallauris',
};

export default function PeintureIsolanteVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec le Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Vallauris. Nous transformons vos toitures et façades en boucliers thermiques performants, garantissant confort et économies.</p>

        <h2>Nos services de peinture isolante thermique a Vallauris</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation énergétique pour les particuliers et professionnels de Vallauris et ses environs. Nous utilisons des techniques innovantes comme le Thermo Reflect, une peinture réfléchissante capable de réduire jusqu&apos;à 80% des gains thermiques en été. Notre processus débute par un diagnostic précis de votre bâtiment, suivi d&apos;une préparation minutieuse des surfaces. L&apos;application se fait avec des produits haute performance qui créent une barrière thermique efficace, régulant la température intérieure et réduisant significativement vos consommations énergétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux avec plus de 15 ans d&apos;expérience, nous garantissons une intervention sur-mesure. Nos techniciens sont certifiés et formés aux dernières technologies d&apos;isolation. Nous proposons une solution clé en main, avec un devis gratuit et personnalisé. Notre engagement qualité se traduit par des matériaux écologiques et des performances thermiques attestées.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 30€ et 60€ au m², selon la complexité de l&apos;intervention et le type de support. Pour une toiture moyenne de 100m², comptez un investissement entre 3000€ et 6000€, amortissable en 3 à 5 ans grâce aux économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace, avec des performances prouvées scientifiquement. Elle peut réduire jusqu&apos;à 35% des déperditions thermiques, stabiliser la température intérieure et prolonger la durée de vie de vos supports. Son efficacité dépend de la qualité du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de la surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture spécifique avec des outils adaptés. Un séchage de 24 à 48h est recommandé pour une parfaite adhérence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Vallauris ?
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
