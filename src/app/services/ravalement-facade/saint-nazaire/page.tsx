import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en ravalement de façade à Saint-Nazaire, proposant des solutions professionnelles qui redonner',
  keywords: 'ravalement facade saint-nazaire, ravalement immeuble saint-nazaire, renovation facade saint-nazaire, peinture facade saint-nazaire, entreprise ravalement saint-nazaire, ravalement facade maison saint-nazaire',
};

export default function RavalementFacadeSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en ravalement de façade à Saint-Nazaire, proposant des solutions professionnelles qui redonneront vie et éclat à vos bâtiments. Avec plus de 15 ans d&apos;expertise sur la côte atlantique, nous transformons vos façades en véritables atouts patrimoniaux.</p>

        <h2>Nos services de ravalement de façade a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade à Saint-Nazaire combine technicité et esthétique pour protéger et embellir votre patrimoine immobilier. Nous intervenons sur tous types de surfaces - maisons individuelles, immeubles collectifs et bâtiments professionnels - en utilisant des techniques et matériaux adaptés à chaque configuration. Notre processus comprend un diagnostic précis, un nettoyage haute pression, les réparations structurelles nécessaires, puis l&apos;application de peintures et enduits haute performance garantissant une protection durable contre les intempéries marines caractéristiques de la région. Chaque chantier est personnalisé, avec une attention méticuleuse aux détails architecturaux spécifiques à Saint-Nazaire.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec un matériel professionnel dernier cri, nous proposons des devis transparents sans surprise, nos interventions respectent les normes environnementales, et nous garantissons une finition impeccable avec une durabilité minimum de 10 ans. Nos techniciens sont formés aux spécificités des façades de la région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du support, les matériaux choisis et l&apos;état initial. Pour une maison moyenne de 100m² à Saint-Nazaire, comptez entre 3 000€ et 8 000€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. Pour un immeuble de 3-4 étages à Saint-Nazaire, nous estimons généralement entre 10 et 15 jours ouvrables. Ce délai inclut le diagnostic, la préparation, les réparations et la finition.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 15-20 ans, ou en cas de dégradations visibles comme fissures, écaillages ou infiltrations. La réglementation impose également un ravalement dans les copropriétés tous les 10 ans, ou lors de modifications significatives de la copropriété. À Saint-Nazaire, l&apos;environnement maritime accélère la détérioration des façades, rendant ces entretiens plus fréquents.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Saint-Nazaire ?
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
