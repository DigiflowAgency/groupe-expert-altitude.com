import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Vallauris | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Vallauris avec une terrasse bois sur plot élégante et durable, conçue par les experts du Groupe Altitude Com. Nos solutions s',
  keywords: 'terrasse bois vallauris, terrasse sur plot vallauris, terrasse bois sur plot vallauris, pose terrasse bois vallauris, terrasse composite vallauris, terrasse bois piscine vallauris',
};

export default function TerrasseBoisVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Vallauris avec une terrasse bois sur plot élégante et durable, conçue par les experts du Groupe Altitude Com. Nos solutions sur-mesure valorisent votre espace extérieur tout en garantissant une qualité d&apos;installation irréprochable.</p>

        <h2>Nos services de terrasse bois sur plot a Vallauris</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une véritable création d&apos;espace de vie. Notre équipe spécialisée maîtrise parfaitement les techniques d&apos;installation sur différents supports, qu&apos;il s&apos;agisse de béton, de terre ou de surfaces irrégulières. Nous sélectionnons rigoureusement des matériaux haut de gamme comme les bois exotiques, le composite ou le pin traité, offrant une résistance optimale aux conditions climatiques de la région de Vallauris. Notre processus comprend un diagnostic précis, un nivellement méticuleux et une pose selon les normes techniques les plus strictes, assurant une stabilité et une longévité exceptionnelles. Chaque projet est personnalisé pour s&apos;adapter parfaitement à votre terrain et vos attentes esthétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Le Groupe Expert Altitude Com se distingue par son expertise technique unique. Nos équipes possèdent plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons des garanties décennales, utilisons des matériaux écologiques certifiés et réalisons des installations avec une précision millimétrique. Notre approche sur-mesure et notre engagement qualité font la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ le m², selon les matériaux choisis. Un projet standard de 20m² sur Vallauris coûtera environ 1800€-4500€, incluant pose et fourniture. Les terrasses composites sont généralement plus onéreuses mais offrent une durabilité supérieure.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un espace de 20-30m², comptez entre 2 et 5 jours ouvrables. Notre équipe à Vallauris optimise chaque intervention pour une réalisation rapide et soignée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le robinier (très résistant), l&apos;ipé (imputrescible), et les composites technologiques. Pour Vallauris, nous recommandons des essences résistant aux variations climatiques méditerranéennes, avec un traitement anti-UV et fongique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Vallauris ?
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
