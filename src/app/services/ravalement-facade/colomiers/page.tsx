import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Colomiers | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Colomiers, transforme l&apos;apparence extérieure de vos bâtiments avec précisi',
  keywords: 'ravalement facade colomiers, ravalement immeuble colomiers, renovation facade colomiers, peinture facade colomiers, entreprise ravalement colomiers, ravalement facade maison colomiers',
};

export default function RavalementFacadeColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Colomiers, transforme l&apos;apparence extérieure de vos bâtiments avec précision et expertise. Nous combinons savoir-faire technique et esthétique pour redonner vie et valeur à vos murs extérieurs.</p>

        <h2>Nos services de ravalement de façade a Colomiers</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade répond aux exigences les plus pointues des propriétaires de Colomiers et ses environs. Notre équipe qualifiée intervient sur tous types de bâtiments - maisons individuelles, immeubles collectifs, locaux professionnels - en proposant une solution sur-mesure. Nous utilisons des techniques modernes et des matériaux haute performance qui garantissent une protection durable contre les intempéries, l&apos;humidité et les agressions environnementales. Notre processus comprend un diagnostic précis, une préparation minutieuse des surfaces, l&apos;application de produits adaptés et une finition soignée qui valorise votre patrimoine immobilier.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec des techniques innovantes, nos devis sont transparents sans frais cachés, nous garantissons une intervention propre et rapide, et nos réalisations bénéficient d&apos;une garantie décennale. Nos 15 ans d&apos;expérience sur Colomiers et la région toulousaine sont votre gage de professionnalisme.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la surface, l&apos;état initial, les matériaux choisis et la complexité des travaux. Pour une maison moyenne de 100m², comptez un budget global entre 3 000€ et 8 000€. Un diagnostic précis nous permettra de vous proposer un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa configuration. Pour un immeuble standard de 3-4 étages, nous estimons une intervention entre 10 et 15 jours ouvrés. Notre équipe s&apos;engage à minimiser les nuisances et respecter les délais convenus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans, ou lorsque des désordres sont constatés : fissures, infiltrations, dégradations esthétiques. La réglementation impose également un ravalement dans les copropriétés tous les 10 ans, notamment dans les zones urbaines comme Colomiers où l&apos;aspect architectural est primordial.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Colomiers ?
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
