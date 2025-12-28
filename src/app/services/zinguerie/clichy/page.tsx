import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Clichy | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Clichy, spécialiste des travaux de toiture et de protection métallique. Nous in',
  keywords: 'zinguerie clichy, travaux zinguerie clichy, toiture zinc clichy, zingueur clichy, reparation zinc clichy, zinco reflect clichy',
};

export default function ZinguerieClichyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Clichy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Clichy, spécialiste des travaux de toiture et de protection métallique. Nous intervenons sur l&apos;ensemble des projets de zinguerie avec une expertise technique et un engagement de qualité pour les particuliers et professionnels de la région parisienne.</p>

        <h2>Nos services de travaux de zinguerie a Clichy</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en protection et rénovation de toiture. Notre équipe maîtrise parfaitement les techniques de pose et de réparation du zinc, matériau noble particulièrement adapté aux climats urbains comme Clichy. Nous proposons des interventions complètes : installation de gouttières, habillage de souches, réalisation de bavettes, étanchéification des raccords et traitement anti-corrosion. Notre approche technique privilégie des matériaux haute durabilité et des méthodes respectant les normes environnementales actuelles. Chaque chantier fait l&apos;objet d&apos;un diagnostic précis et d&apos;un devis détaillé garantissant transparence et performance.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience en zinguerie
- Interventions rapides sur Clichy et communes limitrophes
- Matériaux premium avec garantie décennale
- Devis gratuit et personnalisé sous 48h
- Techniciens formés aux dernières innovations techniques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier. Pour une toiture standard à Clichy, comptez environ 80€/m² incluant matériaux et main-d&apos;œuvre. Les prix dépendent de l&apos;accessibilité, de la pente et de l&apos;état initial de la surface.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. La durée de vie dépend de la qualité de l&apos;installation, de l&apos;épaisseur du zinc utilisé (généralement entre 0,6 et 1,2 mm) et des conditions climatiques locales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5-7 ans pour prévenir toute dégradation et garantir la longévité de votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Clichy ?
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
