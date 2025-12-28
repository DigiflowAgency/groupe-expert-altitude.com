import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Noisy-le-Grand | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com transforme les façades de Noisy-le-Grand avec un savoir-faire unique en ravalement. Spécialistes de la rénovation depuis plus',
  keywords: 'ravalement facade noisy-le-grand, ravalement immeuble noisy-le-grand, renovation facade noisy-le-grand, peinture facade noisy-le-grand, entreprise ravalement noisy-le-grand, ravalement facade maison noisy-le-grand',
};

export default function RavalementFacadeNoisyLeGrandPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Noisy-le-Grand</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com transforme les façades de Noisy-le-Grand avec un savoir-faire unique en ravalement. Spécialistes de la rénovation depuis plus de 15 ans, nous redonnons vie et élégance à vos bâtiments avec des solutions sur-mesure.</p>

        <h2>Nos services de ravalement de façade a Noisy-le-Grand</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous intervenons sur tous types de surfaces - maisons individuelles, immeubles collectifs et bâtiments tertiaires - en garantissant une expertise technique précise. Notre processus démarre par un diagnostic complet permettant d&apos;identifier les pathologies potentielles : fissures, infiltrations, dégradations structurelles. Nous utilisons uniquement des matériaux haute performance, respectueux de l&apos;environnement, qui protègent durablement vos murs contre les intempéries. À Noisy-le-Grand, nous adaptons nos techniques aux spécificités architecturales locales, en privilégiant des finitions qui valorisent le patrimoine architectural.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence repose sur trois piliers : expertise technique, engagement qualitatif et proximité. Nos équipes sont certifiées RGE, garantissant des interventions conformes aux dernières normes environnementales. Nous proposons des devis transparents sans frais cachés, un accompagnement personnalisé et une intervention rapide sur Noisy-le-Grand et ses environs. Notre taux de satisfaction client dépasse 95%, preuve de notre engagement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 40€ et 120€ au m², selon la complexité du support, les matériaux utilisés et les préparatifs nécessaires. Pour un pavillon standard à Noisy-le-Grand de 100m², comptez un budget global entre 4 000€ et 12 000€. Nos devis détaillés incluent systématiquement le diagnostic, la préparation, les matériaux et la main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, pour un immeuble de 4 étages à Noisy-le-Grand, nous estimons un délai de 10 à 15 jours ouvrés. Ce temps comprend le diagnostic initial, la préparation des surfaces, les travaux de réfection et le nettoyage final.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient légalement obligatoire tous les 10 ans dans les copropriétés, ou lorsque la façade présente des désordres significatifs compromettant la solidité du bâti. À Noisy-le-Grand, nous recommandons une inspection professionnelle tous les 8-10 ans pour prévenir les dégradations et maintenir la valeur immobilière de votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Noisy-le-Grand ?
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
