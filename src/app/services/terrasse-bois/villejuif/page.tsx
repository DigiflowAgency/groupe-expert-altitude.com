import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Villejuif | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Villejuif avec une terrasse bois sur plot sophistiquée et durable. Le Groupe Expert Altitude Com vous propose des solutions s',
  keywords: 'terrasse bois villejuif, terrasse sur plot villejuif, terrasse bois sur plot villejuif, pose terrasse bois villejuif, terrasse composite villejuif, terrasse bois piscine villejuif',
};

export default function TerrasseBoisVillejuifPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Villejuif</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Villejuif avec une terrasse bois sur plot sophistiquée et durable. Le Groupe Expert Altitude Com vous propose des solutions sur mesure qui valorisent instantanément votre espace extérieur tout en garantissant une qualité d&apos;installation irréprochable.</p>

        <h2>Nos services de terrasse bois sur plot a Villejuif</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement extérieur - c&apos;est une véritable transformation esthétique et fonctionnelle. Notre équipe spécialisée intervient sur Villejuif et ses environs pour créer des espaces extérieurs parfaitement nivelés et harmonieux. Nous utilisons des techniques de pose innovantes qui permettent une parfaite répartition des charges et une stabilité optimale, avec des plots réglables s&apos;adaptant à tous les dénivelés. Nos matériaux haut de gamme, qu&apos;il s&apos;agisse de bois exotiques, de composites ou de matériaux techniques, offrent une résistance exceptionnelle aux intempéries et garantissent une durabilité minimale de 15 ans. Chaque projet est pensé sur-mesure, en fonction de la configuration de votre terrain et de vos attentes spécifiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Notre expertise technique garantit une pose précise au millimètre près. Nous proposons un large choix de matériaux avec des finitions personnalisées. Notre équipe certifiée intervient avec un outillage professionnel dernier cri. Nous assurons également un suivi post-installation et proposons une garantie décennale sur nos réalisations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis et la complexité de l&apos;installation. Un projet moyen de 30m² à Villejuif coûtera entre 2 400€ et 7 500€, installation comprise. Nous réalisons un devis personnalisé gratuit pour préciser votre budget exact.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la configuration. Pour un espace standard de 30m², notre équipe réalise l&apos;installation en 2 à 4 jours ouvrés. La préparation du terrain, la pose des plots, et la fixation des lames sont réalisées avec une précision méticuleuse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Villejuif, nous recommandons le bois composite (très durable), l&apos;ipé (bois exotique ultra-résistant) ou le châtaignier traité (option écologique). Chaque matériau présente des avantages spécifiques en termes de résistance, d&apos;esthétique et de prix. Notre conseil : privilégiez toujours un bois traité contre l&apos;humidité et les agressions extérieures.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Villejuif ?
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
