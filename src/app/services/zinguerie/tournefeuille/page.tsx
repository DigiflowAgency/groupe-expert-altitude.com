import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Tournefeuille | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Tournefeuille, spécialiste des travaux de toiture et de rénovation en zinc. Nou',
  keywords: 'zinguerie tournefeuille, travaux zinguerie tournefeuille, toiture zinc tournefeuille, zingueur tournefeuille, reparation zinc tournefeuille, zinco reflect tournefeuille',
};

export default function ZinguerieTournefeuillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Tournefeuille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Tournefeuille, spécialiste des travaux de toiture et de rénovation en zinc. Nous intervenons sur l&apos;ensemble de l&apos;agglomération toulousaine avec une expertise technique et un savoir-faire reconnu depuis plus de 15 ans.</p>

        <h2>Nos services de travaux de zinguerie a Tournefeuille</h2>
        <div className="space-y-4">
          <p>Nos prestations de zinguerie couvrent l&apos;ensemble des besoins en rénovation et protection de toiture. Nous réalisons des travaux complets de pose, réparation et entretien de systèmes de zinguerie, en utilisant des techniques et matériaux de haute qualité. Notre approche sur mesure permet de garantir une étanchéité parfaite et une durabilité maximale de vos installations. Chaque intervention est précédée d&apos;un diagnostic technique précis, nous permettant d&apos;identifier les points critiques et de proposer la solution la plus adaptée à votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une équipe de zingueurs certifiés et expérimentés, 2) Des matériaux premium et des techniques innovantes, 3) Un devis gratuit et détaillé sous 48h, 4) Une garantie décennale sur nos travaux. Notre engagement qualité fait de nous le partenaire de confiance pour vos projets de zinguerie à Tournefeuille.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la qualité des matériaux et l&apos;accessibilité du chantier. Un diagnostic précis nous permet de vous proposer un devis personnalisé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose initiale, des conditions climatiques et d&apos;un entretien régulier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, le contrôle des joints et des fixations, et le traitement préventif contre les mousses et lichens. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir sa longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Tournefeuille ?
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
