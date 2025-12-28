import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Colomiers | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la déperdition énergétique avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Colomier',
  keywords: 'peinture isolante colomiers, peinture thermique colomiers, peinture isolante toiture colomiers, thermo reflect colomiers, peinture reflechissante colomiers, cool roof colomiers',
};

export default function PeintureIsolanteColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la déperdition énergétique avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Colomiers. Nos solutions innovantes transforment vos bâtiments en boucliers thermiques performants, garantissant un confort optimal et des économies substantielles.</p>

        <h2>Nos services de peinture isolante thermique a Colomiers</h2>
        <div className="space-y-4">
          <p>La peinture isolante thermique représente aujourd&apos;hui la technologie de pointe en rénovation énergétique. Notre expertise, développée sur le territoire de Colomiers, permet de traiter toitures, façades et surfaces intérieures avec des produits comme Thermo Reflect, offrant jusqu&apos;à 30% d&apos;économies d&apos;énergie. Notre processus complet comprend un diagnostic thermique précis, la préparation des surfaces, l&apos;application de peintures réfléchissantes haute performance et un contrôle qualité rigoureux. Nos solutions Cool Roof permettent de réduire la température de surface jusqu&apos;à 20°C, améliorant significativement l&apos;efficacité énergétique de vos locaux.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expérience, nous maîtrisons les techniques les plus avancées de peinture isolante. Notre équipe technique est formée aux dernières innovations thermiques. Nous garantissons des matériaux écologiques, une intervention rapide et un devis personnalisé sous 48h. Notre engagement qualité fait de nous le partenaire de référence sur Colomiers et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, le type de support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement entre 2500€ et 6000€, rapidement amorti par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace, avec des performances prouvées scientifiquement. Elle peut réduire jusqu&apos;à 40% des déperditions thermiques, améliorer l&apos;isolation de 15% et diminuer la consommation énergétique de manière significative. Les technologies comme Thermo Reflect offrent une réflectivité solaire supérieure à 80%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture spécifique avec des outils professionnels. La préparation et la technique sont essentielles pour garantir une parfaite étanchéité et performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Colomiers ?
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
