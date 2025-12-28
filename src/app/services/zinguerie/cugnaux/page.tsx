import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Cugnaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Cugnaux et ses environs. Spécialistes des travaux de zinguerie depuis plus de 1',
  keywords: 'zinguerie cugnaux, travaux zinguerie cugnaux, toiture zinc cugnaux, zingueur cugnaux, reparation zinc cugnaux, zinco reflect cugnaux',
};

export default function ZinguerieCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Cugnaux et ses environs. Spécialistes des travaux de zinguerie depuis plus de 15 ans, nous intervenons sur tous types de projets de toiture et de protection contre l&apos;eau.</p>

        <h2>Nos services de travaux de zinguerie a Cugnaux</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en protection et finition de toiture. Nous proposons des solutions sur-mesure en zinc, garantissant une étanchéité parfaite et une durabilité exceptionnelle. Notre équipe maîtrise les techniques de zingage traditionnel et moderne, en utilisant des matériaux haute qualité comme le zinco reflect qui offre une résistance optimale aux intempéries. Chaque intervention à Cugnaux est précédée d&apos;un diagnostic technique précis, permettant une intervention ciblée et efficace.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre zinguerie, c&apos;est opter pour l&apos;excellence technique. Nos zingueurs sont certifiés RGE, notre travail bénéficie de 10 ans de garantie décennale. Nous intervenons rapidement, avec un devis gratuit sous 48h. Notre taux de satisfaction client dépasse 95%, preuve de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;accessibilité. Un projet moyen à Cugnaux représente environ 800€ à 2500€ pour une intervention complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie dépend de la qualité de la pose, de l&apos;exposition et de l&apos;entretien régulier. Le zinc est reconnu pour sa très haute durabilité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de détérioration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Cugnaux ?
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
