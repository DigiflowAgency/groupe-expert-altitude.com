import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Clichy | Groupe Expert Altitude Com',
  description: 'Spécialiste des gouttières à Clichy depuis plus de 15 ans, le Groupe Expert Altitude Com protège votre habitat contre les risques d&apos;infiltration et de dégr',
  keywords: 'gouttiere clichy, pose gouttiere clichy, reparation gouttiere clichy, nettoyage gouttiere clichy, descente pluviale clichy, gouttiere bouchee clichy',
};

export default function GouttiereClichyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Clichy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste des gouttières à Clichy depuis plus de 15 ans, le Groupe Expert Altitude Com protège votre habitat contre les risques d&apos;infiltration et de dégradation. Nous intervenons rapidement sur l&apos;ensemble des systèmes de descentes pluviales de la région parisienne.</p>

        <h2>Nos services de gouttières et descentes pluviales a Clichy</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières proposent une solution complète et personnalisée pour chaque bâtiment de Clichy et ses environs. Nous réalisons des interventions sur mesure, qu&apos;il s&apos;agisse de pose, réparation ou remplacement de gouttières. Notre approche technique garantit une étanchéité maximale et une protection durable contre les intempéries. Nos équipes utilisent uniquement des matériaux de haute qualité - zinc, aluminium, PVC - sélectionnés pour leur résistance et leur durabilité. Chaque installation est précédée d&apos;un diagnostic précis pour adapter parfaitement le système de collecte des eaux pluviales à votre architecture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Devis gratuit et personnalisé sous 48h
- Intervention rapide sur Clichy et communes limitrophes
- Matériaux garantis 10 ans
- Solutions techniques innovantes
- Respect des normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ le mètre linéaire selon le matériau choisi. Un devis précis dépend de la configuration de votre toiture, de l&apos;accessibilité et du type de gouttière sélectionnée. Nous recommandons toujours un diagnostic préalable pour un chiffrage exact.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, commencez par retirer manuellement les feuilles et débris. Utilisez un jet d&apos;eau à haute pression ou un furet flexible. En cas de bouchon tenace, utilisez un produit désobstruant adapté. Pour des résultats professionnels, notre équipe reste à votre disposition.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet des gouttières au minimum deux fois par an : au printemps et à l&apos;automne. En région parisienne, avec la présence importante d&apos;arbres, un curage supplémentaire peut être nécessaire. Un entretien régulier permet de prévenir les obstructions et les dégradations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Clichy ?
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
