import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Paris 6e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Paris 6e, transforme l&apos;extérieur de votre propriété avec expertise et préc',
  keywords: 'ravalement facade paris 6e, ravalement immeuble paris 6e, renovation facade paris 6e, peinture facade paris 6e, entreprise ravalement paris 6e, ravalement facade maison paris 6e',
};

export default function RavalementFacadeParis6ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Paris 6e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Paris 6e, transforme l&apos;extérieur de votre propriété avec expertise et précision. Nous intervenons sur tous types de bâtiments, des maisons historiques du 6e arrondissement aux immeubles contemporains, en apportant une solution sur-mesure.</p>

        <h2>Nos services de ravalement de façade a Paris 6e</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nos experts réalisent un diagnostic complet avant toute intervention, évaluant l&apos;état structural et les spécificités architecturales de votre bien parisien. Nous utilisons des techniques innovantes et des matériaux haute performance garantissant une protection durable contre l&apos;humidité, les intempéries et la pollution urbaine. Notre processus inclut un décapage soigné, un traitement anti-fissures, une imperméabilisation professionnelle et une finition esthétique parfaite, respectant le charme architectural unique de Paris 6e.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de 15 ans dans la rénovation de façades parisiennes, 2) Des équipes certifiées et formées aux dernières normes techniques, 3) Un devis détaillé et transparent sans frais cachés, 4) Une garantie décennale sur tous nos travaux de ravalement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial de la façade. Pour un immeuble parisien typique de 200m², comptez un budget global entre 10 000€ et 24 000€. Nous proposons systématiquement un diagnostic précis et un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble à Paris 6e oscille généralement entre 2 et 4 semaines. Les facteurs influençant ce délai comprennent la surface totale, la complexité architecturale, les conditions météorologiques et les traitements spécifiques requis. Notre équipe optimise chaque étape pour minimiser la gêne et respecter les délais convenus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de la façade présente des signes significatifs de dégradation comme des fissures, des écaillages ou des infiltrations. À Paris 6e, où le patrimoine architectural est sensible, nous recommandons une inspection professionnelle tous les 8 à 12 ans pour maintenir la valeur et la beauté de votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Paris 6e ?
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
