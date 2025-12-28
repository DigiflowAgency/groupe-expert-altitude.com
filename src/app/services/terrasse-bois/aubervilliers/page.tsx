import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Aubervilliers | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue spécifiquement pour les espaces d&apos;Aubervilliers. Le Groupe Expert',
  keywords: 'terrasse bois aubervilliers, terrasse sur plot aubervilliers, terrasse bois sur plot aubervilliers, pose terrasse bois aubervilliers, terrasse composite aubervilliers, terrasse bois piscine aubervilliers',
};

export default function TerrasseBoisAubervilliersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Aubervilliers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue spécifiquement pour les espaces d&apos;Aubervilliers. Le Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient élégance et durabilité pour sublimer votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Aubervilliers</h2>
        <div className="space-y-4">
          <p>Notre service de pose de terrasse bois sur plot représente la solution idéale pour les propriétaires d&apos;Aubervilliers recherchant une extension de vie extérieure de qualité. Nous utilisons uniquement des matériaux haute résistance, comme les bois composites et les essences nobles qui garantissent une durabilité de 20 à 25 ans. Notre processus démarre par un diagnostic précis de votre terrain, suivi d&apos;un relevé métrique permettant une pose parfaitement nivelée. Chaque terrasse est personnalisée, avec une attention particulière portée à l&apos;étanchéité et à la stabilité des plots, assurant une surface plane et sécurisée.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe possède plus de 15 ans d&apos;expérience, nous garantissons un devis sous 48h, proposons des matériaux écologiques certifiés, et intervenons exclusivement avec du personnel qualifié et assuré. Notre engagement qualité se traduit par une satisfaction client de plus de 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour un projet standard à Aubervilliers, comptez environ 120€/m² incluant pose et fourniture, avec des options composite haut de gamme pouvant atteindre 180€/m².
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, notre équipe réalise un chantier de 20-30 m² en 3 à 5 jours ouvrés. Un planning précis vous sera communiqué dès la phase de devis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons trois types de bois : le bois composite (très résistant, faible entretien), l&apos;ipé (très dense, durabilité exceptionnelle) et le mélèze thermotraité (bon rapport qualité-prix). Chaque essence présente des avantages spécifiques adaptés à vos besoins à Aubervilliers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Aubervilliers ?
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
