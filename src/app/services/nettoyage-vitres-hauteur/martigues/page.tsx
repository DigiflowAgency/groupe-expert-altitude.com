import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Martigues | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Martigues, intervient sur tous vos projets complexes avec une expertise t',
  keywords: 'nettoyage vitres hauteur martigues, lavage vitres immeuble martigues, nettoyage facade vitree martigues, cordiste vitre martigues, entreprise nettoyage vitres martigues, nettoyage verriere martigues',
};

export default function NettoyageVitresHauteurMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Martigues, intervient sur tous vos projets complexes avec une expertise technique et une sécurité maximale. Nous transformons l&apos;entretien de vos surfaces vitrées en une solution professionnelle et sans compromis.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Martigues</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et des particuliers de la région de Martigues. Nos techniciens cordistes sont formés aux techniques d&apos;accès difficile, utilisant des équipements homologués pour traiter les facades vitrées des immeubles, bureaux et monuments. Nous intervenons avec des techniques spécifiques permettant un nettoyage optimal sans risque structural, en respectant les normes de sécurité les plus récentes. Notre méthode combine des produits écologiques, un matériel haute précision et une expertise technique garantissant des surfaces cristallines et impeccables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Interventions 100% sécurisées par des cordistes experts
- Matériel professionnel dernière génération
- Devis gratuit et personnalisé sous 24h
- Respect total des normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ au m², selon la difficulté d&apos;accès, la hauteur et la surface totale. Un immeuble moyen de 300m² coûtera environ 1200€ à 1800€, avec un tarif dégressif selon la superficie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les bâtiments proche de zones industrielles ou maritimes comme Martigues nécessitent un nettoyage plus fréquent, idéalement tous les 3-4 mois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation de harnais anti-chute, formation CACES, équipements homologués, assurance professionnelle. Nos cordistes suivent un protocole sécuritaire complet garantissant zéro risque durant l&apos;intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Martigues ?
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
