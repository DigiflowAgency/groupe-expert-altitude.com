import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Ivry-sur-Seine et ses environs. S',
  keywords: 'gouttiere ivry-sur-seine, pose gouttiere ivry-sur-seine, reparation gouttiere ivry-sur-seine, nettoyage gouttiere ivry-sur-seine, descente pluviale ivry-sur-seine, gouttiere bouchee ivry-sur-seine',
};

export default function GouttiereIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Ivry-sur-Seine et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons efficacement votre habitat contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins : pose, réparation, nettoyage et entretien. Nous intervenons sur tous types de bâtiments, des pavillons aux immeubles collectifs d&apos;Ivry-sur-Seine, en utilisant des matériaux de haute qualité comme l&apos;aluminium, le zinc et le PVC. Notre équipe technique réalise un diagnostic précis avant chaque intervention, garantissant une solution sur-mesure adaptée à votre architecture. Nous respectons les normes techniques et esthétiques, assurant une protection durable contre les eaux pluviales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Ivry-sur-Seine
- Techniciens certifiés et formés en permanence
- Devis gratuit et transparent sans engagement
- Interventions rapides sous 48h
- Matériaux garantis 10 ans
- Respect des réglementations techniques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une gouttière varie entre 20€ et 50€ au mètre linéaire selon le matériau et la complexité de l&apos;installation. Un pavillon standard nécessite généralement entre 10 et 15 mètres linéaires, soit un budget total de 300€ à 750€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris, puis utilisez un produit débouchant adapté. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières deux fois par an : au printemps après la chute des bourgeons et à l&apos;automne après la chute des feuilles. Pour les zones très boisées, nous conseillons un nettoyage trimestriel pour prévenir les obstructions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Ivry-sur-Seine ?
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
