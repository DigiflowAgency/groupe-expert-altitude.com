import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Vitry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Vitry-sur-Seine, en proposant des solutions professionnelles et sécurisées pour',
  keywords: 'nettoyage vitres hauteur vitry-sur-seine, lavage vitres immeuble vitry-sur-seine, nettoyage facade vitree vitry-sur-seine, cordiste vitre vitry-sur-seine, entreprise nettoyage vitres vitry-sur-seine, nettoyage verriere vitry-sur-seine',
};

export default function NettoyageVitresHauteurVitrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Vitry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Vitry-sur-Seine, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments. Nos techniciens cordistes transforment vos facades vitrées en véritables surfaces cristallines, sans compromis sur la qualité et la sécurité.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Vitry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service spécialisé de nettoyage de vitres en hauteur répond aux exigences les plus strictes des immeubles et entreprises de Vitry-sur-Seine et ses environs. Nous utilisons des techniques de cordage professionnel permettant d&apos;intervenir sur des surfaces jusqu&apos;à 100 mètres de hauteur, avec un équipement ultramoderne garantissant une propreté impeccable. Nos techniciens sont formés aux normes de sécurité les plus récentes, disposant de certifications spécifiques pour l&apos;accès en hauteur et le travail sur cordes. Chaque intervention fait l&apos;objet d&apos;un diagnostic précis, d&apos;un devis détaillé et d&apos;un suivi personnalisé, assurant une prestation sur-mesure.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés en nettoyage de vitres depuis 2008
- Techniques cordistes innovantes et sécurisées
- Couverture complète de Vitry-sur-Seine et région parisienne
- Matériel professionnel dernière génération
- Interventions respectueuses de l&apos;environnement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ le m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Pour un immeuble standard à Vitry-sur-Seine, comptez environ 800€ à 2500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les bâtiments en centre-ville ou proche des axes routiers nécessiteront un nettoyage plus fréquent, idéalement tous les trimestres.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de systèmes antichute, de harnais homologués, de cordes spécialisées et le respect strict des protocoles INRS. Nos techniciens suivent annuellement des formations de mise à jour des techniques de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Vitry-sur-Seine ?
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
