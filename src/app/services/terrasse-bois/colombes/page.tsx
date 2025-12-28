import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Colombes | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Colombes avec une terrasse bois sur plot parfaitement intégrée, créant un espace de vie élégant et fonctionnel. Notre experti',
  keywords: 'terrasse bois colombes, terrasse sur plot colombes, terrasse bois sur plot colombes, pose terrasse bois colombes, terrasse composite colombes, terrasse bois piscine colombes',
};

export default function TerrasseBoisColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Colombes avec une terrasse bois sur plot parfaitement intégrée, créant un espace de vie élégant et fonctionnel. Notre expertise du Groupe Expert Altitude Com vous garantit une réalisation sur-mesure qui valorisera immédiatement votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Colombes</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente la solution idéale pour aménager harmonieusement vos espaces extérieurs à Colombes. Notre méthode exclusive permet une installation précise et durable, en s&apos;adaptant parfaitement aux légères déclivités du terrain. Chaque projet est étudié individuellement, en privilégiant des matériaux haute qualité comme le bois composite ou le bois exotique, résistants aux intempéries et au piétinement. Nos techniciens maitrisent les techniques de nivellement et de pose sur plots, assurant une finition impeccable et une stabilité optimale. Cette approche technique garantit une terrasse esthétique, fonctionnelle et qui durera plus de 20 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre groupe, c&apos;est opter pour l&apos;excellence à Colombes : 15 ans d&apos;expérience, une équipe de 8 professionnels certifiés, un devis gratuit sous 48h, des matériaux garantis 10 ans, et une intervention rapide sur l&apos;ensemble des Hauts-de-Seine. Nous proposons une solution clé en main qui transformera votre extérieur.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Pour un projet standard à Colombes de 20m², comptez un budget global entre 1600€ et 5000€, installation comprise. Les bois composites haut de gamme représentent l&apos;investissement le plus durable.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un espace de 20m², notre équipe réalise généralement le chantier en 2-3 jours ouvrés. La préparation du terrain, le nivellement et la pose des plots représentent environ 60% du temps total de réalisation.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot à Colombes, nous recommandons trois types de bois : le bois composite (le plus résistant), l&apos;ipé (bois exotique très dense) ou le red cedar (aspect naturel et imputrescible). Le choix dépendra de votre budget, de l&apos;exposition et du style recherché. Notre conseil : privilégiez toujours la qualité à court terme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Colombes ?
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
