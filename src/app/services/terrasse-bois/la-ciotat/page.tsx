import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a La Ciotat | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à La Ciotat avec une terrasse bois sur plot, le choix ultime pour allier élégance et durabilité. Notre expertise du Groupe Expe',
  keywords: 'terrasse bois la ciotat, terrasse sur plot la ciotat, terrasse bois sur plot la ciotat, pose terrasse bois la ciotat, terrasse composite la ciotat, terrasse bois piscine la ciotat',
};

export default function TerrasseBoisLaCiotatPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a La Ciotat</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à La Ciotat avec une terrasse bois sur plot, le choix ultime pour allier élégance et durabilité. Notre expertise du Groupe Expert Altitude Com vous garantit une réalisation sur mesure qui valorisera instantanément votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a La Ciotat</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement extérieur : c&apos;est créer un espace de vie supplémentaire parfaitement intégré à votre environnement. Nos solutions techniques permettent une installation précise et stable, avec un nivellement optimal grâce aux plots réglables. Chaque projet est étudié individuellement pour s&apos;adapter parfaitement à la configuration de votre terrain, qu&apos;il s&apos;agisse d&apos;une surface plane ou en légère pente, typique des propriétés de La Ciotat. Nous utilisons uniquement des matériaux de haute qualité, bois exotiques ou composites, garantissant une résistance maximale aux conditions climatiques méditerranéennes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence ? Une expertise locale précise, un suivi personnalisé et une réactivité sans égale. Nous maîtrisons parfaitement les techniques de pose de terrasse bois, avec plus de 15 ans d&apos;expérience sur La Ciotat et ses environs. Nos équipes sont certifiées, nos devis transparents et nos délais toujours respectés. Nous proposons également une garantie décennale sur nos réalisations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ le m², selon le type de matériau choisi. Un bois composite haut de gamme sera plus onéreux qu&apos;un pin traité, mais offrira une durabilité supérieure. Pour une terrasse de 20m², comptez un budget moyen de 2 000€ à 5 000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité du terrain. En moyenne, nous réalisons un chantier de 20-30m² en 2-3 jours. Notre équipe de 2-3 professionnels garantit une installation rapide et soignée, avec un planning précis communiqué dès le premier rendez-vous.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à La Ciotat, nous recommandons le bois composite ou l&apos;ipé, particulièrement adaptés au climat méditerranéen. Le composite offre une excellente résistance aux UV et à l&apos;humidité, tandis que l&apos;ipé, bois exotique très dense, présente une durabilité naturelle remarquable. Le choix dépendra de votre budget et de l&apos;esthétique recherchée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a La Ciotat ?
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
