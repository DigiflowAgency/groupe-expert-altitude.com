import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Vallauris | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Vallauris, en proposant des solutions professionnelles et sécurisées pour to',
  keywords: 'nettoyage vitres hauteur vallauris, lavage vitres immeuble vallauris, nettoyage facade vitree vallauris, cordiste vitre vallauris, entreprise nettoyage vitres vallauris, nettoyage verriere vallauris',
};

export default function NettoyageVitresHauteurVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Vallauris, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments et immeubles. Nos experts cordistes transforment l&apos;entretien de vos facades vitrées en une expérience sans précédent sur la Côte d&apos;Azur.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Vallauris</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage de vitres en hauteur, nous intervenons sur tous types de bâtiments à Vallauris, des immeubles résidentiels aux complexes tertiaires. Notre équipe de cordistes hautement qualifiés utilise des techniques alpines innovantes permettant un nettoyage précis et complet, sans échafaudage. Nous garantissons une propreté cristalline en toute sécurité, en respectant les normes environnementales et professionnelles les plus strictes. Notre processus inclut un diagnostic technique préalable, un nettoyage manuel avec des produits écologiques et un contrôle qualité systématique. Chaque intervention est personnalisée pour s&apos;adapter parfaitement à la configuration de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : des techniciens certifiés, un matériel de pointe, une assurance responsabilité professionnelle complète, et plus de 15 ans d&apos;expérience sur la région. Nous intervenons rapidement, avec un devis gratuit et des tarifs transparents. Notre engagement qualité fait notre réputation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 10€ et 35€ par m², selon la hauteur, l&apos;accessibilité et la fréquence. Pour un immeuble standard à Vallauris, comptez environ 500-1500€ pour un nettoyage complet des facades vitrées. Nous proposons des forfaits personnalisés et un devis gratuit sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville ou proche mer nécessitent un nettoyage plus fréquent à cause de la pollution et des embruns. Un calendrier d&apos;entretien personnalisé permet de maintenir vos vitres dans un état impeccable toute l&apos;année.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos cordistes utilisent un équipement de protection individuelle complet, des systèmes d&apos;ancrage certifiés et suivent des formations continues aux techniques de travail en hauteur. Chaque intervention fait l&apos;objet d&apos;une évaluation des risques et respecte strictement la réglementation en vigueur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Vallauris ?
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
