import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a La Garde | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à La Garde et ses environs. Spécialistes de la réno',
  keywords: 'ravalement facade la garde, ravalement immeuble la garde, renovation facade la garde, peinture facade la garde, entreprise ravalement la garde, ravalement facade maison la garde',
};

export default function RavalementFacadeLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à La Garde et ses environs. Spécialistes de la rénovation extérieure depuis plus de 15 ans, nous transformons l&apos;apparence de vos bâtiments avec un savoir-faire technique et esthétique.</p>

        <h2>Nos services de ravalement de façade a La Garde</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une expertise complète qui protège et valorise votre patrimoine immobilier. Notre processus commence par un diagnostic précis de l&apos;état de votre façade, évaluant les pathologies potentielles comme les fissures, l&apos;usure ou les problèmes d&apos;étanchéité. À La Garde, nous utilisons des techniques et matériaux adaptés au climat méditerranéen, garantissant une résistance optimale aux variations climatiques. Nos équipes professionnelles maîtrisent tous les types de supports : pierre, enduit, béton ou brique, en appliquant des techniques de préparation, de réparation et de finition qui assurent une protection durable et un rendu impeccable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos points forts incluent : une équipe certifiée avec plus de 15 ans d&apos;expérience, des techniques de ravalement respectant les normes environnementales, un devis personnalisé et gratuit, et une garantie décennale sur nos travaux. Nous intervenons rapidement sur La Garde et toute la métropole varoise.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, l&apos;état initial du support, et les finitions choisies. Pour une maison moyenne de 100m², comptez entre 3 000€ et 8 000€. Un diagnostic précis permettra d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, pour un immeuble de 3 à 4 étages, prévoyez 2 à 4 semaines de travaux. Les étapes incluent le diagnostic, la préparation des surfaces, les réparations, l&apos;application des enduits et des peintures, avec des temps de séchage entre chaque intervention.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans dans les copropriétés, selon le Code de la Construction. Il est également recommandé lorsque l&apos;on constate des détériorations significatives comme des fissures, des infiltrations, ou une dégradation esthétique importante qui peut affecter la valeur immobilière du bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a La Garde ?
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
