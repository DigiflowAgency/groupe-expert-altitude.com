import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Ollioules | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Ollioules et dans tout le Var. Avec plus de 15',
  keywords: 'ravalement facade ollioules, ravalement immeuble ollioules, renovation facade ollioules, peinture facade ollioules, entreprise ravalement ollioules, ravalement facade maison ollioules',
};

export default function RavalementFacadeOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Ollioules et dans tout le Var. Avec plus de 15 ans d&apos;expertise, nous transformons vos bâtiments en véritables joyaux architecturaux, alliant esthétique et protection durable.</p>

        <h2>Nos services de ravalement de façade a Ollioules</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une approche technique complète qui protège votre patrimoine immobilier contre les agressions climatiques de la région provençale. Notre méthode commence par un diagnostic précis de l&apos;état de votre façade, suivi d&apos;un nettoyage haute pression, d&apos;un traitement anti-mousse et d&apos;une application de peinture ou d&apos;enduit adapté à vos supports. À Ollioules, nous comprenons les spécificités architecturales locales et utilisons des techniques respectueuses de l&apos;environnement et des matériaux traditionnels. Nos équipes qualifiées garantissent un résultat impeccable, avec des finitions qui valorisent votre bien et lui offrent une protection optimale contre l&apos;humidité et les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos atouts : une équipe de 12 professionnels certifiés, un devis personnalisé sous 48h, des matériaux de haute qualité, une garantie décennale, et une intervention rapide sur Ollioules et ses environs. Nous sommes également engagés dans des pratiques éco-responsables, utilisant des produits à faible impact environnemental.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la surface. Pour une maison moyenne de 100m² à Ollioules, comptez un budget global entre 3 000€ et 8 000€. Nous proposons systématiquement un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, pour un immeuble de 3 étages à Ollioules, le chantier dure entre 10 et 15 jours ouvrés. Notre planning précis vous est communiqué dès la phase de devis pour une parfaite organisation.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 15-20 ans, ou en cas de dégradations visibles comme des fissures, moisissures ou écaillements. La réglementation impose également un ravalement tous les 10 ans dans les copropriétés. Notre expertise vous guide pour respecter ces obligations légales tout en préservant l&apos;esthétique de votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Ollioules ?
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
