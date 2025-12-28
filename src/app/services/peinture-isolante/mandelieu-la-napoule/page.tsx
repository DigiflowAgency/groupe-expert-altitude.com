import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la chaleur à Mandelieu-la-Napoule : la peinture isolante thermique du Groupe Expert Altitude Com. Nos solutions innovan',
  keywords: 'peinture isolante mandelieu-la-napoule, peinture thermique mandelieu-la-napoule, peinture isolante toiture mandelieu-la-napoule, thermo reflect mandelieu-la-napoule, peinture reflechissante mandelieu-la-napoule, cool roof mandelieu-la-napoule',
};

export default function PeintureIsolanteMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la chaleur à Mandelieu-la-Napoule : la peinture isolante thermique du Groupe Expert Altitude Com. Nos solutions innovantes transforment vos toitures et murs en boucliers thermiques, garantissant un confort optimal et des économies d&apos;énergie significatives.</p>

        <h2>Nos services de peinture isolante thermique a Mandelieu-la-Napoule</h2>
        <div className="space-y-4">
          <p>Notre peinture isolante thermique représente la technologie de pointe en matière d&apos;isolation et de protection thermique. Spécialement conçue pour les climats méditerranéens comme Mandelieu-la-Napoule, notre solution Thermo Reflect utilise des pigments réfléchissants haute performance qui renvoient jusqu&apos;à 85% des rayons solaires. Le processus d&apos;application professionnelle commence par un diagnostic précis de votre surface, suivi d&apos;une préparation minutieuse qui assure une adhérence parfaite et une durabilité exceptionnelle. Nos produits certifiés réduisent jusqu&apos;à 30% des coûts de climatisation et protègent efficacement votre bâtiment contre la dégradation thermique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux avec plus de 15 ans d&apos;expérience, nous maîtrisons parfaitement les spécificités climatiques de la région. Nos techniciens sont certifiés et utilisent uniquement des matériaux écologiques et haute performance. Nous proposons une garantie de 10 ans sur nos travaux et un diagnostic thermique gratuit avant intervention. Notre engagement : qualité, efficacité et économies durables.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité de la surface et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 4500€, rapidement amorti par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire la température de surface jusqu&apos;à 20°C, diminuer la consommation énergétique de 30% et prolonger la durée de vie des matériaux exposés aux rayonnements solaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture Thermo Reflect avec un rouleau ou un pistorage professionnel. La préparation et la technique d&apos;application sont cruciales pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Mandelieu-la-Napoule ?
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
