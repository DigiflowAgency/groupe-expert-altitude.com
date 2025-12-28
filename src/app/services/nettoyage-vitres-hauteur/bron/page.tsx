import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Bron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Bron, en proposant des solutions professionnelles et sécurisées pour tous vos b',
  keywords: 'nettoyage vitres hauteur bron, lavage vitres immeuble bron, nettoyage facade vitree bron, cordiste vitre bron, entreprise nettoyage vitres bron, nettoyage verriere bron',
};

export default function NettoyageVitresHauteurBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Bron, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments. Nos experts cordistes transforment vos facades vitrées en véritables surfaces cristallines, sans compromettre la sécurité ni la qualité.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Bron</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent l&apos;excellence technique et la précision à Bron. Nos techniciens hautement qualifiés utilisent des techniques de cordage professionnel pour nettoyer les surfaces vitrées les plus complexes, des immeubles résidentiels aux bâtiments tertiaires. Chaque intervention est personnalisée, avec un diagnostic précis des besoins spécifiques, garantissant un résultat impeccable et durable. Notre process intègre des équipements de dernière génération et des produits écologiques, assurant une brillance optimale tout en respectant l&apos;environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de 12 cordistes certifiés avec plus de 15 ans d&apos;expérience
✓ Techniques innovantes conformes aux normes de sécurité les plus strictes
✓ Interventions rapides sur Bron et ses environs
✓ Devis gratuit et transparent sous 24h
✓ Garantie satisfaction à 100%</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la hauteur, l&apos;accessibilité et la complexité. Pour un immeuble standard à Bron, comptez environ 350-500€ pour un nettoyage complet des facades vitrées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition environnementale. Les immeubles en centre-ville ou proche d&apos;axes routiers nécessitent un nettoyage plus fréquent pour maintenir une apparence impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques de cordage professionnel, des harnais homologués, des points d&apos;ancrage certifiés et une formation continue en prévention des risques. Nos cordistes suivent annuellement des formations de sécurité hauteur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Bron ?
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
