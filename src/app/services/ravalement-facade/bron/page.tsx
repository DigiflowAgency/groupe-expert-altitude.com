import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Bron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Bron et ses environs. Spécialistes de la rénovati',
  keywords: 'ravalement facade bron, ravalement immeuble bron, renovation facade bron, peinture facade bron, entreprise ravalement bron, ravalement facade maison bron',
};

export default function RavalementFacadeBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Bron et ses environs. Spécialistes de la rénovation depuis plus de 15 ans, nous transformons l&apos;apparence extérieure de vos bâtiments avec professionnalisme et précision.</p>

        <h2>Nos services de ravalement de façade a Bron</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération esthétique. Nous proposons une expertise complète qui protège et valorise votre patrimoine immobilier. Notre équipe qualifiée réalise un diagnostic précis avant intervention, évaluant l&apos;état des supports, les pathologies potentielles et les traitements nécessaires. Nous utilisons des techniques et matériaux de haute qualité garantissant une protection durable contre les intempéries et l&apos;usure. Chaque chantier à Bron est personnalisé, en respectant l&apos;architecture locale et les normes environnementales actuelles. Nos interventions permettent non seulement d&apos;embellir votre bâtiment mais aussi d&apos;améliorer ses performances thermiques et sa valeur patrimoniale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale maîtrisée depuis 15 ans, 2) Des techniciens certifiés et formés aux dernières techniques, 3) Un devis gratuit et détaillé sous 48h, 4) Des matériaux écologiques et haute performance, garantissant une rénovation durable et esthétique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 40€ et 80€ du m², selon la complexité, les matériaux et l&apos;état initial. Pour un pavillon standard à Bron, comptez entre 3 000€ et 6 500€. Un diagnostic précis permettra d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble oscille entre 2 et 4 semaines, en fonction de la surface, du nombre de façades et des travaux préparatoires. Un immeuble de 4 étages nécessitera généralement 15 à 20 jours de chantier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient légalement obligatoire tous les 10 ans, ou lorsque l&apos;état de la façade présente des désordres compromettant la sécurité ou l&apos;esthétique. À Bron, nous recommandons une vérification tous les 8-10 ans pour maintenir la qualité de votre patrimoine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Bron ?
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
