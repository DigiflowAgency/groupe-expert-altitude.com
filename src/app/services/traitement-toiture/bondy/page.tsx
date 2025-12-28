import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Bondy | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage toiture à Bondy et ses environs. Spécialistes depuis plus ',
  keywords: 'demoussage toiture bondy, traitement toiture bondy, nettoyage toiture bondy, antimousse toiture bondy, hydrofuge toiture bondy, entretien toiture bondy',
};

export default function TraitementToitureBondyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Bondy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage toiture à Bondy et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre patrimoine immobilier avec des solutions techniques innovantes et durables.</p>

        <h2>Nos services de traitement et démoussage toiture a Bondy</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement toiture répond aux problématiques spécifiques des habitations de Bondy, confrontées à des conditions climatiques favorisant le développement de mousses et lichens. Notre méthode professionnelle commence par un diagnostic précis de votre toiture, suivi d&apos;un nettoyage haute pression respectant l&apos;intégrité des matériaux. Nous utilisons des produits écologiques et certifiés qui éliminent les micro-organismes sans agresser votre couverture. Notre traitement antimousse longue durée permet de protéger votre toiture contre les infiltrations, les dégradations et prolonge sa durée de vie de 10 à 15 ans. Chaque intervention est personnalisée et garantit une efficacité optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Pourquoi nous choisir ? Notre expertise repose sur trois piliers : technicité, rapidité et économie. Nos techniciens sont certifiés et équipés des dernières technologies. Nous intervenons sous 72h après diagnostic. Nos traitements sont garantis 5 ans et permettent jusqu&apos;à 40% d&apos;économies sur les réparations futures. Nous sommes également les seuls à proposer un suivi personnalisé post-intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 12€ et 25€ au m², selon la complexité de votre toiture, son accessibilité et son état. Pour une maison moyenne à Bondy (120m²), comptez entre 1500€ et 3000€. Un devis gratuit et précis vous sera systématiquement proposé après diagnostic.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et septembre, période où les températures sont propices à un séchage rapide et à une pénétration optimale des produits. Idéalement, réalisez ce traitement tous les 3 à 5 ans ou dès que vous observez les premiers signes de prolifération.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement sec et propre. Utilisez un produit adapté à votre type de couverture (tuiles, ardoises), appliquez au rouleau ou par pulvérisation en deux couches croisées, en respectant un temps de séchage de 24h entre chaque application. Un professionnel garantira une pose technique et uniforme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Bondy ?
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
