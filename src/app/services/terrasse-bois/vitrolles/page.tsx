import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Vitrolles | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Vitrolles avec une terrasse bois sur plot parfaitement intégrée. Groupe Expert Altitude Com vous propose des solutions sur-me',
  keywords: 'terrasse bois vitrolles, terrasse sur plot vitrolles, terrasse bois sur plot vitrolles, pose terrasse bois vitrolles, terrasse composite vitrolles, terrasse bois piscine vitrolles',
};

export default function TerrasseBoisVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Vitrolles avec une terrasse bois sur plot parfaitement intégrée. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient élégance et durabilité pour sublimer vos espaces extérieurs.</p>

        <h2>Nos services de terrasse bois sur plot a Vitrolles</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est créer un espace de vie supplémentaire. Notre expertise à Vitrolles nous permet de réaliser des terrasses qui s&apos;adaptent parfaitement à votre terrain, avec une technique de pose qui garantit stabilité et longévité. Nos solutions techniques permettent de compenser jusqu&apos;à 20% de dénivelé, offrant une parfaite horizontalité quel que soit votre terrain. Nous sélectionnons rigoureusement des matériaux résistants aux conditions méditerranéennes : bois composite, bois exotique traité ou bois local, chaque projet bénéficie d&apos;un conseil personnalisé. Notre processus comprend un diagnostic précis, une conception sur-mesure et une réalisation professionnelle, avec une attention méticuleuse portée aux détails techniques et esthétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour une référence locale à Vitrolles. Nos équipes combinent expertise technique et sens artistique, avec plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons un devis gratuit et détaillé, garantissons nos réalisations et utilisons uniquement des matériaux de haute qualité. Notre engagement qualité se traduit par des réalisations durables et esthétiques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis et la complexité de l&apos;installation. Un projet moyen de 30m² coûtera entre 2 400€ et 7 500€, installation comprise. Nos devis détaillés vous permettront de comprendre précisément chaque poste.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de sa surface et de sa complexité. En moyenne, comptez 2 à 5 jours pour un projet de 30m². Notre équipe optimise chaque étape : préparation du terrain, pose des plots, installation des lames, finitions. Un planning précis vous sera communiqué dès le début du projet.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour Vitrolles, nous recommandons le bois composite (très résistant aux UV et à l&apos;humidité), l&apos;ipé (bois exotique ultra-résistant) ou le mélèze traité. Le choix dépendra de votre budget, de l&apos;exposition et de l&apos;usage prévu. Chaque essence présente des avantages : durabilité, entretien, aspect esthétique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Vitrolles ?
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
