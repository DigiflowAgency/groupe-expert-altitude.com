import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Fréjus | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Fréjus avec une terrasse bois sur plot, l&apos;aménagement tendance qui allie élégance et fonctionnalité. Groupe Expert Altitude C',
  keywords: 'terrasse bois fréjus, terrasse sur plot fréjus, terrasse bois sur plot fréjus, pose terrasse bois fréjus, terrasse composite fréjus, terrasse bois piscine fréjus',
};

export default function TerrasseBoisFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Fréjus avec une terrasse bois sur plot, l&apos;aménagement tendance qui allie élégance et fonctionnalité. Groupe Expert Altitude Com vous propose des solutions durables et esthétiques pour sublimer vos espaces extérieurs dans toute la région.</p>

        <h2>Nos services de terrasse bois sur plot a Fréjus</h2>
        <div className="space-y-4">
          <p>Une terrasse bois sur plot représente la solution idéale pour créer un espace de vie extérieur harmonieux et pratique. Notre expertise nous permet de réaliser des installations sur mesure, parfaitement adaptées à la configuration de votre terrain à Fréjus. Nous travaillons principalement avec des matériaux haute qualité comme les bois composites et les essences résistantes aux conditions méditerranéennes. Notre processus démarre par un diagnostic précis du terrain, suivi d&apos;un relevé technique minutieux pour garantir une pose parfaitement nivelée et stable. Chaque réalisation intègre une préparation du sol, la pose de plots techniques et un assemblage précis des lames pour une finition impeccable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Avec plus de 15 ans d&apos;expérience, Groupe Expert Altitude Com se distingue par son savoir-faire technique et son engagement qualité. Nos équipes sont certifiées RGE, nos matériaux sont sourcés localement et nous proposons une garantie décennale sur nos installations. Nous maîtrisons parfaitement les techniques de pose sur plot, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis et la complexité de l&apos;installation. Pour un projet standard à Fréjus, comptez environ 120€/m² pour une terrasse en bois composite de qualité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, nous réalisons un chantier de 20-30 m² en 2-3 jours ouvrables. Notre équipe optimise chaque intervention pour une réalisation rapide et précise.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite ou l&apos;IPE pour les terrasses à Fréjus, offrant une excellente résistance aux UV, à l&apos;humidité et aux variations de température. Ces matériaux garantissent une durabilité de 20-25 ans avec un minimum d&apos;entretien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Fréjus ?
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
