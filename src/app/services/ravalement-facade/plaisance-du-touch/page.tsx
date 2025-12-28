import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Plaisance-du-Touch | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Plaisance-du-Touch. Nous transformons l&apos;appare',
  keywords: 'ravalement facade plaisance-du-touch, ravalement immeuble plaisance-du-touch, renovation facade plaisance-du-touch, peinture facade plaisance-du-touch, entreprise ravalement plaisance-du-touch, ravalement facade maison plaisance-du-touch',
};

export default function RavalementFacadePlaisanceDuTouchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Plaisance-du-Touch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Plaisance-du-Touch. Nous transformons l&apos;apparence extérieure de vos bâtiments avec un savoir-faire artisanal et des techniques innovantes qui protègent et valorisent votre patrimoine immobilier.</p>

        <h2>Nos services de ravalement de façade a Plaisance-du-Touch</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade répond aux exigences techniques les plus strictes, en proposant une rénovation complète qui allie esthétique et performance. Nos experts réalisent un diagnostic précis de votre bâtiment, identifiant les zones nécessitant une intervention et les traitements adaptés. Nous utilisons uniquement des matériaux de haute qualité, résistants aux conditions climatiques de la région toulousaine, garantissant ainsi une protection durable contre l&apos;humidité, les micro-fissures et les dégradations environnementales. Notre processus inclut un nettoyage approfondi, la réparation des supports, l&apos;application de primaires techniques et de peintures spécialisées, pour un résultat qui peut augmenter la valeur de votre bien de 10 à 15%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient sur Plaisance-du-Touch avec plus de 15 ans d&apos;expérience, un devis personnalisé gratuit, des techniques respectueuses de l&apos;environnement, et une garantie décennale. Nous maîtrisons parfaitement les normes techniques de ravalement et proposons des solutions sur-mesure adaptées à chaque type de bâtiment.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité des travaux, l&apos;état du support et les matériaux choisis. Pour une maison moyenne de 100m² à Plaisance-du-Touch, comptez un budget global entre 3 000€ et 8 000€, incluant préparation, réparations et finitions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, nos équipes réalisent un chantier entre 5 et 15 jours ouvrés. Un immeuble de 4 étages nécessitera environ 10 jours de travaux, avec des interventions soigneusement planifiées pour minimiser la gêne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 15-20 ans, ou lorsque des désordres significatifs sont constatés : fissures supérieures à 0,5mm, décollement des peintures, infiltrations. La réglementation impose également un ravalement dans certaines copropriétés tous les 10 ans, notamment dans les zones urbaines comme Plaisance-du-Touch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Plaisance-du-Touch ?
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
