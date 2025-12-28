import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Paris 3e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour les ravalements de façade à Paris 3e, transforme l&apos;apparence et la protection de vos bâtimen',
  keywords: 'ravalement facade paris 3e, ravalement immeuble paris 3e, renovation facade paris 3e, peinture facade paris 3e, entreprise ravalement paris 3e, ravalement facade maison paris 3e',
};

export default function RavalementFacadeParis3ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Paris 3e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour les ravalements de façade à Paris 3e, transforme l&apos;apparence et la protection de vos bâtiments avec une expertise technique inégalée. Nous intervenons sur tous types de surfaces dans ce quartier historique du Marais, en garantissant une rénovation esthétique et durable.</p>

        <h2>Nos services de ravalement de façade a Paris 3e</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nos experts réalisent un diagnostic précis avant toute intervention, en évaluant l&apos;état structural et les spécificités architecturales de votre bâtiment. Nous utilisons des techniques et matériaux de haute qualité, adaptés aux contraintes parisiennes : peintures anti-pollution, enduits techniques, traitements hydrofuges. Notre processus complet comprend le nettoyage haute pression, la réparation des supports, l&apos;application de primaires d&apos;accrochage et la finition par des techniques professionnelles. Chaque chantier est personnalisé, avec une moyenne de 15 jours pour un immeuble de 200m² dans Paris 3e.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans en rénovation de façades 2) Des équipes certifiées et formées aux dernières normes techniques 3) Un devis détaillé et transparent sans frais cachés 4) Une garantie décennale sur nos travaux, gage de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ par m², selon la complexité du support, les matériaux choisis et l&apos;état initial. Pour un immeuble parisien typique, comptez entre 15 000€ et 35 000€ pour une rénovation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble à Paris 3e oscille entre 10 et 25 jours ouvrables, en fonction de la surface, de l&apos;accessibilité et des techniques utilisées. Un chantier de 200m² prend généralement 15 jours avec notre équipe.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient obligatoire tous les 10 ans dans les copropriétés parisiennes, ou lorsque l&apos;état de la façade présente des désordres structurels comme des fissures, infiltrations ou dégradations importantes menaçant la solidité du bâtiment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Paris 3e ?
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
