import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Rezé | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par le Groupe Expert Altitude Com à Rezé. Nos solution',
  keywords: 'terrasse bois rezé, terrasse sur plot rezé, terrasse bois sur plot rezé, pose terrasse bois rezé, terrasse composite rezé, terrasse bois piscine rezé',
};

export default function TerrasseBoisRezePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Rezé</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par le Groupe Expert Altitude Com à Rezé. Nos solutions innovantes allient esthétique et durabilité pour sublimer vos espaces extérieurs.</p>

        <h2>Nos services de terrasse bois sur plot a Rezé</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une véritable extension de votre habitat. Notre expertise à Rezé nous permet de réaliser des terrasses sur mesure, adaptées à chaque configuration. Nous travaillons avec des matériaux haut de gamme comme le bois composite et le bois exotique, garantissant une résistance optimale aux intempéries. Notre processus comprend un diagnostic précis du terrain, une conception personnalisée et une pose méthodique qui assure stabilité et longévité. Chaque projet est pensé pour maximiser l&apos;esthétique et la fonctionnalité, que ce soit pour une terrasse de piscine ou un espace de détente.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens disposent de plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons une garantie décennale sur nos réalisations. Notre approche sur-mesure et notre engagement qualité font la différence : devis précis, délais respectés et finitions impeccables. Nous sommes certifiés RGE et maîtrisons parfaitement les techniques de pose de terrasse bois sur plot.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite coûtera généralement autour de 120-150€/m², tandis qu&apos;un bois exotique peut atteindre 200-250€/m². Notre devis personnalisé inclut la pose, les matériaux et la préparation du terrain.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour une surface moyenne de 20-30m², comptez entre 2 et 5 jours ouvrables. Notre équipe à Rezé optimise chaque intervention pour une réalisation rapide et précise.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très durable), l&apos;ipé (bois exotique résistant), ou le pin traité autoclave. Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage. Le composite offre 25-30 ans de durée de vie, contre 10-15 ans pour un bois standard.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Rezé ?
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
