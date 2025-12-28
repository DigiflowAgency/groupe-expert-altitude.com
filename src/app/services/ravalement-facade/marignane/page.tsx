import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Marignane | Groupe Expert Altitude Com',
  description: 'Votre façade mérite le meilleur traitement, et à Marignane, le Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements impeccable',
  keywords: 'ravalement facade marignane, ravalement immeuble marignane, renovation facade marignane, peinture facade marignane, entreprise ravalement marignane, ravalement facade maison marignane',
};

export default function RavalementFacadeMarignanePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Marignane</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre façade mérite le meilleur traitement, et à Marignane, le Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements impeccables. Nous transformons l&apos;apparence extérieure de vos bâtiments avec un savoir-faire technique et une précision chirurgicale.</p>

        <h2>Nos services de ravalement de façade a Marignane</h2>
        <div className="space-y-4">
          <p>Le ravalement de façade est bien plus qu&apos;une simple opération esthétique, c&apos;est un investissement dans la protection et la valorisation de votre patrimoine immobilier. Notre équipe spécialisée intervient sur tous types de bâtiments à Marignane, des maisons individuelles aux immeubles collectifs, en utilisant des techniques et des matériaux de haute qualité. Nous réalisons un diagnostic précis avant chaque intervention, identifiant les zones nécessitant une rénovation en profondeur. Notre processus comprend le nettoyage, le traitement des fissures, l&apos;application d&apos;enduits techniques et de peintures spécifiques, garantissant une finition impeccable et une protection durable contre les intempéries. Chaque projet est unique et personnalisé, avec des solutions adaptées à l&apos;architecture et aux contraintes spécifiques de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts reconnus à Marignane depuis plus de 15 ans, nous combinons expertise technique et engagement qualité. Notre équipe certifiée intervient avec un matériel professionnel dernier cri, proposant des délais courts et une garantie décennale. Nous maîtrisons parfaitement les normes environnementales et réglementaires, assurant un service clé en main et sans surprise.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la surface. Pour une maison moyenne à Marignane de 100m², comptez un budget global entre 3 000€ et 8 000€. Un diagnostic préalable gratuit permet d&apos;établir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état, généralement entre 1 et 3 semaines. Pour un immeuble de 4 étages à Marignane, notre équipe réalise généralement le chantier en 10 à 15 jours ouvrables, avec une préparation et un nettoyage méticuleux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans, ou en cas de dégradations visibles comme fissures, écaillements, ou infiltrations. La réglementation impose un ravalement tous les 10 ans dans les copropriétés, pour maintenir la salubrité et la valeur immobilière du bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Marignane ?
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
