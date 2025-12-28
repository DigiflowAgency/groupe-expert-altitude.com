import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Écully | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Écull',
  keywords: 'peinture isolante écully, peinture thermique écully, peinture isolante toiture écully, thermo reflect écully, peinture reflechissante écully, cool roof écully',
};

export default function PeintureIsolanteEcullyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Écully</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Écully. Nos solutions innovantes transforment vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies substantielles.</p>

        <h2>Nos services de peinture isolante thermique a Écully</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en matière d&apos;isolation et de protection des surfaces. Spécialement conçue pour les toitures, façades et murs, notre peinture Thermo Reflect offre une barrière réfléchissante unique qui régule efficacement la température intérieure. Grâce à sa formulation high-tech, elle permet de réduire jusqu&apos;à 30% des déperditions thermiques, créant un environnement plus stable et économe en énergie. À Écully et ses environs, nous intervenons avec une précision chirurgicale, en utilisant des techniques d&apos;application professionnelles qui assurent une protection durable et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés et formés aux dernières technologies d&apos;isolation thermique. Nous garantissons une intervention sur-mesure, un diagnostic précis avant travaux et une efficacité énergétique prouvée. Notre engagement qualité se traduit par des matériaux de haute performance et un suivi personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, l&apos;accessibilité et la complexité de l&apos;application. Pour une toiture moyenne de 100m², comptez environ 3500€ à 5500€, installation comprise. Un investissement rentabilisé par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est réellement efficace, avec des performances attestées par des laboratoires indépendants. Elle peut réduire jusqu&apos;à 40% des transferts thermiques, améliorer le confort intérieur et diminuer la consommation énergétique de 20 à 35% selon les bâtiments.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de la surface, réparation des éventuels défauts, application d&apos;un primaire adapté, puis pose de 2 couches de peinture Thermo Reflect avec des outils professionnels. La technique d&apos;application est cruciale pour garantir une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Écully ?
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
