import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure pour les habitants de La Chapelle-sur-Erdre. Groupe Ex',
  keywords: 'terrasse bois la chapelle-sur-erdre, terrasse sur plot la chapelle-sur-erdre, terrasse bois sur plot la chapelle-sur-erdre, pose terrasse bois la chapelle-sur-erdre, terrasse composite la chapelle-sur-erdre, terrasse bois piscine la chapelle-sur-erdre',
};

export default function TerrasseBoisLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure pour les habitants de La Chapelle-sur-Erdre. Groupe Expert Altitude Com vous propose des solutions durables et esthétiques qui valoriseront instantanément votre espace outdoor.</p>

        <h2>Nos services de terrasse bois sur plot a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>Notre service de pose de terrasse bois sur plot représente la solution idéale pour les propriétaires exigeants de La Chapelle-sur-Erdre qui recherchent un aménagement extérieur élégant et fonctionnel. Nous utilisons exclusivement des matériaux haute qualité comme le bois composite et le bois naturel traité, garantissant une résistance optimale aux intempéries et une durabilité de plus de 20 ans. Notre processus inclut un diagnostic précis du terrain, une conception personnalisée et une installation méticuleuse, avec un nivellement parfait grâce à des plots réglables. Chaque projet est pensé pour offrir un résultat esthétique et technique irréprochable, en respectant scrupuleusement les normes environnementales et de construction.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : 15 ans d&apos;expérience en aménagement extérieur, une équipe de professionnels certifiés, des matériaux sélectionnés rigoureusement, et un devis gratuit et détaillé. Nous proposons des garanties décennales et un suivi personnalisé, avec un taux de satisfaction client de plus de 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour La Chapelle-sur-Erdre, notre tarification moyenne se situe autour de 120€/m², incluant la fourniture et la pose, avec des options composite ou bois naturel.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, notre équipe réalise un chantier de 20-30 m² en 2-3 jours ouvrables. Un projet type à La Chapelle-sur-Erdre prend entre 48h et 5 jours, installation et finitions comprises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons trois types de bois : le bois composite (le plus durable), l&apos;ipé (très résistant mais plus coûteux) et le pin traité autoclave (option économique). Chaque matériau offre des avantages différents en termes de durabilité, d&apos;entretien et d&apos;esthétique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a La Chapelle-sur-Erdre ?
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
