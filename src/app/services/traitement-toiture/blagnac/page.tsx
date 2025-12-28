import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Blagnac | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre spécialiste en traitement et démoussage de toiture à Blagnac et ses environs. Nous protégeons et restaurons votre p',
  keywords: 'demoussage toiture blagnac, traitement toiture blagnac, nettoyage toiture blagnac, antimousse toiture blagnac, hydrofuge toiture blagnac, entretien toiture blagnac',
};

export default function TraitementToitureBlagnacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Blagnac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre spécialiste en traitement et démoussage de toiture à Blagnac et ses environs. Nous protégeons et restaurons votre patrimoine immobilier grâce à des techniques professionnelles garantissant la longévité de votre toiture.</p>

        <h2>Nos services de traitement et démoussage toiture a Blagnac</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région toulousaine. Nous intervenons sur tous types de matériaux - tuiles, ardoises, fibrociment - avec une méthodologie précise. Notre équipe commence par un diagnostic complet, évaluant l&apos;état de votre toiture et les zones nécessitant un traitement. Nous utilisons des produits écologiques et homologués, appliqués avec une technicité qui préserve l&apos;intégrité de vos tuiles. Le traitement antimousse permet de bloquer le développement des mousses, lichens et algues qui détériorent votre toiture, tout en améliorant son étanchéité et son aspect visuel.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos atouts : une expertise locale de plus de 15 ans à Blagnac, des techniciens certifiés, un diagnostic gratuit avant intervention, des produits respectueux de l&apos;environnement, et une garantie de résultat de 5 ans. Nous intervenons rapidement et proposons des solutions personnalisées adaptées à chaque type de toiture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état de votre toiture. Un tarif précis sera établi après un diagnostic gratuit sur site à Blagnac.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur période pour un traitement antimousse se situe entre avril et septembre, période où les conditions météorologiques permettent un séchage optimal et une pénétration efficace des produits de traitement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;un hydrofuge nécessite un nettoyage préalable, un séchage complet de la surface, puis un traitement par pulvérisation uniforme avec un produit adapté aux matériaux de votre toiture, en respectant les conditions météorologiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Blagnac ?
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
