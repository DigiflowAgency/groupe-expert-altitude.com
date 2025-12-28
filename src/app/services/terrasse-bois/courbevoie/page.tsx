import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Courbevoie | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Courbevoie avec des terrasses bois sur plot, la solution élégante et durable pour valoriser votre espace. Groupe Expert Altit',
  keywords: 'terrasse bois courbevoie, terrasse sur plot courbevoie, terrasse bois sur plot courbevoie, pose terrasse bois courbevoie, terrasse composite courbevoie, terrasse bois piscine courbevoie',
};

export default function TerrasseBoisCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Courbevoie avec des terrasses bois sur plot, la solution élégante et durable pour valoriser votre espace. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient esthétique et performance pour tous vos projets d&apos;aménagement extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Courbevoie</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est la création d&apos;un espace de vie supplémentaire. Notre expertise nous permet de réaliser des terrasses parfaitement adaptées à chaque configuration, qu&apos;il s&apos;agisse d&apos;une surface autour d&apos;une piscine ou d&apos;un espace détente. Nos professionnels utilisent uniquement des matériaux haut de gamme, comme le bois composite ou le bois exotique, garantissant une résistance optimale aux intempéries et une durabilité exceptionnelle. Chaque projet est pensé sur-mesure, avec une attention méticuleuse aux détails techniques : nivellement précis, pose sur plots techniques, et finitions soignées. À Courbevoie, nous maîtrisons parfaitement les contraintes locales d&apos;urbanisme et d&apos;environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes possèdent plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons un devis personnalisé sous 48h, une garantie décennale, et un accompagnement technique complet. Notre engagement qualité se traduit par des réalisations durables et esthétiques, adaptées à chaque budget et chaque style architectural.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel, mais offrira une durabilité supérieure. Pour un projet moyen de 20m² à Courbevoie, comptez un budget global entre 2 000€ et 5 000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. En moyenne, notre équipe réalise entre 10 et 15 m² par jour. Un projet standard de 30m² sera donc achevé en 2-3 jours ouvrés, installation des plots, pose du bois et finitions comprises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Courbevoie, nous recommandons le bois composite (imputrescible), l&apos;ipé (très résistant), ou le red cedar (naturellement traité contre l&apos;humidité). Le choix dépendra de votre budget, de l&apos;exposition et de l&apos;usage prévu. Chaque essence présente des avantages spécifiques en termes de durabilité, d&apos;entretien et d&apos;esthétique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Courbevoie ?
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
