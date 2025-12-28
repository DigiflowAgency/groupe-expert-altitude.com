import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Paris 1er | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Paris 1er, spécialiste des travaux de toiture et de protection des bâtiments ',
  keywords: 'zinguerie paris 1er, travaux zinguerie paris 1er, toiture zinc paris 1er, zingueur paris 1er, reparation zinc paris 1er, zinco reflect paris 1er',
};

export default function ZinguerieParis1erPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Paris 1er</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Paris 1er, spécialiste des travaux de toiture et de protection des bâtiments historiques et contemporains. Avec plus de 15 ans d&apos;expertise, nous intervenons sur les projets les plus complexes du centre de Paris.</p>

        <h2>Nos services de travaux de zinguerie a Paris 1er</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation structurelle de votre patrimoine immobilier. Nos techniciens hautement qualifiés réalisent des interventions complètes, depuis l&apos;installation de gouttières jusqu&apos;à la réfection totale des systèmes d&apos;évacuation des eaux. Nous utilisons des techniques innovantes et des matériaux de haute qualité, garantissant une protection optimale contre les infiltrations et les dégradations. Notre approche sur-mesure permet de répondre précisément aux spécificités architecturales de chaque bâtiment parisien, en privilégiant des solutions durables et esthétiques. Notre processus comprend un diagnostic technique approfondi, une proposition personnalisée et une réalisation minutieuse.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence en zinguerie. Nos avantages clés incluent : une équipe certifiée avec plus de 15 ans d&apos;expérience, un diagnostic technique gratuit, des matériaux premium garantis 10 ans, une intervention rapide sur Paris 1er, et un engagement qualité total. Nous sommes reconnus pour notre professionnalisme et notre souci constant de satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie généralement entre 50€ et 150€ au m², selon la complexité des travaux. Pour Paris 1er, comptez en moyenne 85€/m² pour une intervention standard, incluant main-d&apos;œuvre et matériaux. Les prix peuvent fluctuer en fonction de l&apos;accessibilité, de la hauteur et de l&apos;état initial de la toiture.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie dépend de plusieurs facteurs : qualité de la pose, épaisseur du zinc, exposition aux intempéries et entretien régulier. Dans le centre historique de Paris, nos réalisations atteignent fréquemment 70 ans de longévité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir les potentielles dégradations. Un traitement anti-mousse et un contrôle des systèmes d&apos;évacuation sont également essentiels pour maintenir l&apos;intégrité de votre toiture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Paris 1er ?
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
