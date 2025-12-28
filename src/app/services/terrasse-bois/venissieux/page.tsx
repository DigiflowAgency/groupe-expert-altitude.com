import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Vénissieux | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Vénissieux avec une terrasse bois sur plot, la solution élégante et durable qui valorise instantanément votre propriét',
  keywords: 'terrasse bois vénissieux, terrasse sur plot vénissieux, terrasse bois sur plot vénissieux, pose terrasse bois vénissieux, terrasse composite vénissieux, terrasse bois piscine vénissieux',
};

export default function TerrasseBoisVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Vénissieux avec une terrasse bois sur plot, la solution élégante et durable qui valorise instantanément votre propriété. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient esthétique et performances techniques.</p>

        <h2>Nos services de terrasse bois sur plot a Vénissieux</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une véritable création d&apos;espace de vie extérieur. Notre expertise, développée depuis plus de 15 ans à Vénissieux et ses environs, nous permet de réaliser des terrasses parfaitement adaptées à chaque configuration. Nous travaillons principalement avec des matériaux nobles comme le bois composite et le bois exotique, garantissant une résistance optimale aux intempéries et une durabilité exceptionnelle. Notre processus inclut un diagnostic précis du terrain, un relevé topographique et une conception assistée par ordinateur pour un résultat parfaitement nivelé et esthétique. Chaque projet fait l&apos;objet d&apos;une étude personnalisée, avec des solutions techniques innovantes qui s&apos;intègrent harmonieusement à votre environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec un outillage professionnel, nos matériaux bénéficient de labels environnementaux, nous proposons 10 ans de garantie décennale, et notre devis détaillé vous assure une transparence totale. Nos réalisations à Vénissieux témoignent de notre savoir-faire unique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon la qualité des matériaux et la complexité de l&apos;installation. Pour une surface moyenne de 30m², comptez un budget global entre 2 400€ et 7 500€. Nos devis détaillés incluent la fourniture des matériaux, la pose et la préparation du terrain.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la configuration, mais en moyenne, notre équipe réalise 15 à 25 m² par jour. Un projet standard de 30m² sera donc achevé entre 1 et 3 jours, installation et finitions comprises. Nous optimisons chaque intervention pour limiter la gêne et respecter les délais.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très résistant), l&apos;IPE (bois exotique ultra-dense), ou le mélèze traité. Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage. Le composite offre 25 ans de durabilité, l&apos;IPE plus de 50 ans, avec un entretien minimal et une résistance aux UV et aux intempéries.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Vénissieux ?
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
