import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Clichy | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Clichy avec une terrasse bois sur plot, l&apos;option ultime en aménagement contemporain et durable. Notre expertise du Groupe Exp',
  keywords: 'terrasse bois clichy, terrasse sur plot clichy, terrasse bois sur plot clichy, pose terrasse bois clichy, terrasse composite clichy, terrasse bois piscine clichy',
};

export default function TerrasseBoisClichyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Clichy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Clichy avec une terrasse bois sur plot, l&apos;option ultime en aménagement contemporain et durable. Notre expertise du Groupe Expert Altitude Com vous garantit une réalisation sur-mesure qui valorisera instantanément votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Clichy</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une solution technique innovante parfaitement adaptée aux sols urbains de Clichy. Cette méthode permet une installation rapide et précise, avec un nivellement optimal grâce aux plots réglables. Nos terrasses en bois composite ou bois naturel offrent une résistance exceptionnelle aux intempéries, avec une durabilité pouvant atteindre 25 ans. Chaque projet est personnalisé, en tenant compte de la configuration spécifique de votre terrain, des contraintes architecturales et de vos préférences esthétiques. Notre équipe maîtrise les techniques les plus récentes pour garantir un résultat impeccable, tant sur le plan technique qu&apos;esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Clichy, 2) Un bureau d&apos;études intégré proposant des solutions 100% personnalisées, 3) Des matériaux haut de gamme sélectionnés rigoureusement, 4) Une garantie décennale sur l&apos;ensemble de nos réalisations, vous assurant une tranquillité totale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis (bois exotique, composite haut de gamme) et la complexité de l&apos;installation. Pour un projet standard à Clichy, comptez environ 120€/m² pour une pose professionnelle incluant fourniture et main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité, mais en moyenne, notre équipe réalise 20 à 30 m² par jour. Un projet classique de 40 m² sera donc achevé en 1-2 jours ouvrés, avec un résultat clé en main et un nettoyage complet du chantier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très tendance à Clichy), l&apos;ipé, le padouk ou le red cedar. Ces essences offrent une excellente résistance aux UV, à l&apos;humidité et garantissent une durabilité de 20 à 30 ans avec un minimum d&apos;entretien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Clichy ?
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
