import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Grasse | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Grasse, offre une expertise unique pour transformer l&apos;apparence',
  keywords: 'nettoyage vitres hauteur grasse, lavage vitres immeuble grasse, nettoyage facade vitree grasse, cordiste vitre grasse, entreprise nettoyage vitres grasse, nettoyage verriere grasse',
};

export default function NettoyageVitresHauteurGrassePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Grasse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Grasse, offre une expertise unique pour transformer l&apos;apparence de vos bâtiments. Nos techniques innovantes garantissent des surfaces vitrées impeccables, même dans les zones les plus difficiles d&apos;accès de la région grassoise.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Grasse</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente la solution professionnelle et sécurisée pour tous vos défis de nettoyage. Nos techniciens cordistes, formés aux dernières normes de sécurité, interviennent sur tous types de structures : immeubles résidentiels, bâtiments tertiaires, vérandas et façades vitrées. Équipés de matériel haute technologie et de techniques spécialisées, nous nettoyons méticuleusement chaque surface vitrée sans laisser la moindre trace. Notre process comprend un diagnostic préalable, un nettoyage écologique avec des produits respectueux de l&apos;environnement et un contrôle qualité systématique. À Grasse, nous comprenons que chaque bâtiment a ses spécificités et nous adaptons notre intervention en conséquence.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos avantages clés incluent : une expertise de plus de 15 ans dans le nettoyage de vitres en hauteur, une équipe certifiée en techniques de cordage, des interventions 100% sécurisées, un engagement écologique avec des produits biodégradables et une garantie satisfaction. Nous sommes le partenaire de confiance des professionnels et particuliers de Grasse et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la complexité de l&apos;intervention. Un devis personnalisé gratuit vous permettra d&apos;obtenir un tarif précis adapté à votre configuration spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition du bâtiment. Les zones urbaines ou industrielles nécessitent des nettoyages plus fréquents, tandis que les zones résidentielles peuvent se contenter de deux interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage de vitres en hauteur requiert des équipements spécifiques : harnais de sécurité, points d&apos;ancrage certifiés, cordes homologuées et formations spécialisées. Nos techniciens sont équipés des derniers équipements de protection individuelle et suivent des formations continues en sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Grasse ?
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
