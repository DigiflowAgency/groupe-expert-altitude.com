import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Cagnes-sur-Mer. Spécialistes de la rénovation ',
  keywords: 'ravalement facade cagnes-sur-mer, ravalement immeuble cagnes-sur-mer, renovation facade cagnes-sur-mer, peinture facade cagnes-sur-mer, entreprise ravalement cagnes-sur-mer, ravalement facade maison cagnes-sur-mer',
};

export default function RavalementFacadeCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Cagnes-sur-Mer. Spécialistes de la rénovation depuis plus de 15 ans, nous transformons l&apos;apparence et la durabilité de vos bâtiments avec un savoir-faire technique et artistique.</p>

        <h2>Nos services de ravalement de façade a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération de peinture. Nous proposons une expertise complète qui valorise votre patrimoine immobilier, protège vos murs contre les intempéries et améliore significativement l&apos;esthétique de votre bien. Notre processus commence par un diagnostic précis de l&apos;état de votre façade, suivi d&apos;un nettoyage professionnel, de réparations éventuelles et d&apos;une application de peinture ou d&apos;enduit haute performance. Chaque intervention est personnalisée, que ce soit pour une maison individuelle ou un immeuble collectif à Cagnes-sur-Mer.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec des artisans hautement qualifiés, 2) Des matériaux écologiques et durables, 3) Un devis transparent sans frais cachés, 4) Une garantie décennale sur nos travaux. Nous sommes reconnus pour notre professionnalisme et notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial de la surface. Pour une maison moyenne de 100m², comptez un budget global entre 3 000€ et 8 000€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, pour un immeuble de 4 étages à Cagnes-sur-Mer, le chantier prend entre 10 et 15 jours ouvrables. Ce délai inclut la préparation, les réparations, l&apos;application des enduits et des peintures.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement de façade devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de dégradation compromet la solidité du bâtiment. À Cagnes-sur-Mer, où l&apos;environnement maritime peut accélérer l&apos;usure, nous recommandons une inspection professionnelle tous les 7-8 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Cagnes-sur-Mer ?
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
