import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Créteil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire zinguerie de référence à Créteil, vous propose des solutions professionnelles et durables pour tous vos travau',
  keywords: 'zinguerie créteil, travaux zinguerie créteil, toiture zinc créteil, zingueur créteil, reparation zinc créteil, zinco reflect créteil',
};

export default function ZinguerieCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire zinguerie de référence à Créteil, vous propose des solutions professionnelles et durables pour tous vos travaux de toiture. Spécialistes du zinc depuis plus de 15 ans, nous intervenons sur l&apos;ensemble du Val-de-Marne avec une expertise technique irréprochable.</p>

        <h2>Nos services de travaux de zinguerie a Créteil</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;étanchéité de votre habitat. Nos équipes qualifiées réalisent des interventions complètes, depuis la pose de gouttières jusqu&apos;à la rénovation de toitures zinc. Nous utilisons uniquement des matériaux haute qualité comme le zinco reflect, garantissant une durabilité maximale. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention sur-mesure adaptée à chaque configuration architecturale de Créteil. Nos techniciens maîtrisent parfaitement les techniques de soudure, de raccordement et d&apos;isolation, assurant une finition impeccable et une protection optimale contre les infiltrations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale reconnue, 2) Des artisans certifiés et formés en continu, 3) Un engagement qualité avec 5 ans de garantie décennale, 4) Un conseil technique personnalisé adapté aux spécificités de votre habitat. Nous intervenons rapidement et efficacement sur Créteil et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture moyenne de 50m², comptez un investissement global entre 2500€ et 6000€. Nos devis sont toujours transparents et détaillés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. La qualité des matériaux, la pose et l&apos;entretien régulier sont les facteurs clés de longévité. Notre zinco reflect offre une durabilité supérieure à la moyenne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de raccordement. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de détérioration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Créteil ?
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
