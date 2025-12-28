import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Istres | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Istres avec une terrasse bois sur plot, l&apos;aménagement tendance qui allie élégance et fonctionnalité. Le Groupe Expert Altitud',
  keywords: 'terrasse bois istres, terrasse sur plot istres, terrasse bois sur plot istres, pose terrasse bois istres, terrasse composite istres, terrasse bois piscine istres',
};

export default function TerrasseBoisIstresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Istres</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Istres avec une terrasse bois sur plot, l&apos;aménagement tendance qui allie élégance et fonctionnalité. Le Groupe Expert Altitude Com vous propose des solutions sur-mesure pour valoriser votre espace extérieur dans toute la région.</p>

        <h2>Nos services de terrasse bois sur plot a Istres</h2>
        <div className="space-y-4">
          <p>Une terrasse bois sur plot représente la solution idéale pour créer un espace de vie harmonieux et durable. Notre expertise à Istres nous permet de réaliser des installations parfaitement adaptées à vos besoins et à votre environnement. Nous travaillons avec des matériaux haut de gamme, principalement des bois composites et naturels résistants aux intempéries et aux UV. Notre processus débute par un diagnostic précis de votre terrain, suivi d&apos;un conseil personnalisé sur le choix des matériaux et du design. Chaque projet est unique : nous prenons en compte la configuration du terrain, l&apos;exposition, et vos attentes esthétiques pour garantir un résultat optimal.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour la qualité et la professionnalité. Nos équipes sont certifiées et possèdent plus de 15 ans d&apos;expérience en aménagement extérieur. Nous garantissons des délais respectés, un devis transparent et une installation clé en main. Notre engagement qualité se traduit par des matériaux sélectionnés rigoureusement et une finition irréprochable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel, mais offrira une durabilité supérieure. Pour un projet à Istres, comptez en moyenne 120€/m² pour une pose professionnelle.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la superficie. Pour un espace de 20-30m², notre équipe réalise généralement l&apos;installation en 2-3 jours. Les étapes incluent la préparation du terrain, la pose des plots, et la fixation des lames avec une attention méticuleuse aux détails.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Istres, nous recommandons le bois composite ou l&apos;IPE, particulièrement adaptés au climat méditerranéen. Le composite offre une excellente résistance aux UV et à l&apos;humidité, tandis que l&apos;IPE est reconnu pour sa durabilité naturelle et sa grande résistance aux agressions extérieures.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Istres ?
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
