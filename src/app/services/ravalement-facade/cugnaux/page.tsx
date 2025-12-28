import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Cugnaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com transforme les façades de Cugnaux et ses environs depuis plus de 15 ans, offrant un service de ravalement de qualité qui redo',
  keywords: 'ravalement facade cugnaux, ravalement immeuble cugnaux, renovation facade cugnaux, peinture facade cugnaux, entreprise ravalement cugnaux, ravalement facade maison cugnaux',
};

export default function RavalementFacadeCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com transforme les façades de Cugnaux et ses environs depuis plus de 15 ans, offrant un service de ravalement de qualité qui redonne vie et élégance à vos bâtiments. Spécialistes du ravalement sur mesure, nous intervenons avec précision et professionnalisme dans toute l&apos;agglomération toulousaine.</p>

        <h2>Nos services de ravalement de façade a Cugnaux</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une expertise technique complète qui protège durablement vos murs contre les intempéries et l&apos;usure. Notre processus débute par un diagnostic précis de l&apos;état de votre façade, permettant d&apos;identifier les zones nécessitant un traitement spécifique. Nos équipes utilisent uniquement des matériaux haute performance, garantissant une finition impeccable et une protection optimale. Sur Cugnaux, nous adaptons nos techniques à chaque type de bâtiment, qu&apos;il s&apos;agisse d&apos;une maison individuelle ou d&apos;un immeuble collectif, en privilégiant des solutions écologiques et économes en énergie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés et formés aux dernières techniques de ravalement. Nous garantissons des délais respectés à 100%, un devis transparent sans frais cachés et une intervention propre et organisée. Notre engagement qualité se traduit par une garantie décennale et des références solides dans la région de Cugnaux.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 35€ et 80€ par m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial du support. Pour une maison moyenne de 100m², comptez un budget global entre 3 500€ et 8 000€. Nous proposons systématiquement un diagnostic gratuit permettant un devis précis et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de sa configuration. En moyenne, pour un immeuble de 300m², notre équipe réalise l&apos;intervention entre 10 et 15 jours ouvrés. Ce délai inclut la préparation, le traitement des supports, l&apos;application des enduits et des peintures, avec un séchage optimal.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement de façade devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état du bâtiment présente des signes de dégradation avancés comme des fissures, des infiltrations ou un aspect délabré. À Cugnaux, nous recommandons une inspection professionnelle tous les 8-10 ans pour maintenir la valeur et l&apos;esthétique de votre patrimoine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Cugnaux ?
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
