import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Le Blanc-Mesnil | Groupe Expert Altitude Com',
  description: 'Transformer votre extérieur en un espace de détente unique avec une terrasse bois sur plot, c&apos;est la promesse du Groupe Expert Altitude Com au Blanc-Mesnil',
  keywords: 'terrasse bois le blanc-mesnil, terrasse sur plot le blanc-mesnil, terrasse bois sur plot le blanc-mesnil, pose terrasse bois le blanc-mesnil, terrasse composite le blanc-mesnil, terrasse bois piscine le blanc-mesnil',
};

export default function TerrasseBoisLeBlancMesnilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Le Blanc-Mesnil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformer votre extérieur en un espace de détente unique avec une terrasse bois sur plot, c&apos;est la promesse du Groupe Expert Altitude Com au Blanc-Mesnil. Nos solutions sur-mesure allient esthétique et durabilité pour sublimer chaque jardin et terrasse.</p>

        <h2>Nos services de terrasse bois sur plot a Le Blanc-Mesnil</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement extérieur : c&apos;est créer un prolongement harmonieux entre votre habitat et la nature. Notre expertise technique nous permet de réaliser des terrasses parfaitement nivelées, garantissant une stabilité optimale grâce à un système de plots ajustables. Nous travaillons principalement avec des bois nobles et des matériaux composites résistants aux intempéries, offrant une durée de vie supérieure à 20 ans. Au Blanc-Mesnil, nous adaptons chaque projet aux spécificités du terrain, en privilégiant des essences localement performantes comme le pin traité ou le bois composite écologique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans au Blanc-Mesnil
✓ Devis personnalisé et gratuit sous 48h
✓ Équipe certifiée avec formations continues
✓ Matériaux garantis et pose selon normes NF</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ le m², selon le type de matériau choisi. Pour un projet moyen de 20m², comptez un investissement global entre 1600€ et 5000€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. En moyenne, notre équipe réalise 10 à 15m² par jour. Un projet standard de 30m² sera donc achevé en 2-3 jours ouvrables.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite ou l&apos;ipé pour leur résistance. Le composite offre un entretien minimal, tandis que l&apos;ipé garantit une excellente durabilité naturelle. Le choix dépendra de votre budget et de l&apos;exposition de votre terrain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Le Blanc-Mesnil ?
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
