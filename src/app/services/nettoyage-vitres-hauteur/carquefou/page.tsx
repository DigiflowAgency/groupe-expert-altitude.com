import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Carquefou | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Carquefou, en proposant des solutions professionnelles et sécurisées pour to',
  keywords: 'nettoyage vitres hauteur carquefou, lavage vitres immeuble carquefou, nettoyage facade vitree carquefou, cordiste vitre carquefou, entreprise nettoyage vitres carquefou, nettoyage verriere carquefou',
};

export default function NettoyageVitresHauteurCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Carquefou, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments. Nos experts cordistes transforment l&apos;entretien de vos surfaces vitrées en une opération impeccable et sans risque.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Carquefou</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage de vitres en hauteur, nous intervenons sur tous types de bâtiments à Carquefou et ses environs. Notre équipe de cordistes hautement qualifiés utilise des techniques d&apos;alpinisme industriel pour nettoyer les facades vitrées, verrières et surfaces complexes. Chaque intervention est précédée d&apos;un diagnostic technique permettant d&apos;adapter notre approche : utilisation de produits écologiques, techniques spécifiques selon la hauteur et le type de vitrage. Nos professionnels sont équipés des dernières technologies et certifications de sécurité, garantissant un résultat optimal et une intervention sans danger.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expertise en nettoyage de hauteur
✓ Équipe certifiée et assurée pour interventions complexes
✓ Matériel professionnel dernière génération
✓ Respect des normes de sécurité les plus strictes
✓ Devis gratuit et personnalisé sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la complexité, la hauteur et l&apos;accessibilité. Pour un immeuble de 300m², comptez un budget global entre 4 500€ et 15 000€. Un diagnostic préalable gratuit permettra un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les bâtiments en zone urbaine ou industrielle nécessiteront un nettoyage plus fréquent que les zones résidentielles. Un entretien semestriel est généralement optimal.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur requiert des équipements spécifiques : harnais de sécurité, points d&apos;ancrage normés, cordes professionnelles. Nos techniciens sont formés aux techniques d&apos;alpinisme industriel, possèdent les certifications IRATA et suivent des formations annuelles de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Carquefou ?
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
