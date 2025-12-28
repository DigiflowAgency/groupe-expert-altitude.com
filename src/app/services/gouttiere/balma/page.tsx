import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Balma | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Balma et ses environs. Nous protégeons votre habitat co',
  keywords: 'gouttiere balma, pose gouttiere balma, reparation gouttiere balma, nettoyage gouttiere balma, descente pluviale balma, gouttiere bouchee balma',
};

export default function GouttiereBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Balma et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration grâce à des solutions techniques précises et durables.</p>

        <h2>Nos services de gouttières et descentes pluviales a Balma</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble des problématiques liées à l&apos;évacuation des eaux pluviales. Nous proposons une gamme complète incluant l&apos;installation, la réparation et le nettoyage de systèmes de gouttières adaptés à chaque type de bâtiment. Notre approche technique garantit une protection optimale contre les risques d&apos;humidité et de dégradation structurelle. Sur Balma, nous utilisons uniquement des matériaux haute qualité comme l&apos;aluminium et le zinc, résistants aux conditions météorologiques locales et offrant une durabilité de plus de 20 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : un diagnostic précis et gratuit, des techniciens certifiés, un devis détaillé sous 48h, des interventions rapides sur Balma, et une garantie de satisfaction de 3 ans sur tous nos travaux. Nous sommes votre solution professionnelle en gouttières.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ du mètre linéaire selon le matériau et la complexité d&apos;installation. Un pavillon standard de 100m² nécessite généralement 20-25 mètres linéaires, soit un investissement total entre 500€ et 1125€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet haute pression. Commencez par retirer manuellement les feuilles et débris, puis utilisez un tuyau avec un jet puissant en partant du point le plus haut. En cas de blocage persistant, contactez un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps après la fonte des neiges et à l&apos;automne après la chute des feuilles. Pour les zones boisées de Balma, une intervention supplémentaire peut être nécessaire, idéalement en novembre et février.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Balma ?
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
