import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Issy-les-Moulineaux | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur-mesure par Groupe Expert Altitude Com. Spécialistes à Issy-le',
  keywords: 'terrasse bois issy-les-moulineaux, terrasse sur plot issy-les-moulineaux, terrasse bois sur plot issy-les-moulineaux, pose terrasse bois issy-les-moulineaux, terrasse composite issy-les-moulineaux, terrasse bois piscine issy-les-moulineaux',
};

export default function TerrasseBoisIssyLesMoulineauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Issy-les-Moulineaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur-mesure par Groupe Expert Altitude Com. Spécialistes à Issy-les-Moulineaux, nous créons des espaces extérieurs élégants et durables qui valorisent votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Issy-les-Moulineaux</h2>
        <div className="space-y-4">
          <p>Notre service de terrasse bois sur plot représente la solution idéale pour les propriétaires exigeants d&apos;Issy-les-Moulineaux recherchant un aménagement extérieur haut de gamme. Nous proposons une installation précise où chaque plot permet de compenser les légères différences de niveau du terrain, garantissant une surface parfaitement horizontale et stable. Notre expertise technique nous permet de travailler avec différents matériaux comme le bois exotique, le composite ou le bois local, en respectant les normes environnementales et esthétiques. Chaque projet est étudié individuellement pour s&apos;adapter à la configuration unique de votre terrain, avec une attention méticuleuse portée à la qualité des matériaux et à la précision de la pose.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe cumule plus de 15 ans d&apos;expérience, nous garantissons une intervention professionnelle sous 15 jours, nos devis sont précis et détaillés, et nous proposons une garantie décennale sur tous nos travaux. Nos réalisations sont systématiquement conformes aux réglementations en vigueur.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 100€ et 250€ au m², selon les matériaux choisis et la complexité de l&apos;installation. Pour un projet standard de 20m² à Issy-les-Moulineaux, comptez un budget moyen de 3500€ à 5000€, matériaux et pose compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la configuration, mais en moyenne, notre équipe réalise un chantier de 20m² en 2 à 3 jours ouvrables. La préparation du terrain et les finitions peuvent nécessiter un jour supplémentaire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très résistant), l&apos;ipé (bois exotique très dense), ou le mélèze traité. Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu. Le composite offre la meilleure durabilité avec un entretien minimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Issy-les-Moulineaux ?
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
