import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Bron | Groupe Expert Altitude Com',
  description: 'Spécialiste de la zinguerie sur Bron et ses environs, le Groupe Expert Altitude Com intervient avec précision pour tous vos travaux de toiture et d&apos;étanché',
  keywords: 'zinguerie bron, travaux zinguerie bron, toiture zinc bron, zingueur bron, reparation zinc bron, zinco reflect bron',
};

export default function ZinguerieBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de la zinguerie sur Bron et ses environs, le Groupe Expert Altitude Com intervient avec précision pour tous vos travaux de toiture et d&apos;étanchéité. Notre expertise technique garantit des solutions durables et esthétiques pour protéger efficacement votre habitat.</p>

        <h2>Nos services de travaux de zinguerie a Bron</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation structurelle de votre toiture. Nos professionnels maîtrisent l&apos;intégralité des techniques de pose et de réparation, en utilisant des matériaux haute qualité comme le zinc Quartz-Zinc® ou le zinc Vmzinc®. Notre process comprend un diagnostic précis, un relevé technique détaillé et une intervention sur-mesure, en respectant les normes DTU 40.41 relatives aux travaux de couverture. Nous intervenons aussi bien sur les toitures plates que les toitures inclinées, avec une attention particulière portée à l&apos;étanchéité et à la durabilité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre approche technique et notre engagement local. Nous disposons de 15 ans d&apos;expérience sur Bron et la métropole lyonnaise, un stock permanent de matériaux, un outillage professionnel dernier cri et une équipe certifiée. Nos interventions bénéficient systématiquement d&apos;une garantie décennale et d&apos;un suivi personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 80€ et 250€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Pour un projet standard sur Bron, comptez environ 120€/m² pose comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut facilement durer entre 70 et 100 ans. Sa longévité exceptionnelle et sa résistance aux intempéries en font un matériau particulièrement recommandé par les professionnels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir son étanchéité et sa durabilité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Bron ?
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
