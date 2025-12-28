import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Six-Fours-les-Plages | Groupe Expert Altitude Com',
  description: 'Transformez l&apos;apparence de votre propriété avec Groupe Expert Altitude Com, le spécialiste du ravalement de façade à Six-Fours-les-Plages. Nos experts redo',
  keywords: 'ravalement facade six-fours-les-plages, ravalement immeuble six-fours-les-plages, renovation facade six-fours-les-plages, peinture facade six-fours-les-plages, entreprise ravalement six-fours-les-plages, ravalement facade maison six-fours-les-plages',
};

export default function RavalementFacadeSixFoursLesPlagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Six-Fours-les-Plages</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez l&apos;apparence de votre propriété avec Groupe Expert Altitude Com, le spécialiste du ravalement de façade à Six-Fours-les-Plages. Nos experts redonnent vie à vos murs avec des solutions sur-mesure, alliant expertise technique et esthétique.</p>

        <h2>Nos services de ravalement de façade a Six-Fours-les-Plages</h2>
        <div className="space-y-4">
          <p>Le ravalement de façade est bien plus qu&apos;une simple opération cosmétique : c&apos;est un investissement durable pour protéger et valoriser votre patrimoine immobilier. Notre équipe intervient sur tous types de bâtiments, des maisons individuelles aux immeubles collectifs, en utilisant des techniques et matériaux de dernière génération. À Six-Fours-les-Plages, nous comprenons les spécificités climatiques locales qui impactent directement la qualité des façades. Notre processus comprend un diagnostic précis, un traitement anti-humidité, une préparation minutieuse des surfaces et une application de peinture ou d&apos;enduit haute performance garantissant une résistance optimale aux embruns marins et aux variations de température.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence repose sur trois piliers : expertise technique, qualité des matériaux et satisfaction client. Nous proposons des devis transparents sans surprise, intervenons avec des équipes certifiées, utilisons uniquement des produits écologiques et garantissons une finition impeccable. Nos réalisations bénéficient d&apos;une garantie décennale, gage de notre engagement et professionnalisme.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ le m², selon la surface, l&apos;état initial, les matériaux choisis et la complexité des travaux. Pour une maison moyenne de 100m² à Six-Fours-les-Plages, comptez un budget global entre 3 000€ et 8 000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa complexité : généralement entre 1 et 3 semaines. Un immeuble de 4 étages nécessitera environ 10-15 jours de travaux, hors préparation et séchage.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10 ans en copropriété, selon le Code de la Construction. Il est également recommandé en cas de dégradations visibles, infiltrations, fissures ou pour améliorer la performance énergétique du bâtiment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Six-Fours-les-Plages ?
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
