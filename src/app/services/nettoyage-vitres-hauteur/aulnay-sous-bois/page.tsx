import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Aulnay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour le nettoyage de vitres en hauteur à Aulnay-sous-Bois, transforme l&apos;entretien de vos surfaces',
  keywords: 'nettoyage vitres hauteur aulnay-sous-bois, lavage vitres immeuble aulnay-sous-bois, nettoyage facade vitree aulnay-sous-bois, cordiste vitre aulnay-sous-bois, entreprise nettoyage vitres aulnay-sous-bois, nettoyage verriere aulnay-sous-bois',
};

export default function NettoyageVitresHauteurAulnaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Aulnay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour le nettoyage de vitres en hauteur à Aulnay-sous-Bois, transforme l&apos;entretien de vos surfaces vitrées en une expérience de propreté et de sécurité sans précédent. Nos experts en nettoyage vertical garantissent des résultats impeccables pour tous vos bâtiments.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Aulnay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la solution professionnelle ultime pour les immeubles, bureaux et façades vitrées d&apos;Aulnay-sous-Bois. Nos techniciens cordistes hautement qualifiés utilisent des techniques d&apos;escalade et des équipements de pointe pour atteindre les surfaces les plus difficiles d&apos;accès. Chaque intervention est précédée d&apos;une évaluation technique précise permettant de déterminer les méthodes et équipements adaptés. Notre process intègre des protocoles de sécurité rigoureux, des produits écologiques et un nettoyage respectueux des surfaces, garantissant une transparence cristalline et une brillance durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 cordistes certifiés avec plus de 15 ans d&apos;expérience
- Techniques innovantes conformes aux normes de sécurité NF
- Devis gratuit sous 24h pour toute intervention à Aulnay-sous-Bois
- Matériel professionnel dernier cri et produits éco-responsables</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par mètre carré selon l&apos;accessibilité et la hauteur. Pour un immeuble standard à Aulnay-sous-Bois, comptez un budget entre 500€ et 2500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, avec un nettoyage saisonnier au printemps et à l&apos;automne. Pour les zones très exposées à la pollution ou aux intempéries, nous conseillons un nettoyage trimestriel pour maintenir une transparence optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur nécessite des équipements de sécurité spécifiques : harnais antichute, points d&apos;ancrage certifiés, cordes techniques homologuées. Nos cordistes suivent des formations annuelles et disposent de certifications IRATA garantissant une intervention 100% sécurisée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Aulnay-sous-Bois ?
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
