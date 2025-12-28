import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Martigues | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre spécialiste en zinguerie sur Martigues, offrant des solutions techniques et durables pour protéger vos toitures contre',
  keywords: 'zinguerie martigues, travaux zinguerie martigues, toiture zinc martigues, zingueur martigues, reparation zinc martigues, zinco reflect martigues',
};

export default function ZinguerieMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre spécialiste en zinguerie sur Martigues, offrant des solutions techniques et durables pour protéger vos toitures contre les intempéries. Avec plus de 15 ans d&apos;expertise, nous transformons chaque projet de rénovation en une intervention de précision et de qualité.</p>

        <h2>Nos services de travaux de zinguerie a Martigues</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;esthétique de votre habitat. Nos équipes interviennent sur l&apos;ensemble des travaux de zinguerie, depuis l&apos;installation de gouttières jusqu&apos;à la réfection complète des systèmes d&apos;évacuation d&apos;eau. À Martigues et ses environs, nous proposons une approche sur-mesure, en utilisant des matériaux haute performance comme le zinc Quartz-Zinc® qui garantit une durabilité exceptionnelle. Notre processus comprend un diagnostic précis, un devis détaillé et une réalisation professionnelle, avec un contrôle qualité systématique pour assurer la longévité de vos installations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec des techniciens formés aux dernières normes, 2) Un engagement de transparence avec des devis précis sans frais cachés, 3) Une intervention rapide sur Martigues et le département, 4) Une garantie décennale sur tous nos travaux de zinguerie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture standard de 100m², comptez un budget global entre 5 000€ et 12 000€. Nos devis détaillés vous permettront d&apos;avoir une visibilité précise sans mauvaise surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Les systèmes modernes en zinc Quartz-Zinc® offrent une résistance exceptionnelle aux conditions climatiques, garantissant une durabilité maximale avec un minimum d&apos;interventions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5-7 ans pour prévenir tout risque de détérioration et maintenir l&apos;intégrité de votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Martigues ?
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
