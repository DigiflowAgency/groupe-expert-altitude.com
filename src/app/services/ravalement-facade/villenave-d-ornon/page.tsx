import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de qualité à Villenave-d&apos;Ornon. Spécialistes de la rénovatio',
  keywords: 'ravalement facade villenave-d'ornon, ravalement immeuble villenave-d'ornon, renovation facade villenave-d'ornon, peinture facade villenave-d'ornon, entreprise ravalement villenave-d'ornon, ravalement facade maison villenave-d'ornon',
};

export default function RavalementFacadeVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de qualité à Villenave-d&apos;Ornon. Spécialistes de la rénovation extérieure, nous transformons l&apos;apparence et la durabilité de vos bâtiments avec un savoir-faire précis et des techniques innovantes.</p>

        <h2>Nos services de ravalement de façade a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération cosmétique. Nous réalisons des interventions complètes qui protègent et valorisent votre patrimoine immobilier. Notre équipe technique analyse chaque surface avec une expertise pointue, en considérant les spécificités architecturales de Villenave-d&apos;Ornon et les contraintes environnementales locales. Nous utilisons des matériaux haute performance qui garantissent une protection contre l&apos;humidité, les intempéries et assurent une finition esthétique impeccable. Notre processus inclut un diagnostic précis, une préparation méticuleuse des surfaces, l&apos;application de techniques de traitement adaptées et une finition qui respecte l&apos;identité de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience. Nous proposons des devis transparents sans frais cachés. Notre engagement qualité est garanti par des matériaux certifiés et une intervention respectueuse des normes environnementales. Nous intervenons rapidement et efficacement sur Villenave-d&apos;Ornon et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie généralement entre 40€ et 120€ le m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial de la surface. Pour une maison moyenne de 100m², comptez un budget entre 4 000€ et 12 000€. Nos devis détaillés vous permettront d&apos;avoir une estimation précise adaptée à votre projet spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa configuration. Pour un immeuble de taille moyenne (500-1000m²), nous estimons une intervention entre 3 et 6 semaines. Notre équipe optimise chaque étape pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans selon la réglementation française. Il est notamment nécessaire lorsque des signes de dégradation apparaissent : fissures, infiltrations, écaillage de peinture. Dans les copropriétés, un ravalement est légalement requis tous les 10 ans pour maintenir la valeur et la sécurité du bâtiment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Villenave-d'Ornon ?
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
