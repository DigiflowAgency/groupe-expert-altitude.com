import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Levallois-Perret | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Levallois-Perret, transforme l&apos;entretien de vos façades vitrées',
  keywords: 'nettoyage vitres hauteur levallois-perret, lavage vitres immeuble levallois-perret, nettoyage facade vitree levallois-perret, cordiste vitre levallois-perret, entreprise nettoyage vitres levallois-perret, nettoyage verriere levallois-perret',
};

export default function NettoyageVitresHauteurLevalloisPerretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Levallois-Perret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Levallois-Perret, transforme l&apos;entretien de vos façades vitrées en une opération de précision et de sécurité. Nos experts cordistes interviennent sur les immeubles les plus complexes de la région parisienne.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Levallois-Perret</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et syndics de Levallois-Perret. Nos techniciens hautement qualifiés utilisent des techniques de cordage professionnel permettant d&apos;accéder aux surfaces vitrées les plus difficiles, garantissant un nettoyage impeccable sans échafaudage. Chaque intervention est précédée d&apos;un diagnostic technique précis pour adapter notre méthodologie à la configuration spécifique de votre bâtiment. Nous utilisons exclusivement des produits écologiques et des équipements dernière génération, assurant une brillance maximale et une protection durable de vos surfaces vitrées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification professionnelle en travaux verticaux
- Plus de 15 ans d&apos;expertise sur Levallois-Perret
- Équipe de 12 cordistes hautement qualifiés
- Assurance responsabilité civile professionnelle complète
- Interventions 100% sécurisées
- Devis gratuit et personnalisé sous 48h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon l&apos;accessibilité, la hauteur et la complexité de la surface. Un immeuble de 5 étages représente généralement un budget entre 1200€ et 2500€ pour un nettoyage complet et professionnel.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, avec un nettoyage minimal semestriel pour les immeubles de bureaux et commerciaux, et un nettoyage annuel pour les résidences. Les façades exposées à la pollution ou aux intempéries nécessitent des interventions plus fréquentes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des normes de sécurité strictes : utilisation de harnais homologués, formations CATEC et travaux en hauteur, respect du protocole INRS, double point d&apos;ancrage, équipements de protection individuelle, et évaluation préalable des risques sur site.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Levallois-Perret ?
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
