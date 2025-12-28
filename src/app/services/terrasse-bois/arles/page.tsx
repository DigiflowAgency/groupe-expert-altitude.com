import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Arles | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime pour transformer votre extérieur à Arles avec nos terrasses bois sur plot, conçues pour résister au climat provençal et offrir',
  keywords: 'terrasse bois arles, terrasse sur plot arles, terrasse bois sur plot arles, pose terrasse bois arles, terrasse composite arles, terrasse bois piscine arles',
};

export default function TerrasseBoisArlesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Arles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime pour transformer votre extérieur à Arles avec nos terrasses bois sur plot, conçues pour résister au climat provençal et offrir une élégance durable à votre espace de vie extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Arles</h2>
        <div className="space-y-4">
          <p>Nos terrasses bois sur plot représentent la solution technique parfaite pour les propriétaires d&apos;Arles recherchant un aménagement extérieur haut de gamme. Nous proposons une installation précise où chaque plot permet une parfaite mise à niveau, garantissant une surface plane et stable. Notre expertise technique assure une pose qui s&apos;adapte aux contraintes du terrain, avec une isolation optimale contre l&apos;humidité et les variations climatiques. Nous travaillons principalement avec des bois nobles comme le pin traité, le châtaignier et des composites haut de gamme, offrant une durabilité de 20 à 30 ans avec un minimum d&apos;entretien.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son savoir-faire local, une expérience de plus de 15 ans dans l&apos;aménagement extérieur. Nos équipes sont certifiées, nos matériaux sont sourcés localement et nous proposons une garantie décennale. Chaque projet est personnalisé, avec un devis gratuit et un accompagnement technique complet.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour une surface moyenne de 20m², comptez un investissement global entre 1600€ et 5000€, installation comprise. À Arles, nos tarifs intègrent les spécificités du terrain local.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot nécessite généralement 2 à 5 jours, en fonction de la surface et de la complexité du terrain. Notre équipe optimise chaque étape : préparation du sol, pose des plots, installation des lames, finitions. Un chantier type de 20m² sera réalisé en 3 jours maximum.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour Arles, nous recommandons le bois composite ou le pin traité autoclave. Le composite offre une résistance maximale aux UV et à l&apos;humidité, tandis que le pin traité garantit une durabilité de 25 ans. Le choix dépend de votre budget et de l&apos;exposition de votre terrain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Arles ?
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
