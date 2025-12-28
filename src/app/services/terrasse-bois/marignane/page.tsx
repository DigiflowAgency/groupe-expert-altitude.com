import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Marignane | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Marignane avec une terrasse bois sur plot, la solution élégante et durable pour sublimer vos espaces. Groupe Expert Altitude ',
  keywords: 'terrasse bois marignane, terrasse sur plot marignane, terrasse bois sur plot marignane, pose terrasse bois marignane, terrasse composite marignane, terrasse bois piscine marignane',
};

export default function TerrasseBoisMarignanePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Marignane</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Marignane avec une terrasse bois sur plot, la solution élégante et durable pour sublimer vos espaces. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient esthétique et fonctionnalité pour tous vos projets d&apos;aménagement extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Marignane</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est la création d&apos;un espace de vie supplémentaire parfaitement intégré à votre environnement. Notre expertise technique nous permet de réaliser des terrasses adaptées aux spécificités du climat marseillais, garantissant une résistance optimale aux variations climatiques. Chaque projet est étudié méticuleusement pour assurer un nivellement parfait, une stabilité irréprochable et une esthétique harmonieuse. Nous travaillons principalement avec des matériaux composites et bois nobles, sélectionnés pour leur durabilité et leur résistance aux UV, offrant ainsi une solution pérenne pour les habitants de Marignane et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec un outillage professionnel, nos devis sont transparents sans frais cachés, nous proposons une garantie décennale, et notre connaissance précise du terrain local nous permet de conseiller les meilleurs matériaux adaptés à votre environnement spécifique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis (composite, bois exotique ou Pin Douglas). Pour un projet moyen de 20m², comptez un investissement global entre 1600€ et 5000€, installation comprise. Nos devis personnalisés intègrent le démontage éventuel de l&apos;ancien revêtement, la préparation du terrain et la pose définitive.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité du terrain. Pour une surface standard de 20-30m², notre équipe réalise généralement l&apos;intégralité du chantier en 2-3 jours ouvrables. La préparation du terrain peut nécessiter une journée supplémentaire pour un nivellement optimal.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Marignane, nous recommandons le bois composite (très résistant aux UV), le Pin Douglas traité autoclave (économique) ou l&apos;IPE brésilien (très haut de gamme). Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu. Notre conseil : privilégiez toujours un bois traité et imputrescible, adapté au climat méditerranéen.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Marignane ?
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
