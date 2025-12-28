import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Le Cannet | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur au Cannet avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur',
  keywords: 'terrasse bois le cannet, terrasse sur plot le cannet, terrasse bois sur plot le cannet, pose terrasse bois le cannet, terrasse composite le cannet, terrasse bois piscine le cannet',
};

export default function TerrasseBoisLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur au Cannet avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent instantanément votre propriété et offrent un cadre de vie extérieur exceptionnel.</p>

        <h2>Nos services de terrasse bois sur plot a Le Cannet</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution technique et esthétique parfaite pour aménager vos espaces extérieurs. Notre expertise permet de créer des surfaces stables, parfaitement nivelées, qui s&apos;adaptent à tous les reliefs du terrain. Nous utilisons des matériaux haut de gamme comme le bois composite ou le bois exotique, garantissant une résistance optimale aux intempéries et à l&apos;usure. Au Cannet, nos réalisations respectent les normes environnementales et techniques les plus strictes, avec une attention particulière portée à l&apos;intégration harmonieuse dans votre environnement. Chaque projet est étudié individuellement pour offrir un résultat personnalisé, alliant fonctionnalité et design contemporain.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens disposent de plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons un devis gratuit et détaillé, un accompagnement personnalisé, et des garanties décennales sur nos installations. Notre maîtrise technique nous permet de réaliser des terrasses bois sur plot parfaitement adaptées aux spécificités du Cannet.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour un projet moyen de 20m², comptez un budget global entre 1600€ et 5000€. Nos devis détaillés intègrent la fourniture des matériaux, la préparation du terrain et la pose complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un espace de 20m², notre équipe réalise généralement l&apos;installation en 2 à 3 jours ouvrés. La préparation du terrain et le nivellement peuvent prendre une journée supplémentaire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite pour sa durabilité et son faible entretien, ou le bois exotique comme l&apos;ipé pour son esthétique naturelle. Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu. Nos experts vous conseillent sur le matériau le plus adapté à votre projet au Cannet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Le Cannet ?
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
