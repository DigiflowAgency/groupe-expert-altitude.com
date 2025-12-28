import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Pessac | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Pessac, spécialisé dans la réalisation et la rénovation de toitures et systèmes',
  keywords: 'zinguerie pessac, travaux zinguerie pessac, toiture zinc pessac, zingueur pessac, reparation zinc pessac, zinco reflect pessac',
};

export default function ZingueriePessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Pessac, spécialisé dans la réalisation et la rénovation de toitures et systèmes d&apos;évacuation en zinc. Depuis plus de 15 ans, nous garantissons des solutions durables et esthétiques pour protéger votre habitat.</p>

        <h2>Nos services de travaux de zinguerie a Pessac</h2>
        <div className="space-y-4">
          <p>Nos travaux de zinguerie couvrent l&apos;ensemble des besoins en couverture et évacuation pour les particuliers et professionnels de Pessac et ses environs. Notre équipe qualifiée intervient sur la pose de gouttières, bavettes, chéneaux et habillages de toiture, en utilisant uniquement des matériaux de haute qualité. Nous privilégions le zinc pour sa durabilité exceptionnelle - résistant jusqu&apos;à 100 ans - et ses propriétés naturelles anti-corrosion. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention sur-mesure, avec une attention méticuleuse aux finitions et à l&apos;étanchéité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 500 chantiers réalisés
- Techniciens zingueurs formés et habilités
- Matériaux premium garantis 30 ans
- Intervention rapide sur Pessac et son agglomération
- Devis gratuit et transparent sous 48h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 150€ au m², selon la complexité des travaux. Pour un chantier standard à Pessac, comptez environ 80€/m² incluant main-d&apos;œuvre et matériaux. Les prix dépendent de l&apos;accessibilité, de la pente du toit et des finitions souhaitées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 80 et 100 ans. Sa durée de vie dépend de plusieurs facteurs : qualité de la pose, exposition aux intempéries et entretien régulier. Le zinc développe naturellement une patine protectrice qui le rend particulièrement résistant.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Évitez les produits abrasifs, préférez un nettoyage à l&apos;eau claire et au savon doux. Un contrôle professionnel tous les 5-10 ans est recommandé pour maintenir son intégrité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Pessac ?
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
