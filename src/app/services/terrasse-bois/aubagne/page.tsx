import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Aubagne | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com, votre spécialis',
  keywords: 'terrasse bois aubagne, terrasse sur plot aubagne, terrasse bois sur plot aubagne, pose terrasse bois aubagne, terrasse composite aubagne, terrasse bois piscine aubagne',
};

export default function TerrasseBoisAubagnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Aubagne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com, votre spécialiste local à Aubagne. Nous créons des extensions de vie qui allient élégance naturelle et durabilité technique.</p>

        <h2>Nos services de terrasse bois sur plot a Aubagne</h2>
        <div className="space-y-4">
          <p>Notre service de pose de terrasse bois sur plot représente la solution idéale pour valoriser vos espaces extérieurs à Aubagne et ses environs. Nous travaillons exclusivement avec des matériaux haut de gamme comme les bois composites et les essences nobles, garantissant une finition impeccable et une résistance optimale aux conditions climatiques locales. Notre processus démarre par un diagnostic précis du terrain, suivi d&apos;un relevé métrique permettant une pose parfaitement nivelée. Chaque plot est soigneusement ajusté pour assurer une stabilité maximale, avec une attention particulière portée à l&apos;étanchéité et à la ventilation sous-jacente.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise technique pointue et son engagement local. Nos équipes sont certifiées et formées aux dernières techniques de pose, avec plus de 15 ans d&apos;expérience sur Aubagne. Nous proposons un devis personnalisé sous 48h, un délai d&apos;intervention rapide et une garantie décennale sur nos réalisations. Notre approche privilégie la qualité, la précision et la satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Pour un bois composite haut de gamme à Aubagne, comptez environ 150€/m² pose comprise, avec des variations selon la complexité du terrain et les finitions souhaitées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface. Pour un espace de 20m², notre équipe réalise généralement l&apos;installation en 2-3 jours ouvrés, incluant la préparation du terrain, la pose des plots et du revêtement, avec un séchage et une finition soignés.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le bois composite (très résistant), l&apos;ipé (très dense), le red cedar (imputrescible) et le châtaignier. À Aubagne, nous recommandons le composite pour sa durabilité et son faible entretien, offrant une résistance optimale aux UV et à l&apos;humidité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Aubagne ?
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
