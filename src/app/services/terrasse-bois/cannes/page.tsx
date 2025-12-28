import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Cannes | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée à l&apos;environnement cannois. Expert Altitude Com vous propose des solutions',
  keywords: 'terrasse bois cannes, terrasse sur plot cannes, terrasse bois sur plot cannes, pose terrasse bois cannes, terrasse composite cannes, terrasse bois piscine cannes',
};

export default function TerrasseBoisCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée à l&apos;environnement cannois. Expert Altitude Com vous propose des solutions sur mesure qui valorisent votre espace extérieur à Cannes, en combinant élégance technique et esthétique méditerranéenne.</p>

        <h2>Nos services de terrasse bois sur plot a Cannes</h2>
        <div className="space-y-4">
          <p>Notre service de pose de terrasse bois sur plot représente la solution idéale pour les propriétaires exigeants de Cannes souhaitant optimiser leurs espaces extérieurs. Nous utilisons des matériaux haut de gamme - bois composite ou bois naturel - parfaitement adaptés au climat local. Notre processus démarre par un diagnostic précis du terrain, suivi d&apos;un relevé métrique permettant une installation parfaitement nivelée. Les plots techniques que nous employons garantissent une stabilité optimale, une isolation phonique et une protection contre l&apos;humidité. Chaque réalisation bénéficie d&apos;une étude personnalisée prenant en compte l&apos;exposition, la configuration du terrain et vos usages spécifiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique : notre équipe dispose de plus de 15 ans d&apos;expérience, une garantie décennale, et une maîtrise totale des techniques de pose. Nous proposons un devis gratuit sous 48h, des matériaux sourcés durablement et une intervention rapide sur Cannes et sa région. Notre taux de satisfaction client dépasse 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour une surface moyenne de 20m², comptez un budget global entre 1600€ et 5000€. Nos devis détaillés incluent toujours le matériel, la pose et les finitions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un espace standard de 20m², notre équipe réalise l&apos;installation en 2 à 3 jours ouvrés, avec une préparation du terrain et des finitions soignées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons trois types de bois : le bois exotique (ipé, teck) pour sa durabilité, le bois composite écologique pour son entretien minimal, et le mélèze traité pour un budget plus accessible. Chaque essence présente des avantages spécifiques adaptés à votre projet à Cannes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Cannes ?
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
