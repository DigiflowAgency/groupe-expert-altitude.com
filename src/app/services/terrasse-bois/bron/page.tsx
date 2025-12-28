import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Bron | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Bron avec des terrasses bois sur plot parfaitement intégrées, conçues pour sublimer vos espaces de vie. Notre expertise du Gr',
  keywords: 'terrasse bois bron, terrasse sur plot bron, terrasse bois sur plot bron, pose terrasse bois bron, terrasse composite bron, terrasse bois piscine bron',
};

export default function TerrasseBoisBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Bron avec des terrasses bois sur plot parfaitement intégrées, conçues pour sublimer vos espaces de vie. Notre expertise du Groupe Expert Altitude Com vous garantit une réalisation sur mesure, alliant élégance et durabilité.</p>

        <h2>Nos services de terrasse bois sur plot a Bron</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement extérieur : c&apos;est créer un espace de vie supplémentaire, harmonieux et fonctionnel. Notre technique permet une installation précise, avec un nivellement optimal grâce aux plots réglables, assurant une parfaite horizontalité même sur des surfaces légèrement pentues. Nous travaillons principalement avec des matériaux nobles comme le bois composite et le bois exotique, offrant une résistance maximale aux intempéries et aux UV. Notre processus comprend un diagnostic précis du terrain, une préparation minutieuse du support, et une pose selon les normes techniques les plus strictes, avec une attention particulière portée à l&apos;étanchéité et à la ventilation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre équipe, c&apos;est opter pour l&apos;excellence : 15 ans d&apos;expérience à Bron et ses environs, une équipe de 6 professionnels certifiés, un devis gratuit sous 48h, et une garantie décennale. Nous maîtrisons parfaitement les techniques de pose sur plot, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le matériau choisi. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel, mais offrira une durabilité supérieure. Pour un projet moyen de 20m², comptez un budget total entre 1600€ et 5000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un espace de 20m², notre équipe réalise généralement l&apos;installation en 2-3 jours ouvrés, comprenant la préparation du terrain, la pose des plots et du revêtement, avec un finition soignée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Bron, nous recommandons le bois composite (très résistant) ou l&apos;IPE brésilien. Le composite offre l&apos;avantage d&apos;être quasi sans entretien, tandis que l&apos;IPE présente une exceptionnelle durabilité naturelle, résistant parfaitement aux conditions climatiques locales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Bron ?
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
