import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a La Ciotat | Groupe Expert Altitude Com',
  description: 'Sur La Ciotat et ses environs, le Groupe Expert Altitude Com est votre partenaire spécialiste en gouttières et descentes pluviales. Nous protégeons votre h',
  keywords: 'gouttiere la ciotat, pose gouttiere la ciotat, reparation gouttiere la ciotat, nettoyage gouttiere la ciotat, descente pluviale la ciotat, gouttiere bouchee la ciotat',
};

export default function GouttiereLaCiotatPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a La Ciotat</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Sur La Ciotat et ses environs, le Groupe Expert Altitude Com est votre partenaire spécialiste en gouttières et descentes pluviales. Nous protégeons votre habitat contre les risques d&apos;infiltration et garantissons une évacuation optimale des eaux de pluie grâce à notre expertise technique.</p>

        <h2>Nos services de gouttières et descentes pluviales a La Ciotat</h2>
        <div className="space-y-4">
          <p>Nos solutions complètes de gouttières couvrent l&apos;installation, la réparation et l&apos;entretien pour tous types de bâtiments à La Ciotat. Notre équipe qualifiée intervient avec du matériel haut de gamme, proposant des gouttières sur mesure en zinc, aluminium ou PVC, parfaitement adaptées à votre architecture. Nous réalisons un diagnostic précis avant chaque intervention, évaluant la configuration de votre toiture et les contraintes spécifiques de votre environnement. Notre processus inclut un relevé technique, une préconisation personnalisée et une mise en œuvre professionnelle garantissant une étanchéité et un écoulement parfaits.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans, 2) Un diagnostic gratuit avant intervention, 3) Des techniciens certifiés et assurés, 4) Des matériaux haute durabilité avec garantie décennale. Nous intervenons rapidement sur La Ciotat et ses alentours, en privilégiant des solutions techniques et économiques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon le matériau choisi. Pour une maison moyenne de 100m², comptez un investissement global entre 600€ et 1500€, installation et fourniture comprises. Nos devis sont toujours détaillés et transparents.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer les feuilles et débris manuellement, puis nettoyez l&apos;intérieur avec un outil adapté. En cas de difficulté, notre équipe à La Ciotat intervient rapidement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages par an : au printemps et à l&apos;automne. Pour les zones très boisées, un nettoyage trimestriel peut être nécessaire. Un entretien régulier permet de prévenir les obstructions et préserver l&apos;intégrité de votre système d&apos;évacuation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a La Ciotat ?
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
