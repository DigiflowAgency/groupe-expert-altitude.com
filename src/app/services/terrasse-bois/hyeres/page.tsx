import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Hyères | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Hyères avec une terrasse bois sur plot, l&apos;élégance et la durabilité au cœur de votre jardin. Groupe Expert Altitude Com vous ',
  keywords: 'terrasse bois hyères, terrasse sur plot hyères, terrasse bois sur plot hyères, pose terrasse bois hyères, terrasse composite hyères, terrasse bois piscine hyères',
};

export default function TerrasseBoisHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Hyères avec une terrasse bois sur plot, l&apos;élégance et la durabilité au cœur de votre jardin. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent votre espace extérieur avec professionnalisme et créativité.</p>

        <h2>Nos services de terrasse bois sur plot a Hyères</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une véritable transformation de votre espace extérieur. Notre expertise à Hyères nous permet de réaliser des terrasses parfaitement adaptées à l&apos;environnement méditerranéen. Nous sélectionnons rigoureusement des matériaux résistants aux variations climatiques, garantissant une durabilité exceptionnelle. Notre processus inclut une étude précise du terrain, un nivellement méticuleux et une pose selon les normes techniques les plus exigeantes. Chaque projet est personnalisé, que ce soit pour une terrasse de piscine, un espace de détente ou une zone de réception.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes combinent 15 ans d&apos;expérience, une connaissance approfondie des matériaux et un sens du détail irréprochable. Nous proposons des garanties décennales, utilisons uniquement des bois certifiés et intervenons rapidement sur Hyères et ses environs. Notre engagement qualité fait notre réputation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 180€ au m², selon les matériaux choisis (bois exotique, composite ou pin traité). Pour un projet de 20m², comptez un budget global entre 1600€ et 3600€, installation comprise. Nos devis détaillés offrent toujours une transparence totale.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. En moyenne, pour 20m², notre équipe réalise le chantier entre 2 et 4 jours. Ce temps inclut la préparation du terrain, la pose des plots, le nivellement et la fixation des lames.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour Hyères, nous recommandons le bois composite ou l&apos;iroko, particulièrement adaptés au climat méditerranéen. Le composite offre une résistance maximale aux UV et à l&apos;humidité, tandis que l&apos;iroko présente une excellente tenue naturelle aux agressions extérieures.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Hyères ?
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
