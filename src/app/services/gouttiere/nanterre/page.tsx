import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Nanterre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour l&apos;installation et l&apos;entretien de gouttières et descentes pluviales à Nanterre. Nos expert',
  keywords: 'gouttiere nanterre, pose gouttiere nanterre, reparation gouttiere nanterre, nettoyage gouttiere nanterre, descente pluviale nanterre, gouttiere bouchee nanterre',
};

export default function GouttiereNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour l&apos;installation et l&apos;entretien de gouttières et descentes pluviales à Nanterre. Nos experts interviennent rapidement pour protéger votre habitat contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a Nanterre</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;ensemble des besoins des propriétaires de Nanterre et ses environs. Nous proposons une installation sur-mesure, en utilisant des matériaux de haute qualité comme l&apos;aluminium, le PVC ou le zinc, garantissant une durabilité optimale. Notre processus comprend un diagnostic précis, des recommandations personnalisées et une pose professionnelle qui respecte les normes techniques actuelles. Chaque intervention est réalisée avec un souci constant de précision, en minimisant les potentiels points faibles et en assurant une évacuation parfaite des eaux pluviales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans 2) Un devis gratuit et détaillé 3) Des techniciens certifiés et assurés 4) Un service après-vente garanti. Nous intervenons sur tous types de bâtiments, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un diagnostic précis nous permet de vous proposer un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer manuellement les feuilles/débris, puis nettoyez en profondeur. En cas de difficulté, notre équipe peut intervenir rapidement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans les zones très boisées de Nanterre, nous conseillons un nettoyage trimestriel pour éviter tout encombrement et dysfonctionnement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Nanterre ?
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
