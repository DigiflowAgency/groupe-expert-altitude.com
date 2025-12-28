import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Saint-Maur-des-Fossés | Groupe Expert Altitude Com',
  description: 'Protégez votre habitat avec Groupe Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales à Saint-Maur-des-Fossés. Nous sécurisons cha',
  keywords: 'gouttiere saint-maur-des-fossés, pose gouttiere saint-maur-des-fossés, reparation gouttiere saint-maur-des-fossés, nettoyage gouttiere saint-maur-des-fossés, descente pluviale saint-maur-des-fossés, gouttiere bouchee saint-maur-des-fossés',
};

export default function GouttiereSaintMaurDesFossesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Saint-Maur-des-Fossés</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Protégez votre habitat avec Groupe Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales à Saint-Maur-des-Fossés. Nous sécurisons chaque toiture contre les risques d&apos;infiltration et de dégradation, en proposant des solutions sur-mesure adaptées à l&apos;architecture de votre région.</p>

        <h2>Nos services de gouttières et descentes pluviales a Saint-Maur-des-Fossés</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble des systèmes d&apos;évacuation des eaux pluviales, en proposant une prestation complète allant du diagnostic à l&apos;installation. Nous utilisons uniquement des matériaux haute qualité comme l&apos;aluminium et le zinc, garantissant une durabilité minimale de 20 ans. Notre process comprend une étude technique précise, un devis détaillé et une installation professionnelle respectant les normes en vigueur. À Saint-Maur-des-Fossés, nous comprenons les spécificités climatiques locales qui nécessitent des équipements parfaitement adaptés.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans 2) Un diagnostic gratuit et personnalisé 3) Des techniciens certifiés et assurés 4) Des délais d&apos;intervention rapides, généralement sous 48h. Nous sommes votre partenaire fiable pour protéger durablement votre patrimoine immobilier.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ le mètre linéaire, selon le matériau choisi (PVC, zinc, aluminium) et la complexité de l&apos;installation. Pour une maison moyenne à Saint-Maur-des-Fossés, comptez entre 800€ et 2000€ pour une installation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un débourbeur haute pression, un câble de curage ou un aspirateur spécial. Commencez par retirer les feuilles et débris manuellement, puis utilisez un jet d&apos;eau sous pression. En cas de difficulté, faites appel à un professionnel pour éviter tout risque.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières au minimum deux fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Saint-Maur-des-Fossés, une intervention supplémentaire peut être nécessaire pour prévenir l&apos;accumulation de feuilles et de mousse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Saint-Maur-des-Fossés ?
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
