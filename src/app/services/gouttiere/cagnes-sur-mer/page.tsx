import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Cagnes-sur-Mer. Avec plus de 15 ans d&apos;ex',
  keywords: 'gouttiere cagnes-sur-mer, pose gouttiere cagnes-sur-mer, reparation gouttiere cagnes-sur-mer, nettoyage gouttiere cagnes-sur-mer, descente pluviale cagnes-sur-mer, gouttiere bouchee cagnes-sur-mer',
};

export default function GouttiereCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Cagnes-sur-Mer. Avec plus de 15 ans d&apos;expérience, nous protégeons efficacement les habitations de la région contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins, depuis l&apos;installation jusqu&apos;à la maintenance préventive. Sur Cagnes-sur-Mer et ses environs, nous proposons une expertise technique complète pour garantir le parfait écoulement des eaux pluviales. Nos équipes interviennent avec du matériel haut de gamme, en aluminium ou zinc, adaptés aux spécificités climatiques de la Côte d&apos;Azur. Chaque installation est personnalisée, avec une attention méticuleuse aux détails techniques et esthétiques de votre propriété. Nous réalisons des pose et réparations qui durent dans le temps, protégeant efficacement votre habitat contre l&apos;humidité et les risques structurels.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre approche sur-mesure. Nous intervenons rapidement, avec un diagnostic précis et un devis transparent. Notre équipe certifiée maîtrise tous les systèmes de gouttières, garantissant une intervention professionnelle à chaque intervention. Nous proposons également un suivi personnalisé et des conseils d&apos;entretien adaptés.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 50€ le mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un devis gratuit vous permettra d&apos;obtenir un tarif précis adapté à votre configuration spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris, puis utilisez un produit désinfectant. En cas de difficulté, notre équipe peut intervenir rapidement à Cagnes-sur-Mer.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans les zones très boisées de Cagnes-sur-Mer, une intervention supplémentaire peut être nécessaire pour éviter les obstructions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Cagnes-sur-Mer ?
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
