import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Colombes | Groupe Expert Altitude Com',
  description: 'Spécialiste du ravalement de façade à Colombes, le Groupe Expert Altitude Com transforme votre bâtiment avec des solutions sur-mesure qui garantissent esth',
  keywords: 'ravalement facade colombes, ravalement immeuble colombes, renovation facade colombes, peinture facade colombes, entreprise ravalement colombes, ravalement facade maison colombes',
};

export default function RavalementFacadeColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste du ravalement de façade à Colombes, le Groupe Expert Altitude Com transforme votre bâtiment avec des solutions sur-mesure qui garantissent esthétique et protection. Nous intervenons sur tous types de propriétés, des maisons individuelles aux immeubles collectifs.</p>

        <h2>Nos services de ravalement de façade a Colombes</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une approche technique complète qui protège durablement vos murs contre les intempéries et l&apos;usure. Notre équipe de professionnels réalise un diagnostic précis avant toute intervention, évaluant l&apos;état des supports et recommandant les traitements adaptés. À Colombes, nous utilisons des techniques et matériaux haute performance qui assurent une finition impeccable et une résistance maximale aux conditions climatiques. Nos interventions comprennent le décapage, les réparations structurelles, l&apos;application de l&apos;enduit et de la peinture, avec une attention méticuleuse aux détails.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages clés : 15 ans d&apos;expérience en rénovation, des artisans certifiés, des devis transparents sans surprise, des délais respectés à 100%, et une garantie décennale sur nos travaux. Nous sommes également engagés dans des pratiques éco-responsables avec des matériaux respectueux de l&apos;environnement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ par m², selon la complexité du chantier, l&apos;état initial du support et les matériaux choisis. Pour un pavillon de 100m² à Colombes, comptez un budget global entre 5 000€ et 12 000€. Nous proposons systématiquement un devis détaillé et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de son état. En moyenne, un chantier complet prend entre 2 et 4 semaines. Pour un immeuble de 300m² à Colombes, nous estimons environ 15 à 20 jours ouvrables, en tenant compte des préparatifs, des réparations et des finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement de façade devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état du bâtiment présente des signes de dégradation avancés. À Colombes, nous recommandons une inspection professionnelle tous les 8-10 ans pour maintenir la valeur et la protection de votre patrimoine immobilier.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Colombes ?
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
