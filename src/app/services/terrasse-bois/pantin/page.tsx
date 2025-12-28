import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Pantin | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Pantin avec une terrasse bois sur plot élégante et durable par Groupe Expert Altitude Com. Nos solutions sur-mesure s&apos;adapten',
  keywords: 'terrasse bois pantin, terrasse sur plot pantin, terrasse bois sur plot pantin, pose terrasse bois pantin, terrasse composite pantin, terrasse bois piscine pantin',
};

export default function TerrasseBoisPantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Pantin avec une terrasse bois sur plot élégante et durable par Groupe Expert Altitude Com. Nos solutions sur-mesure s&apos;adaptent parfaitement aux espaces urbains et résidentiels de la ville.</p>

        <h2>Nos services de terrasse bois sur plot a Pantin</h2>
        <div className="space-y-4">
          <p>Notre service de terrasse bois sur plot représente la solution idéale pour valoriser vos espaces extérieurs à Pantin. Nous proposons une installation précise et professionnelle qui garantit stabilité et esthétique. Notre équipe sélectionne rigoureusement des matériaux haut de gamme, comme les bois exotiques ou le composite, qui résistent parfaitement aux conditions climatiques locales. Chaque projet est étudié individuellement pour s&apos;intégrer harmonieusement à votre environnement, avec une pose sur plots permettant une parfaite horizontalité et une ventilation optimale. Nos techniciens maîtrisent les techniques de nivellement et d&apos;isolation pour assurer une terrasse durable et impeccable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise technique, son engagement qualité et sa connaissance approfondie des spécificités locales de Pantin. Nos réalisations bénéficient de 15 ans d&apos;expérience, d&apos;une garantie décennale et d&apos;un suivi personnalisé. Nous proposons des devis transparents, des délais de réalisation courts et un accompagnement complet de votre projet de terrasse bois.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite standard coûtera environ 120€/m², tandis qu&apos;un bois exotique premium atteindra 220€/m². Notre devis détaillé inclut pose, matériaux et finitions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface. Pour 20-30m², comptez 2-3 jours ouvrables. Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une exécution soignée et précise.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite pour sa durabilité, ou l&apos;ipé et le padouk pour leur résistance naturelle. Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage. Notre conseil technique vous guidera vers le matériau le plus adapté à votre projet à Pantin.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Pantin ?
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
