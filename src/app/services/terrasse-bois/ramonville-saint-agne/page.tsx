import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Ramonville-Saint-Agne | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par le Groupe Expert Altitude Com à Ramonville-',
  keywords: 'terrasse bois ramonville-saint-agne, terrasse sur plot ramonville-saint-agne, terrasse bois sur plot ramonville-saint-agne, pose terrasse bois ramonville-saint-agne, terrasse composite ramonville-saint-agne, terrasse bois piscine ramonville-saint-agne',
};

export default function TerrasseBoisRamonvilleSaintAgnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Ramonville-Saint-Agne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par le Groupe Expert Altitude Com à Ramonville-Saint-Agne. Nos solutions innovantes allient esthétique, durabilité et praticité pour sublimer vos extérieurs.</p>

        <h2>Nos services de terrasse bois sur plot a Ramonville-Saint-Agne</h2>
        <div className="space-y-4">
          <p>Nos terrasses bois sur plot représentent la solution idéale pour créer un espace de vie extérieur élégant et fonctionnel. Nous proposons une installation professionnelle qui s&apos;adapte parfaitement à la topographie de votre terrain à Ramonville-Saint-Agne. Notre processus démarre par un diagnostic précis de votre espace, suivi d&apos;un choix de matériaux haut de gamme : bois exotiques, composites résistants ou bois locaux traités. Chaque plot est soigneusement ajusté pour garantir une surface plane, stable et parfaitement nivelée, offrant une résistance optimale aux variations climatiques et une durabilité exceptionnelle de 20 à 30 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens possèdent plus de 15 ans d&apos;expérience en aménagement extérieur. Nous garantissons un devis transparent sans surprise, une intervention rapide sous 10 jours et une qualité de pose certifiée. Notre engagement qualité se traduit par des matériaux sélectionnés, un SAV performant et des solutions 100% personnalisées.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ le m², selon les matériaux choisis. Un projet moyen de 20m² représente un investissement de 1600€ à 5000€. Nos devis détaillés incluent pose, matériaux et finitions sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais comptez en moyenne 2 à 5 jours pour un projet de 20-30m². Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite pour sa durabilité, l&apos;ipé pour son exotisme, ou le mélèze traité pour un budget maitrisé. Chaque essence présente des avantages : résistance, entretien, esthétique. Notre conseil personnalisé vous aidera à faire le bon choix.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Ramonville-Saint-Agne ?
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
