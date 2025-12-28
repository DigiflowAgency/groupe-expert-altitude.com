import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Spécialiste de la zinguerie à Aix-en-Provence, le Groupe Expert Altitude Com transforme vos projets de toiture avec une expertise technique irréprochable. ',
  keywords: 'zinguerie aix-en-provence, travaux zinguerie aix-en-provence, toiture zinc aix-en-provence, zingueur aix-en-provence, reparation zinc aix-en-provence, zinco reflect aix-en-provence',
};

export default function ZinguerieAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de la zinguerie à Aix-en-Provence, le Groupe Expert Altitude Com transforme vos projets de toiture avec une expertise technique irréprochable. Nos solutions sur-mesure en zinguerie garantissent la protection et l&apos;esthétique de votre habitat dans toute la région provençale.</p>

        <h2>Nos services de travaux de zinguerie a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial de la protection de votre toiture, assurant l&apos;étanchéité et l&apos;évacuation optimale des eaux pluviales. Notre équipe hautement qualifiée maîtrise tous les aspects techniques, depuis l&apos;installation de gouttières zinc jusqu&apos;à la réalisation de travaux complexes de couverture. Nous utilisons uniquement des matériaux de haute qualité, résistants à la corrosion et parfaitement adaptés au climat méditerranéen d&apos;Aix-en-Provence. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention professionnelle, avec une attention méticuleuse aux moindres détails techniques. Chaque chantier est réalisé dans le respect des normes professionnelles et avec un souci constant de durabilité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre groupe, c&apos;est opter pour une expertise reconnue : plus de 15 ans d&apos;expérience en zinguerie, une équipe certifiée, des interventions rapides sur Aix-en-Provence et ses environs. Nous proposons des solutions techniques innovantes, un conseil personnalisé et une garantie décennale sur nos travaux. Notre approche privilégie la transparence, la qualité et la satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la qualité des matériaux et l&apos;accessibilité du chantier. Pour un projet précis à Aix-en-Provence, nous recommandons un diagnostic sur place pour un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc bien posée et entretenue peut durer entre 50 et 70 ans. Sa durée de vie exceptionnelle dépend de la qualité de la pose, de l&apos;épaisseur du zinc utilisé et des conditions climatiques locales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc implique un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des raccords et le traitement préventif contre les mousses et lichens. Nous recommandons une inspection professionnelle tous les 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Aix-en-Provence ?
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
