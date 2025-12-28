import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Aubagne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements de façade impeccables à Aubagne et ses environs. Avec plus de 15 ans d&apos;ex',
  keywords: 'ravalement facade aubagne, ravalement immeuble aubagne, renovation facade aubagne, peinture facade aubagne, entreprise ravalement aubagne, ravalement facade maison aubagne',
};

export default function RavalementFacadeAubagnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Aubagne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements de façade impeccables à Aubagne et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons l&apos;apparence de vos bâtiments en alliant technicité et esthétique.</p>

        <h2>Nos services de ravalement de façade a Aubagne</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une intervention complète qui protège durablement vos murs contre les intempéries et l&apos;usure. Notre équipe qualifiée réalise un diagnostic précis avant toute intervention, en évaluant l&apos;état des supports et en sélectionnant les techniques et matériaux les plus adaptés. À Aubagne, nous comprenons les spécificités climatiques locales qui influencent la durabilité des façades. Nos solutions comprennent le nettoyage haute pression, le traitement des fissures, l&apos;application de primaires d&apos;accrochage et de peintures haute performance garantissant une protection jusqu&apos;à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes sont certifiées RGE, nos devis sont transparents sans frais cachés, nous utilisons des matériaux écologiques et notre intervention respecte les normes environnementales. Nous garantissons un délai d&apos;intervention rapide, généralement sous 15 jours, et proposons un suivi personnalisé de chaque chantier.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ par m², selon la complexité du support, les matériaux choisis et l&apos;état initial de la façade. Pour une maison moyenne de 100m² à Aubagne, comptez un budget global entre 5 000€ et 12 000€. Un diagnostic préalable gratuit permet d&apos;établir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de sa configuration. Pour un immeuble de 4 étages, nous estimons généralement entre 10 et 20 jours ouvrables. Notre planning prend en compte les conditions météorologiques et minimise la gêne pour les occupants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans selon le Code de la construction, ou lorsque l&apos;état de dégradation présente des risques pour la structure ou l&apos;environnement. Dans les copropriétés d&apos;Aubagne, une décision d&apos;assemblée générale est nécessaire pour programmer ces travaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Aubagne ?
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
