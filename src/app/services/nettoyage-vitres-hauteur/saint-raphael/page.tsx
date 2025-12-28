import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Saint-Raphaël, offrant des solutions professionnelles pour l',
  keywords: 'nettoyage vitres hauteur saint-raphaël, lavage vitres immeuble saint-raphaël, nettoyage facade vitree saint-raphaël, cordiste vitre saint-raphaël, entreprise nettoyage vitres saint-raphaël, nettoyage verriere saint-raphaël',
};

export default function NettoyageVitresHauteurSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Saint-Raphaël, offrant des solutions professionnelles pour les immeubles et façades les plus complexes. Avec plus de 15 ans d&apos;expertise, nous garantissons des prestations de propreté irréprochables en toute sécurité.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences techniques des bâtiments résidentiels et professionnels de Saint-Raphaël. Nos techniciens cordistes sont formés aux techniques alpines les plus avancées, permettant un nettoyage précis et sécurisé des surfaces vitrées verticales. Nous utilisons du matériel professionnel haute performance et des produits écologiques qui respectent l&apos;environnement. Notre méthode combine des techniques manuelles expertes et des équipements spécialisés pour éliminer toute trace, poussière ou salissure, garantissant une transparence cristalline et un rendu impeccable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe certifiée avec plus de 15 ans d&apos;expérience
• Techniques de nettoyage innovantes et sécurisées
• Matériel professionnel dernier cri
• Interventions rapides sur Saint-Raphaël et sa région
• Devis gratuit et personnalisé
• Respect des normes de sécurité les plus strictes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par fenêtre selon la hauteur, l&apos;accessibilité et la surface. Pour un immeuble standard à Saint-Raphaël, comptez entre 300€ et 1200€ pour un nettoyage complet. Un devis précis sera établi après expertise technique sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an selon l&apos;exposition du bâtiment. Les immeubles en centre-ville ou près de zones industrielles nécessiteront un nettoyage plus fréquent, tandis que les bâtiments moins exposés pourront être nettoyés semestriellement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation d&apos;équipements de protection individuelle, formation spécifique aux techniques de cordage, respect des normes INRS, assurances professionnelles, et matériel aux normes de sécurité européennes. Nos techniciens sont habilités et certifiés pour ces interventions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Saint-Raphaël ?
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
