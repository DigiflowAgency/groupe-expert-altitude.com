import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot élégante et durable à Décines-Charpieu. Notre expertise du Groupe Expert Altitude Com vous gara',
  keywords: 'terrasse bois décines-charpieu, terrasse sur plot décines-charpieu, terrasse bois sur plot décines-charpieu, pose terrasse bois décines-charpieu, terrasse composite décines-charpieu, terrasse bois piscine décines-charpieu',
};

export default function TerrasseBoisDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot élégante et durable à Décines-Charpieu. Notre expertise du Groupe Expert Altitude Com vous garantit une réalisation sur-mesure qui valorisera immédiatement votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>La pose d&apos;une terrasse bois sur plot représente bien plus qu&apos;un simple aménagement extérieur : c&apos;est un investissement dans le confort et l&apos;esthétique de votre habitat. Notre méthode exclusive permet de créer un espace parfaitement nivelé, même sur des surfaces légèrement inclinées, grâce à des plots réglables haute précision. Nous sélectionnons rigoureusement des bois nobles comme l&apos;ipé ou le châtaignier, reconnus pour leur résistance aux intempéries et leur durabilité exceptionnelle. À Décines-Charpieu, nos réalisations sont pensées pour s&apos;intégrer harmonieusement à votre environnement, en respectant les caractéristiques architecturales locales. Chaque projet bénéficie d&apos;un diagnostic technique préalable garantissant une installation parfaite.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans dans l&apos;aménagement extérieur
• Matériaux certifiés et garantis 10 ans
• Équipe de professionnels qualifiés et passionnés
• Devis personnalisé et gratuit sous 48h
• Solutions techniques innovantes adaptées à chaque configuration</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour un projet moyen de 20m², comptez un budget global entre 1600€ et 5000€. Nos tarifs incluent fourniture, pose et finition, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité, mais en moyenne, notre équipe réalise un chantier de 20m² entre 2 et 4 jours ouvrables. Un planning précis vous sera communiqué dès le premier rendez-vous.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très résistant), l&apos;ipé (naturellement imputrescible), ou le châtaignier (excellent rapport qualité-prix). Le choix dépendra de votre budget, de l&apos;exposition et de l&apos;usage prévu.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Décines-Charpieu ?
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
