import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Rillieux-la-Pape | Groupe Expert Altitude Com',
  description: 'Besoin d&apos;un ravalement de façade impeccable à Rillieux-la-Pape ? Le Groupe Expert Altitude Com transforme vos murs extérieurs avec précision et professionn',
  keywords: 'ravalement facade rillieux-la-pape, ravalement immeuble rillieux-la-pape, renovation facade rillieux-la-pape, peinture facade rillieux-la-pape, entreprise ravalement rillieux-la-pape, ravalement facade maison rillieux-la-pape',
};

export default function RavalementFacadeRillieuxLaPapePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Rillieux-la-Pape</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Besoin d&apos;un ravalement de façade impeccable à Rillieux-la-Pape ? Le Groupe Expert Altitude Com transforme vos murs extérieurs avec précision et professionnalisme. Notre expertise locale garantit une rénovation esthétique et durable qui valorise votre patrimoine immobilier.</p>

        <h2>Nos services de ravalement de façade a Rillieux-la-Pape</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles collectifs, locaux professionnels - en utilisant des techniques et matériaux de haute qualité. Notre processus commence par un diagnostic technique précis qui permet d&apos;identifier les pathologies potentielles de votre façade. Nous réalisons ensuite un traitement des supports, une préparation méticuleuse et une application de peinture ou d&apos;enduit adapté aux spécificités de votre bâtiment. Notre équipe maîtrise parfaitement les normes environnementales et techniques en vigueur, garantissant un résultat qui protège durablement votre patrimoine contre l&apos;humidité, les agressions climatiques et l&apos;usure.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence du ravalement de façade à Rillieux-la-Pape. Nos avantages clés : une expertise de plus de 15 ans, des techniciens certifiés, des matériaux haut de gamme, un devis gratuit et détaillé, et une garantie décennale. Nous intervenons avec réactivité et professionnalisme, en respectant scrupuleusement les délais et budgets convenus.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité des travaux, l&apos;état initial du support, les matériaux choisis et les traitements nécessaires. Pour une maison moyenne de 100m², comptez un budget global entre 3 000€ et 8 000€. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. Pour un immeuble de 4-5 étages, prévoyez environ 3 à 5 semaines de travaux. Notre planning détaillé inclut la préparation des surfaces (1 semaine), l&apos;application des traitements (1-2 semaines) et les finitions (quelques jours). Nous optimisons systématiquement les délais sans compromettre la qualité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10-15 ans, ou lorsque des désordres significatifs sont constatés : fissures, infiltrations, décoloration importante. La réglementation impose également un ravalement dans les copropriétés tous les 10 ans, ou sur injonction municipale. À Rillieux-la-Pape, nous vous conseillons et accompagnons dans ces démarches réglementaires.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Rillieux-la-Pape ?
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
