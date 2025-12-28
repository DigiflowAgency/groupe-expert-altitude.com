import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en zinguerie sur Décines-Charpieu, transforme vos projets de toiture avec une expertise technique irréprochab',
  keywords: 'zinguerie décines-charpieu, travaux zinguerie décines-charpieu, toiture zinc décines-charpieu, zingueur décines-charpieu, reparation zinc décines-charpieu, zinco reflect décines-charpieu',
};

export default function ZinguerieDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en zinguerie sur Décines-Charpieu, transforme vos projets de toiture avec une expertise technique irréprochable. Nous intervenons rapidement pour tous vos travaux de zinguerie, en garantissant une protection durable et esthétique de votre habitat.</p>

        <h2>Nos services de travaux de zinguerie a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation structurelle de votre toiture, et notre équipe maîtrise parfaitement les techniques les plus avancées. Nos interventions couvrent l&apos;installation, la rénovation et la réparation de systèmes de gouttières, descentes et habillages en zinc, en utilisant des matériaux haute qualité résistant aux intempéries. Sur Décines-Charpieu, nous proposons un diagnostic précis avant chaque chantier, permettant d&apos;identifier les zones nécessitant une attention particulière. Notre processus inclut un relevé technique minutieux, la préparation des supports, la mise en œuvre de solutions zinc sur-mesure et un contrôle final garantissant une étanchéité optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre approche sur-mesure : 15 ans d&apos;expérience, une équipe certifiée, un matériel professionnel dernier cri et des interventions rapides. Nous proposons des devis transparents sans frais cachés, une garantie décennale et une réactivité qui fait notre réputation. Chaque projet est traité avec le même niveau d&apos;exigence, qu&apos;il s&apos;agisse d&apos;une petite réparation ou d&apos;une rénovation complète.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, l&apos;accessibilité et les matériaux utilisés. Un diagnostic précis permet d&apos;établir un devis personnalisé prenant en compte toutes les spécificités de votre toiture.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durabilité dépend de la qualité de la pose, de l&apos;épaisseur du zinc utilisé et des conditions climatiques locales. Un zinc de qualité supérieure peut même atteindre 100 ans de longévité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc implique un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses. Nous recommandons un contrôle professionnel tous les 5 à 10 ans pour garantir sa longévité et ses performances.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Décines-Charpieu ?
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
