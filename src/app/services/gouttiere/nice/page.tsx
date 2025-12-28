import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Nice | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Nice et ses environs. Spéciali',
  keywords: 'gouttiere nice, pose gouttiere nice, reparation gouttiere nice, nettoyage gouttiere nice, descente pluviale nice, gouttiere bouchee nice',
};

export default function GouttiereNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Nice et ses environs. Spécialistes de la protection de votre habitat contre les intempéries, nous intervenons avec précision et expertise sur l&apos;ensemble du département des Alpes-Maritimes.</p>

        <h2>Nos services de gouttières et descentes pluviales a Nice</h2>
        <div className="space-y-4">
          <p>Nos solutions complètes de gouttières couvrent l&apos;installation, la réparation et l&apos;entretien, garantissant une protection optimale de votre propriété. Notre équipe qualifiée utilise uniquement des matériaux haut de gamme - aluminium, zinc et PVC - adaptés au climat méditerranéen niçois. Chaque intervention commence par un diagnostic technique précis, permettant de déterminer la solution la plus efficace et durable. Nous proposons des systèmes sur-mesure, parfaitement intégrés à l&apos;architecture de votre bâtiment, qui assurent une évacuation rapide et efficace des eaux pluviales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un service professionnel et fiable. Nos techniciens sont certifiés et possèdent plus de 15 ans d&apos;expérience. Nous garantissons des délais d&apos;intervention rapides, généralement sous 48h. Notre devis est toujours gratuit et sans engagement. Nous proposons également une garantie de 5 ans sur nos installations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire selon le matériau choisi, la complexité de l&apos;installation et l&apos;accessibilité. Un pavillon standard à Nice nécessite généralement entre 15 et 25 mètres linéaires, pour un budget total oscillant entre 450€ et 2000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Commencez par retirer manuellement les feuilles et débris visibles. Utilisez un produit débouchant spécifique si le problème persiste. En cas de difficulté, notre équipe à Nice reste à votre disposition pour une intervention professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps après la chute des fleurs et à l&apos;automne après la chute des feuilles. Dans la région niçoise, avec un climat relativement doux, un nettoyage annuel peut suffire pour les propriétés peu exposées aux arbres.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Nice ?
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
