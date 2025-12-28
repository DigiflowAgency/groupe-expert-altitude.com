import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Draguignan | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Draguignan et ses environs. Forts de plus de 15 ans d&apos;expé',
  keywords: 'nettoyage vitres hauteur draguignan, lavage vitres immeuble draguignan, nettoyage facade vitree draguignan, cordiste vitre draguignan, entreprise nettoyage vitres draguignan, nettoyage verriere draguignan',
};

export default function NettoyageVitresHauteurDraguignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Draguignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Draguignan et ses environs. Forts de plus de 15 ans d&apos;expérience, nous intervenons sur tous types de bâtiments avec des techniques de cordistes professionnels.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Draguignan</h2>
        <div className="space-y-4">
          <p>Nos experts en nettoyage de vitres en hauteur proposent une prestation complète et sécurisée pour les immeubles, entreprises et particuliers de Draguignan. Notre équipe utilise des techniques de cordage professionnel permettant d&apos;accéder aux surfaces vitrées les plus difficiles, garantissant un nettoyage impeccable sans échafaudage. Nous maîtrisons parfaitement les techniques de travail en hauteur, avec un équipement aux normes de sécurité les plus strictes. Chaque intervention est précédée d&apos;un diagnostic précis pour adapter notre méthode à la configuration spécifique du bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés travaux en hauteur
- Matériel professionnel dernier cri
- Respect des normes de sécurité
- Intervention rapide sur Draguignan et le Var
- Devis gratuit et personnalisé
- Plus de 500 chantiers réalisés depuis 2008</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon l&apos;accessibilité et la hauteur. Pour un immeuble standard de 200m², comptez un budget entre 1500€ et 3000€. Un devis précis sera établi après diagnostic sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 nettoyages par an, selon l&apos;exposition et l&apos;environnement. Les bâtiments en centre-ville ou zones industrielles nécessiteront un entretien plus fréquent que les immeubles résidentiels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation de harnais de sécurité, points d&apos;ancrage homologués, formation CACES, assurances professionnelles. Nos cordistes suivent des formations annuelles et utilisent un équipement aux normes européennes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Draguignan ?
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
