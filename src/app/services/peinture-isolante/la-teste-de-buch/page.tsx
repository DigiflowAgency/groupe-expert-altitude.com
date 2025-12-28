import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a La Teste-de-Buch | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la déperdition énergétique avec notre peinture isolante thermique, spécialement conçue pour les habitations de La Teste',
  keywords: 'peinture isolante la teste-de-buch, peinture thermique la teste-de-buch, peinture isolante toiture la teste-de-buch, thermo reflect la teste-de-buch, peinture reflechissante la teste-de-buch, cool roof la teste-de-buch',
};

export default function PeintureIsolanteLaTesteDeBuchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a La Teste-de-Buch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la déperdition énergétique avec notre peinture isolante thermique, spécialement conçue pour les habitations de La Teste-de-Buch. Le Groupe Expert Altitude Com vous propose une technologie innovante qui transforme vos murs et toitures en boucliers thermiques performants.</p>

        <h2>Nos services de peinture isolante thermique a La Teste-de-Buch</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution moderne pour optimiser l&apos;efficacité énergétique de votre propriété. Grâce à nos techniques Thermo Reflect, nous appliquons une peinture réfléchissante qui agit comme une véritable barrière thermique, réduisant jusqu&apos;à 30% des déperditions calorifiques. Notre processus débute par un diagnostic précis de votre bâtiment, suivi d&apos;une préparation minutieuse des surfaces. Les produits que nous utilisons combinent des propriétés isolantes avancées et une résistance exceptionnelle aux conditions climatiques locales, garantissant une protection durable pour les habitations de La Teste-de-Buch et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et possèdent plus de 15 ans d&apos;expérience en isolation thermique. Nous utilisons exclusivement des matériaux de haute qualité, conformes aux dernières normes environnementales. Notre intervention est rapide, propre et sans perturbation pour vos activités quotidiennes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 30€ et 80€ au m², selon la complexité de l&apos;application et les caractéristiques spécifiques de votre bâtiment. Pour une maison moyenne à La Teste-de-Buch, comptez environ 1500€ à 3000€ pour une couverture complète, un investissement rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 25-35% des déperditions thermiques, améliorant significativement le confort intérieur et diminuant la consommation énergétique. La technologie Thermo Reflect réfléchit les rayons solaires, maintenant des températures stables été comme hiver.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage approfondi de la surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis deux couches de peinture spéciale. Notre équipe utilise des techniques professionnelles garantissant une pose uniforme et une durabilité maximale, adaptée aux conditions spécifiques de La Teste-de-Buch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a La Teste-de-Buch ?
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
