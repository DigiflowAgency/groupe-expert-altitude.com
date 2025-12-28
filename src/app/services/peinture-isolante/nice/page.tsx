import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Nice | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la chaleur à Nice avec Groupe Expert Altitude Com : notre peinture isolante thermique révolutionne le confort thermique',
  keywords: 'peinture isolante nice, peinture thermique nice, peinture isolante toiture nice, thermo reflect nice, peinture reflechissante nice, cool roof nice',
};

export default function PeintureIsolanteNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la chaleur à Nice avec Groupe Expert Altitude Com : notre peinture isolante thermique révolutionne le confort thermique de votre habitat. Spécialistes de la rénovation énergétique sur la Côte d&apos;Azur, nous transformons vos murs et toitures en boucliers contre les températures extrêmes.</p>

        <h2>Nos services de peinture isolante thermique a Nice</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente l&apos;innovation technologique au service de votre confort. Utilisant des technologies de pointe comme Thermo Reflect, nous appliquons des revêtements spécialisés qui réfléchissent jusqu&apos;à 90% des rayons solaires. Cette technique unique permet de réduire la température intérieure de 5 à 7 degrés, générant des économies d&apos;énergie pouvant atteindre 30% sur la climatisation. Notre processus comprend un diagnostic thermique précis, une préparation de surface méticuleuse et l&apos;application de peintures certifiées, garantissant une protection durable contre les variations climatiques niçoises.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux avec 15 ans d&apos;expérience, nous maîtrisons parfaitement les spécificités climatiques de Nice. Notre équipe est certifiée RGE, gage de qualité et de professionnalisme. Nous utilisons exclusivement des matériaux écologiques et haute performance. Chaque intervention bénéficie d&apos;une garantie décennale, témoignant de notre engagement total envers la satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 30 et 80€ au m², selon la complexité de l&apos;intervention, la surface traitée et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 3000€ et 6000€, rapidement amorti par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace : sa technologie de réflexion solaire permet de réduire significativement la température intérieure. Des études démontrent une baisse jusqu&apos;à 7°C, diminuant la consommation énergétique et améliorant le confort thermique de manière mesurable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture spécifique à l&apos;aide de rouleaux ou de pistolets professionnels. Un séchage de 24h est recommandé entre chaque couche.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Nice ?
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
