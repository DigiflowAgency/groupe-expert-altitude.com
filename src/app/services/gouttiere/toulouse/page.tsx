import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Toulouse | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Toulouse et ses environs. Spéc',
  keywords: 'gouttiere toulouse, pose gouttiere toulouse, reparation gouttiere toulouse, nettoyage gouttiere toulouse, descente pluviale toulouse, gouttiere bouchee toulouse',
};

export default function GouttiereToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Toulouse et ses environs. Spécialistes des systèmes de collecte des eaux pluviales, nous protégeons votre habitat contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a Toulouse</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble de la métropole toulousaine pour garantir la parfaite évacuation des eaux de pluie. Nous proposons une gamme complète de services : installation, réparation, nettoyage et diagnostic de vos systèmes de descente pluviale. Chaque intervention est précédée d&apos;un état des lieux technique permettant de définir les solutions les plus adaptées à votre habitat. Notre équipe utilise uniquement des matériaux de haute qualité - zinc, aluminium, PVC - garantissant une durabilité maximale et une esthétique impeccable. Nous adaptons nos solutions à toutes les architectures, des maisons traditionnelles aux constructions contemporaines.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique : notre équipe certifiée intervient sous 48h, nos devis sont gratuits et détaillés, nous proposons une garantie de 5 ans sur nos installations. Plus de 500 clients satisfaits à Toulouse nous font confiance chaque année pour leurs systèmes de gouttières.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ du mètre linéaire selon le matériau choisi. Un pavillon standard de 100m² nécessite environ 20-25 mètres de gouttières, pour un budget total entre 500€ et 1125€ installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un furet, retirez manuellement les débris végétaux, et rincez à l&apos;eau sous pression. En cas de blocage persistant, contactez un professionnel pour éviter d&apos;endommager le système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps après la fonte des feuilles et à l&apos;automne avant l&apos;arrivée des fortes pluies. Dans les zones très boisées de Toulouse, une intervention supplémentaire peut être nécessaire.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Toulouse ?
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
