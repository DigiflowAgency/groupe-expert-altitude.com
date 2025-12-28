import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Asnières-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Asnières-sur-Seine. Avec plus de ',
  keywords: 'gouttiere asnières-sur-seine, pose gouttiere asnières-sur-seine, reparation gouttiere asnières-sur-seine, nettoyage gouttiere asnières-sur-seine, descente pluviale asnières-sur-seine, gouttiere bouchee asnières-sur-seine',
};

export default function GouttiereAsnieresSurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Asnières-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Asnières-sur-Seine. Avec plus de 15 ans d&apos;expérience, nous protégeons efficacement votre habitat contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a Asnières-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;installation, la réparation et l&apos;entretien complet pour les particuliers et professionnels d&apos;Asnières-sur-Seine. Nous utilisons uniquement des matériaux de haute qualité comme l&apos;aluminium et le zinc, garantissant une durabilité exceptionnelle de 25 à 30 ans. Notre équipe technique réalise un diagnostic précis avant chaque intervention, adaptant chaque solution aux spécificités architecturales de votre bâtiment. Nous proposons des systèmes sur-mesure qui assurent une évacuation optimale des eaux pluviales, protégeant efficacement vos murs et fondations contre l&apos;humidité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts certifiés avec plus de 500 chantiers réalisés
✓ Devis gratuit sous 48h
✓ Interventions rapides sur Asnières-sur-Seine et communes limitrophes
✓ Matériaux garantis 10 ans
✓ Techniciens formés aux dernières normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un chiffrage précis nécessite un diagnostic sur place prenant en compte la longueur, la forme du toit et les contraintes techniques spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer les feuilles et débris manuellement, puis nettoyez avec un produit adapté. En cas de problème persistant, faites appel à un professionnel pour éviter d&apos;endommager le système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans des zones très boisées comme certains quartiers d&apos;Asnières-sur-Seine, un nettoyage trimestriel peut être nécessaire pour prévenir les obstructions et les dégradations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Asnières-sur-Seine ?
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
