import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Le Cannet | Groupe Expert Altitude Com',
  description: 'Votre habitat mérite la meilleure protection contre les intempéries, et c&apos;est précisément ce que Groupe Expert Altitude Com propose aux habitants du Cannet',
  keywords: 'gouttiere le cannet, pose gouttiere le cannet, reparation gouttiere le cannet, nettoyage gouttiere le cannet, descente pluviale le cannet, gouttiere bouchee le cannet',
};

export default function GouttiereLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre habitat mérite la meilleure protection contre les intempéries, et c&apos;est précisément ce que Groupe Expert Altitude Com propose aux habitants du Cannet. Spécialistes des gouttières et descentes pluviales, nous garantissons une installation et un entretien irréprochables pour préserver votre propriété.</p>

        <h2>Nos services de gouttières et descentes pluviales a Le Cannet</h2>
        <div className="space-y-4">
          <p>Nos solutions complètes de gouttières couvrent tous vos besoins sur Le Cannet et ses environs. Nous intervenons pour l&apos;installation, la réparation et le nettoyage de systèmes de récupération des eaux pluviales, en utilisant des matériaux de haute qualité comme l&apos;aluminium et le zinc. Notre processus démarre par un diagnostic précis de votre toiture, permettant de déterminer le système le plus adapté. Nos techniciens qualifiés posent chaque gouttière avec une précision millimétrique, assurant une évacuation optimale et évitant les risques d&apos;infiltration. Plus de 95% de nos clients témoignent d&apos;une amélioration significative de la protection de leur habitat après notre intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous démarquons par notre expertise technique, notre réactivité et notre engagement local. Nos équipes sont formées annuellement aux dernières techniques d&apos;installation, nous disposons de certifications professionnelles, et nous proposons un devis gratuit sous 48h. Notre connaissance spécifique du climat méditerranéen nous permet d&apos;adapter chaque solution aux contraintes locales du Cannet.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire, selon le matériau choisi (PVC, zinc, aluminium). Pour une maison moyenne de 100m², comptez un investissement global entre 800€ et 1500€, installation comprise. Nos devis détaillés n&apos;incluent aucun frais caché.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un débourbeur manuel ou un jet haute pression. Commencez par retirer les feuilles et débris manuellement, puis utilisez un tuyau d&apos;arrosage pour rincer. En cas de bouchon tenace, un furet métallique peut aider à déloger les obstructions. En cas de difficulté, contactez un professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages par an : un au printemps après la période des feuilles mortes, et un à l&apos;automne avant l&apos;arrivée des pluies. Pour les zones très boisées du Cannet, un nettoyage trimestriel peut être nécessaire pour éviter l&apos;accumulation de débris.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Le Cannet ?
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
