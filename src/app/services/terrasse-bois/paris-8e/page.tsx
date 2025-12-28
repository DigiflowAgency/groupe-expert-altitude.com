import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Paris 8e | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Paris 8e avec une terrasse bois sur plot élégante et durable, conçue par les experts du Groupe Altitude Com. Notre sav',
  keywords: 'terrasse bois paris 8e, terrasse sur plot paris 8e, terrasse bois sur plot paris 8e, pose terrasse bois paris 8e, terrasse composite paris 8e, terrasse bois piscine paris 8e',
};

export default function TerrasseBoisParis8ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Paris 8e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Paris 8e avec une terrasse bois sur plot élégante et durable, conçue par les experts du Groupe Altitude Com. Notre savoir-faire vous garantit une installation sur mesure qui valorisera immédiatement votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Paris 8e</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une solution technique et esthétique parfaitement adaptée aux environnements urbains parisiens. Nos professionnels sélectionnent rigoureusement des matériaux haute qualité, principalement des bois composites et naturels résistants aux intempéries. Chaque projet débute par un diagnostic précis de votre terrain, permettant une pose sur plots parfaitement nivelée et stable. Nos techniques innovantes assurent une isolation thermique optimale et une durabilité jusqu&apos;à 25 ans, avec un entretien minimal. Que ce soit pour une terrasse de piscine ou un espace de détente, nous personnalisons chaque réalisation selon vos besoins spécifiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Altitude Com se distingue par son expertise technique unique à Paris 8e. Nos équipes certifiées interviennent avec un outillage professionnel dernier cri. Nous proposons des garanties décennales, un devis détaillé sous 48h et une intervention rapide. Nos réalisations combinent systématiquement esthétique contemporaine et performance technique, avec un taux de satisfaction client de plus de 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 120€ et 250€ au m², selon les matériaux choisis. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel, mais offrira une durabilité supérieure. Notre tarification transparente inclut la fourniture des matériaux, la préparation du terrain et la pose complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité du terrain. Pour une surface moyenne de 20m², comptez entre 2 et 4 jours ouvrables. Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Paris 8e, nous recommandons le bois composite ou l&apos;IPE, particulièrement résistants. Le composite offre une durabilité exceptionnelle sans entretien, tandis que l&apos;IPE propose un rendu naturel très haut de gamme. Le choix dépendra de votre budget, de l&apos;exposition et de l&apos;usage prévu.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Paris 8e ?
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
