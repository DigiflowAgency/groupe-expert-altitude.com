import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Boulogne-Billancourt | Groupe Expert Altitude Com',
  description: 'Experts en gouttières et descentes pluviales, le Groupe Expert Altitude Com protège votre habitat à Boulogne-Billancourt depuis plus de 15 ans. Nous interv',
  keywords: 'gouttiere boulogne-billancourt, pose gouttiere boulogne-billancourt, reparation gouttiere boulogne-billancourt, nettoyage gouttiere boulogne-billancourt, descente pluviale boulogne-billancourt, gouttiere bouchee boulogne-billancourt',
};

export default function GouttiereBoulogneBillancourtPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Boulogne-Billancourt</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Experts en gouttières et descentes pluviales, le Groupe Expert Altitude Com protège votre habitat à Boulogne-Billancourt depuis plus de 15 ans. Nous intervenons rapidement pour sécuriser et optimiser le système d&apos;évacuation des eaux de pluie de votre propriété.</p>

        <h2>Nos services de gouttières et descentes pluviales a Boulogne-Billancourt</h2>
        <div className="space-y-4">
          <p>Nos solutions complètes de gouttières couvrent l&apos;installation, la réparation et l&apos;entretien sur l&apos;ensemble de Boulogne-Billancourt et ses environs. Notre équipe qualifiée utilise uniquement des matériaux haut de gamme - zinc, aluminium, PVC - garantissant une durabilité maximale. Chaque intervention commence par un diagnostic précis de votre système pluvial, permettant une recommandation technique personnalisée. Nous proposons des gouttières sur mesure, parfaitement adaptées à l&apos;architecture de votre bâtiment, avec une pose professionnelle qui assure une évacuation optimale des eaux de pluie. Notre process inclut également un contrôle complet de l&apos;étanchéité et de la solidité de l&apos;installation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : Une expertise locale de plus de 15 ans, des techniciens certifiés, un devis gratuit sous 48h, des matériaux garantis 10 ans, et une intervention rapide sur Boulogne-Billancourt. 95% de nos clients nous recommandent grâce à notre professionnalisme et notre qualité de service.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ le mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Pour un pavillon standard à Boulogne-Billancourt, comptez entre 800€ et 1500€ pour une installation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, nettoyez avec un jet haute pression, retirez manuellement les débris. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager votre système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage des gouttières est recommandé 2 fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Boulogne-Billancourt, nous conseillons un nettoyage trimestriel pour prévenir l&apos;obstruction et les dégradations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Boulogne-Billancourt ?
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
