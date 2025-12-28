import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Orvault | Groupe Expert Altitude Com',
  description: 'Votre façade mérite le meilleur traitement, et le Groupe Expert Altitude Com est votre partenaire de confiance à Orvault pour des ravalements impeccables. ',
  keywords: 'ravalement facade orvault, ravalement immeuble orvault, renovation facade orvault, peinture facade orvault, entreprise ravalement orvault, ravalement facade maison orvault',
};

export default function RavalementFacadeOrvaultPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Orvault</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre façade mérite le meilleur traitement, et le Groupe Expert Altitude Com est votre partenaire de confiance à Orvault pour des ravalements impeccables. Nous transformons l&apos;apparence extérieure de votre propriété avec un savoir-faire précis et des techniques innovantes.</p>

        <h2>Nos services de ravalement de façade a Orvault</h2>
        <div className="space-y-4">
          <p>Le ravalement de façade représente bien plus qu&apos;un simple rafraîchissement esthétique. Notre équipe spécialisée réalise des interventions complètes qui protègent et valorisent votre patrimoine immobilier. Nous analysons précisément l&apos;état des supports, sélectionnons les matériaux adaptés et mettons en œuvre des techniques garantissant une protection durable contre les intempéries. Sur Orvault et ses environs, nous intervenons aussi bien sur les maisons individuelles que les immeubles collectifs, avec une attention particulière aux spécificités architecturales locales. Nos experts utilisent des techniques modernes qui assurent non seulement un résultat impeccable mais aussi une protection renforcée de vos murs extérieurs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence du ravalement. Nos points forts : une expertise de plus de 15 ans, des techniciens certifiés, des matériaux haut de gamme sélectionnés rigoureusement, et une approche environnementale responsable. Nous garantissons des délais précis, une transparence totale des devis et une intervention sur-mesure adaptée à chaque type de bâtiment.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ du m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial du support. Pour une maison moyenne de 100m² à Orvault, comptez un budget global entre 3 000€ et 8 000€. Nos devis détaillés incluent systématiquement le diagnostic préalable, la préparation des surfaces, les produits et la main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa superficie et de sa complexité. Pour un immeuble standard de 300-500m², notre équipe réalise généralement l&apos;intervention entre 10 et 15 jours ouvrés. Ce délai comprend la préparation, le traitement des supports, l&apos;application des différentes couches et le nettoyage final du chantier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 15-20 ans ou lorsque des désordres sont constatés : fissures, infiltrations, dégradations importantes. La réglementation impose également un ravalement dans certaines copropriétés tous les 10 ans, notamment dans les zones urbaines comme Orvault. Un diagnostic précis permet de déterminer la nécessité et l&apos;urgence des travaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Orvault ?
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
