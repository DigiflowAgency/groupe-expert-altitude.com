import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Paris 6e | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Paris 6e avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions su',
  keywords: 'terrasse bois paris 6e, terrasse sur plot paris 6e, terrasse bois sur plot paris 6e, pose terrasse bois paris 6e, terrasse composite paris 6e, terrasse bois piscine paris 6e',
};

export default function TerrasseBoisParis6ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Paris 6e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Paris 6e avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient esthétique et performance pour sublimer vos terrasses et jardins parisiens.</p>

        <h2>Nos services de terrasse bois sur plot a Paris 6e</h2>
        <div className="space-y-4">
          <p>Notre service de terrasse bois sur plot représente la solution idéale pour les propriétaires exigeants de la région parisienne. Nous utilisons des matériaux haute qualité comme le bois composite et le bois exotique, garantissant une résistance optimale aux intempéries et une durabilité jusqu&apos;à 25 ans. Notre processus débute par un diagnostic précis de votre terrain à Paris 6e, suivi d&apos;un relevé technique millimétré. Nos experts posent ensuite des plots techniques réglables qui permettent une parfaite horizontalité, même sur des surfaces légèrement inclinées. Chaque terrasse est personnalisée, avec une attention particulière portée à l&apos;étanchéité et à la circulation de l&apos;air sous le revêtement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes sont certifiées avec plus de 15 ans d&apos;expérience. Nous proposons un devis gratuit sous 48h, une garantie décennale, et un accompagnement technique complet. 95% de nos clients recommandent nos services après réalisation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour un espace de 20m² à Paris 6e, comptez un budget moyen de 2500€ à 4500€, installation comprise. Nos devis détaillés n&apos;ont pas de frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot prend généralement entre 2 et 5 jours, selon la surface et la complexité du terrain. Un chantier standard de 30m² sera réalisé en 3 jours ouvrés par nos équipes expertes, avec un planning précis communiqué à l&apos;avance.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Paris 6e, nous recommandons le bois composite (imputrescible), l&apos;ipé (très résistant), ou le cedar rouge (esthétique). Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage. Notre conseil : privilégiez toujours un bois traité et certifié pour extérieur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Paris 6e ?
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
