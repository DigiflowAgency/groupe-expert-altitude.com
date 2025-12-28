import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Rillieux-la-Pape | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot élégante et durable, spécialement conçue pour les habitants de Rillieux-la-Pape. Notre expertis',
  keywords: 'terrasse bois rillieux-la-pape, terrasse sur plot rillieux-la-pape, terrasse bois sur plot rillieux-la-pape, pose terrasse bois rillieux-la-pape, terrasse composite rillieux-la-pape, terrasse bois piscine rillieux-la-pape',
};

export default function TerrasseBoisRillieuxLaPapePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Rillieux-la-Pape</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot élégante et durable, spécialement conçue pour les habitants de Rillieux-la-Pape. Notre expertise Groupe Expert Altitude Com vous garantit un aménagement sur-mesure qui valorisera instantanément votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Rillieux-la-Pape</h2>
        <div className="space-y-4">
          <p>Notre service de pose de terrasse bois sur plot représente la solution idéale pour les propriétaires exigeants de Rillieux-la-Pape. Nous utilisons des matériaux haut de gamme comme le bois composite et le bois exotique, parfaitement adaptés aux conditions climatiques locales. Notre processus débute par un diagnostic précis de votre terrain, suivi d&apos;un relevé technique minutieux permettant une installation impeccable. Chaque terrasse est posée sur des plots réglables, assurant une parfaite horizontalité et une isolation optimale contre l&apos;humidité. Nos équipes maîtrisent les techniques les plus récentes, garantissant une finition professionnelle et une durabilité exceptionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Experts locaux avec plus de 15 ans d&apos;expérience à Rillieux-la-Pape
• Devis gratuit et personnalisé sous 48h
• Matériaux certifiés et éco-responsables
• Délais de réalisation courts et précis
• Garantie décennale sur nos installations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour Rillieux-la-Pape, notre tarif moyen se situe autour de 120€/m² pour une pose clé en main, matériaux et main-d&apos;œuvre compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais comptez environ 2 à 5 jours pour un projet standard de 20-30m². Notre équipe optimise chaque intervention pour minimiser les délais sans compromettre la qualité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite pour sa durabilité, ou l&apos;ipé et le padouk pour leur résistance naturelle. À Rillieux-la-Pape, le bois composite reste le choix le plus judicieux, offrant jusqu&apos;à 25 ans de durée de vie sans entretien significatif.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Rillieux-la-Pape ?
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
