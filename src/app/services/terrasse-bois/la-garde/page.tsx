import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a La Garde | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot élégante et durable par Groupe Expert Altitude Com, le spécialiste de l&apos;aménagement extérieur à',
  keywords: 'terrasse bois la garde, terrasse sur plot la garde, terrasse bois sur plot la garde, pose terrasse bois la garde, terrasse composite la garde, terrasse bois piscine la garde',
};

export default function TerrasseBoisLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot élégante et durable par Groupe Expert Altitude Com, le spécialiste de l&apos;aménagement extérieur à La Garde. Nos solutions sur-mesure s&apos;adaptent parfaitement à tous vos projets, garantissant un résultat esthétique et fonctionnel.</p>

        <h2>Nos services de terrasse bois sur plot a La Garde</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution innovante pour valoriser vos espaces extérieurs à La Garde. Notre technique permet une installation précise, avec un nivellement parfait grâce à des plots réglables qui s&apos;adaptent aux différents reliefs. Nous proposons des matériaux haut de gamme comme le bois composite ou le bois exotique, résistants aux intempéries et offrant une durabilité exceptionnelle. Notre processus comprend un diagnostic précis du terrain, une préparation soignée de la surface, et une pose méthodique qui assure stabilité et longévité. Chaque projet est unique et personnalisé, avec une attention particulière portée à l&apos;esthétique et aux contraintes techniques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise technique et son engagement qualité. Nos équipes sont certifiées et formées aux dernières techniques de pose. Nous garantissons un délai d&apos;intervention rapide, généralement sous 15 jours. Notre devis est transparent, sans frais cachés. Nous proposons une garantie décennale sur nos réalisations, gage de notre professionnalisme.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel. Notre tarification inclut la fourniture des matériaux, la pose et le nivellement précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais comptez en moyenne 2 à 5 jours pour un projet de 20-30 m². Notre équipe optimise chaque intervention pour une réalisation rapide et soignée, avec un planning précis communiqué avant le début des travaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très résistant), l&apos;ipé (bois exotique très dense), ou le mélèze traité. Chaque essence a ses avantages : durabilité, résistance aux UV, entretien minimal. Notre conseil personnalisé vous aidera à faire le bon choix selon votre budget et vos attentes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a La Garde ?
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
