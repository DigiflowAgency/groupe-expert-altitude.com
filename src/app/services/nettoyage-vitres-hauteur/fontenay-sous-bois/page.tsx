import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Fontenay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Fontenay-sous-Bois et ses environs. Nous intervenons sur les',
  keywords: 'nettoyage vitres hauteur fontenay-sous-bois, lavage vitres immeuble fontenay-sous-bois, nettoyage facade vitree fontenay-sous-bois, cordiste vitre fontenay-sous-bois, entreprise nettoyage vitres fontenay-sous-bois, nettoyage verriere fontenay-sous-bois',
};

export default function NettoyageVitresHauteurFontenaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Fontenay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Fontenay-sous-Bois et ses environs. Nous intervenons sur les bâtiments commerciaux, industriels et résidentiels avec des techniques de pointe garantissant des surfaces vitrées impeccables et une sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Fontenay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et particuliers de Fontenay-sous-Bois. Nos techniciens cordistes sont formés aux techniques d&apos;accès difficile, utilisant un équipement high-tech permettant de traiter les surfaces vitrées les plus complexes. Nous intervenons sur les immeubles, facades, vérandas et verrières avec une précision chirurgicale, en respectant les normes de sécurité les plus récentes. Chaque intervention est personnalisée, avec un diagnostic préalable et un devis détaillé, garantissant une propreté et une brillance optimales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de 12 professionnels certifiés IRATA
✓ Matériel professionnel dernière génération
✓ Intervention sur tout type de bâtiment à Fontenay-sous-Bois
✓ Devis gratuit sous 24h
✓ Respect total des normes de sécurité
✓ Plus de 15 ans d&apos;expérience en nettoyage de hauteur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ le m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Pour un immeuble standard de 200m², comptez entre 1500€ et 3000€ pour un nettoyage complet et professionnel.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les immeubles en centre-ville ou zones industrielles nécessiteront un nettoyage plus fréquent, contre 2 fois/an pour des zones résidentielles plus calmes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité passe par l&apos;utilisation de techniques professionnelles : équipements homologués, harnais de sécurité, formations IRATA, assurances spécifiques, et respect strict du protocole de prévention des risques en hauteur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Fontenay-sous-Bois ?
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
