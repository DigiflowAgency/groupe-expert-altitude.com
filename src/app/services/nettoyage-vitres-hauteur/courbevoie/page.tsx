import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Courbevoie | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre spécialiste du nettoyage de vitres en hauteur à Courbevoie et dans toute la région parisienne. Forts de plus de 15 ans',
  keywords: 'nettoyage vitres hauteur courbevoie, lavage vitres immeuble courbevoie, nettoyage facade vitree courbevoie, cordiste vitre courbevoie, entreprise nettoyage vitres courbevoie, nettoyage verriere courbevoie',
};

export default function NettoyageVitresHauteurCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre spécialiste du nettoyage de vitres en hauteur à Courbevoie et dans toute la région parisienne. Forts de plus de 15 ans d&apos;expérience, nous intervenons sur les bâtiments les plus complexes avec une technicité et un professionnalisme inégalés.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Courbevoie</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des immeubles et entreprises de Courbevoie. Nos techniciens cordistes sont formés aux techniques de travail en suspension, garantissant un nettoyage impeccable et sécurisé des facades vitrées. Nous utilisons du matériel high-tech et des produits écologiques qui permettent un résultat brillant sans trace. Notre process comprend un diagnostic préalable, un nettoyage manuel précis et un contrôle qualité systématique. Chaque intervention est personnalisée selon la configuration du bâtiment et ses spécificités architecturales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 professionnels certifiés travaux en hauteur
- Matériel aux normes de sécurité européennes
- Interventions rapides sur Courbevoie et région parisienne
- Devis gratuit et personnalisé sous 24h
- Assurance responsabilité civile professionnelle</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon la hauteur, l&apos;accessibilité et la fréquence. Pour un immeuble standard à Courbevoie, comptez environ 750€ à 1500€ par intervention complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville ou près d&apos;axes routiers nécessitent un nettoyage plus fréquent, idéalement tous les 3-4 mois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur requiert des équipements spécifiques : harnais de sécurité, points d&apos;ancrage normés, cordes homologuées et formation CATEC. Nos techniciens disposent de toutes les certifications requises pour intervenir en toute sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Courbevoie ?
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
