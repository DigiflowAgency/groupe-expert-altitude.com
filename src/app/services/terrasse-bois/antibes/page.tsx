import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Antibes | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée à votre environnement à Antibes. Notre expertise du Groupe Expert Altitud',
  keywords: 'terrasse bois antibes, terrasse sur plot antibes, terrasse bois sur plot antibes, pose terrasse bois antibes, terrasse composite antibes, terrasse bois piscine antibes',
};

export default function TerrasseBoisAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée à votre environnement à Antibes. Notre expertise du Groupe Expert Altitude Com vous garantit un aménagement élégant et durable, adapté aux spécificités du climat méditerranéen.</p>

        <h2>Nos services de terrasse bois sur plot a Antibes</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution technique et esthétique idéale pour valoriser vos espaces extérieurs à Antibes. Notre méthode exclusive permet une installation précise qui s&apos;adapte parfaitement aux reliefs et contraintes de votre terrain. Chaque projet est étudié individuellement pour assurer une parfaite planéité et une résistance optimale aux conditions climatiques locales. Nos terrasses en bois composite ou en bois naturel offrent une durabilité exceptionnelle, avec une garantie allant jusqu&apos;à 25 ans. Nous sélectionnons rigoureusement nos matériaux pour résister aux embruns marins et aux variations de température caractéristiques de la région.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre entreprise, c&apos;est opter pour l&apos;excellence technique. Nos équipes sont certifiées et possèdent plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons un devis personnalisé sous 48h, un accompagnement technique complet et une intervention rapide sur Antibes et ses environs. Notre engagement qualité se traduit par des réalisations sur-mesure, un suivi précis et des finitions irréprochables.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 120€ et 250€ le m², selon les matériaux choisis. Pour un projet standard de 20m² à Antibes, comptez un budget global entre 2 400€ et 5 000€. Les bois composites haut de gamme et les essences nobles comme l&apos;ipé ou le teck se situent dans le prix supérieur.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot oscille entre 2 et 5 jours, en fonction de la surface et de la complexité du terrain. Un chantier de 30m² nécessitera environ 3 à 4 jours de travail, incluant la préparation du sol, la pose des plots et du revêtement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Antibes, nous recommandons le bois composite (imputrescible), l&apos;ipé (très résistant), ou le châtaignier traité. Le composite offre 25-30 ans de durabilité, l&apos;ipé 30-40 ans, tandis que le châtaignier traité résiste 15-20 ans. Le choix dépend de votre budget et de l&apos;exposition de votre terrain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Antibes ?
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
