import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Le Blanc-Mesnil | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Le Blanc-Mesnil et ses environs. Nous protégeons efficacement ',
  keywords: 'gouttiere le blanc-mesnil, pose gouttiere le blanc-mesnil, reparation gouttiere le blanc-mesnil, nettoyage gouttiere le blanc-mesnil, descente pluviale le blanc-mesnil, gouttiere bouchee le blanc-mesnil',
};

export default function GouttiereLeBlancMesnilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Le Blanc-Mesnil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Le Blanc-Mesnil et ses environs. Nous protégeons efficacement votre habitat contre les risques d&apos;infiltration et de dégradation grâce à des solutions techniques sur-mesure.</p>

        <h2>Nos services de gouttières et descentes pluviales a Le Blanc-Mesnil</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins : installation, réparation et maintenance. Sur Le Blanc-Mesnil, nous intervenons avec des matériaux haute qualité (zinc, aluminium, PVC) garantissant une durabilité minimale de 15 ans. Notre équipe technique réalise un diagnostic précis avant chaque intervention, mesurant chaque descente pluviale pour une adaptation parfaite à votre bâtiment. Nous proposons des systèmes de gouttières avec une pente optimale entre 1 et 3 cm par mètre linéaire, assurant un écoulement parfait et évitant toute stagnation d&apos;eau.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : techniciens certifiés, devis gratuit sous 48h, intervention rapide, matériel professionnel, garantie décennale. 98% de nos clients recommandent nos services après intervention. Nous intervenons sur tous types de bâtiments : pavillons, immeubles, locaux professionnels.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ le mètre linéaire selon les matériaux choisis. Un pavillon standard nécessite généralement 20 à 30 mètres linéaires, soit un budget total entre 500€ et 1350€ installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, un jet haute pression ou un aspirateur spécial. Portez des gants, retirez manuellement les débris végétaux, puis nettoyez avec un produit désinfectant. En cas de difficulté, contactez un professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons 2 nettoyages par an : au printemps après la fonte des neiges et à l&apos;automne après la chute des feuilles. Pour les zones boisées, un nettoyage supplémentaire peut être nécessaire tous les 4 mois.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Le Blanc-Mesnil ?
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
