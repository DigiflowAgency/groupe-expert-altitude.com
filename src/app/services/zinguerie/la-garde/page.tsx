import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a La Garde | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de zinguerie à La Garde et ses environs. Spécialistes du zinc depuis ',
  keywords: 'zinguerie la garde, travaux zinguerie la garde, toiture zinc la garde, zingueur la garde, reparation zinc la garde, zinco reflect la garde',
};

export default function ZinguerieLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de zinguerie à La Garde et ses environs. Spécialistes du zinc depuis plus de 15 ans, nous intervenons sur tous types de toitures avec une expertise technique irréprochable.</p>

        <h2>Nos services de travaux de zinguerie a La Garde</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;étanchéité de votre habitat. Nos équipes qualifiées réalisent des interventions complètes, depuis la pose de gouttières jusqu&apos;à la rénovation de toitures zinc. Nous utilisons uniquement des matériaux de haute qualité, garantissant une durabilité maximale et une résistance aux conditions climatiques de la région de La Garde. Notre processus débute par un diagnostic précis, suivi d&apos;un devis détaillé et transparent. Chaque chantier fait l&apos;objet d&apos;un suivi personnalisé, avec une attention méticuleuse aux moindres détails techniques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec plus de 200 chantiers réalisés, 2) Des techniciens formés aux dernières normes réglementaires, 3) Un engagement qualité avec une garantie décennale, 4) Un rapport qualité-prix compétitif sur le secteur de La Garde.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour un projet standard à La Garde, comptez environ 80€/m² incluant matériaux et main-d&apos;œuvre. Un devis personnalisé reste indispensable pour une estimation précise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 70 ans. La durée de vie dépend de plusieurs facteurs : qualité de la pose, épaisseur du zinc, exposition aux intempéries et entretien régulier. Notre zinc Zinco Reflect offre une durabilité supérieure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de détérioration et maintenir l&apos;étanchéité parfaite.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a La Garde ?
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
