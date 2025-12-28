import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Fréjus | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la chaleur à Fréjus avec notre peinture isolante thermique révolutionnaire. Groupe Expert Altitude Com vous propose une',
  keywords: 'peinture isolante fréjus, peinture thermique fréjus, peinture isolante toiture fréjus, thermo reflect fréjus, peinture reflechissante fréjus, cool roof fréjus',
};

export default function PeintureIsolanteFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la chaleur à Fréjus avec notre peinture isolante thermique révolutionnaire. Groupe Expert Altitude Com vous propose une technologie innovante qui transforme vos toitures et murs en boucliers thermiques performants.</p>

        <h2>Nos services de peinture isolante thermique a Fréjus</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution moderne et écologique pour réduire significativement la consommation énergétique de votre bâtiment. Spécialisés dans les techniques Thermo Reflect, nous appliquons des revêtements hautement réfléchissants qui peuvent diminuer jusqu&apos;à 30% des températures de surface. Notre processus débute par un diagnostic précis de votre toiture ou façade à Fréjus, suivi d&apos;une préparation minutieuse des surfaces. Nos techniciens utilisent des peintures de dernière génération qui créent une barrière thermique efficace, réduisant la pénétration de la chaleur et améliorant le confort intérieur.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos équipes sont certifiées dans l&apos;application de peintures isolantes, avec plus de 15 ans d&apos;expérience sur le territoire varois. Nous garantissons une intervention rapide, un devis transparent et des résultats mesurables en termes de performance thermique. Notre engagement qualité se traduit par des économies énergétiques immédiates et durables.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité de la surface et le type de revêtement choisi. Pour une toiture moyenne de 100m² à Fréjus, comptez un investissement global entre 2500€ et 4500€, rapidement amorti par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 40% des gains thermiques, stabilisant la température intérieure et diminuant la charge de climatisation. Les technologies comme Thermo Reflect utilisent des pigments céramiques réfléchissants qui bloquent les rayonnements solaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante nécessite une préparation rigoureuse : nettoyage haute pression, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis deux couches de peinture spécifique avec des outils professionnels. Notre équipe garantit une pose parfaite et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Fréjus ?
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
