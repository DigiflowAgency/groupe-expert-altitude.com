import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Colombes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Colombes et dans toute la région parisienne. Nos techniciens',
  keywords: 'nettoyage vitres hauteur colombes, lavage vitres immeuble colombes, nettoyage facade vitree colombes, cordiste vitre colombes, entreprise nettoyage vitres colombes, nettoyage verriere colombes',
};

export default function NettoyageVitresHauteurColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Colombes et dans toute la région parisienne. Nos techniciens cordistes interviennent sur tous types de bâtiments, garantissant des surfaces vitrées impeccables et une transparence totale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Colombes</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des immeubles, tours de bureaux et bâtiments tertiaires de Colombes. Équipés de techniques professionnelles et de matériel high-tech, nous intervenons en toute sécurité grâce à des cordistes hautement qualifiés. Nos experts utilisent des produits écologiques qui respectent l&apos;environnement et garantissent un résultat sans trace, brillant et durable. Chaque intervention est précédée d&apos;un diagnostic technique personnalisé pour adapter notre approche à la spécificité de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- 15 ans d&apos;expertise dans le nettoyage de surfaces vitrées complexes
- Techniciens certifiés travaux en hauteur et sécurité
- Matériel dernière génération et techniques innovantes
- Devis gratuit et intervention rapide sur Colombes et ses environs
- Engagement qualité et satisfaction client garanti</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Un immeuble de 5 étages peut nécessiter un budget entre 1500€ et 3000€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition aux pollutions, l&apos;environnement urbain et le type de bâtiment. Les façades très exposées à la pollution ou au trafic routier nécessitent un nettoyage plus fréquent.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage de vitres en hauteur impose des normes strictes : utilisation de harnais de sécurité, formation aux techniques de cordage, respect des protocoles anti-chute, et équipements de protection individuelle homologués. Seuls des professionnels certifiés peuvent réaliser ces interventions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Colombes ?
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
