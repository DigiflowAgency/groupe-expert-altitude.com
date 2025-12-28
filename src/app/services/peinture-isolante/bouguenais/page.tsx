import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Bouguenais | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Bouguenais avec ses solutions de peinture isolante innovantes. Spécialistes locaux de la',
  keywords: 'peinture isolante bouguenais, peinture thermique bouguenais, peinture isolante toiture bouguenais, thermo reflect bouguenais, peinture reflechissante bouguenais, cool roof bouguenais',
};

export default function PeintureIsolanteBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Bouguenais avec ses solutions de peinture isolante innovantes. Spécialistes locaux de la rénovation énergétique, nous transformons vos bâtiments en espaces économes et confortables grâce à nos techniques de peinture thermique de pointe.</p>

        <h2>Nos services de peinture isolante thermique a Bouguenais</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique répond aux défis énergétiques actuels en proposant une solution économique et écologique. Nous utilisons des technologies comme Thermo Reflect, une peinture réfléchissante qui peut réduire jusqu&apos;à 30% des déperditions thermiques. Notre processus commence par un diagnostic précis de votre toiture ou façade à Bouguenais, suivi d&apos;une préparation de surface minutieuse. L&apos;application de notre peinture isolante permet non seulement d&apos;améliorer l&apos;efficacité énergétique, mais aussi de protéger durablement les supports contre les agressions climatiques. Nos techniques Cool Roof permettent de diminuer la température intérieure jusqu&apos;à 5-7°C en période estivale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts certifiés en isolation thermique, nous garantissons une intervention professionnelle et sur-mesure. Notre équipe maîtrise les dernières technologies de peinture réfléchissante. Nous proposons un diagnostic gratuit, des matériaux haute performance et une intervention rapide sur Bouguenais et ses environs. Notre engagement qualité se traduit par des économies immédiates et une amélioration du confort thermique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ au m², selon la surface, le support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 5000€, rapidement amorti par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace : elle peut réduire jusqu&apos;à 30% des déperditions thermiques, améliorer le confort été/hiver et prolonger la durée de vie des surfaces traitées. Son efficacité dépend de la qualité du produit et de la pose.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : un nettoyage approfondi, une réparation des éventuels défauts, un primaire d&apos;accrochage adapté, puis l&apos;application de 2 couches de peinture Thermo Reflect avec un rouleau ou un pistorage professionnel. La préparation et la technique sont essentielles pour garantir un résultat optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Bouguenais ?
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
