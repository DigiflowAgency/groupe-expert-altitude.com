import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Votre façade mérite le meilleur traitement, et à Saint-Raphaël, Groupe Expert Altitude Com est votre partenaire de confiance en ravalement. Nous transformo',
  keywords: 'ravalement facade saint-raphaël, ravalement immeuble saint-raphaël, renovation facade saint-raphaël, peinture facade saint-raphaël, entreprise ravalement saint-raphaël, ravalement facade maison saint-raphaël',
};

export default function RavalementFacadeSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre façade mérite le meilleur traitement, et à Saint-Raphaël, Groupe Expert Altitude Com est votre partenaire de confiance en ravalement. Nous transformons l&apos;extérieur de vos bâtiments avec un savoir-faire précis et des techniques innovantes, adaptées au climat méditerranéen.</p>

        <h2>Nos services de ravalement de façade a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Le ravalement de façade est bien plus qu&apos;une simple opération esthétique, c&apos;est un bouclier protecteur pour votre patrimoine immobilier. Notre équipe de professionnels intervient sur tous types de surfaces - pierre, enduit, brique - en utilisant des techniques de préparation et de finition dernier cri. À Saint-Raphaël, nous comprenons les contraintes climatiques spécifiques : exposition au soleil, embruns marins, qui nécessitent une approche technique pointue. Nos interventions garantissent non seulement un aspect impeccable mais aussi une protection durable contre l&apos;humidité, l&apos;érosion et les agressions environnementales. Chaque chantier fait l&apos;objet d&apos;un diagnostic préalable précis pour proposer la solution la plus adaptée.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : 15 ans d&apos;expérience locale, des équipes certifiées, des matériaux haute performance, un devis détaillé et transparent. Nous sommes assurés pour tous nos travaux et garantissons une intervention propre, rapide et sur-mesure. Notre engagement qualité se traduit par des réalisations qui subliment votre patrimoine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ le m², selon la complexité, les matériaux et les préparatifs nécessaires. Pour une maison moyenne de 100m² à Saint-Raphaël, comptez un budget global entre 3 000€ et 8 000€. Un diagnostic précis permettra d&apos;affiner ce premier estimatif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de son état. Pour un immeuble de 300m², notre équipe réalise généralement les travaux entre 10 et 15 jours ouvrés. Les étapes incluent le diagnostic, la préparation, le traitement et la finition, avec un planning précis communiqué à l&apos;avance.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient obligatoire tous les 10 ans selon le Code de la Construction, ou en cas de dégradations significatives. À Saint-Raphaël, nous recommandons une vigilance particulière due aux conditions climatiques méditerranéennes qui peuvent accélérer la détérioration des façades. Un diagnostic annuel est conseillé pour prévenir les désordres.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Saint-Raphaël ?
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
