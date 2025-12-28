import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Marignane | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en nettoyage de vitres en hauteur à Marignane, transforme l&apos;entretien de vos surfaces vitrées en une expérien',
  keywords: 'nettoyage vitres hauteur marignane, lavage vitres immeuble marignane, nettoyage facade vitree marignane, cordiste vitre marignane, entreprise nettoyage vitres marignane, nettoyage verriere marignane',
};

export default function NettoyageVitresHauteurMarignanePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Marignane</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en nettoyage de vitres en hauteur à Marignane, transforme l&apos;entretien de vos surfaces vitrées en une expérience de propreté et de sécurité absolue. Nous intervenons sur tous types de bâtiments, des immeubles résidentiels aux complexes industriels de la région.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Marignane</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes de propreté et de sécurité. Équipés de techniques de cordiste professionnelles, nos techniciens hautement qualifiés nettoient méticuleusement chaque surface vitrée, des façades commerciales aux verrières complexes. Nous utilisons des technologies et produits écologiques qui garantissent un résultat impeccable sans impact environnemental. Notre approche combine des techniques manuelles précises et des équipements dernière génération, permettant un nettoyage en profondeur même sur les surfaces les plus difficiles d&apos;accès à Marignane et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts certifiés en nettoyage de vitres en hauteur
✓ Équipement de sécurité professionnel aux normes européennes
✓ Intervention rapide sur Marignane et tout le département
✓ Devis gratuit et transparent
✓ Plus de 15 ans d&apos;expérience dans le nettoyage de surfaces complexes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Pour un immeuble standard à Marignane, comptez environ 350-600€ pour un nettoyage complet des façades vitrées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition aux intempéries et à la pollution. Les bâtiments en centre-ville ou proche des zones industrielles nécessitent un nettoyage plus fréquent, idéalement tous les 3-4 mois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur requiert une formation spécifique, un équipement de sécurité complet (harnais, points d&apos;ancrage, cordes techniques) et une certification professionnelle. Nos cordistes suivent annuellement des formations de sécurité et possèdent tous les habilitations nécessaires.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Marignane ?
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
