import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Cugnaux | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Cugnaux avec une terrasse bois sur plot, la solution élégante et durable pour sublimer votre jardin. Expert Altitude C',
  keywords: 'terrasse bois cugnaux, terrasse sur plot cugnaux, terrasse bois sur plot cugnaux, pose terrasse bois cugnaux, terrasse composite cugnaux, terrasse bois piscine cugnaux',
};

export default function TerrasseBoisCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Cugnaux avec une terrasse bois sur plot, la solution élégante et durable pour sublimer votre jardin. Expert Altitude Com vous propose une installation sur-mesure qui allie esthétique et performance.</p>

        <h2>Nos services de terrasse bois sur plot a Cugnaux</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est la création d&apos;un espace de vie supplémentaire. Notre équipe de professionnels à Cugnaux maîtrise parfaitement les techniques d&apos;installation qui garantissent une surface plane, stable et parfaitement nivelée. Nous travaillons principalement avec des matériaux haut de gamme comme les bois exotiques (ipé, teck) et les composites dernière génération, offrant une résistance exceptionnelle aux intempéries. Chaque projet est étudié individuellement pour s&apos;adapter à la topographie de votre terrain, avec une attention particulière portée à la préparation du sol et au choix des plots techniques qui assurent une parfaite stabilité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Chez Expert Altitude Com, nous nous distinguons par notre expertise technique et notre approche personnalisée. Nos 15 ans d&apos;expérience nous permettent de garantir une réalisation impeccable, avec un devis précis et transparent. Nous proposons une large gamme de finitions, un délai d&apos;intervention rapide de 2-3 semaines, et surtout une garantie décennale sur nos installations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le matériau choisi. Un composite haut de gamme sera plus onéreux qu&apos;un bois standard. Pour un projet moyen de 20m², comptez entre 1600€ et 5000€ installation comprise, avec des variations selon la complexité du terrain à Cugnaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la préparation du terrain. En moyenne, notre équipe réalise 10-15m² par jour. Un projet standard de 30m² sera donc achevé en 2-3 jours ouvrés, incluant la préparation du sol et la pose des plots techniques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Cugnaux, nous recommandons le bois composite ou l&apos;ipé. Le composite offre une durabilité de 25-30 ans avec un minimum d&apos;entretien, tandis que l&apos;ipé, plus traditionnel, peut durer jusqu&apos;à 50 ans s&apos;il est bien entretenu. Le choix dépendra de votre budget et de l&apos;exposition de votre terrain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Cugnaux ?
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
