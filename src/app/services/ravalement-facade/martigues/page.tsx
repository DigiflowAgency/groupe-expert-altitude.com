import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Martigues | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements de façade impeccables à Martigues et ses environs. Nous transformons l&apos;ap',
  keywords: 'ravalement facade martigues, ravalement immeuble martigues, renovation facade martigues, peinture facade martigues, entreprise ravalement martigues, ravalement facade maison martigues',
};

export default function RavalementFacadeMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements de façade impeccables à Martigues et ses environs. Nous transformons l&apos;apparence extérieure de vos bâtiments avec un savoir-faire technique et une attention méticuleuse aux détails.</p>

        <h2>Nos services de ravalement de façade a Martigues</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nos experts interviennent sur tous types de bâtiments - maisons individuelles, immeubles collectifs et locaux professionnels - en utilisant des techniques et matériaux de haute qualité. À Martigues, nous comprenons les spécificités climatiques locales qui impactent vos façades, notamment l&apos;exposition au soleil et aux embruns méditerranéens. Notre processus comprend un diagnostic précis, une préparation minutieuse des surfaces, l&apos;application de produits adaptés et une finition qui garantit une protection durable contre les intempéries. Chaque chantier est personnalisé pour répondre aux besoins spécifiques de notre client, avec une moyenne de 95% de satisfaction.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes sont certifiées RGE, nous proposons des devis transparents sans frais cachés, utilisons uniquement des matériaux écologiques et notre délai d&apos;intervention moyen est de seulement 15 jours après validation. Nous garantissons nos travaux pendant 10 ans et intervenons sur tout le pourtour de Martigues avec une réactivité et un professionnalisme reconnus.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie généralement entre 35€ et 80€ par m², selon la surface, l&apos;état initial, les matériaux choisis et la complexité des travaux. Pour une maison moyenne de 100m² à Martigues, comptez un budget entre 3 500€ et 8 000€. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa configuration. Pour un immeuble de 4 à 6 étages à Martigues, notre équipe réalise généralement les travaux entre 10 et 20 jours ouvrables. Ce délai inclut la préparation, le traitement des supports, l&apos;application des enduits et des peintures, avec un respect strict des normes de sécurité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans selon le code de la construction, ou lorsque l&apos;état de dégradation présente des risques pour la structure ou l&apos;environnement. À Martigues, les conditions climatiques particulières peuvent accélérer la nécessité d&apos;une rénovation. Les signes qui imposent un ravalement incluent des fissures, des écaillages, des infiltrations ou une détérioration visible des revêtements extérieurs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Martigues ?
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
