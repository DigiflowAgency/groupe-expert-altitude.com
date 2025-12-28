import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Bouguenais | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de qualité à Bouguenais et ses environs. Spécialistes de la rén',
  keywords: 'ravalement facade bouguenais, ravalement immeuble bouguenais, renovation facade bouguenais, peinture facade bouguenais, entreprise ravalement bouguenais, ravalement facade maison bouguenais',
};

export default function RavalementFacadeBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de qualité à Bouguenais et ses environs. Spécialistes de la rénovation depuis plus de 15 ans, nous transformons l&apos;apparence extérieure de vos bâtiments avec une expertise technique et un sens du détail irréprochables.</p>

        <h2>Nos services de ravalement de façade a Bouguenais</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade offre une solution complète et personnalisée pour protéger et embellir votre patrimoine immobilier. Nos experts réalisent un diagnostic précis de votre bâtiment, évaluant l&apos;état des supports, les éventuelles fissures et l&apos;usure des matériaux. Nous utilisons uniquement des techniques et matériaux de haute qualité, garantissant une finition impeccable et une durabilité maximale. Notre process comprend le nettoyage haute pression, le traitement des imperfections, l&apos;application de primaires d&apos;accrochage et de peintures spécialisées adaptées à chaque type de surface. Nos interventions respectent scrupuleusement les normes environnementales et techniques en vigueur.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés et formés aux dernières techniques de ravalement. Nous proposons des devis transparents sans frais cachés. Notre équipe intervient rapidement sur Bouguenais et la métropole nantaise. Nous garantissons nos travaux pendant 10 ans et utilisons des matériaux écologiques et performants.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la surface. Un pavillon moyen de 100m² coûtera environ 3500€ à 6000€. Nous réalisons un diagnostic précis pour un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa complexité. Pour un immeuble de 3-4 étages, comptez entre 10 et 15 jours ouvrés. Notre équipe optimise chaque intervention pour minimiser la gêne et respecter les délais convenus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 15-20 ans, ou en cas de détériorations significatives. La loi impose aux copropriétés de maintenir l&apos;état extérieur des immeubles. À Bouguenais, nous recommandons une inspection tous les 10 ans pour prévenir les dégradations et préserver la valeur immobilière.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Bouguenais ?
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
