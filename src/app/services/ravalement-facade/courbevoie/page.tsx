import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Courbevoie | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Courbevoie. Spécialistes de la rénovation exté',
  keywords: 'ravalement facade courbevoie, ravalement immeuble courbevoie, renovation facade courbevoie, peinture facade courbevoie, entreprise ravalement courbevoie, ravalement facade maison courbevoie',
};

export default function RavalementFacadeCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Courbevoie. Spécialistes de la rénovation extérieure, nous transformons l&apos;apparence de vos bâtiments avec un savoir-faire précis et une qualité irréprochable.</p>

        <h2>Nos services de ravalement de façade a Courbevoie</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération esthétique. Nous proposons une expertise complète qui protège durablement votre patrimoine immobilier contre les agressions climatiques. Notre équipe de professionnels réalise un diagnostic technique précis avant toute intervention, identifiant les zones nécessitant une attention particulière. Nous utilisons uniquement des matériaux haute performance, garantissant une finition impeccable et une protection optimale. Notre processus inclut le nettoyage, le traitement des fissures, l&apos;application de primaires spécifiques et une peinture aux normes environnementales. Chaque chantier à Courbevoie est personnalisé selon les caractéristiques architecturales de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience. Nous garantissons des délais précis, une transparence totale sur les devis et une intervention respectueuse de votre environnement. Notre taux de satisfaction client dépasse 95%, preuve de notre engagement qualité. Nous proposons également une garantie décennale sur tous nos travaux de ravalement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ par m², selon la complexité du bâtiment, les matériaux et les traitements nécessaires. Pour un immeuble à Courbevoie de 200 m², comptez un budget global entre 10 000€ et 24 000€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble oscille généralement entre 2 et 4 semaines. Les facteurs déterminants sont la surface totale, l&apos;état initial de la façade et les conditions météorologiques. Un immeuble moyen à Courbevoie de 300 m² nécessitera environ 15 à 20 jours de travaux, préparation et finitions comprises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement de façade devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de dégradation présente des risques pour la sécurité. À Courbevoie, les copropriétés sont particulièrement vigilantes sur l&apos;entretien des parties communes. Un ravalement est également recommandé après des désordres structurels, des infiltrations ou une détérioration significative des enduits extérieurs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Courbevoie ?
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
