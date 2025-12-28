import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Marseille | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Marseille avec une terrasse bois sur plot, l&apos;élégance et la durabilité au cœur de votre aménagement. Groupe Expert Altitude C',
  keywords: 'terrasse bois marseille, terrasse sur plot marseille, terrasse bois sur plot marseille, pose terrasse bois marseille, terrasse composite marseille, terrasse bois piscine marseille',
};

export default function TerrasseBoisMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Marseille avec une terrasse bois sur plot, l&apos;élégance et la durabilité au cœur de votre aménagement. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent votre espace extérieur dans la région marseillaise.</p>

        <h2>Nos services de terrasse bois sur plot a Marseille</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une véritable extension de votre habitat. Notre expertise technique nous permet de créer des espaces extérieurs parfaitement nivelés, garantissant une stabilité optimale et un rendu esthétique impeccable. Chaque projet est étudié individuellement pour s&apos;adapter précisément à la configuration de votre terrain, qu&apos;il s&apos;agisse d&apos;une surface plane ou en légère pente, courante à Marseille. Nos matériaux haut de gamme - bois composite ou bois naturel - offrent une résistance exceptionnelle aux conditions météorologiques méditerranéennes, avec une durée de vie pouvant atteindre 25 ans. Le système sur plot permet une ventilation parfaite, limitant les problèmes d&apos;humidité et de déformation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence marseillaise. Notre équipe certifiée intervient sur tout le département des Bouches-du-Rhône avec un taux de satisfaction de 98%. Nous proposons un devis personnalisé sous 48h, une garantie décennale, et un accompagnement technique complet. Nos réalisations allient technicité et créativité pour un résultat toujours sur-mesure.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour un projet de 20m², comptez un budget moyen de 1800€ à 4500€. Nos devis détaillés incluent la pose, les matériaux et la préparation du terrain.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un projet standard de 20-30m², notre équipe réalise l&apos;installation en 2-3 jours ouvrés. La préparation du terrain peut nécessiter une journée supplémentaire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour Marseille, nous recommandons le bois composite ou l&apos;ipé pour leur résistance au soleil et à l&apos;humidité. Le bois composite offre 25-30 ans de durabilité, tandis que l&apos;ipé peut atteindre 50 ans avec un entretien adapté. Le choix dépendra de votre budget et de l&apos;exposition de votre terrain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Marseille ?
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
