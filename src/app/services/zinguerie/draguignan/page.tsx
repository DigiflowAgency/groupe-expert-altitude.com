import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Draguignan | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Draguignan, spécialiste des travaux de toiture et de protection contre les infiltr',
  keywords: 'zinguerie draguignan, travaux zinguerie draguignan, toiture zinc draguignan, zingueur draguignan, reparation zinc draguignan, zinco reflect draguignan',
};

export default function ZinguerieDraguignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Draguignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Draguignan, spécialiste des travaux de toiture et de protection contre les infiltrations depuis plus de 15 ans. Nous intervenons sur l&apos;ensemble du Var pour des solutions techniques et durables en zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Draguignan</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial de la protection de votre habitat, garantissant l&apos;étanchéité et la longévité de votre toiture. Notre équipe de professionnels maîtrise parfaitement les techniques de pose et de réparation de gouttières, descentes d&apos;eau, bavettes et habillages en zinc. Nous utilisons uniquement des matériaux de haute qualité, résistants à la corrosion et adaptés au climat méditerranéen de Draguignan. Notre processus d&apos;intervention comprend un diagnostic précis, un devis détaillé et une réalisation soignée, avec une attention particulière aux finitions et à l&apos;esthétique globale de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence en zinguerie : notre équipe certifiée intervient avec un outillage professionnel, notre expérience de plus de 15 ans garantit un travail impeccable, nous proposons des délais d&apos;intervention rapides et nous sommes assurés pour tous nos travaux. Nos interventions respectent les normes DTU et réglementations en vigueur.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la hauteur de l&apos;intervention et les matériaux utilisés. Pour une estimation précise à Draguignan, nous recommandons un diagnostic sur place permettant un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité dépend de la qualité de la pose, de l&apos;épaisseur du zinc utilisé (généralement entre 0,6 et 1,2 mm) et des conditions climatiques locales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc implique un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses et lichens. Nous recommandons un contrôle professionnel tous les 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Draguignan ?
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
