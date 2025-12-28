import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Champigny-sur-Marne | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Champigny-sur-Marne, spécialisé dans la protection et la rénovation de vos toit',
  keywords: 'zinguerie champigny-sur-marne, travaux zinguerie champigny-sur-marne, toiture zinc champigny-sur-marne, zingueur champigny-sur-marne, reparation zinc champigny-sur-marne, zinco reflect champigny-sur-marne',
};

export default function ZinguerieChampignySurMarnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Champigny-sur-Marne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Champigny-sur-Marne, spécialisé dans la protection et la rénovation de vos toitures. Nos experts en zinguerie interviennent rapidement pour garantir l&apos;étanchéité et la longévité de vos installations.</p>

        <h2>Nos services de travaux de zinguerie a Champigny-sur-Marne</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins en protection et rénovation de toiture. Notre équipe maîtrise parfaitement les techniques de pose et de réparation de systèmes de zinguerie, en utilisant des matériaux haute qualité comme le zinc Zinco Reflect. Nous réalisons des travaux sur mesure, qu&apos;il s&apos;agisse de gouttières, de descentes d&apos;eau, de bavettes ou de couvertines, en garantissant une étanchéité optimale. Notre approche technique précise permet de prévenir les infiltrations et de protéger durablement votre patrimoine immobilier contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un service professionnel et de proximité. Nos zingueurs sont certifiés et disposent de plus de 15 ans d&apos;expérience. Nous proposons des devis transparents sans surprise, un délai d&apos;intervention rapide et une garantie décennale sur nos travaux. Notre engagement qualité fait notre réputation à Champigny-sur-Marne et dans tout le Val-de-Marne.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture moyenne de 50m², comptez un budget global entre 2500€ et 6000€. Nos devis détaillés incluent la main-d&apos;œuvre, les matériaux et les finitions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose, de l&apos;exposition et d&apos;un entretien régulier. Le zinc offre une résistance remarquable aux conditions climatiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour maintenir sa performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Champigny-sur-Marne ?
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
