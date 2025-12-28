import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Drancy | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, réalisée par le Groupe Expert Altitude Com, votre partenaire de référenc',
  keywords: 'terrasse bois drancy, terrasse sur plot drancy, terrasse bois sur plot drancy, pose terrasse bois drancy, terrasse composite drancy, terrasse bois piscine drancy',
};

export default function TerrasseBoisDrancyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Drancy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, réalisée par le Groupe Expert Altitude Com, votre partenaire de référence à Drancy. Nous concevons des espaces extérieurs élégants qui valorisent votre propriété et offrent un cadre de vie exceptionnel.</p>

        <h2>Nos services de terrasse bois sur plot a Drancy</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution technique et esthétique idéale pour aménager vos espaces extérieurs à Drancy. Notre expertise permet de créer des surfaces durables, parfaitement nivelées grâce à un système de plots réglables qui s&apos;adaptent à tous les reliefs. Nous travaillons principalement avec des bois nobles comme l&apos;ipé, le padouk et le composite haut de gamme, garantissant une résistance optimale aux intempéries et une durabilité de 20 à 30 ans. Notre processus comprend un diagnostic précis du terrain, une préparation minutieuse du support et une pose selon les normes techniques les plus exigeantes, assurant un résultat impeccable et une finition professionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un service sur-mesure. Nos équipes sont certifiées, avec plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons un devis personnalisé sous 48h, une garantie décennale et un accompagnement technique complet. Notre engagement qualité se traduit par des réalisations durables et esthétiques, parfaitement adaptées à votre environnement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Pour une surface moyenne de 20m², comptez un budget global entre 1600€ et 5000€. Nos devis détaillés intègrent le matériel, la pose et les finitions, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité du terrain. Pour un espace de 20m², notre équipe réalise généralement l&apos;installation en 2 à 3 jours ouvrés. La préparation du terrain peut nécessiter une journée supplémentaire selon les conditions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons trois types de bois : le composite (entretien minimal), l&apos;ipé (très haute durabilité) et le padouk (esthétique remarquable). Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu. Nos experts vous conseillent sur le matériau le plus adapté à votre projet spécifique à Drancy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Drancy ?
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
