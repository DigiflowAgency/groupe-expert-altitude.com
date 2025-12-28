import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Nantes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Nantes, offrant des solutions professionnelles pour les imme',
  keywords: 'nettoyage vitres hauteur nantes, lavage vitres immeuble nantes, nettoyage facade vitree nantes, cordiste vitre nantes, entreprise nettoyage vitres nantes, nettoyage verriere nantes',
};

export default function NettoyageVitresHauteurNantesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Nantes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Nantes, offrant des solutions professionnelles pour les immeubles, entreprises et bâtiments complexes. Nos experts cordistes transforment vos surfaces vitrées en véritables surfaces lumineuses et impeccables.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Nantes</h2>
        <div className="space-y-4">
          <p>Nos techniques de nettoyage haute performance permettent d&apos;intervenir sur tous types de façades vitrées, des immeubles de bureaux aux vérandas résidentielles. Grâce à notre équipement technique ultramoderne et nos cordistes certifiés, nous garantissons un nettoyage précis et sécurisé, même sur les surfaces les plus difficiles d&apos;accès. Notre méthode combinant techniques de cordage industriel et équipements écologiques assure un résultat brillant sans trace, tout en respectant les normes de sécurité les plus strictes. Plus de 95% de nos clients à Nantes et sa région nous renouvellent leur confiance chaque année.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 cordistes experts certifiés IRATA
- Matériel professionnel dernière génération
- Interventions 100% sécurisées
- Devis gratuit sous 24h
- Respect des normes environnementales
- Expérience de plus de 15 ans sur le territoire nantais</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par mètre carré, selon la complexité d&apos;accès, la hauteur et l&apos;état des surfaces. Un immeuble de 500m² peut nécessiter un investissement entre 2500€ et 7500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. En centre-ville de Nantes ou zone industrielle, nous conseillons un nettoyage trimestriel. Pour les zones moins exposées, un nettoyage semestriel suffit généralement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur nécessite une formation spécifique. Nos cordistes utilisent des systèmes antichute, des harnais homologués, des points d&apos;ancrage certifiés et suivent un protocole strict de sécurité, garantissant des interventions sans risque pour l&apos;équipe et l&apos;environnement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Nantes ?
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
