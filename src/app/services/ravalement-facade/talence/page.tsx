import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Talence | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements de façade impeccables à Talence et dans toute la métropole bordelaise.',
  keywords: 'ravalement facade talence, ravalement immeuble talence, renovation facade talence, peinture facade talence, entreprise ravalement talence, ravalement facade maison talence',
};

export default function RavalementFacadeTalencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Talence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements de façade impeccables à Talence et dans toute la métropole bordelaise. Spécialistes de la rénovation extérieure, nous transformons l&apos;apparence de vos bâtiments avec un savoir-faire technique et esthétique unique.</p>

        <h2>Nos services de ravalement de façade a Talence</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération de peinture. Nous proposons une expertise complète qui protège et embellit votre patrimoine immobilier. Notre processus commence par un diagnostic précis de l&apos;état de votre façade, évaluant les zones d&apos;usure, d&apos;infiltration potentielle et les besoins spécifiques de rénovation. À Talence, nous adaptons nos techniques aux conditions climatiques locales, en utilisant des matériaux haute performance qui résistent à l&apos;humidité et aux variations de température. Notre équipe qualifiée réalise un travail minutieux : préparation des surfaces, réparation des micro-fissures, application de produits d&apos;étanchéité et finition avec des peintures écologiques aux propriétés thermorégulatrices.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos 15 ans d&apos;expérience garantissent un résultat professionnel. Nous sommes certifiés RGE, proposons un devis gratuit sous 48h, utilisons des matériaux écologiques et offrons une garantie décennale. Notre approche sur-mesure et notre engagement qualité font la différence pour chaque projet de ravalement à Talence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ au m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial de la surface. Pour une maison moyenne de 100m² à Talence, comptez un budget entre 3 000€ et 8 000€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, un chantier pour un immeuble de 4 étages à Talence prend entre 10 et 15 jours ouvrables. Les facteurs influençant la durée incluent la préparation des surfaces, les réparations nécessaires et les conditions météorologiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10-15 ans, ou lorsque des dégradations significatives sont constatées. La réglementation impose ce rafraîchissement pour des raisons de sécurité, d&apos;isolation et de préservation du bâti. À Talence, les copropriétés et les propriétaires sont tenus de maintenir leur patrimoine en bon état extérieur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Talence ?
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
