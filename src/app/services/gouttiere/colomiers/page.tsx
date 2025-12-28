import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Colomiers | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Colomiers et ses environs. Expert',
  keywords: 'gouttiere colomiers, pose gouttiere colomiers, reparation gouttiere colomiers, nettoyage gouttiere colomiers, descente pluviale colomiers, gouttiere bouchee colomiers',
};

export default function GouttiereColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Colomiers et ses environs. Experts en protection contre l&apos;eau depuis plus de 15 ans, nous garantissons des solutions durables pour protéger efficacement votre habitat.</p>

        <h2>Nos services de gouttières et descentes pluviales a Colomiers</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Colomiers : installation, réparation, nettoyage et maintenance préventive. Nous utilisons uniquement des matériaux haute qualité comme l&apos;aluminium et le zinc, résistant aux conditions météorologiques locales. Notre équipe technique réalise un diagnostic précis avant chaque intervention, évaluant la structure, les fixations et les potentiels points faibles. Nous proposons des systèmes sur-mesure adaptés à chaque type de toiture, avec une pose garantissant une évacuation optimale des eaux pluviales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un service premium : techniciens certifiés, devis gratuit sous 48h, intervention rapide, matériel haut de gamme. Nous sommes reconnus pour notre expertise technique et notre engagement qualité. 95% de nos clients recommandent nos services après intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire selon le matériau et la complexité. Un pavillon standard de 100m² nécessite environ 20-25 mètres de gouttières, soit un budget global entre 500€ et 1125€ installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un dégorgeoir ou un jet haute pression, retirez manuellement les feuilles et débris, vérifiez la pente, nettoyez avec un produit adapté. En cas de difficulté, faites appel à un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières deux fois par an : au printemps et à l&apos;automne. Dans des zones très boisées comme certains quartiers de Colomiers, un nettoyage trimestriel peut être nécessaire pour éviter l&apos;obstruction et les dégradations potentielles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Colomiers ?
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
