import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Menton | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Menton avec une terrasse bois sur plot, la solution élégante et durable pour sublimer vos espaces de vie. Groupe Expert Altit',
  keywords: 'terrasse bois menton, terrasse sur plot menton, terrasse bois sur plot menton, pose terrasse bois menton, terrasse composite menton, terrasse bois piscine menton',
};

export default function TerrasseBoisMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Menton avec une terrasse bois sur plot, la solution élégante et durable pour sublimer vos espaces de vie. Groupe Expert Altitude Com vous propose des solutions sur-mesure adaptées au climat méditerranéen et à la configuration unique de votre terrain.</p>

        <h2>Nos services de terrasse bois sur plot a Menton</h2>
        <div className="space-y-4">
          <p>La terrasse bois sur plot représente la solution idéale pour créer un espace extérieur fonctionnel et esthétique. Notre technique permet une installation précise, avec un système de plots réglables qui garantit une parfaite horizontalité, même sur des surfaces légèrement inclinées. Nos matériaux haut de gamme - bois composite ou bois exotique - résistent parfaitement aux conditions climatiques de Menton, offrant une durabilité exceptionnelle. Chaque projet est étudié individuellement, en tenant compte de l&apos;exposition, de la configuration du terrain et de vos usages spécifiques, pour un résultat qui allie technicité et élégance.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Avec plus de 15 ans d&apos;expérience à Menton, notre expertise se distingue par : un bureau d&apos;études intégré pour des plans précis, des matériaux certifiés et écologiques, une équipe de poseurs hautement qualifiés, et un suivi personnalisé de A à Z. Nous garantissons une réalisation clé en main, dans les délais et le respect du budget.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ le m², selon le type de matériau choisi (bois exotique, composite haut de gamme) et la complexité de l&apos;installation. Pour un projet standard à Menton, comptez environ 120€/m² tout compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité, mais en moyenne, notre équipe réalise 20-30 m² par jour. Un projet de terrasse de 50 m² sera généralement terminé en 2-3 jours ouvrables.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour Menton, nous recommandons le bois composite (très résistant aux embruns) ou le bois exotique comme l&apos;ipé. Ces matériaux offrent une durabilité de 20-25 ans, une résistance aux UV et une parfaite tenue aux variations climatiques méditerranéennes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Menton ?
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
