import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Noisy-le-Grand | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Noisy-le-Grand avec une terrasse bois sur plot élégante et durable. Le Groupe Expert Altitude Com vous propose des sol',
  keywords: 'terrasse bois noisy-le-grand, terrasse sur plot noisy-le-grand, terrasse bois sur plot noisy-le-grand, pose terrasse bois noisy-le-grand, terrasse composite noisy-le-grand, terrasse bois piscine noisy-le-grand',
};

export default function TerrasseBoisNoisyLeGrandPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Noisy-le-Grand</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Noisy-le-Grand avec une terrasse bois sur plot élégante et durable. Le Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valoriseront instantanément votre propriété et créeront un espace de détente parfaitement intégré.</p>

        <h2>Nos services de terrasse bois sur plot a Noisy-le-Grand</h2>
        <div className="space-y-4">
          <p>Une terrasse bois sur plot représente la solution idéale pour aménager harmonieusement vos espaces extérieurs avec style et fonctionnalité. Notre expertise, développée depuis plus de 15 ans à Noisy-le-Grand et ses environs, nous permet de réaliser des installations parfaitement adaptées à chaque configuration. Nous travaillons principalement avec des matériaux composites haute résistance et des bois nobles comme l&apos;ipé ou le padouk, garantissant une durabilité exceptionnelle de 25 à 30 ans. Notre processus comprend un diagnostic précis du terrain, une conception personnalisée et une pose méthodique qui assure stabilité et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale reconnue, 2) Des matériaux premium certifiés, 3) Un devis détaillé et transparent sans frais cachés, 4) Une équipe de professionnels qualifiés et passionnés par leur métier.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un projet moyen de 20m² représente un investissement de 1 600€ à 5 000€, installation comprise. Nos devis détaillés incluent toujours le coût précis des matériaux et de la main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité, mais en moyenne, notre équipe réalise un chantier de 20m² en 2 à 3 jours ouvrables. La préparation du terrain et les finitions peuvent nécessiter un délai supplémentaire de 1 jour.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très résistant), l&apos;ipé (extrêmement durable), ou le padouk (esthétique remarquable). Chaque essence présente des avantages spécifiques en termes de résistance, durabilité et budget. Notre conseil : privilégiez toujours la qualité à court terme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Noisy-le-Grand ?
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
