import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Paris 5e | Groupe Expert Altitude Com',
  description: 'Spécialiste des travaux de zinguerie à Paris 5e, le Groupe Expert Altitude Com vous propose des solutions techniques et durables pour protéger et embellir ',
  keywords: 'zinguerie paris 5e, travaux zinguerie paris 5e, toiture zinc paris 5e, zingueur paris 5e, reparation zinc paris 5e, zinco reflect paris 5e',
};

export default function ZinguerieParis5ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Paris 5e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste des travaux de zinguerie à Paris 5e, le Groupe Expert Altitude Com vous propose des solutions techniques et durables pour protéger et embellir vos toitures. Notre expertise en zinguerie répond aux exigences les plus pointues de l&apos;habitat parisien.</p>

        <h2>Nos services de travaux de zinguerie a Paris 5e</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation de votre patrimoine immobilier. Nos interventions couvrent l&apos;installation, la rénovation et la réparation de systèmes de collecte et d&apos;évacuation des eaux. Notre équipe maîtrise parfaitement les techniques de pose de zinc, garantissant une étanchéité optimale et une résistance aux conditions climatiques parisiennes. Nous utilisons des matériaux haute qualité comme le zinc Quartz-Zinc, reconnu pour sa durabilité et sa résistance à la corrosion. Notre processus comprend un diagnostic précis, une préparation méticuleuse et une mise en œuvre professionnelle, avec une attention particulière aux spécificités architecturales de chaque bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans le domaine de la zinguerie parisienne, 2) Une équipe certifiée et formée aux dernières normes techniques, 3) Un devis personnalisé et transparent sans frais cachés, 4) Une intervention rapide et un suivi technique après travaux garantissant la pérennité de vos installations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la hauteur du bâtiment et l&apos;état initial de la toiture. Pour un projet à Paris 5e, un diagnostic préalable permettra un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie dépend de la qualité du matériau, de la pose et de l&apos;environnement. Le zinc offre une excellente longévité comparé à d&apos;autres matériaux de couverture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc implique un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Il est recommandé de faire un diagnostic professionnel tous les 5-7 ans pour prévenir tout risque de dégradation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Paris 5e ?
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
