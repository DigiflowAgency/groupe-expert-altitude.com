import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Nanterre | Groupe Expert Altitude Com',
  description: 'Votre façade mérite le meilleur traitement, et à Nanterre, le Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements impeccables',
  keywords: 'ravalement facade nanterre, ravalement immeuble nanterre, renovation facade nanterre, peinture facade nanterre, entreprise ravalement nanterre, ravalement facade maison nanterre',
};

export default function RavalementFacadeNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre façade mérite le meilleur traitement, et à Nanterre, le Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements impeccables. Nous transformons vos bâtiments avec une expertise technique et un sens du détail qui font la différence sur tout le territoire nanterrien.</p>

        <h2>Nos services de ravalement de façade a Nanterre</h2>
        <div className="space-y-4">
          <p>Le ravalement de façade est bien plus qu&apos;une simple opération esthétique - c&apos;est un investissement crucial pour la préservation et la valorisation de votre patrimoine immobilier. Notre équipe hautement qualifiée réalise des interventions complètes qui protègent durablement vos murs contre l&apos;humidité, les intempéries et le vieillissement. Nous utilisons des techniques et matériaux de pointe, adaptés à chaque type de surface : pierre, crépi, béton ou brique. Notre processus comprend un diagnostic précis, une préparation minutieuse des surfaces, l&apos;application de produits haute performance et une finition soignée qui garantit un résultat impeccable. Chaque projet est personnalisé, avec des solutions techniques qui respectent l&apos;architecture originale tout en apportant une protection moderne et durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec un outillage professionnel dernier cri, nous garantissons des délais respectés à 100%, nos devis sont transparents sans frais cachés, et nous proposons une garantie décennale sur tous nos travaux. Nos 15 ans d&apos;expérience à Nanterre et dans les Hauts-de-Seine parlent d&apos;elles-mêmes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie généralement entre 50€ et 120€ par m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la surface. Pour une maison moyenne de 100m², comptez un budget entre 5 000€ et 12 000€. Un diagnostic précis nous permet de vous proposer un devis sur-mesure sans mauvaises surprises.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa complexité. Pour un immeuble de 4 à 6 étages, notre équipe réalise généralement le chantier en 2 à 4 semaines. Nous optimisons systématiquement notre planning pour minimiser la gêne pour les occupants, avec des interventions méthodiques et efficaces.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans selon la réglementation française, ou lorsque des dégradations significatives sont constatées : fissures, infiltrations, écaillements de peinture. Pour les copropriétés à Nanterre, un ravalement peut également être imposé par l&apos;assemblée générale pour maintenir la valeur et l&apos;esthétique du bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Nanterre ?
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
