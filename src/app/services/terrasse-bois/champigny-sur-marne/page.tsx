import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Champigny-sur-Marne | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue spécifiquement pour les habitants de Champigny-sur-Marne. Groupe ',
  keywords: 'terrasse bois champigny-sur-marne, terrasse sur plot champigny-sur-marne, terrasse bois sur plot champigny-sur-marne, pose terrasse bois champigny-sur-marne, terrasse composite champigny-sur-marne, terrasse bois piscine champigny-sur-marne',
};

export default function TerrasseBoisChampignySurMarnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Champigny-sur-Marne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue spécifiquement pour les habitants de Champigny-sur-Marne. Groupe Expert Altitude Com vous propose une solution élégante et durable qui valorisera instantanément votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Champigny-sur-Marne</h2>
        <div className="space-y-4">
          <p>Notre service de pose de terrasse bois sur plot représente la solution idéale pour les propriétaires souhaitant créer un espace outdoor sophistiqué et fonctionnel. Nous utilisons des matériaux haut de gamme, principalement des bois composites et naturels parfaitement adaptés au climat de Champigny-sur-Marne. Notre technique de pose sur plot permet une installation rapide, une parfaite isolation et une excellente gestion des nivellements, même sur des surfaces légèrement inclinées. Chaque projet est étudié sur mesure, en prenant en compte la configuration du terrain, l&apos;exposition et vos préférences esthétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Champigny-sur-Marne
✓ Matériaux certifiés et garantis 10 ans
✓ Devis gratuit et précis sous 48h
✓ Équipe de professionnels qualifiés et passionnés
✓ Solutions personnalisées et adaptées à chaque configuration</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi (bois exotique, composite ou pin traité). Pour un projet moyen de 20m², comptez un budget global entre 1 600€ et 5 000€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour une terrasse standard de 15-20m², notre équipe réalise généralement l&apos;installation en 2-3 jours ouvrés, avec un processus propre et efficace.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le bois composite (très durable), l&apos;ipé (résistant mais coûteux) et le pin traité autoclave (économique). Notre recommandation : le composite qui offre 25-30 ans de durabilité sans entretien complexe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Champigny-sur-Marne ?
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
