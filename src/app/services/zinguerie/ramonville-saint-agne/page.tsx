import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Ramonville-Saint-Agne | Groupe Expert Altitude Com',
  description: 'Spécialistes de la zinguerie depuis plus de 15 ans, le Groupe Expert Altitude Com apporte des solutions techniques innovantes pour protéger votre toiture à',
  keywords: 'zinguerie ramonville-saint-agne, travaux zinguerie ramonville-saint-agne, toiture zinc ramonville-saint-agne, zingueur ramonville-saint-agne, reparation zinc ramonville-saint-agne, zinco reflect ramonville-saint-agne',
};

export default function ZinguerieRamonvilleSaintAgnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Ramonville-Saint-Agne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialistes de la zinguerie depuis plus de 15 ans, le Groupe Expert Altitude Com apporte des solutions techniques innovantes pour protéger votre toiture à Ramonville-Saint-Agne et ses environs. Nos experts en zinguerie garantissent des interventions précises et durables pour tous vos projets de rénovation et de protection.</p>

        <h2>Nos services de travaux de zinguerie a Ramonville-Saint-Agne</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation de votre habitat, en assurant l&apos;étanchéité et l&apos;évacuation optimale des eaux de pluie. Notre équipe maîtrise parfaitement les techniques de pose et de réparation des éléments en zinc, en utilisant des méthodes conformes aux normes professionnelles. Nous intervenons sur tous types de toitures - pavillons, immeubles, bâtiments industriels - avec un diagnostic précis et un devis transparent. Nos zingueurs qualifiés utilisent des matériaux haute qualité comme le zinc Zinco Reflect, reconnu pour sa durabilité et sa résistance aux conditions climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : 1) Techniciens certifiés avec plus de 15 ans d&apos;expérience, 2) Interventions rapides sur Ramonville-Saint-Agne et la Haute-Garonne, 3) Matériaux premium garantis 20 ans, 4) Diagnostic technique gratuit avant travaux. Nous proposons une approche sur-mesure et un accompagnement complet pour chaque projet de zinguerie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, les matériaux utilisés et l&apos;état initial de votre toiture. Un diagnostic précis nous permet de vous proposer un devis détaillé et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa longévité exceptionnelle dépend de la qualité de la pose, de l&apos;exposition et de l&apos;entretien régulier. Notre équipe garantit une mise en œuvre qui maximise la durée de vie de votre zinguerie.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des fixations. Nous recommandons une inspection professionnelle tous les 5-7 ans pour prévenir tout risque de corrosion ou de déformation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Ramonville-Saint-Agne ?
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
