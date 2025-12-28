import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Boulogne-Billancourt | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure pour les maisons et jardins de Boulogne-Billancourt. N',
  keywords: 'terrasse bois boulogne-billancourt, terrasse sur plot boulogne-billancourt, terrasse bois sur plot boulogne-billancourt, pose terrasse bois boulogne-billancourt, terrasse composite boulogne-billancourt, terrasse bois piscine boulogne-billancourt',
};

export default function TerrasseBoisBoulogneBillancourtPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Boulogne-Billancourt</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure pour les maisons et jardins de Boulogne-Billancourt. Notre expertise Groupe Expert Altitude Com vous garantit une réalisation haut de gamme, alliant esthétique et durabilité.</p>

        <h2>Nos services de terrasse bois sur plot a Boulogne-Billancourt</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement extérieur : c&apos;est une véritable transformation de votre espace de vie. Nos solutions techniques permettent une installation précise, avec un nivellement parfait grâce aux plots réglables, qui s&apos;adaptent aux légères inclinaisons du terrain. Nous proposons des matériaux premium comme le bois composite ou le bois exotique, résistants aux intempéries et offrant une durée de vie exceptionnelle de 20 à 25 ans. Notre processus comprend un diagnostic précis du terrain, une conception personnalisée et une mise en œuvre rigoureuse, garantissant une finition impeccable adaptée à chaque configuration à Boulogne-Billancourt et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre entreprise, c&apos;est opter pour l&apos;excellence technique : notre équipe certifiée maîtrise parfaitement les techniques de pose, nous utilisons uniquement des matériaux haute qualité, nous proposons une garantie décennale et notre expérience de plus de 15 ans sur le territoire ouest parisien nous permet de répondre aux spécificités locales. Nous réalisons chaque projet comme s&apos;il s&apos;agissait de notre propre jardin.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 120€ et 250€ au m², selon les matériaux choisis (bois exotique, composite) et la complexité de l&apos;installation. Pour un projet standard à Boulogne-Billancourt, comptez environ 180€/m² tout compris, pose et matériaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, notre équipe réalise entre 20 et 40 m² en 3 à 5 jours ouvrés. Un chantier de 50 m² prendra environ une semaine, installation et finitions comprises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très durable, peu d&apos;entretien), l&apos;ipé (bois exotique ultra-résistant) ou le red cedar (esthétique et naturellement imputrescible). Le choix dépendra de votre budget, de l&apos;exposition et de l&apos;usage prévu de votre terrasse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Boulogne-Billancourt ?
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
