import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Bondy | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue spécifiquement pour les propriétés de Bondy. Le Groupe Expert Alt',
  keywords: 'terrasse bois bondy, terrasse sur plot bondy, terrasse bois sur plot bondy, pose terrasse bois bondy, terrasse composite bondy, terrasse bois piscine bondy',
};

export default function TerrasseBoisBondyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Bondy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue spécifiquement pour les propriétés de Bondy. Le Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient élégance et durabilité pour valoriser votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Bondy</h2>
        <div className="space-y-4">
          <p>Nos terrasses bois sur plot représentent la solution idéale pour les habitants de Bondy qui recherchent un aménagement extérieur haut de gamme. Notre expertise technique nous permet de créer des espaces modulables et résistants, parfaitement adaptés aux contraintes architecturales locales. Chaque projet commence par un diagnostic précis du terrain, permettant une pose optimale avec des plots réglables qui garantissent une parfaite horizontalité. Nous travaillons uniquement avec des matériaux sélectionnés : bois composite, bois exotique ou essence locale, offrant une durée de vie supérieure à 20 ans et une résistance aux intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience à Bondy
- Devis personnalisé et gratuit sous 48h
- Équipe de 6 poseurs certifiés
- Matériaux garantis 10 ans
- Respect des normes environnementales et techniques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Pour une surface moyenne de 20m², comptez un investissement global entre 1600€ et 5000€. Notre tarification inclut la pose, les matériaux et le diagnostic préalable.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot nécessite généralement 2 à 5 jours ouvrables, en fonction de la surface et de la complexité du terrain. Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons trois types de bois : le bois composite (idéal pour la durabilité), l&apos;IPE brésilien (très résistant) et le mélèze français (option écologique). Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu de votre terrasse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Bondy ?
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
