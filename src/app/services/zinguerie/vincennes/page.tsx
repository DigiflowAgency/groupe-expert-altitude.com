import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Vincennes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en zinguerie sur Vincennes et ses environs, offrant des solutions techniques et durables pour',
  keywords: 'zinguerie vincennes, travaux zinguerie vincennes, toiture zinc vincennes, zingueur vincennes, reparation zinc vincennes, zinco reflect vincennes',
};

export default function ZinguerieVincennesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Vincennes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en zinguerie sur Vincennes et ses environs, offrant des solutions techniques et durables pour protéger et valoriser vos toitures. Nos experts en zinguerie interviennent avec précision pour tous vos projets de rénovation et d&apos;installation.</p>

        <h2>Nos services de travaux de zinguerie a Vincennes</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation structurelle de votre habitat, garantissant l&apos;étanchéité et la longévité de vos toitures. Notre équipe de professionnels maîtrise parfaitement les techniques de pose et de réparation des éléments en zinc, en utilisant des méthodes innovantes comme le zinco reflect. Nous réalisons des travaux sur mesure, adaptés à chaque configuration architecturale, en privilégiant des matériaux de haute qualité qui résistent aux intempéries. Notre processus d&apos;intervention comprend un diagnostic précis, un devis détaillé et une exécution rigoureuse, avec une attention particulière portée aux spécificités de chaque toiture à Vincennes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans en zinguerie, 2) Un accompagnement personnalisé de A à Z, 3) Des interventions rapides et précises, 4) Des tarifs transparents et compétitifs. Nous garantissons la qualité de nos travaux et proposons systématiquement une expertise technique approfondie avant toute intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie généralement entre 50€ et 120€ au m², selon la complexité des travaux, les matériaux utilisés et l&apos;état initial de la toiture. Un diagnostic précis permet d&apos;établir un devis personnalisé prenant en compte tous les paramètres techniques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 70 ans, avec une durée de vie moyenne de 60 ans. Sa longévité dépend de la qualité de la pose, de l&apos;entretien régulier et des conditions climatiques locales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses et lichens. Un professionnel recommande un contrôle technique tous les 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Vincennes ?
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
