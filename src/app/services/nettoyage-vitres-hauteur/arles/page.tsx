import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Arles | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialiste en nettoyage de vitres en hauteur à Arles, offre une solution professionnelle et sécurisée pour to',
  keywords: 'nettoyage vitres hauteur arles, lavage vitres immeuble arles, nettoyage facade vitree arles, cordiste vitre arles, entreprise nettoyage vitres arles, nettoyage verriere arles',
};

export default function NettoyageVitresHauteurArlesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Arles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialiste en nettoyage de vitres en hauteur à Arles, offre une solution professionnelle et sécurisée pour tous vos besoins de lavage de surfaces vitrées complexes. Nous intervenons sur l&apos;ensemble du territoire arlésien avec une expertise technique inégalée.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Arles</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et particuliers d&apos;Arles. Nos techniciens cordistes, formés aux techniques alpines, utilisent un équipement de pointe pour garantir un nettoyage impeccable des facades vitrées, vérandas et immeubles. Chaque intervention est précédée d&apos;un diagnostic précis permettant d&apos;adapter notre approche : utilisation de produits écologiques, techniques spécifiques selon la hauteur et le type de surface, respect total des normes de sécurité. Nous maîtrisons parfaitement les contraintes techniques liées aux bâtiments historiques d&apos;Arles comme aux constructions contemporaines.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe certifiée avec plus de 15 ans d&apos;expérience en nettoyage en hauteur
✓ Matériel professionnel dernier cri garantissant une qualité optimale
✓ Interventions 100% sécurisées avec assurance responsabilité civile professionnelle
✓ Devis gratuit et personnalisé sous 24h
✓ Respect de l&apos;environnement avec des produits écologiques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la difficulté d&apos;accès, la hauteur et la surface totale. Pour un immeuble standard à Arles, comptez environ 350€ à 800€ pour un nettoyage complet. Nous proposons des forfaits dégressifs pour les clients réguliers.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, en fonction de l&apos;environnement. En centre-ville d&apos;Arles, avec la poussière et la pollution, nous conseillons un nettoyage trimestriel pour maintenir une brillance optimale et préserver l&apos;intégrité des surfaces vitrées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos techniciens utilisent des équipements homologués : harnais de sécurité, points d&apos;ancrage certifiés, cordes spécialisées. Chaque intervention est précédée d&apos;une évaluation des risques et nos équipes sont formées aux techniques de travail en hauteur conformément à la réglementation française.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Arles ?
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
