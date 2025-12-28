import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Istres | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Istres et ses environs. Nous protégeons votre habitat c',
  keywords: 'gouttiere istres, pose gouttiere istres, reparation gouttiere istres, nettoyage gouttiere istres, descente pluviale istres, gouttiere bouchee istres',
};

export default function GouttiereIstresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Istres</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Istres et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration grâce à des solutions techniques précises et durables.</p>

        <h2>Nos services de gouttières et descentes pluviales a Istres</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires istréens : installation, réparation, nettoyage et maintenance. Nous utilisons uniquement des matériaux haute qualité comme l&apos;aluminium et le zinc, garantissant une durabilité de 20 à 30 ans. Notre équipe technique réalise un diagnostic précis avant chaque intervention, assurant une pose parfaitement adaptée à la configuration de votre toiture. Nous proposons des systèmes sur-mesure qui protègent efficacement votre habitation contre les eaux pluviales, en respectant les normes techniques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : une expertise locale de plus de 15 ans, un devis gratuit sous 48h, des techniciens certifiés, des matériaux garantis 10 ans, et une intervention rapide sur Istres et le département. Nous intervenons aussi bien sur les pavillons que sur les immeubles collectifs, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire selon le matériau choisi (PVC, zinc, aluminium). Pour une maison moyenne à Istres, comptez entre 600€ et 1500€ pour une installation complète, pose et fourniture comprises.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer manuellement les feuilles et débris, puis nettoyez en profondeur. En cas de problème complexe, faites appel à un professionnel pour éviter d&apos;endommager votre système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans des zones très boisées comme certains quartiers d&apos;Istres, une intervention supplémentaire peut être nécessaire pour éviter l&apos;accumulation de végétaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Istres ?
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
