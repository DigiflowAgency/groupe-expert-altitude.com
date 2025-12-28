import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Paris 2e | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Paris 2e avec nos terrasses bois sur plot, l&apos;alliance parfaite entre élégance et fonctionnalité. Groupe Expert Altitud',
  keywords: 'terrasse bois paris 2e, terrasse sur plot paris 2e, terrasse bois sur plot paris 2e, pose terrasse bois paris 2e, terrasse composite paris 2e, terrasse bois piscine paris 2e',
};

export default function TerrasseBoisParis2ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Paris 2e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Paris 2e avec nos terrasses bois sur plot, l&apos;alliance parfaite entre élégance et fonctionnalité. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent immédiatement votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Paris 2e</h2>
        <div className="space-y-4">
          <p>Nos terrasses bois sur plot représentent la solution idéale pour les professionnels et particuliers parisiens recherchant un aménagement extérieur haut de gamme. Notre technique innovante permet une pose précise et stable, garantissant une parfaite horizontalité même sur des surfaces légèrement inclinées. Nous sélectionnons rigoureusement des matériaux résistants comme le bois composite ou le bois exotique, offrant une durabilité exceptionnelle face aux conditions climatiques parisiennes. Notre processus comprend un diagnostic précis du terrain, une préparation méticuleuse de la surface et une pose experte qui assure un résultat impeccable et durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Avec plus de 15 ans d&apos;expérience à Paris, nous maîtrisons parfaitement les contraintes techniques des terrasses sur plot. Notre équipe certifiée intervient rapidement, avec un devis gratuit sous 48h. Nous proposons des garanties décennales et un suivi personnalisé. 95% de nos clients recommandent nos services après réalisation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 120€ et 250€ au m², selon les matériaux choisis. Pour un espace de 20m² à Paris 2e, comptez un budget moyen de 3 500€ à 5 000€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot nécessite généralement 2 à 4 jours pour un espace standard de 15-20m². Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite ou l&apos;ipé pour les terrasses sur plot à Paris. Le composite offre une résistance maximale aux intempéries, tandis que l&apos;ipé propose un rendu esthétique haut de gamme avec une durabilité naturelle exceptionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Paris 2e ?
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
