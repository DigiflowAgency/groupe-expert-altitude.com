import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à La Seyne-sur-Mer et ses environs. Spécialistes des',
  keywords: 'nettoyage vitres hauteur la seyne-sur-mer, lavage vitres immeuble la seyne-sur-mer, nettoyage facade vitree la seyne-sur-mer, cordiste vitre la seyne-sur-mer, entreprise nettoyage vitres la seyne-sur-mer, nettoyage verriere la seyne-sur-mer',
};

export default function NettoyageVitresHauteurLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à La Seyne-sur-Mer et ses environs. Spécialistes des interventions complexes, nous garantissons des façades impeccables et une propreté irréprochable pour tous vos bâtiments professionnels et résidentiels.</p>

        <h2>Nos services de nettoyage vitres en hauteur a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente la solution professionnelle et sécurisée pour les immeubles, entreprises et établissements de La Seyne-sur-Mer. Nos techniciens cordistes hautement qualifiés utilisent des techniques d&apos;alpinisme industriel pour atteindre les surfaces les plus difficiles d&apos;accès. Équipés de matériel professionnel dernier cri et de systèmes de sécurité avancés, nous intervenons sur tous types de bâtiments, des verrières complexes aux façades vitrées monumentales. Chaque intervention est précédée d&apos;un diagnostic technique précis pour garantir une prestation sur-mesure et optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 techniciens certifiés avec plus de 15 ans d&apos;expérience
- Matériel professionnel aux normes de sécurité les plus strictes
- Interventions rapides sur La Seyne-sur-Mer et le département du Var
- Devis gratuit et personnalisé sous 24h
- Assurance responsabilité professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par mètre carré, selon la difficulté d&apos;accès, la hauteur et la fréquence. Pour un immeuble standard de 200m², comptez un budget entre 1500€ et 3500€. Un devis personnalisé est toujours recommandé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville ou proche du littoral à La Seyne-sur-Mer nécessitent généralement un nettoyage trimestriel en raison de la pollution et des embruns marins.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage de vitres en hauteur impose des règles strictes : utilisation de harnais de sécurité, formation CACES, équipements homologués, protection individuelle complète, et respect du protocole de sécurité défini par la réglementation française en vigueur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a La Seyne-sur-Mer ?
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
