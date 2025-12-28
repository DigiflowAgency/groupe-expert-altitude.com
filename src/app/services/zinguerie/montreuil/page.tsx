import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Montreuil | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Montreuil, spécialiste des travaux de toiture et de protection contre l&apos;eau dep',
  keywords: 'zinguerie montreuil, travaux zinguerie montreuil, toiture zinc montreuil, zingueur montreuil, reparation zinc montreuil, zinco reflect montreuil',
};

export default function ZinguerieMontreuilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Montreuil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Montreuil, spécialiste des travaux de toiture et de protection contre l&apos;eau depuis plus de 15 ans. Nos experts en zinguerie interviennent rapidement sur l&apos;ensemble du territoire de l&apos;Est parisien pour des solutions durables et esthétiques.</p>

        <h2>Nos services de travaux de zinguerie a Montreuil</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et la longévité de votre toiture. Notre équipe de professionnels maîtrise parfaitement les techniques de pose et de réparation des éléments en zinc, garantissant une étanchéité optimale et une protection contre les infiltrations. À Montreuil et ses environs, nous proposons des interventions complètes incluant la réalisation de gouttières, descentes d&apos;eau, bavettes, et habillages de cheminées. Notre approche technique intègre les dernières innovations comme le zinco reflect, un traitement qui améliore la résistance et la durabilité des matériaux. Chaque chantier fait l&apos;objet d&apos;un diagnostic précis et d&apos;un devis personnalisé, avec une attention particulière portée à l&apos;esthétique et à la performance technique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec plus de 150 chantiers réalisés par an, 2) Des techniciens formés aux dernières normes professionnelles, 3) Un engagement qualité avec garantie décennale, 4) Un service client réactif et transparent</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie généralement entre 50€ et 120€ au m², en fonction de la complexité du chantier, de l&apos;accessibilité et des matériaux utilisés. Pour un projet précis à Montreuil, nous recommandons un diagnostic sur site pour un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 70 ans. La durée de vie dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques. Notre équipe utilise des techniques qui maximisent cette longévité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre la corrosion. Nous proposons des contrats d&apos;entretien adaptés à vos besoins spécifiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Montreuil ?
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
