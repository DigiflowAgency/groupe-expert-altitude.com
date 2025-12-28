import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Six-Fours-les-Plages | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur-mesure pour les propriétés de Six-Fours-les-Plages. Notre exp',
  keywords: 'terrasse bois six-fours-les-plages, terrasse sur plot six-fours-les-plages, terrasse bois sur plot six-fours-les-plages, pose terrasse bois six-fours-les-plages, terrasse composite six-fours-les-plages, terrasse bois piscine six-fours-les-plages',
};

export default function TerrasseBoisSixFoursLesPlagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Six-Fours-les-Plages</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur-mesure pour les propriétés de Six-Fours-les-Plages. Notre expertise Groupe Expert Altitude Com vous garantit une réalisation élégante et durable, adaptée à l&apos;environnement méditerranéen.</p>

        <h2>Nos services de terrasse bois sur plot a Six-Fours-les-Plages</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement extérieur : c&apos;est créer un espace de vie supplémentaire, harmonieux et fonctionnel. Notre méthode exclusive permet une installation précise, avec un nivellement parfait grâce à des plots réglables, assurant une stabilité optimale et une parfaite horizontalité. Nous travaillons principalement avec des matériaux nobles comme le bois composite et le bois exotique, sélectionnés pour leur résistance aux conditions climatiques de Six-Fours-les-Plages. Chaque projet est pensé dans les moindres détails, en considérant l&apos;exposition, la configuration du terrain et vos usages spécifiques, que ce soit pour une terrasse de piscine ou un espace de détente.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre approche sur-mesure : 15 ans d&apos;expérience, des techniciens certifiés, un conseil personnalisé et des matériaux de haute qualité. Nous garantissons une installation rapide, propre et sans défaut, avec un devis précis et transparent. Notre engagement qualité se traduit par des délais maîtrisés et une esthétique irréprochable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel, mais offrira une durabilité supérieure. Chez Groupe Expert Altitude Com, nous proposons des solutions adaptées à tous les budgets, avec un devis détaillé et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité du terrain. En moyenne, comptez 2 à 5 jours pour un projet de 30 à 50 m². Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable, avec une préparation du terrain et une pose méticuleuse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour Six-Fours-les-Plages, nous recommandons le bois composite ou l&apos;ipé, particulièrement adaptés au climat méditerranéen. Le composite offre une excellente résistance aux UV et à l&apos;humidité, tandis que l&apos;ipé présente une durabilité naturelle exceptionnelle. Le choix dépendra de votre budget, de l&apos;exposition et de l&apos;usage prévu de votre terrasse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Six-Fours-les-Plages ?
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
