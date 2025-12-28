import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Champigny-sur-Marne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Champigny-sur-Marne et ses environs. Spécialistes des',
  keywords: 'nettoyage vitres hauteur champigny-sur-marne, lavage vitres immeuble champigny-sur-marne, nettoyage facade vitree champigny-sur-marne, cordiste vitre champigny-sur-marne, entreprise nettoyage vitres champigny-sur-marne, nettoyage verriere champigny-sur-marne',
};

export default function NettoyageVitresHauteurChampignySurMarnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Champigny-sur-Marne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Champigny-sur-Marne et ses environs. Spécialistes des interventions complexes, nous garantissons des facades vitrées impeccables et un service de haute qualité pour tous vos bâtiments.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Champigny-sur-Marne</h2>
        <div className="space-y-4">
          <p>Notre expertise en nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et des particuliers. Nos techniciens cordistes utilisent un équipement de pointe pour traiter les surfaces vitrées les plus difficiles d&apos;accès, depuis les immeubles résidentiels jusqu&apos;aux grands bâtiments tertiaires de Champigny-sur-Marne. Nous intervenons avec des techniques spécialisées permettant un nettoyage sans traces, en respectant les normes de sécurité les plus rigoureuses. Chaque intervention est personnalisée, avec un diagnostic précis et un plan d&apos;action adapté à la configuration spécifique de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 cordistes certifiés et expérimentés
- Matériel professionnel dernier cri
- Interventions 100% sécurisées
- Devis gratuit et transparent
- Délais d&apos;intervention rapides
- Assurance responsabilité civile professionnelle</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la difficulté d&apos;accès, la hauteur et la surface totale. Pour un immeuble moyen de 200m², comptez un budget global entre 1500€ et 3000€ avec un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, en fonction de l&apos;environnement. Les bâtiments en centre-ville ou exposés à la pollution nécessitent un nettoyage plus fréquent, tandis que les zones résidentielles peuvent se contenter de 2 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation de harnais de sécurité, formation CACES, équipements homologués, assurance spécifique. Nos techniciens sont formés aux techniques de travail en suspension et respectent scrupuleusement les protocoles de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Champigny-sur-Marne ?
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
