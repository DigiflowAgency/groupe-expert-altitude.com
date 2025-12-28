import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Bouguenais | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Bouguenais et ses environs. Forts de plus de 15 ans d&apos;expé',
  keywords: 'nettoyage vitres hauteur bouguenais, lavage vitres immeuble bouguenais, nettoyage facade vitree bouguenais, cordiste vitre bouguenais, entreprise nettoyage vitres bouguenais, nettoyage verriere bouguenais',
};

export default function NettoyageVitresHauteurBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Bouguenais et ses environs. Forts de plus de 15 ans d&apos;expérience, nous intervenons sur tous types de bâtiments, des immeubles aux vérandas, en garantissant une propreté et une sécurité maximales.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Bouguenais</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente la solution professionnelle pour les entreprises et copropriétés de Bouguenais qui recherchent une prestation impeccable. Nos techniciens cordistes sont formés aux techniques d&apos;accès difficile, utilisant un équipement de pointe homologué qui permet d&apos;atteindre les surfaces vitrées les plus complexes. Nous intervenons sur les façades vitrées, vérandas, tours de bureaux et bâtiments industriels, avec une méthodologie précise qui assure un résultat sans trace et une brillance remarquable. Notre approche combine technicité et respect des normes de sécurité les plus strictes, avec un taux de satisfaction client de plus de 95%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de cordistes certifiés et hautement qualifiés
✓ Matériel professionnel dernière génération
✓ Interventions 100% sécurisées
✓ Devis gratuit et personnalisé
✓ Respect strict des normes environnementales
✓ Disponibilité rapide sur Bouguenais et Loire-Atlantique</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon l&apos;accessibilité et la hauteur. Pour un immeuble standard à Bouguenais, comptez environ 800€ à 2500€ pour un nettoyage complet. Nous proposons des forfaits dégressifs pour les grandes surfaces.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les bâtiments en centre-ville ou près de zones industrielles nécessitent un nettoyage plus fréquent, idéalement tous les 3-4 mois pour maintenir une apparence impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur requiert des équipements spécifiques : harnais de sécurité, points d&apos;ancrage certifiés, cordes homologuées et formation CATEC. Nos techniciens suivent annuellement des formations de sécurité et utilisent un équipement contrôlé répondant aux normes européennes EN 361 et EN 795.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Bouguenais ?
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
