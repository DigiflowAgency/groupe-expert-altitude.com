import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Lyon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en gouttières et descentes pluviales à Lyon. Spécialistes depuis 15 ans, nous protégeons votre',
  keywords: 'gouttiere lyon, pose gouttiere lyon, reparation gouttiere lyon, nettoyage gouttiere lyon, descente pluviale lyon, gouttiere bouchee lyon',
};

export default function GouttiereLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en gouttières et descentes pluviales à Lyon. Spécialistes depuis 15 ans, nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure adaptées à l&apos;architecture lyonnaise.</p>

        <h2>Nos services de gouttières et descentes pluviales a Lyon</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation, nettoyage et maintenance. Nous intervenons sur tous types de bâtiments, des maisons individuelles aux immeubles collectifs, en utilisant des matériaux haut de gamme garantissant une durabilité maximale. Notre équipe technique analyse précisément la configuration de votre toiture pour proposer une solution parfaitement intégrée, avec une attention particulière aux contraintes architecturales lyonnaises. Chaque intervention est réalisée avec un équipement professionnel permettant une pose et un ajustement précis, minimisant les risques d&apos;infiltration et assurant une évacuation optimale des eaux pluviales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Lyon
- Techniciens certifiés et formés en continu
- Devis gratuit et transparent sous 48h
- Matériaux de qualité avec garantie décennale
- Intervention rapide et sur-mesure
- References et avis clients vérifiables</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon le matériau (PVC, zinc, aluminium) et la complexité de l&apos;installation. Pour une maison standard à Lyon, comptez environ 500-1200€ pour une installation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, nettoyez avec un jet d&apos;eau à haute pression, retirez manuellement les débris. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières 2 fois par an : au printemps et à l&apos;automne. Dans la région lyonnaise, avec la présence de nombreux arbres, une vérification supplémentaire peut être nécessaire, notamment après des périodes de fortes chutes de feuilles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Lyon ?
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
