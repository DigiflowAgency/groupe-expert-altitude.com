import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Levallois-Perret | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Levallois-Perret, spécialisé dans les travaux de toiture et de protection contr',
  keywords: 'zinguerie levallois-perret, travaux zinguerie levallois-perret, toiture zinc levallois-perret, zingueur levallois-perret, reparation zinc levallois-perret, zinco reflect levallois-perret',
};

export default function ZinguerieLevalloisPerretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Levallois-Perret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Levallois-Perret, spécialisé dans les travaux de toiture et de protection contre les infiltrations. Nous intervenons sur l&apos;ensemble des projets de zinguerie avec une expertise technique reconnue dans la région parisienne.</p>

        <h2>Nos services de travaux de zinguerie a Levallois-Perret</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en protection et rénovation de toitures. Nous réalisons des interventions complètes, depuis le diagnostic précis jusqu&apos;à la pose de systèmes de zinguerie sur-mesure, en utilisant des techniques et matériaux de haute qualité. Notre équipe maîtrise parfaitement les techniques de zingage, que ce soit pour des bâtiments résidentiels ou professionnels à Levallois-Perret et ses environs. Nous garantissons une étanchéité optimale et une durabilité maximale grâce à nos méthodes professionnelles et nos matériaux sélectionnés.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de 15 ans dans le domaine de la zinguerie, 2) Des techniciens certifiés et formés en continu, 3) Un devis personnalisé et transparent, 4) Une intervention rapide et précise sur Levallois-Perret.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, les matériaux utilisés et l&apos;état initial de la toiture. Un diagnostic préalable nous permet de vous proposer un devis précis et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 70 ans. Sa durée de vie dépend de la qualité de la pose, de l&apos;exposition aux intempéries et des entretiens réguliers effectués.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc implique un nettoyage annuel, le contrôle des joints et des fixations, et le traitement préventif contre les mousses et lichens. Nous recommandons une inspection professionnelle tous les 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Levallois-Perret ?
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
