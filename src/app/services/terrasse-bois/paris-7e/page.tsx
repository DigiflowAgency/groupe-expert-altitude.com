import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Paris 7e | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Paris 7e avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions su',
  keywords: 'terrasse bois paris 7e, terrasse sur plot paris 7e, terrasse bois sur plot paris 7e, pose terrasse bois paris 7e, terrasse composite paris 7e, terrasse bois piscine paris 7e',
};

export default function TerrasseBoisParis7ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Paris 7e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Paris 7e avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient esthétique contemporaine et performance technique pour valoriser votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Paris 7e</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution premium pour aménager vos espaces extérieurs avec sophistication. Notre expertise permet de créer des surfaces parfaitement nivelées, résistantes aux variations climatiques parisiennes. Nous sélectionnons rigoureusement des matériaux comme le bois composite ou le bois exotique, garantissant une durabilité jusqu&apos;à 25 ans. Notre processus comprend un diagnostic précis du terrain, une préparation soignée du support et une pose technique qui assure drainage optimal et stabilité parfaite. Chaque réalisation à Paris 7e est pensée pour s&apos;intégrer harmonieusement à votre environnement architectural.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos atouts différenciants : une équipe certifiée avec plus de 15 ans d&apos;expérience, un bureau d&apos;études intégré, des matériaux haute gamme sélectionnés, un devis détaillé sous 48h et une garantie décennale. Nous intervenons exclusivement sur Paris et sa région avec une expertise reconnue en aménagements extérieurs haut de gamme.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 120€ et 350€ au m², selon les matériaux choisis. Un bois composite standard coûtera environ 180€/m², tandis qu&apos;un bois exotique premium peut atteindre 300€/m². Notre tarification inclut pose, fourniture et préparation du terrain.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un espace de 20m², comptez entre 2 et 4 jours ouvrés. Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Paris 7e, nous recommandons le bois composite (imputrescible), l&apos;ipé (très résistant) ou le red cedar (aspect naturel). Le choix dépend de votre budget, de l&apos;exposition et de l&apos;esthétique recherchée. Notre conseil : privilégiez toujours la qualité et la durabilité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Paris 7e ?
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
