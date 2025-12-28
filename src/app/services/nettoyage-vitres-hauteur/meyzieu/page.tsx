import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Meyzieu | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Meyzieu et ses environs. Forts de plus de 15 ans d&apos;expérie',
  keywords: 'nettoyage vitres hauteur meyzieu, lavage vitres immeuble meyzieu, nettoyage facade vitree meyzieu, cordiste vitre meyzieu, entreprise nettoyage vitres meyzieu, nettoyage verriere meyzieu',
};

export default function NettoyageVitresHauteurMeyzieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Meyzieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Meyzieu et ses environs. Forts de plus de 15 ans d&apos;expérience, nous intervenons avec précision et sécurité pour tous vos projets de nettoyage de façades vitrées.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Meyzieu</h2>
        <div className="space-y-4">
          <p>Nos techniciens cordistes sont formés aux techniques les plus avancées de nettoyage de vitres en hauteur, garantissant un résultat impeccable pour les immeubles, bureaux et bâtiments industriels de Meyzieu. Nous utilisons un équipement professionnel dernier cri permettant d&apos;intervenir sur des hauteurs allant jusqu&apos;à 100 mètres, avec des systèmes de sécurité certifiés. Notre approche combine technicité et respect des normes de sécurité, assurant un nettoyage optimal sans risque pour vos infrastructures. Chaque intervention est personnalisée, avec un diagnostic préalable et un plan d&apos;action adapté à vos besoins spécifiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe de 12 cordistes certifiés et expérimentés
• Matériel professionnel de haute technologie
• Interventions 100% sécurisées
• Devis gratuit et personnalisé
• Respect strict des normes environnementales
• Disponibilité rapide sur Meyzieu et sa région</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ au m², selon la hauteur, l&apos;accessibilité et la complexité du chantier. Pour un devis précis, nous réalisons toujours un diagnostic technique gratuit sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition du bâtiment. Les zones urbaines ou industrielles nécessitent un nettoyage plus fréquent en raison de l&apos;accumulation de pollution et de poussières.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur requiert des équipements spécifiques : harnais de sécurité, points d&apos;ancrage certifiés, cordes techniques homologuées. Nos techniciens suivent annuellement des formations de sécurité et possèdent les certifications CATEC et travaux en hauteur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Meyzieu ?
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
