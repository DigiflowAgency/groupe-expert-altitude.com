import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Bron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales sur Bron et ses environs. Spécialis',
  keywords: 'gouttiere bron, pose gouttiere bron, reparation gouttiere bron, nettoyage gouttiere bron, descente pluviale bron, gouttiere bouchee bron',
};

export default function GouttiereBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales sur Bron et ses environs. Spécialistes de la protection de votre habitat, nous intervenons rapidement pour garantir l&apos;intégrité de votre toiture et prévenir les risques d&apos;infiltration.</p>

        <h2>Nos services de gouttières et descentes pluviales a Bron</h2>
        <div className="space-y-4">
          <p>Nos solutions complètes de gouttières couvrent l&apos;installation, la réparation et l&apos;entretien avec une expertise technique inégalée. Nous proposons des systèmes sur-mesure adaptés à chaque configuration architecturale, en utilisant des matériaux haute résistance comme l&apos;aluminium et le zinc. Notre processus d&apos;intervention commence par un diagnostic précis, permettant d&apos;identifier les points faibles et de proposer une solution personnalisée. Plus de 90% de nos clients bénéficient d&apos;une amélioration significative de la gestion des eaux pluviales après notre intervention, limitant les risques d&apos;humidité et de dégradation structurelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour la qualité et la fiabilité. Nos techniciens sont certifiés et formés aux dernières normes techniques. Nous garantissons un délai d&apos;intervention de 48h maximum sur Bron. Notre devis est gratuit et sans engagement. Nous proposons également une garantie de 5 ans sur tous nos travaux de pose et de réparation de gouttières.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 50€ au mètre linéaire selon le matériau choisi (PVC, zinc, aluminium). Pour une maison moyenne de 100m², comptez un budget global entre 800€ et 1500€ installation comprise. Nous réalisons un devis personnalisé après un diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, commencez par retirer manuellement les feuilles et débris. Utilisez un jet d&apos;eau à haute pression ou un furet de plombier pour éliminer les obstructions. En cas de difficulté, notre équipe propose un service de débouchage professionnel avec caméra d&apos;inspection.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières au minimum deux fois par an : au printemps et à l&apos;automne. Dans les zones très arborées de Bron, nous conseillons un nettoyage trimestriel pour prévenir les obstructions et maintenir un écoulement optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Bron ?
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
