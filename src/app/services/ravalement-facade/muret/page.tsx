import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Muret | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade sur Muret et ses environs, transforme l&apos;apparence extérieure de vos bâtiment',
  keywords: 'ravalement facade muret, ravalement immeuble muret, renovation facade muret, peinture facade muret, entreprise ravalement muret, ravalement facade maison muret',
};

export default function RavalementFacadeMuretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Muret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade sur Muret et ses environs, transforme l&apos;apparence extérieure de vos bâtiments avec professionnalisme et expertise. Nous intervenons sur tous types de surfaces pour redonner vie et élégance à vos murs extérieurs.</p>

        <h2>Nos services de ravalement de façade a Muret</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une intervention technique complète qui protège durablement votre patrimoine immobilier contre les agressions climatiques. Notre équipe qualifiée réalise un diagnostic précis avant toute intervention, évaluant l&apos;état des supports, les éventuelles fissures et les besoins spécifiques de votre bâtiment. Nous utilisons uniquement des matériaux haute performance garantissant une finition impeccable et une durabilité jusqu&apos;à 15 ans. Sur Muret et ses alentours, nous adaptons nos techniques à chaque type de construction : maisons individuelles, immeubles collectifs ou bâtiments professionnels.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec des techniques innovantes, notre devis est transparent sans frais cachés, nous garantissons une intervention propre et rapide, et nos réalisations bénéficient d&apos;une garantie décennale. Nos 15 ans d&apos;expérience sur le secteur de Muret nous permettent de comprendre parfaitement les spécificités locales de rénovation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 35€ et 80€ du m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial du support. Pour une maison moyenne de 100m², comptez un budget global entre 3 500€ et 8 000€. Un diagnostic gratuit nous permet de vous proposer un devis précis adapté à votre situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade dépend de la surface et de la complexité. Pour un pavillon standard à Muret, notre équipe réalise généralement le chantier entre 5 et 10 jours ouvrés. Un immeuble de plusieurs étages peut nécessiter 2 à 4 semaines. Nous optimisons toujours nos délais pour minimiser la gêne occasionnée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 15-20 ans, ou en cas de dégradations visibles comme fissures, infiltrations, écaillements. La réglementation impose également un ravalement dans les copropriétés tous les 10 ans. À Muret, nous conseillons une inspection professionnelle tous les 5 ans pour prévenir les désordres potentiels et préserver la valeur de votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Muret ?
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
