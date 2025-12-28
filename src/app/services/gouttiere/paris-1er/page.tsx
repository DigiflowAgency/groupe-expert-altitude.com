import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Paris 1er | Groupe Expert Altitude Com',
  description: 'Spécialiste des gouttières et descentes pluviales à Paris 1er depuis plus de 15 ans, le Groupe Expert Altitude Com protège votre habitat contre les risques',
  keywords: 'gouttiere paris 1er, pose gouttiere paris 1er, reparation gouttiere paris 1er, nettoyage gouttiere paris 1er, descente pluviale paris 1er, gouttiere bouchee paris 1er',
};

export default function GouttiereParis1erPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Paris 1er</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste des gouttières et descentes pluviales à Paris 1er depuis plus de 15 ans, le Groupe Expert Altitude Com protège votre habitat contre les risques d&apos;infiltration. Notre expertise technique garantit une installation et un entretien irréprochables de vos systèmes d&apos;évacuation des eaux.</p>

        <h2>Nos services de gouttières et descentes pluviales a Paris 1er</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires parisiens, depuis l&apos;installation jusqu&apos;à la maintenance préventive. Nous intervenons sur tous types de bâtiments, des immeubles historiques du 1er arrondissement aux constructions contemporaines, en utilisant des matériaux haute qualité comme l&apos;aluminium, le zinc et le PVC. Notre équipe de professionnels réalise un diagnostic précis avant chaque intervention, assurant une pose parfaitement adaptée à la configuration de votre toiture. Nous proposons également des solutions sur-mesure pour maximiser l&apos;écoulement des eaux pluviales et prévenir les risques d&apos;infiltration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour la qualité et la fiabilité. Nos techniciens sont certifiés et possèdent une expérience de plus de 15 ans. Nous garantissons un devis transparent sans frais cachés, un délai d&apos;intervention rapide de 48h maximum et une garantie décennale sur nos installations. Notre engagement qualité fait de nous le partenaire idéal pour l&apos;entretien de vos gouttières à Paris.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 50€ et 120€ le mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Pour un pavillon parisien moyen, comptez environ 800€ à 1500€ pour une installation complète, matériel et main-d&apos;œuvre compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet à haute pression. Commencez par retirer manuellement les feuilles et débris, puis utilisez un produit débouchant adapté. En cas de difficulté, faites appel à un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières au minimum deux fois par an : au printemps après la chute des bourgeons et à l&apos;automne après la chute des feuilles. Dans le centre de Paris, où la végétation est dense, nous conseillons trois nettoyages annuels pour garantir un parfait écoulement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Paris 1er ?
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
