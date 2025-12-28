import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Cagnes-sur-Mer, spécialiste des travaux de toiture et de protection contre les ',
  keywords: 'zinguerie cagnes-sur-mer, travaux zinguerie cagnes-sur-mer, toiture zinc cagnes-sur-mer, zingueur cagnes-sur-mer, reparation zinc cagnes-sur-mer, zinco reflect cagnes-sur-mer',
};

export default function ZinguerieCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Cagnes-sur-Mer, spécialiste des travaux de toiture et de protection contre les infiltrations. Avec plus de 15 ans d&apos;expertise, nous garantissons des solutions durables et esthétiques pour tous vos projets de zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins en protection et rénovation de toiture. Nous intervenons sur tous types de bâtiments, des maisons individuelles aux immeubles collectifs, en utilisant des techniques et matériaux de haute qualité. Notre équipe maîtrise parfaitement les techniques de pose et de réparation du zinc, en privilégiant toujours des solutions sur-mesure adaptées à chaque configuration architecturale. Nous réalisons des travaux complets incluant les gouttières, descentes d&apos;eau, habillages de cheminées et protection des avant-toits, avec une attention particulière à l&apos;étanchéité et à la durabilité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un service premium : techniciens certifiés, devis gratuit et détaillé, intervention rapide sur Cagnes-sur-Mer et ses environs, matériaux garantis 10 ans, respect des normes techniques, et une approche éco-responsable. Notre réputation repose sur la qualité de nos réalisations et la satisfaction de nos clients.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, l&apos;accessibilité et les matériaux utilisés. Un diagnostic précis nous permet de vous proposer un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle et sa résistance aux intempéries en font un matériau particulièrement performant et économique sur le long terme.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses et lichens. Nous proposons des contrats de maintenance adaptés à vos besoins.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Cagnes-sur-Mer ?
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
