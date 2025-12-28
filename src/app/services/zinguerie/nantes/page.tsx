import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Nantes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Nantes et sa région. Spécialistes des travaux de toiture et de protection, no',
  keywords: 'zinguerie nantes, travaux zinguerie nantes, toiture zinc nantes, zingueur nantes, reparation zinc nantes, zinco reflect nantes',
};

export default function ZinguerieNantesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Nantes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Nantes et sa région. Spécialistes des travaux de toiture et de protection, nous intervenons avec précision et expertise pour garantir la longévité de vos installations.</p>

        <h2>Nos services de travaux de zinguerie a Nantes</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie représentent bien plus qu&apos;un simple travail technique : c&apos;est une solution complète de protection de votre patrimoine immobilier. Nos zingueurs hautement qualifiés réalisent des interventions sur mesure, qu&apos;il s&apos;agisse de pose, réparation ou rénovation de systèmes d&apos;évacuation. Nous utilisons uniquement des matériaux de haute qualité, comme le zinc Zinco Reflect, qui offre une résistance exceptionnelle aux intempéries et une durabilité jusqu&apos;à 70 ans. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention methodique, avec un suivi personnalisé pour chaque projet nantais.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience à Nantes
- Équipe certifiée et formée aux dernières techniques de zinguerie
- Matériaux premium et garantie décennale
- Intervention rapide et diagnostic gratuit sur site</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ du m², selon la complexité des travaux, la hauteur et l&apos;accessibilité. Pour un projet standard à Nantes, comptez environ 80€/m² tout compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 60 et 100 ans. Sa durée de vie dépend de la qualité de la pose, de l&apos;exposition et de l&apos;entretien régulier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de dégradation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Nantes ?
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
