import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Cenon | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Cenon et ses environs. Avec plus de 15 ans d&apos;e',
  keywords: 'ravalement facade cenon, ravalement immeuble cenon, renovation facade cenon, peinture facade cenon, entreprise ravalement cenon, ravalement facade maison cenon',
};

export default function RavalementFacadeCenonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Cenon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Cenon et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons l&apos;apparence de vos bâtiments en alliant précision technique et esthétique recherchée.</p>

        <h2>Nos services de ravalement de façade a Cenon</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une intervention complète qui protège et valorise votre patrimoine immobilier. Notre équipe de professionnels analyse minutieusement chaque surface pour déterminer le traitement optimal, qu&apos;il s&apos;agisse de peinture, d&apos;enduit ou de réparation structurelle. À Cenon, nous comprenons les spécificités climatiques locales et sélectionnons des matériaux résistants aux variations météorologiques. Nos techniques garantissent une finition impeccable qui préservera votre façade pendant 10 à 15 ans, tout en améliorant l&apos;isolation thermique et l&apos;étanchéité de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos atouts incluent : une équipe certifiée avec plus de 15 ans d&apos;expérience, des techniques innovantes respectueuses de l&apos;environnement, un devis personnalisé et gratuit, et une garantie décennale sur nos interventions. Nous sommes reconnus pour notre professionnalisme et notre engagement qualité sur Cenon et toute la région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial de la surface. Un ravalement standard pour une maison de 100m² coûtera environ 3 500€ à 6 000€. Nous proposons systématiquement un diagnostic précis et un devis détaillé sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état, mais en moyenne, comptez 2 à 4 semaines pour un immeuble de 4 à 6 étages. Notre méthode inclut le diagnostic préalable, la préparation des surfaces, les réparations éventuelles, l&apos;application des enduits et des peintures, avec un planning précis et respecté.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 15-20 ans, ou en cas de dégradations visibles comme des fissures, des infiltrations ou un aspect délabré. La réglementation impose également un ravalement tous les 10 ans dans les copropriétés. À Cenon, nous conseillons une inspection professionnelle tous les 5 ans pour prévenir les dégradations potentielles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Cenon ?
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
