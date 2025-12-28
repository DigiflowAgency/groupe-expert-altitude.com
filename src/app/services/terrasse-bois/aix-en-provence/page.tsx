import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur-mesure pour les propriétés d&apos;Aix-en-Provence. Le Groupe Exper',
  keywords: 'terrasse bois aix-en-provence, terrasse sur plot aix-en-provence, terrasse bois sur plot aix-en-provence, pose terrasse bois aix-en-provence, terrasse composite aix-en-provence, terrasse bois piscine aix-en-provence',
};

export default function TerrasseBoisAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur-mesure pour les propriétés d&apos;Aix-en-Provence. Le Groupe Expert Altitude Com vous propose des solutions durables qui valorisent instantanément votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>Notre expertise en terrasse bois sur plot répond aux exigences les plus pointues des propriétaires aixois. Nous proposons une installation précise et élégante, utilisant des matériaux haut de gamme comme le bois composite ou le bois naturel traité. Chaque projet est étudié individuellement pour s&apos;adapter parfaitement à la configuration de votre terrain, avec une attention particulière à la stabilité et à l&apos;esthétique. Nos plots techniques permettent une pose surélevée qui garantit une parfaite isolation et une longévité exceptionnelle, résistant aux conditions climatiques provençales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts locaux à Aix-en-Provence depuis 15 ans
✓ Devis personnalisé et gratuit sous 48h
✓ Matériaux certifiés et garantie décennale
✓ Équipe de 6 poseurs professionnels spécialisés
✓ Plus de 200 terrasses réalisées dans la région</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ le m², selon les matériaux choisis. Pour une surface moyenne de 30m², comptez un budget global entre 2 400€ et 7 500€, installation comprise. Nos devis détaillés vous permettront de choisir l&apos;option qui correspond précisément à votre budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un projet standard de 30m², notre équipe réalise l&apos;installation en 2-3 jours ouvrés. La préparation du terrain et la pose des plots représentent environ 40% du temps total de réalisation.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour Aix-en-Provence, nous recommandons le bois composite ou l&apos;ipé, particulièrement adaptés au climat méditerranéen. Le composite offre une durabilité de 25-30 ans, tandis que l&apos;ipé résiste naturellement aux UV et à l&apos;humidité. Le choix dépendra de votre budget et de l&apos;exposition de votre terrain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Aix-en-Provence ?
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
