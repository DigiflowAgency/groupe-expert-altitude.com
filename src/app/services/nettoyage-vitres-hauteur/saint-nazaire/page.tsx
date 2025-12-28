import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Saint-Nazaire, transforme chaque façade vitrée en surface cristalline. No',
  keywords: 'nettoyage vitres hauteur saint-nazaire, lavage vitres immeuble saint-nazaire, nettoyage facade vitree saint-nazaire, cordiste vitre saint-nazaire, entreprise nettoyage vitres saint-nazaire, nettoyage verriere saint-nazaire',
};

export default function NettoyageVitresHauteurSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Saint-Nazaire, transforme chaque façade vitrée en surface cristalline. Nos experts cordistes interviennent sur tous types de bâtiments, garantissant une propreté impeccable et une sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>Nos techniciens hautement qualifiés maîtrisent parfaitement les techniques de nettoyage en milieu vertical, utilisant des équipements de pointe adaptés à chaque configuration architecturale. À Saint-Nazaire et ses environs, nous intervenons sur immeubles, bureaux, vérandas et façades complexes, avec une précision chirurgicale. Notre process comprend une évaluation préalable du site, un nettoyage écologique avec des produits sans traces, et un contrôle qualité systématique. Nos cordistes certifiés travaillent selon les normes de sécurité les plus strictes, permettant un résultat impeccable sans risque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ 15 ans d&apos;expertise en nettoyage de vitres en hauteur
✓ Techniciens diplômés et assurés
✓ Matériel professionnel dernière génération
✓ Intervention rapide sur Saint-Nazaire et Loire-Atlantique
✓ Devis personnalisé et gratuit sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 10€ et 35€ au m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Pour un immeuble standard de 200m², comptez entre 1500€ et 3500€. Un devis précis sera établi après diagnostic sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les zones industrielles ou maritimes comme Saint-Nazaire nécessitent un nettoyage plus fréquent à cause des embruns et pollutions atmosphériques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation de harnais homologués, formation CACES, évaluation des risques préalable, matériel aux normes et assurance professionnelle. Nos cordistes respectent scrupuleusement ces protocoles de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Saint-Nazaire ?
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
