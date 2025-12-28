import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Villenave-d&apos;Ornon et ses environs. Nos experts cordis',
  keywords: 'nettoyage vitres hauteur villenave-d'ornon, lavage vitres immeuble villenave-d'ornon, nettoyage facade vitree villenave-d'ornon, cordiste vitre villenave-d'ornon, entreprise nettoyage vitres villenave-d'ornon, nettoyage verriere villenave-d'ornon',
};

export default function NettoyageVitresHauteurVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Villenave-d&apos;Ornon et ses environs. Nos experts cordistes transforment vos façades vitrées en surfaces cristallines, garantissant une propreté et une transparence exceptionnelles pour tous vos bâtiments.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la solution professionnelle et sécurisée pour les immeubles, entreprises et particuliers de Villenave-d&apos;Ornon. Notre équipe hautement qualifiée utilise des techniques de cordage spécialisées permettant d&apos;intervenir sur des surfaces jusqu&apos;à 100 mètres de hauteur. Chaque intervention est précédée d&apos;un diagnostic technique précis pour adapter nos méthodes à la spécificité de votre bâtiment. Nous utilisons uniquement des produits écologiques et des équipements de dernière génération, garantissant un résultat impeccable sans impact environnemental.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 15 ans d&apos;expérience
- Interventions 100% sécurisées selon les normes AFNOR
- Devis gratuit sous 48h
- Techniques innovantes de nettoyage respectueuses de l&apos;environnement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ le m², selon la hauteur, l&apos;accessibilité et la fréquence. Un immeuble moyen de 500m² coûtera environ 3000€ par intervention annuelle.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 nettoyages par an, selon l&apos;exposition aux intempéries et à la pollution. Les immeubles en centre-ville nécessitent généralement un nettoyage trimestriel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur s&apos;effectue uniquement avec des équipements homologués, des harnais de sécurité, des cordes aux normes et après une évaluation précise des risques par des professionnels certifiés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Villenave-d'Ornon ?
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
