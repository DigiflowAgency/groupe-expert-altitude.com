import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, réalisée par Groupe Expert Altitude Com à Saint-Raphaël. Nos solutions s',
  keywords: 'terrasse bois saint-raphaël, terrasse sur plot saint-raphaël, terrasse bois sur plot saint-raphaël, pose terrasse bois saint-raphaël, terrasse composite saint-raphaël, terrasse bois piscine saint-raphaël',
};

export default function TerrasseBoisSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, réalisée par Groupe Expert Altitude Com à Saint-Raphaël. Nos solutions sur-mesure s&apos;adaptent à tous les environnements, garantissant un aménagement esthétique et durable pour votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Nos terrasses bois sur plot représentent la solution idéale pour valoriser vos espaces extérieurs à Saint-Raphaël. Nous proposons une pose technique qui permet une parfaite isolation et une excellente résistance aux variations climatiques. Notre processus débute par un diagnostic précis du terrain, suivi d&apos;un choix de matériaux haut de gamme - bois composite ou bois exotique - qui s&apos;harmonisent avec votre environnement. Chaque réalisation bénéficie d&apos;une pose rigoureuse sur plots réglables, assurant un niveau parfait et une durabilité jusqu&apos;à 25 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux depuis 15 ans, nous maîtrisons les spécificités techniques des terrasses sur Saint-Raphaël. Notre équipe certifiée garantit une pose impeccable, avec un devis personnalisé sous 48h. Nous utilisons uniquement des matériaux éco-responsables et proposons une garantie décennale sur nos installations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel, mais offrira une meilleure durabilité à long terme.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot prend généralement entre 2 et 5 jours, en fonction de la surface et de la complexité du terrain. Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour Saint-Raphaël, nous recommandons le bois composite ou l&apos;ipé, particulièrement résistants aux embruns marins. Le bois composite offre l&apos;avantage d&apos;un entretien minimal, tandis que l&apos;ipé présente une durabilité naturelle exceptionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Saint-Raphaël ?
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
