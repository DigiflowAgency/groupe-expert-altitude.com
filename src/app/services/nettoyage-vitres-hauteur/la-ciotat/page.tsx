import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a La Ciotat | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur La Ciotat et ses environs. Forts de plus de 15 ans d&apos;exper',
  keywords: 'nettoyage vitres hauteur la ciotat, lavage vitres immeuble la ciotat, nettoyage facade vitree la ciotat, cordiste vitre la ciotat, entreprise nettoyage vitres la ciotat, nettoyage verriere la ciotat',
};

export default function NettoyageVitresHauteurLaCiotatPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a La Ciotat</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur La Ciotat et ses environs. Forts de plus de 15 ans d&apos;expertise, nous intervenons sur tous types de bâtiments, des immeubles résidentiels aux complexes industriels.</p>

        <h2>Nos services de nettoyage vitres en hauteur a La Ciotat</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente la solution professionnelle et sécurisée pour l&apos;entretien de vos surfaces vitrées. Nos techniciens cordistes hautement qualifiés utilisent des techniques d&apos;escalade industrielle permettant d&apos;accéder aux zones les plus difficiles, garantissant un nettoyage impeccable sans échafaudage. Équipés de matériel professionnel et de produits écologiques, nous intervenons sur les façades, vérandas et immeubles de La Ciotat, en respectant les normes de sécurité les plus strictes. Notre process inclut un diagnostic préalable, un nettoyage par eau purifiée et un traitement anti-traces qui préserve la brillance du verre.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés et assurés
- Techniques d&apos;accès sur cordes innovantes
- Intervention rapide sur La Ciotat et région
- Devis gratuit et personnalisé
- Respect total des normes de sécurité
- Matériel écologique et haute performance</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par fenêtre, selon la hauteur, l&apos;accessibilité et la surface totale. Un immeuble de 4 étages représente en moyenne un budget de 600-1200€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition aux intempéries et la pollution. Les immeubles en centre-ville ou proche mer nécessitent un nettoyage plus fréquent, idéalement tous les 3-4 mois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos cordistes utilisent un équipement de protection individuelle complet, des systèmes antichute homologués, et suivent des formations continues en techniques d&apos;escalade professionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a La Ciotat ?
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
