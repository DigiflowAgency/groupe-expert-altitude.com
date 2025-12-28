import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Tournefeuille | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Tournefeuille avec une terrasse bois sur plot, l&apos;option ultime en aménagement paysager moderne. Notre expertise du Groupe Exp',
  keywords: 'terrasse bois tournefeuille, terrasse sur plot tournefeuille, terrasse bois sur plot tournefeuille, pose terrasse bois tournefeuille, terrasse composite tournefeuille, terrasse bois piscine tournefeuille',
};

export default function TerrasseBoisTournefeuillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Tournefeuille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Tournefeuille avec une terrasse bois sur plot, l&apos;option ultime en aménagement paysager moderne. Notre expertise du Groupe Expert Altitude Com vous garantit une réalisation sur-mesure qui valorisera instantanément votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Tournefeuille</h2>
        <div className="space-y-4">
          <p>La terrasse bois sur plot représente la solution d&apos;aménagement extérieur la plus polyvalente et élégante pour les habitants de Tournefeuille. Cette technique innovante permet une pose parfaitement nivelée, même sur des surfaces légèrement pentues ou irrégulières. Nos professionnels utilisent des plots réglables en hauteur, offrant une stabilité optimale et une isolation parfaite contre l&apos;humidité. Nous proposons différents matériaux, du bois exotique au composite haute résistance, adaptés à tous les budgets et styles architecturaux. Chaque réalisation est pensée sur-mesure, en respectant les normes techniques les plus strictes et en privilégiant l&apos;esthétique et la durabilité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Tournefeuille, 2) Des matériaux certifiés et garantis 10 ans, 3) Un devis précis et transparent sans frais cachés, 4) Une équipe de poseurs certifiés et assurés. Nous transformons vos projets en réalités durables.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le matériau choisi. Un projet moyen de 20m² oscillera entre 1600€ et 5000€, installation comprise. Nos devis détaillés vous permettront de choisir l&apos;option qui correspond précisément à votre budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot nécessite généralement 2 à 5 jours, selon la surface et la complexité du terrain. Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois exotique (ipé, teck) pour sa durabilité, le bois composite pour son entretien minimal, ou le mélèze français pour un budget plus économique. Chaque essence présente des avantages spécifiques que nous vous aiderons à évaluer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Tournefeuille ?
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
