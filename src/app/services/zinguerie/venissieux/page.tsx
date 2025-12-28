import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Vénissieux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Vénissieux, spécialisé dans la protection et la rénovation de vos toitures depu',
  keywords: 'zinguerie vénissieux, travaux zinguerie vénissieux, toiture zinc vénissieux, zingueur vénissieux, reparation zinc vénissieux, zinco reflect vénissieux',
};

export default function ZinguerieVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Vénissieux, spécialisé dans la protection et la rénovation de vos toitures depuis plus de 15 ans. Nos experts en zinguerie interviennent sur l&apos;ensemble du Grand Lyon avec une précision et un professionnalisme reconnus.</p>

        <h2>Nos services de travaux de zinguerie a Vénissieux</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial pour la protection et la longévité de votre toiture. Nos équipes qualifiées réalisent des travaux complets de zinguerie, incluant la pose, la réparation et l&apos;entretien de gouttières, descentes d&apos;eau, bavettes et habillages en zinc. Notre approche technique garantit une étanchéité optimale et une résistance aux conditions climatiques variées de la région de Vénissieux. Nous utilisons uniquement des matériaux de haute qualité comme le zinc Quartz-Zinc, offrant une durabilité exceptionnelle et une esthétique moderne. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention sur-mesure adaptée à chaque configuration de toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale avec 15 ans d&apos;expérience à Vénissieux
✓ Équipe de zingueurs certifiés et formés aux dernières techniques
✓ Matériaux premium et garantie décennale
✓ Intervention rapide et diagnostic gratuit
✓ Solutions personnalisées et prix transparents</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture standard à Vénissieux, comptez environ 80€/m² incluant la main-d&apos;œuvre et les matériaux. Un devis précis nécessite un diagnostic sur place.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. La qualité des matériaux, l&apos;exposition aux intempéries et l&apos;entretien régulier influencent significativement sa durée de vie.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc implique un nettoyage annuel, le contrôle des joints et des fixations, l&apos;élimination des débris végétaux et la vérification de l&apos;étanchéité. Nous recommandons une inspection professionnelle tous les 5-7 ans pour prévenir tout risque de dégradation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Vénissieux ?
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
