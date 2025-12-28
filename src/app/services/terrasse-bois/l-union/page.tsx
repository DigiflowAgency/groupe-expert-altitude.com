import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a L\'Union | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot élégante et durable, conçue spécifiquement pour les maisons de L&apos;Union. Notre expertise Groupe ',
  keywords: 'terrasse bois l'union, terrasse sur plot l'union, terrasse bois sur plot l'union, pose terrasse bois l'union, terrasse composite l'union, terrasse bois piscine l'union',
};

export default function TerrasseBoisLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot élégante et durable, conçue spécifiquement pour les maisons de L&apos;Union. Notre expertise Groupe Expert Altitude Com garantit une réalisation sur-mesure qui valorisera immédiatement votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a L'Union</h2>
        <div className="space-y-4">
          <p>La pose d&apos;une terrasse bois sur plot représente bien plus qu&apos;un simple aménagement extérieur : c&apos;est une solution technique et esthétique permettant de créer un espace de vie supplémentaire. Notre méthode exclusive assure une parfaite planéité grâce à des plots réglables, qui compensent les légères imperfections du terrain. Nous travaillons principalement avec des bois nobles comme l&apos;ipé ou le châtaignier, reconnus pour leur résistance aux intempéries et leur durabilité exceptionnelle. Notre processus inclut systématiquement une préparation minutieuse du terrain, un nivellement précis et une pose selon les normes techniques les plus exigeantes, garantissant une finition impeccable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale maîtrisée, spécialisée dans les terrasses bois sur L&apos;Union et ses environs. 2) Un devis personnalisé et transparent, sans frais cachés. 3) Une équipe certifiée avec plus de 15 ans d&apos;expérience en aménagements extérieurs. 4) Une garantie décennale sur l&apos;ensemble de nos réalisations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour une surface moyenne de 20m², comptez un investissement global entre 1600€ et 5000€. Notre tarification dépend de la qualité du bois, de la complexité du terrain et des finitions souhaitées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot oscille généralement entre 2 et 5 jours, en fonction de la surface et de la configuration du terrain. Pour un projet standard de 20m² à L&apos;Union, notre équipe réalise généralement l&apos;installation en 3 jours ouvrés, préparation et finitions comprises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont l&apos;ipé (très dense, imputrescible), le châtaignier (local et résistant), et les composites technologiques. Nous recommandons l&apos;ipé pour sa durabilité exceptionnelle (jusqu&apos;à 50 ans), ou les composites pour un entretien minimal. Le choix dépendra de votre budget et de vos attentes en termes d&apos;esthétique et de maintenance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a L'Union ?
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
