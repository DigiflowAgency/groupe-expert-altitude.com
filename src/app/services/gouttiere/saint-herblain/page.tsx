import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Saint-Herblain. Nous protégeons v',
  keywords: 'gouttiere saint-herblain, pose gouttiere saint-herblain, reparation gouttiere saint-herblain, nettoyage gouttiere saint-herblain, descente pluviale saint-herblain, gouttiere bouchee saint-herblain',
};

export default function GouttiereSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Saint-Herblain. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions professionnelles et durables adaptées à l&apos;environnement local.</p>

        <h2>Nos services de gouttières et descentes pluviales a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble des travaux de pose, réparation et maintenance. Nous utilisons uniquement des matériaux de haute qualité (zinc, aluminium, PVC) garantissant une durabilité de 20 à 30 ans. Notre processus complet comprend un diagnostic technique précis, la recommandation du système le plus adapté à votre habitation et une installation minutieuse. Sur Saint-Herblain, nous connaissons parfaitement les spécificités climatiques qui impactent vos installations pluviales, ce qui nous permet de proposer des solutions sur-mesure. Nos techniciens sont formés aux dernières normes techniques et environnementales, assurant une prestation complète et professionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Saint-Herblain
- Devis gratuit et personnalisé sous 48h
- Équipe de 12 techniciens certifiés
- Matériaux garantis 10 ans
- Intervention rapide et sur-mesure</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ par mètre linéaire selon le matériau choisi. Pour une maison standard de 100m², comptez un budget global entre 900€ et 2500€. Nos devis détaillés incluent la main-d&apos;œuvre, les matériaux et le transport.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer les feuilles et débris manuellement, puis nettoyez avec un produit adapté. En cas de difficulté, notre équipe peut intervenir rapidement à Saint-Herblain.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage minimum 2 fois par an, idéalement au printemps et à l&apos;automne. Dans les zones boisées de Saint-Herblain, une intervention trimestrielle peut être nécessaire pour éviter l&apos;accumulation de feuilles et de mousse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Saint-Herblain ?
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
