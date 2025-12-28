import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Saint-Sébastien-sur-Loire. Avec plus de 15 ans d&apos;',
  keywords: 'ravalement facade saint-sébastien-sur-loire, ravalement immeuble saint-sébastien-sur-loire, renovation facade saint-sébastien-sur-loire, peinture facade saint-sébastien-sur-loire, entreprise ravalement saint-sébastien-sur-loire, ravalement facade maison saint-sébastien-sur-loire',
};

export default function RavalementFacadeSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Saint-Sébastien-sur-Loire. Avec plus de 15 ans d&apos;expérience, nous transformons l&apos;apparence extérieure de vos bâtiments en véritables chefs-d&apos;œuvre esthétiques et durables.</p>

        <h2>Nos services de ravalement de façade a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation cosmétique. Nous proposons une approche globale qui protège et embellit vos murs contre les agressions climatiques de la région nantaise. Notre équipe de professionnels réalise un diagnostic précis avant intervention, en évaluant l&apos;état des supports, les pathologies éventuelles et en recommandant les techniques les plus adaptées. Nous utilisons uniquement des matériaux haute performance, garantissant une finition parfaite et une durabilité exceptionnelle de 10 à 15 ans. Notre processus comprend le nettoyage, le traitement des fissures, l&apos;application de primaires d&apos;accrochage et la pose de peintures ou enduits spécifiques, tout en respectant les normes environnementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés RGE, nos devis sont transparents sans frais cachés, nous proposons une garantie décennale, et nos interventions sont rapides et précises. 95% de nos clients recommandent nos services après réalisation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade à Saint-Sébastien-sur-Loire varie entre 40€ et 80€ du m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial du support. Un pavillon moyen de 100m² représente un budget global entre 4 000€ et 8 000€ TTC.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de sa configuration. Pour un immeuble de 300m², comptez entre 10 et 15 jours ouvrables. Notre équipe optimise chaque étape pour minimiser la gêne et respecter les délais convenus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 15-20 ans, ou lorsque des désordres apparaissent : fissures supérieures à 0,5mm, infiltrations, dégradations importantes. La réglementation impose également un ravalement dans les copropriétés tous les 10 ans pour maintenir la valeur immobilière et la sécurité du bâti.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Saint-Sébastien-sur-Loire ?
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
