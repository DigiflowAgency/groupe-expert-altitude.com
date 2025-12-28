import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Lormont | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de gouttières et descentes pluviales à Lormont et ses environs. Avec plu',
  keywords: 'gouttiere lormont, pose gouttiere lormont, reparation gouttiere lormont, nettoyage gouttiere lormont, descente pluviale lormont, gouttiere bouchee lormont',
};

export default function GouttiereLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de gouttières et descentes pluviales à Lormont et ses environs. Avec plus de 15 ans d&apos;expertise, nous protégeons efficacement votre habitat contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a Lormont</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Lormont : installation, réparation, nettoyage et maintenance. Nous utilisons uniquement des matériaux de haute qualité comme l&apos;aluminium et le zinc, garantissant une durabilité de plus de 20 ans. Notre équipe technique procède systématiquement à un diagnostic précis avant toute intervention, évaluant l&apos;état de vos descentes pluviales et proposant des solutions sur-mesure. Chaque projet fait l&apos;objet d&apos;un devis détaillé et transparent, sans frais cachés.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : une expertise locale reconnue, un délai d&apos;intervention rapide (48h maximum), des techniciens certifiés, un matériel professionnel dernier cri. Nous sommes également engagés dans une démarche éco-responsable, en privilégiant des solutions durables et économes en énergie. Notre taux de satisfaction client dépasse les 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire selon le matériau choisi. Pour une maison moyenne à Lormont, comptez entre 500€ et 1500€ pour une installation complète. Nos devis sont gratuits et détaillés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un dégorgeoir, nettoyez manuellement avec des gants, utilisez un jet à haute pression. En cas de difficulté, faites appel à un professionnel pour éviter tout risque de détérioration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Lormont, une intervention supplémentaire peut être nécessaire pour éviter l&apos;accumulation de feuilles et de débris.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Lormont ?
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
