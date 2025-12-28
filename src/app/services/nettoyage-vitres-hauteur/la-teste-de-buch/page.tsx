import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a La Teste-de-Buch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialiste en nettoyage de vitres en hauteur à La Teste-de-Buch, vous garantit des surfaces vitrées impeccabl',
  keywords: 'nettoyage vitres hauteur la teste-de-buch, lavage vitres immeuble la teste-de-buch, nettoyage facade vitree la teste-de-buch, cordiste vitre la teste-de-buch, entreprise nettoyage vitres la teste-de-buch, nettoyage verriere la teste-de-buch',
};

export default function NettoyageVitresHauteurLaTesteDeBuchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a La Teste-de-Buch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialiste en nettoyage de vitres en hauteur à La Teste-de-Buch, vous garantit des surfaces vitrées impeccables et une transparence cristalline. Nos techniques innovantes de nettoyage en cordage assurent une propreté remarquable pour tous vos bâtiments, des immeubles aux vérandas.</p>

        <h2>Nos services de nettoyage vitres en hauteur a La Teste-de-Buch</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et particuliers de La Teste-de-Buch. Nos techniciens cordistes sont formés aux techniques verticales les plus avancées, permettant d&apos;intervenir sur des surfaces jusqu&apos;à 100 mètres de hauteur en toute sécurité. Nous utilisons uniquement du matériel homologué et des produits écologiques qui respectent l&apos;environnement. Notre process complet comprend un diagnostic préalable, un nettoyage haute précision et un contrôle qualité final, garantissant des résultats impeccables à chaque intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : techniciens certifiés, matériel de pointe, interventions 100% sécurisées, devis gratuit sous 24h, adaptabilité à tous types de bâtiments, respect des normes de sécurité, engagement environnemental, et une expérience de plus de 15 ans sur La Teste-de-Buch et sa région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la complexité. Pour un immeuble standard de 300m², comptez un budget entre 1500€ et 3000€, incluant notre expertise technique et les garanties de sécurité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 nettoyages par an, selon l&apos;exposition du bâtiment. Les immeubles en centre-ville ou près de zones industrielles nécessiteront des interventions plus fréquentes, généralement tous les 3-4 mois pour maintenir une transparence optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques de cordage professionnel, un équipement de protection individuelle complet, des points d&apos;ancrage certifiés, et le respect strict des normes de sécurité AFNOR. Nos techniciens suivent annuellement des formations spécialisées pour garantir une intervention sans risque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a La Teste-de-Buch ?
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
