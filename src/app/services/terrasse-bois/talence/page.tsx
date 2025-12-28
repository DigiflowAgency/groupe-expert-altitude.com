import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Talence | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Talence avec une terrasse bois sur plot élégante et durable, créée par des experts en aménagement paysager. Groupe Expert Alt',
  keywords: 'terrasse bois talence, terrasse sur plot talence, terrasse bois sur plot talence, pose terrasse bois talence, terrasse composite talence, terrasse bois piscine talence',
};

export default function TerrasseBoisTalencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Talence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Talence avec une terrasse bois sur plot élégante et durable, créée par des experts en aménagement paysager. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent instantanément votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Talence</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une transformation complète de votre espace extérieur. Notre expertise, développée depuis plus de 12 ans à Talence et ses environs, garantit une réalisation technique et esthétique irréprochable. Nous travaillons uniquement avec des matériaux de haute qualité, privilégiant des bois traités et des plots techniques permettant une parfaite stabilité et une excellente résistance aux intempéries. Notre processus comprend une étude préalable du terrain, un nivellement précis, la pose de plots réglables et l&apos;installation de lames de terrasse avec un espacement optimal pour un drainage efficace et une durabilité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour la qualité et la précision. Nos équipes sont certifiées RGE, nous proposons un devis gratuit sous 48h, garantissons nos réalisations 10 ans, et intervenons avec un matériel professionnel dernier cri. Nos réalisations respectent les normes environnementales et techniques les plus exigeantes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 180€ au m², selon les matériaux choisis (bois exotique, composite, pin traité) et la complexité de l&apos;installation. Un projet moyen de 20m² coûtera entre 1600€ et 3600€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de sa surface et de sa complexité. Comptez environ 2 à 5 jours pour un projet de 20-30m², incluant la préparation du terrain, la pose des plots et des lames, et les finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot à Talence, nous recommandons le bois composite (très durable), l&apos;ipé (bois exotique résistant), ou le pin traité classe 4. Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu de la terrasse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Talence ?
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
