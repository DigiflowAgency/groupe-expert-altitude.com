import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Pantin | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Pantin, offre des solutions professionnelles pour des surfaces ',
  keywords: 'nettoyage vitres hauteur pantin, lavage vitres immeuble pantin, nettoyage facade vitree pantin, cordiste vitre pantin, entreprise nettoyage vitres pantin, nettoyage verriere pantin',
};

export default function NettoyageVitresHauteurPantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Pantin, offre des solutions professionnelles pour des surfaces vitrées impeccables. Nous intervenons sur tous types de bâtiments, en garantissant une propreté et une sécurité maximales.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Pantin</h2>
        <div className="space-y-4">
          <p>Notre expertise en nettoyage de vitres en hauteur répond aux exigences les plus strictes des immeubles et bâtiments commerciaux de Pantin. Nos techniciens cordistes sont formés aux techniques verticales les plus avancées, permettant un nettoyage précis et sans risque des façades vitrées. Équipés de matériel professionnel et de systèmes d&apos;accroche homologués, nous intervenons sur des hauteurs allant jusqu&apos;à 100 mètres. Chaque intervention est précédée d&apos;un diagnostic technique personnalisé pour optimiser l&apos;efficacité et la sécurité du nettoyage. Nos méthodes écologiques utilisent des produits biodégradables, respectueux de l&apos;environnement et des surfaces traitées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 15 cordistes certifiés avec plus de 10 ans d&apos;expérience
- Interventions 100% sécurisées selon les normes AFNOR
- Devis gratuit et personnalisé sous 24h
- Techniques innovantes garantissant une brillance parfaite des surfaces vitrées</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la hauteur, l&apos;accessibilité et la complexité de l&apos;intervention. Un immeuble de 5 étages représente en moyenne un budget entre 800€ et 2500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, avec un nettoyage saisonnier au printemps et à l&apos;automne. Pour les zones très exposées à la pollution ou en centre-ville comme Pantin, nous conseillons un nettoyage trimestriel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Notre protocole de nettoyage en hauteur comprend : équipements de protection individuelle, systèmes antichute, formation CACES, évaluation des risques préalable et respect strict des normes de sécurité professionnelles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Pantin ?
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
