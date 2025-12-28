import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Meyzieu | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Meyzieu et ses environs. Nos experts transforment',
  keywords: 'ravalement facade meyzieu, ravalement immeuble meyzieu, renovation facade meyzieu, peinture facade meyzieu, entreprise ravalement meyzieu, ravalement facade maison meyzieu',
};

export default function RavalementFacadeMeyzieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Meyzieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Meyzieu et ses environs. Nos experts transforment l&apos;apparence extérieure de votre propriété avec des solutions sur-mesure et une qualité irréprochable.</p>

        <h2>Nos services de ravalement de façade a Meyzieu</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade répond aux exigences techniques et esthétiques les plus strictes. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles collectifs et bâtiments professionnels - en utilisant des techniques et matériaux de dernière génération. Notre processus commence par un diagnostic précis de l&apos;état de votre façade, suivi d&apos;une préparation minutieuse des surfaces : réparation des fissures, traitement anti-mousse et protection avant peinture. Nous sélectionnons des revêtements adaptés à l&apos;architecture de Meyzieu et aux conditions climatiques locales, garantissant une finition élégante et durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec un outillage professionnel, nos devis sont transparents sans frais cachés, nous proposons une garantie décennale, et nos interventions respectent scrupuleusement les normes environnementales. 95% de nos clients recommandent nos services après réalisation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 35€ et 80€ au m², selon la complexité des travaux, les matériaux choisis et l&apos;état initial de la surface. Pour une maison moyenne à Meyzieu, comptez un budget global entre 4 000€ et 12 000€. Un diagnostic précis permet d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa superficie et de sa configuration. En moyenne, notre équipe réalise les travaux entre 10 et 20 jours ouvrés. Un immeuble de 4 étages nécessitera environ 15 jours, en tenant compte des préparatifs, des traitements et des finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans selon le Code de la Construction. Les signes qui imposent sa réalisation sont : dégradations visibles, fissures, infiltrations, peinture écaillée ou présence de moisissures. À Meyzieu, nous recommandons un diagnostic tous les 8-10 ans pour prévenir les détériorations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Meyzieu ?
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
