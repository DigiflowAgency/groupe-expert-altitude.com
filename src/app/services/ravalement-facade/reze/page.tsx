import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Rezé | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Rezé et ses environs. Nous transformons l&apos;apparen',
  keywords: 'ravalement facade rezé, ravalement immeuble rezé, renovation facade rezé, peinture facade rezé, entreprise ravalement rezé, ravalement facade maison rezé',
};

export default function RavalementFacadeRezePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Rezé</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Rezé et ses environs. Nous transformons l&apos;apparence extérieure de vos bâtiments avec une expertise technique et un sens du détail inégalés.</p>

        <h2>Nos services de ravalement de façade a Rezé</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une approche complète qui protège et valorise votre patrimoine immobilier. Notre équipe qualifiée analyse précisément l&apos;état de votre façade, sélectionne les techniques et matériaux adaptés, et réalise un travail sur-mesure. Nous traitons aussi bien les maisons individuelles que les immeubles collectifs, en garantissant une finition professionnelle et durable. Nos interventions permettent de protéger votre bâtiment contre l&apos;humidité, les agressions climatiques et de lui redonner un aspect neuf et élégant.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience. Nous utilisons uniquement des matériaux haute performance respectueux de l&apos;environnement. Notre devis est transparent, sans surprise, et nous proposons une garantie décennale. Sur Rezé, nous connaissons parfaitement les spécificités architecturales locales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 35€ et 80€ au m², selon la surface, l&apos;état initial, les matériaux choisis et la complexité des travaux. Pour une maison moyenne de 100m², comptez entre 3500€ et 8000€. Un diagnostic préalable gratuit permettra d&apos;affiner ce budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa complexité. Pour un immeuble de 4 étages, nous estimons généralement entre 3 et 5 semaines. Notre planning précis vous sera communiqué dès le premier rendez-vous, avec un engagement de respect des délais.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans, ou en cas de détériorations visibles comme des fissures, des moisissures ou des écaillages. La réglementation impose également un ravalement dans certaines copropriétés tous les 20 ans, ou sur injonction municipale pour des raisons de sécurité et d&apos;esthétique urbaine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Rezé ?
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
