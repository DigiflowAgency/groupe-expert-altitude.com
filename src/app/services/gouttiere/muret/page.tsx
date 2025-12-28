import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Muret | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Muret et ses environs. Spécialist',
  keywords: 'gouttiere muret, pose gouttiere muret, reparation gouttiere muret, nettoyage gouttiere muret, descente pluviale muret, gouttiere bouchee muret',
};

export default function GouttiereMuretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Muret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Muret et ses environs. Spécialistes de la protection de votre habitat, nous garantissons des solutions durables et sur mesure pour protéger efficacement votre toiture contre les intempéries.</p>

        <h2>Nos services de gouttières et descentes pluviales a Muret</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des habitants de Muret : installation, réparation, nettoyage et maintenance. Nous utilisons uniquement des matériaux haute qualité comme l&apos;aluminium et le zinc, résistants à la corrosion et adaptés au climat local. Notre équipe technique réalise un diagnostic précis avant chaque intervention, mesurant avec précision les pentes et dimensions nécessaires pour un écoulement optimal des eaux pluviales. Chaque installation est personnalisée, tenant compte de l&apos;architecture spécifique de votre habitation et des contraintes environnementales de la région toulousaine.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience. Nous proposons un devis gratuit sous 48h, une intervention rapide et un délai de garantie de 10 ans sur nos installations. Notre engagement qualité et notre connaissance approfondie du terrain muretain nous distinguent des autres prestataires.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire selon le matériau choisi. Pour une maison standard de 100m², comptez un budget global entre 800€ et 1500€, installation et main-d&apos;œuvre comprises. Un devis personnalisé permettra d&apos;affiner précisément le tarif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer manuellement les feuilles et débris, puis nettoyez avec un produit adapté. En cas de difficultés, notre équipe à Muret intervient rapidement pour un débouchage professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Muret, une intervention supplémentaire peut être nécessaire, idéalement en novembre et février pour éviter l&apos;accumulation de feuilles et prévenir les obstructions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Muret ?
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
