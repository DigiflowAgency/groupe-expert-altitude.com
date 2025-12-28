import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Créteil | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Créteil et ses environs. Nous ',
  keywords: 'gouttiere créteil, pose gouttiere créteil, reparation gouttiere créteil, nettoyage gouttiere créteil, descente pluviale créteil, gouttiere bouchee créteil',
};

export default function GouttiereCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Créteil et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure adaptées à chaque type de toiture dans le Val-de-Marne.</p>

        <h2>Nos services de gouttières et descentes pluviales a Créteil</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins : installation, réparation, nettoyage et maintenance préventive. Nos techniciens hautement qualifiés utilisent des matériaux de première qualité - aluminium, zinc, PVC - garantissant une durabilité maximale. À Créteil, nous comprenons les spécificités climatiques locales et proposons des solutions personnalisées qui protègent efficacement votre patrimoine contre l&apos;humidité et les infiltrations. Notre approche technique précise permet une évacuation optimale des eaux pluviales, préservant la structure de votre bâtiment et évitant les dégradations coûteuses.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Créteil
- Équipe de 6 techniciens certifiés
- Devis gratuit et diagnostic technique complet
- Intervention rapide sous 48h
- Matériaux garantis 10 ans
- Respect des normes environnementales et techniques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 50€ du mètre linéaire selon le matériau choisi et la complexité de l&apos;installation. Un pavillon standard de 100m² nécessite environ 15-20 mètres linéaires, pour un budget global entre 375€ et 1000€ installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, un jet haute pression ou un aspirateur spécial. Portez des gants, retirez les feuilles/débris manuellement, nettoyez avec un produit dégraissant. En cas de difficulté, faites appel à un professionnel pour éviter tout risque.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons 2 nettoyages par an : au printemps après la période des bourgeons et à l&apos;automne après la chute des feuilles. Pour les zones très boisées à Créteil, un nettoyage supplémentaire peut être nécessaire, idéalement en novembre et février.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Créteil ?
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
