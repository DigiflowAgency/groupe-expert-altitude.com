import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Saint-Nazaire, spécialiste des travaux de toiture et de protection contre les infi',
  keywords: 'zinguerie saint-nazaire, travaux zinguerie saint-nazaire, toiture zinc saint-nazaire, zingueur saint-nazaire, reparation zinc saint-nazaire, zinco reflect saint-nazaire',
};

export default function ZinguerieSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Saint-Nazaire, spécialiste des travaux de toiture et de protection contre les infiltrations. Nous intervenons sur l&apos;ensemble du territoire nazairien avec une expertise technique et un engagement qualité qui font notre réputation.</p>

        <h2>Nos services de travaux de zinguerie a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation de votre habitat, assurant l&apos;étanchéité et la durabilité de vos toitures. Notre équipe de professionnels maîtrise parfaitement les techniques de pose et de réparation des éléments en zinc, garantissant une protection optimale contre les intempéries. Nous utilisons des matériaux de haute qualité, résistants à la corrosion et adaptés aux conditions climatiques spécifiques de la région de Saint-Nazaire. Notre processus d&apos;intervention comprend un diagnostic précis, une proposition technique détaillée et une réalisation soignée, avec une attention particulière aux finitions et à l&apos;esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expérience en zinguerie sur la région nazairienne
✓ Équipe certifiée et formée aux dernières normes techniques
✓ Devis gratuit et personnalisé sous 48h
✓ Matériaux garantis et intervention rapide
✓ Solutions sur-mesure adaptées à chaque configuration de toiture</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la hauteur, et les matériaux utilisés. Pour Saint-Nazaire, notre moyenne se situe autour de 75€/m² pour une intervention complète et de qualité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. La durée de vie dépend de plusieurs facteurs : qualité de la pose, exposition aux intempéries, et maintenance régulière. Notre garantie standard est de 30 ans.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des raccords. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de dégradation et maintenir l&apos;intégrité de votre toiture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Saint-Nazaire ?
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
