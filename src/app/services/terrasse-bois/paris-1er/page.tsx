import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Paris 1er | Groupe Expert Altitude Com',
  description: 'Transformer votre espace extérieur en un havre de détente avec une terrasse bois sur plot est désormais possible à Paris 1er grâce au Groupe Expert Altitud',
  keywords: 'terrasse bois paris 1er, terrasse sur plot paris 1er, terrasse bois sur plot paris 1er, pose terrasse bois paris 1er, terrasse composite paris 1er, terrasse bois piscine paris 1er',
};

export default function TerrasseBoisParis1erPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Paris 1er</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformer votre espace extérieur en un havre de détente avec une terrasse bois sur plot est désormais possible à Paris 1er grâce au Groupe Expert Altitude Com. Nos solutions sur mesure allient élégance technique et design contemporain pour sublimer vos espaces urbains.</p>

        <h2>Nos services de terrasse bois sur plot a Paris 1er</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution technique et esthétique parfaite pour les propriétaires parisiens recherchant un aménagement extérieur haut de gamme. Notre méthode exclusive permet une installation précise, garantissant une parfaite horizontalité et une durabilité optimale. Chaque projet est étudié individuellement, en tenant compte de la configuration du terrain, de l&apos;exposition et des contraintes architecturales spécifiques à Paris 1er. Nos équipes utilisent uniquement des matériaux de haute qualité, privilégiant des bois et composites résistants aux conditions climatiques urbaines, avec une attention particulière portée à l&apos;étanchéité et à la stabilité de l&apos;ouvrage.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise se distingue par : 1) Un bureau d&apos;études intégré garantissant des solutions techniques sur-mesure, 2) Une expérience de plus de 15 ans dans l&apos;aménagement extérieur parisien, 3) Des certifications professionnelles attestant notre savoir-faire, 4) Un accompagnement personnalisé de la conception à la réalisation finale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot à Paris 1er varie entre 180€ et 350€ au m², selon les matériaux choisis (bois exotique, composite haut de gamme) et la complexité de l&apos;installation. Un devis précis nécessite un diagnostic technique préalable de votre espace.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot est généralement de 3 à 5 jours pour une surface moyenne de 20m². Ce délai inclut la préparation du support, la pose des plots techniques, et la fixation des lames de terrasse avec une finition soignée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Paris, nous recommandons le bois composite (garantie 25 ans), l&apos;ipé (très résistant), ou le red cedar (imputrescible). Chaque essence présente des avantages en termes de durabilité, d&apos;esthétique et de budget, adaptés à votre projet spécifique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Paris 1er ?
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
