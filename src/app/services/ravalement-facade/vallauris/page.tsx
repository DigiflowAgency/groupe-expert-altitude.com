import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Vallauris | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de haute qualité à Vallauris et ses environs. Spécialistes d',
  keywords: 'ravalement facade vallauris, ravalement immeuble vallauris, renovation facade vallauris, peinture facade vallauris, entreprise ravalement vallauris, ravalement facade maison vallauris',
};

export default function RavalementFacadeVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de haute qualité à Vallauris et ses environs. Spécialistes depuis plus de 15 ans, nous transformons l&apos;apparence et la protection de vos bâtiments avec un savoir-faire artisanal et des techniques innovantes.</p>

        <h2>Nos services de ravalement de façade a Vallauris</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade répond aux exigences techniques et esthétiques les plus pointues. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles collectifs et bâtiments professionnels - en proposant une approche personnalisée. Notre processus débute par un diagnostic précis de l&apos;état de votre façade, permettant d&apos;identifier les pathologies potentielles comme les micro-fissures ou les zones d&apos;usure. Nos équipes utilisent des techniques de préparation de surface rigoureuses, appliquent des enduits techniques et des peintures haute durabilité, garantissant une finition impeccable et une protection optimale contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec des matériaux écologiques et normes RT 2012, nous proposons des garanties décennales, nos devis sont transparents sans frais cachés, et nous maitrisons parfaitement les spécificités architecturales de Vallauris et sa région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ du m², selon la complexité des travaux, l&apos;état initial du support, les matériaux choisis et l&apos;accessibilité. Pour une maison moyenne de 100m², comptez un budget global entre 3 000€ et 8 000€ TTC. Un diagnostic préalable gratuit permettra de définir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade dépend de la surface et de la complexité. Pour un pavillon standard à Vallauris, notre équipe réalise généralement les travaux entre 5 et 10 jours ouvrés. Un immeuble de plusieurs étages peut nécessiter 2 à 4 semaines, en fonction des conditions météorologiques et de l&apos;état initial de la façade.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de la façade présente des dégradations significatives compromettant l&apos;isolation ou l&apos;esthétique. À Vallauris, nous recommandons une inspection tous les 7-8 ans en raison des conditions climatiques méditerranéennes plus agressives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Vallauris ?
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
