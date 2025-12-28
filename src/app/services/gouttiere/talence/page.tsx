import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Talence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Talence et ses environs. Nous protégeons votre habitat ',
  keywords: 'gouttiere talence, pose gouttiere talence, reparation gouttiere talence, nettoyage gouttiere talence, descente pluviale talence, gouttiere bouchee talence',
};

export default function GouttiereTalencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Talence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Talence et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure adaptées à chaque configuration de toiture.</p>

        <h2>Nos services de gouttières et descentes pluviales a Talence</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation et maintenance. À Talence, nous intervenons avec une expertise technique précise, en utilisant uniquement des matériaux haut de gamme comme l&apos;aluminium et le zinc. Notre équipe réalise un diagnostic complet avant toute intervention, évaluant la structure, l&apos;inclinaison et les spécificités de votre toiture. Nous garantissons une pose parfaitement étanche, avec un système de fixation robuste qui résiste aux intempéries les plus difficiles. Notre objectif : protéger durablement votre habitat contre les risques d&apos;humidité et de dégradation structurelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans à Talence
• Techniciens certifiés et formés en permanence
• Devis gratuit et transparent sans engagement
• Matériaux garantis 10 ans
• Intervention rapide sous 48h
• Solutions personnalisées et adaptées à chaque configuration</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon le matériau choisi (PVC, zinc, aluminium). Pour une maison standard à Talence, comptez un budget total entre 500€ et 1500€. Nos devis détaillés incluent la main-d&apos;œuvre, les matériaux et la pose.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris. En cas de bouchon tenace, utilisez un produit désembouant spécifique. Si la méthode échoue, contactez un professionnel pour éviter tout dommage.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons 2 nettoyages par an : au printemps après la chute des feuilles et à l&apos;automne avant l&apos;hiver. Pour les zones boisées de Talence, un nettoyage supplémentaire peut être nécessaire. Un entretien régulier prévient les obstructions et préserve la durée de vie de vos gouttières.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Talence ?
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
