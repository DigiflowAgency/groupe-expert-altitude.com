import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Saint-Maur-des-Fossés | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur avec une terrasse bois sur plot élégante et durable, spécialement conçue pour les habitants de Saint-Maur-des-Fossés. Gr',
  keywords: 'terrasse bois saint-maur-des-fossés, terrasse sur plot saint-maur-des-fossés, terrasse bois sur plot saint-maur-des-fossés, pose terrasse bois saint-maur-des-fossés, terrasse composite saint-maur-des-fossés, terrasse bois piscine saint-maur-des-fossés',
};

export default function TerrasseBoisSaintMaurDesFossesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Saint-Maur-des-Fossés</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur avec une terrasse bois sur plot élégante et durable, spécialement conçue pour les habitants de Saint-Maur-des-Fossés. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent instantanément votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Saint-Maur-des-Fossés</h2>
        <div className="space-y-4">
          <p>Notre expertise en terrasse bois sur plot répond aux exigences les plus pointues des propriétaires de Saint-Maur-des-Fossés. Nous utilisons uniquement des matériaux haut de gamme, comme le bois composite ou le bois exotique, garantissant une résistance maximale aux intempéries. Notre processus débute par un diagnostic précis de votre terrain, permettant une pose parfaitement nivelée grâce à un système de plots réglables. Chaque réalisation est pensée pour optimiser l&apos;esthétique et la fonctionnalité, avec une attention particulière portée à l&apos;intégration harmonieuse dans votre environnement. Nos techniciens maîtrisent les techniques de pose les plus modernes, assurant une finition impeccable et une durabilité de plus de 20 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Saint-Maur-des-Fossés
✓ Devis gratuit et personnalisé sous 48h
✓ Matériaux certifiés et éco-responsables
✓ Équipe de poseurs certifiés et assurés
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 100€ et 250€ au m², selon la qualité du bois et la complexité de l&apos;installation. Pour un projet standard de 20m², comptez un budget global entre 2 000€ et 5 000€. Nos devis détaillés vous permettront d&apos;avoir une vision précise et transparente.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la configuration. Pour un espace de 20m², notre équipe réalise généralement l&apos;installation en 2 à 3 jours ouvrés. Ce délai inclut la préparation du terrain, la pose des plots et du revêtement, avec un souci constant de précision et de qualité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons trois types de bois principaux : le bois composite (idéal pour sa durabilité), le padouk (bois exotique résistant) et le pin traité autoclave (option économique). Le choix dépendra de votre budget, de l&apos;exposition et de l&apos;usage prévu de votre terrasse. Notre conseil personnalisé vous guidera vers le matériau le plus adapté.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Saint-Maur-des-Fossés ?
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
