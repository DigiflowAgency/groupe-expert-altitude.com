import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Mérignac | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Mérignac avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesur',
  keywords: 'terrasse bois mérignac, terrasse sur plot mérignac, terrasse bois sur plot mérignac, pose terrasse bois mérignac, terrasse composite mérignac, terrasse bois piscine mérignac',
};

export default function TerrasseBoisMerignacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Mérignac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Mérignac avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient esthétique et performance pour sublimer vos espaces exterieurs.</p>

        <h2>Nos services de terrasse bois sur plot a Mérignac</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est la création d&apos;un espace de vie supplémentaire. Notre expertise technique nous permet de réaliser des terrasses parfaitement nivelées, même sur des sols légèrement pentus, grâce à un système de plots réglables. Nous travaillons principalement avec des bois nobles comme l&apos;ipé, le cumaru et des composites haut de gamme, garantissant une résistance optimale aux intempéries et aux UV. Chaque projet à Mérignac est étudié individuellement, en prenant en compte l&apos;exposition, la configuration du terrain et vos usages spécifiques. Notre processus inclut un diagnostic précis, une préparation soignée du support et une pose selon les normes professionnelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans, 2) Des matériaux certifiés et écologiques, 3) Un devis détaillé et transparent sans surprise, 4) Une équipe de poseurs certifiés intervenant exclusivement sur Mérignac et sa métropole.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un composite haut de gamme sera plus onéreux qu&apos;un bois standard. Chez nous, un devis personnalisé vous donnera un tarif précis adapté à votre projet spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de sa surface. Comptez environ 2-3 jours pour 30m² par une équipe de 2 professionnels. Les étapes incluent la préparation du sol, la pose des plots, et l&apos;assemblage des lames de terrasse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Mérignac, nous recommandons le bois composite ou l&apos;ipé. Le composite offre une durabilité de 25-30 ans, résiste parfaitement à l&apos;humidité, tandis que l&apos;ipé propose un rendu esthétique naturel avec une très grande longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Mérignac ?
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
