import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Nantes | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure pour les maisons nantaises. Expert Altitude Com vous p',
  keywords: 'terrasse bois nantes, terrasse sur plot nantes, terrasse bois sur plot nantes, pose terrasse bois nantes, terrasse composite nantes, terrasse bois piscine nantes',
};

export default function TerrasseBoisNantesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Nantes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure pour les maisons nantaises. Expert Altitude Com vous propose des solutions durables et esthétiques qui sublimeront vos espaces extérieurs à Nantes et ses environs.</p>

        <h2>Nos services de terrasse bois sur plot a Nantes</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une véritable extension de votre habitat. Notre méthode garantit une installation précise, avec un nivellement parfait grâce à des plots réglables. Nous sélectionnons rigoureusement des matériaux haut de gamme, privilégiant des bois traités résistant aux intempéries océaniques de la région nantaise. Notre processus inclut une préparation méticuleuse du terrain, une pose technique respectant les normes et une finition impeccable qui valorisera durablement votre propriété.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Notre équipe dispose de plus de 15 ans d&apos;expérience en aménagements extérieurs. Nous proposons des devis transparents sans surprise, un délai d&apos;intervention rapide de 15 jours maximum et une garantie décennale. Nos réalisations sont systématiquement personnalisées et adaptées à chaque configuration.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un projet moyen de 20m² représente un investissement de 2000€ à 5000€, installation comprise. Nos devis détaillés incluent le bois, les plots, la main-d&apos;œuvre et les finitions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais comptez généralement 2 à 5 jours pour un projet résidentiel standard. Un chantier de 20m² est réalisable en moyenne en 3 jours par notre équipe de professionnels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour Nantes et sa région, nous recommandons le bois composite, l&apos;ipé ou le red cedar. Ces essences offrent une excellente résistance à l&apos;humidité, aux variations climatiques et garantissent une durabilité de 20 à 30 ans avec un entretien minimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Nantes ?
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
