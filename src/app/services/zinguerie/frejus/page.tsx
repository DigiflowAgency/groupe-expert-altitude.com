import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Fréjus | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Fréjus, spécialiste des travaux de toiture et de protection contre les infiltra',
  keywords: 'zinguerie fréjus, travaux zinguerie fréjus, toiture zinc fréjus, zingueur fréjus, reparation zinc fréjus, zinco reflect fréjus',
};

export default function ZinguerieFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Fréjus, spécialiste des travaux de toiture et de protection contre les infiltrations. Avec plus de 15 ans d&apos;expertise, nous garantissons des solutions sur-mesure pour protéger durablement votre habitat.</p>

        <h2>Nos services de travaux de zinguerie a Fréjus</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins en rénovation et protection de toiture. Nous intervenons sur tous types de bâtiments à Fréjus et ses environs, en proposant des solutions techniques innovantes utilisant des matériaux haute qualité. Notre approche combine précision technique et esthétique, avec un diagnostic complet avant chaque intervention. Nos zingueurs professionnels maîtrisent parfaitement les techniques de pose, de réparation et de traitement des éléments en zinc, assurant une étanchéité optimale et une durabilité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une équipe certifiée avec plus de 15 ans d&apos;expérience, 2) Des interventions rapides et précises sur Fréjus, 3) Un devis personnalisé et gratuit, 4) Des matériaux garantis et une finition impeccable. Notre engagement qualité fait notre différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour un projet à Fréjus, nous proposons un diagnostic précis et un devis détaillé sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. La qualité de la pose et des matériaux utilisés sont des facteurs essentiels de longévité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des fixations. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir sa durabilité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Fréjus ?
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
