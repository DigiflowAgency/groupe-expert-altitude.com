import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Nanterre | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Nanterre avec une terrasse bois sur plot, la solution élégante et durable pour valoriser votre propriété. Groupe Exper',
  keywords: 'terrasse bois nanterre, terrasse sur plot nanterre, terrasse bois sur plot nanterre, pose terrasse bois nanterre, terrasse composite nanterre, terrasse bois piscine nanterre',
};

export default function TerrasseBoisNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Nanterre avec une terrasse bois sur plot, la solution élégante et durable pour valoriser votre propriété. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient esthétique et performance technique.</p>

        <h2>Nos services de terrasse bois sur plot a Nanterre</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente aujourd&apos;hui la solution idéale pour aménager un espace extérieur fonctionnel et design. Notre expertise à Nanterre nous permet de proposer des solutions adaptées à chaque configuration, que ce soit pour une terrasse de piscine ou un aménagement résidentiel. Nos professionnels sélectionnent rigoureusement les matériaux, privilégiant des bois composites haute qualité résistants aux intempéries et aux UV. Le système sur plot offre un avantage technique majeur : une parfaite isolation et un drainage optimal qui préservent durablement la structure. Chaque réalisation fait l&apos;objet d&apos;un diagnostic précis pour garantir une pose parfaitement nivelée et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans l&apos;aménagement extérieur, 2) Des matériaux certifiés avec 10 ans de garantie, 3) Un devis personnalisé et gratuit sous 48h, 4) Une équipe de poseurs certifiés intervenant sur tout Nanterre et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis (bois exotique, composite) et la complexité de pose. Pour un projet standard à Nanterre, comptez environ 120€/m² tout compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface : entre 2 et 5 jours pour une superficie de 20 à 50 m². Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le bois composite (très résistant), l&apos;ipé (bois exotique ultra-dense) et le red cedar (naturellement imputrescible). Notre conseil : privilégiez toujours un bois traité, certifié pour un usage extérieur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Nanterre ?
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
