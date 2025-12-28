import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Puteaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Puteaux avec sa peinture isolante de dernière génération. Spécialistes de la rénovation ',
  keywords: 'peinture isolante puteaux, peinture thermique puteaux, peinture isolante toiture puteaux, thermo reflect puteaux, peinture reflechissante puteaux, cool roof puteaux',
};

export default function PeintureIsolantePuteauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Puteaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Puteaux avec sa peinture isolante de dernière génération. Spécialistes de la rénovation énergétique, nous transformons vos bâtiments en véritables boucliers thermiques pour un confort optimal et des économies significatives.</p>

        <h2>Nos services de peinture isolante thermique a Puteaux</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime contre les déperditions énergétiques. Utilisant des technologies innovantes comme le Thermo Reflect, nous appliquons des revêtements spécialement conçus pour réfléchir jusqu&apos;à 85% des rayons solaires. Sur les toitures de Puteaux et ses environs, notre technique permet de réduire jusqu&apos;à 30% des coûts de climatisation et de chauffage. Notre processus comprend un diagnostic précis, une préparation de surface méticuleuse et une application par des techniciens hautement qualifiés, garantissant une performance thermique maximale et une durabilité exceptionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes possèdent plus de 15 ans d&apos;expérience en isolation thermique. Nous sommes certifiés RGE, utilisons uniquement des matériaux écologiques et proposons une garantie de 10 ans sur nos travaux. Notre approche sur-mesure s&apos;adapte parfaitement aux spécificités de chaque bâtiment à Puteaux.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ au m², selon la surface, l&apos;accessibilité et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 5000€, rapidement amorti par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace : elle peut réduire jusqu&apos;à 15°C la température intérieure en été et limiter les déperditions thermiques en hiver. Des études scientifiques démontrent des économies énergétiques de 25 à 35% selon la qualité du produit et son application.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : un nettoyage approfondi, une réparation des éventuelles fissures, un primaire d&apos;accrochage spécifique, puis 2 à 3 couches de peinture avec des outils professionnels. La préparation et la technique d&apos;application sont cruciales pour garantir une performance optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Puteaux ?
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
