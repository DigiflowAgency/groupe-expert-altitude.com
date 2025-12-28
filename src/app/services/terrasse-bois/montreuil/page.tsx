import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Montreuil | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Montreuil avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesu',
  keywords: 'terrasse bois montreuil, terrasse sur plot montreuil, terrasse bois sur plot montreuil, pose terrasse bois montreuil, terrasse composite montreuil, terrasse bois piscine montreuil',
};

export default function TerrasseBoisMontreuilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Montreuil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Montreuil avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient esthétique et performance pour valoriser votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Montreuil</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente la solution idéale pour aménager harmonieusement vos espaces extérieurs à Montreuil. Notre technique permet une installation précise et stable, en surélevant légèrement la terrasse pour garantir un parfait drainage et une protection contre l&apos;humidité. Nos experts sélectionnent rigoureusement des matériaux de haute qualité comme les bois composites ou les essences naturelles résistantes, assurant une durabilité de 15 à 25 ans. Chaque projet est personnalisé, avec une attention particulière portée à l&apos;intégration architecturale et aux contraintes spécifiques de votre terrain.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient sur Montreuil et ses environs, avec plus de 10 ans d&apos;expérience. Nous garantissons un devis précis sous 48h, une installation professionnelle en 2-3 jours et une finition impeccable. Nos réalisations bénéficient d&apos;une garantie décennale et d&apos;un suivi personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour un projet moyen de 20m², comptez un investissement global entre 1 600€ et 5 000€. Nos devis détaillés incluent le matériel, la pose et les finitions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité, mais en moyenne, notre équipe réalise un chantier de 20m² en 2 à 3 jours ouvrables. La préparation du terrain et la pose des plots représentent environ 60% du temps total.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite ou l&apos;ipé pour leur durabilité exceptionnelle. Le composite offre un entretien minimal et résiste parfaitement aux intempéries, tandis que l&apos;ipé, plus haut de gamme, présente une résistance naturelle et un vieillissement élégant.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Montreuil ?
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
