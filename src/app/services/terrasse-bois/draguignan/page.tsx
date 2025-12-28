import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Draguignan | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Draguignan avec une terrasse bois sur plot élégante et durable par Groupe Expert Altitude Com. Nos solutions sur mesur',
  keywords: 'terrasse bois draguignan, terrasse sur plot draguignan, terrasse bois sur plot draguignan, pose terrasse bois draguignan, terrasse composite draguignan, terrasse bois piscine draguignan',
};

export default function TerrasseBoisDraguignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Draguignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Draguignan avec une terrasse bois sur plot élégante et durable par Groupe Expert Altitude Com. Nos solutions sur mesure s&apos;adaptent parfaitement à tous les terrains et environnements du Var, garantissant un aménagement esthétique et fonctionnel.</p>

        <h2>Nos services de terrasse bois sur plot a Draguignan</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution technique moderne pour valoriser vos espaces extérieurs. Notre expertise nous permet de réaliser des installations parfaitement nivelées, qui s&apos;intègrent harmonieusement à votre jardin ou votre piscine. Chaque projet est précédé d&apos;un diagnostic précis du terrain à Draguignan, permettant une préparation optimale. Nos équipes utilisent des matériaux haut de gamme, principalement des bois composites résistants aux intempéries et aux UV, offrant une durabilité exceptionnelle de 20 à 25 ans. La technique des plots permet une excellente isolation, une ventilation parfaite et une adaptation parfaite aux légers dénivelés naturels.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans dans le Var, 2) Des matériaux certifiés et écologiques, 3) Un devis personnalisé et gratuit sous 48h, 4) Une équipe de professionnels formés aux dernières techniques de pose de terrasse bois.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon la qualité des matériaux choisis, la complexité de l&apos;installation et les finitions. Pour Draguignan, notre tarif moyen se situe autour de 120€/m² pour une terrasse composite haut de gamme.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, notre équipe réalise entre 20 et 40 m² par jour. Un projet standard de 30 m² sera généralement terminé en 1-2 jours, installation et finitions comprises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons principalement les bois composites comme l&apos;IPE, le châtaignier ou le robinier, offrant une résistance maximale aux conditions climatiques de Draguignan. Ces essences garantissent une durabilité de 20-25 ans avec un minimum d&apos;entretien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Draguignan ?
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
