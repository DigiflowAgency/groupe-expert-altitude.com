import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Bordeaux | Groupe Expert Altitude Com',
  description: 'Le ravalement de façade est bien plus qu&apos;un simple rafraîchissement esthétique : c&apos;est un investissement stratégique pour votre patrimoine immobilier à Bor',
  keywords: 'ravalement facade bordeaux, ravalement immeuble bordeaux, renovation facade bordeaux, peinture facade bordeaux, entreprise ravalement bordeaux, ravalement facade maison bordeaux',
};

export default function RavalementFacadeBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le ravalement de façade est bien plus qu&apos;un simple rafraîchissement esthétique : c&apos;est un investissement stratégique pour votre patrimoine immobilier à Bordeaux. Notre expertise du Groupe Expert Altitude Com transforme vos bâtiments en véritables joyaux architecturaux, protégés contre les agressions climatiques de la région.</p>

        <h2>Nos services de ravalement de façade a Bordeaux</h2>
        <div className="space-y-4">
          <p>Spécialistes du ravalement de façade à Bordeaux depuis plus de 15 ans, nous proposons une approche complète et sur-mesure. Notre processus débute par un diagnostic précis de votre bâtiment, évaluant l&apos;état des supports, les pathologies potentielles et les techniques de rénovation adaptées. Nous utilisons uniquement des matériaux haute performance, garantissant une protection optimale contre l&apos;humidité, les UV et les variations climatiques. Notre équipe maîtrise parfaitement les techniques modernes : imperméabilisation, réfection des enduits, peinture technique, traitement anti-mousse, et valorisation architecturale. Chaque chantier est pensé pour allier durabilité, esthétique et économies énergétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence ? Une expertise locale pointue, des techniciens certifiés, un engagement qualité total. Nous proposons des devis transparents sans surprise, intervenons rapidement sur Bordeaux et sa métropole, et garantissons nos travaux 10 ans. 95% de nos clients nous recommandent, preuve de notre professionnalisme.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ le m², selon la complexité des travaux, les matériaux choisis et l&apos;état initial du support. Pour un pavillon bordelais moyen de 100m², comptez un budget entre 5 000€ et 12 000€. Nos devis détaillés incluent toujours une analyse précise pour éviter les surcoûts.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de sa configuration. Pour un immeuble de 300m², notre équipe réalise généralement les travaux entre 3 et 5 semaines. Ce délai intègre le diagnostic, la préparation des supports, l&apos;application des traitements et les finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10 ans selon le Code de la Construction, ou quand l&apos;état de la façade présente des désordres significatifs : fissures, infiltrations, dégradations importantes. À Bordeaux, le climat océanique accélère parfois la détérioration, rendant ces interventions cruciales pour préserver la valeur de votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Bordeaux ?
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
