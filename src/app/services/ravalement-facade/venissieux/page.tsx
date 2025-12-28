import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Vénissieux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Vénissieux et ses environs. Avec plus de 15 ans d',
  keywords: 'ravalement facade vénissieux, ravalement immeuble vénissieux, renovation facade vénissieux, peinture facade vénissieux, entreprise ravalement vénissieux, ravalement facade maison vénissieux',
};

export default function RavalementFacadeVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Vénissieux et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons l&apos;apparence extérieure de vos bâtiments en alliant technicité et esthétique.</p>

        <h2>Nos services de ravalement de façade a Vénissieux</h2>
        <div className="space-y-4">
          <p>Nos services de ravalement de façade représentent bien plus qu&apos;une simple opération de peinture. Nous proposons une rénovation complète qui protège et embellit votre patrimoine immobilier. Notre équipe de professionnels réalise un diagnostic précis avant toute intervention, identifiant les zones nécessitant des réparations structurelles. Nous utilisons des techniques et matériaux de haute qualité adaptés à chaque type de support - pierre, crépi, béton - garantissant une finition impeccable et une protection durable contre les intempéries. À Vénissieux, nous comprenons les spécificités architecturales locales et adaptons notre approche en conséquence.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec un matériel professionnel dernier cri, nos devis sont transparents sans frais cachés, nous garantissons nos travaux 10 ans, et nous respectons scrupuleusement les normes environnementales et de sécurité. Nos interventions sont rapides, précises et sur-mesure.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, l&apos;état initial du support, les matériaux choisis et les traitements nécessaires. Pour un pavillon standard à Vénissieux, comptez environ 4 500€ à 7 000€ pour une surface de 100m².
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. Pour un immeuble de 4-5 étages à Vénissieux, notre équipe réalise généralement le chantier entre 10 et 15 jours ouvrables, en incluant la préparation, les réparations, l&apos;application des enduits et des peintures.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10-15 ans, ou lorsque des dégradations significatives sont constatées : fissures, infiltrations, décoloration importante. La réglementation impose également un ravalement dans certaines copropriétés ou zones protégées, notamment pour maintenir l&apos;esthétique urbaine et préserver la valeur immobilière.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Vénissieux ?
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
