import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Couëron | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Couëron et ses environs. Avec plus de 15 ans d',
  keywords: 'ravalement facade couëron, ravalement immeuble couëron, renovation facade couëron, peinture facade couëron, entreprise ravalement couëron, ravalement facade maison couëron',
};

export default function RavalementFacadeCoueronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Couëron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Couëron et ses environs. Avec plus de 15 ans d&apos;expérience, nous transformons l&apos;apparence de vos bâtiments grâce à un savoir-faire technique et esthétique unique.</p>

        <h2>Nos services de ravalement de façade a Couëron</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation cosmétique. Nous proposons une approche complète qui protège et embellit votre patrimoine immobilier. Notre équipe de professionnels évalue méticuleusement chaque surface pour déterminer le traitement optimal, qu&apos;il s&apos;agisse de peinture, d&apos;enduit ou de réparation structurelle. À Couëron, nous comprenons les spécificités climatiques locales qui influencent la durabilité des façades, et adaptons nos techniques en conséquence. Nos interventions garantissent non seulement un résultat esthétique remarquable, mais aussi une protection durable contre l&apos;humidité, les moisissures et les dégradations environnementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes sont certifiées RGE, utilisant des matériaux écologiques et haute performance. Nous proposons un devis gratuit et détaillé, un accompagnement personnalisé, et une garantie décennale. Notre taux de satisfaction client dépasse les 95%, témoignant de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité, les matériaux et les préparatifs nécessaires. Pour une maison moyenne de 100m² à Couëron, comptez un budget global entre 3 000€ et 8 000€. Un diagnostic précis permet d&apos;affiner ce chiffrage.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. Pour un immeuble de 3-4 étages, notre équipe réalise généralement le chantier en 10 à 15 jours ouvrés. Les phases incluent le diagnostic, la préparation, les réparations, et la finition.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient légalement obligatoire tous les 10 ans ou lorsque la façade présente des dégradations significatives. À Couëron, nous recommandons une inspection tous les 7-8 ans, notamment pour les bâtiments exposés aux embruns et aux variations climatiques de la région.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Couëron ?
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
