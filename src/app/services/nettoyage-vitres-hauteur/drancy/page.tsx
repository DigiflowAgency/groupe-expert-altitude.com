import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Drancy | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Drancy et ses environs. Avec une expertise technique un',
  keywords: 'nettoyage vitres hauteur drancy, lavage vitres immeuble drancy, nettoyage facade vitree drancy, cordiste vitre drancy, entreprise nettoyage vitres drancy, nettoyage verriere drancy',
};

export default function NettoyageVitresHauteurDrancyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Drancy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Drancy et ses environs. Avec une expertise technique unique, nous intervenons sur tous types de bâtiments pour des surfaces vitrées impeccables et sécurisées.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Drancy</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et des particuliers de Drancy. Nos techniciens cordistes utilisent des techniques d&apos;alpinisme industriel permettant d&apos;accéder aux surfaces vitrées les plus complexes, garantissant un nettoyage optimal sans échafaudage. Nous intervenons sur immeubles, facades commerciales, vérandas et immeubles de bureaux, avec un équipement high-tech et des produits écologiques. Notre méthode combine précision technique et respect des normes de sécurité, assurant des résultats brillants et durables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expérience en nettoyage de vitres à Drancy
✓ Équipe certifiée en travaux en hauteur
✓ Matériel professionnel dernière génération
✓ Devis gratuit et personnalisé
✓ Intervention rapide et efficace</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la fréquence. Un immeuble moyen de 200m² coûtera environ 800-1500€ par intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons 2 à 4 nettoyages complets par an : un au printemps pour éliminer les salissures hivernales, un autre en automne pour préparer l&apos;hiver. Les bâtiments exposés à la pollution peuvent nécessiter des interventions plus fréquentes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens utilisent un équipement de sécurité complet : harnais antichute, points d&apos;ancrage certifiés, cordes professionnelles. Chaque intervention est précédée d&apos;une analyse des risques et respecte strictement les normes INRS de sécurité en travaux en hauteur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Drancy ?
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
