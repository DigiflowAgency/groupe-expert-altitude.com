import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Couëron | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime pour transformer votre extérieur à Couëron : une terrasse bois sur plot parfaitement adaptée à votre environnement. Groupe Exp',
  keywords: 'terrasse bois couëron, terrasse sur plot couëron, terrasse bois sur plot couëron, pose terrasse bois couëron, terrasse composite couëron, terrasse bois piscine couëron',
};

export default function TerrasseBoisCoueronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Couëron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime pour transformer votre extérieur à Couëron : une terrasse bois sur plot parfaitement adaptée à votre environnement. Groupe Expert Altitude Com vous propose des solutions durables et esthétiques qui valoriseront instantanément votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Couëron</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement extérieur. Notre expertise à Couëron nous permet de réaliser des installations sur mesure, garantissant une parfaite intégration à votre espace. Nos terrasses offrent une stabilité optimale grâce à un système de plots techniques qui permettent une pose précise et un nivellement impeccable. Nous travaillons principalement avec des matériaux nobles comme les bois composites et les essences résistantes, assurant une durabilité de 15 à 25 ans avec un minimum d&apos;entretien. Chaque projet est étudié individuellement pour s&apos;adapter à la configuration unique de votre terrain, en prenant en compte les contraintes techniques et esthétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens disposent de plus de 12 ans d&apos;expérience dans l&apos;aménagement extérieur. Nous proposons une garantie décennale, utilisons uniquement des matériaux certifiés et réalisons un diagnostic précis avant chaque intervention. Notre approche sur-mesure et notre engagement qualité font la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour une surface moyenne de 20m², comptez un investissement global entre 1600€ et 5000€. Les bois composites haut de gamme et les essences nobles comme l&apos;ipé ou le teck représentent les options les plus onéreuses mais aussi les plus durables.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité du terrain. Pour une terrasse standard de 20m², notre équipe à Couëron réalise généralement l&apos;installation en 2 à 3 jours ouvrables. La préparation du terrain, la pose des plots et l&apos;assemblage des lames sont effectués avec une précision millimétrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le bois composite (très résistant), le red cedar (naturellement imputrescible), l&apos;ipé (extrêmement dense) et le châtaignier (local et écologique). Nous recommandons le composite pour sa durabilité ou le red cedar pour son aspect naturel et sa résistance aux intempéries.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Couëron ?
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
