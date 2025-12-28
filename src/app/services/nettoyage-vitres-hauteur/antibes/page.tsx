import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Antibes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Antibes, transforme l&apos;entretien de vos surfaces vitrées en une expérience',
  keywords: 'nettoyage vitres hauteur antibes, lavage vitres immeuble antibes, nettoyage facade vitree antibes, cordiste vitre antibes, entreprise nettoyage vitres antibes, nettoyage verriere antibes',
};

export default function NettoyageVitresHauteurAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Antibes, transforme l&apos;entretien de vos surfaces vitrées en une expérience de propreté et de sécurité absolue. Nos techniques innovantes garantissent des façades impeccables dans toute la région azuréenne.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Antibes</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente la solution professionnelle ultime pour les immeubles, résidences et bâtiments commerciaux d&apos;Antibes. Nos techniciens cordistes, formés aux techniques alpines, interviennent avec un équipement de pointe permettant un nettoyage précis et sécurisé des surfaces vitrées les plus complexes. Nous utilisons des produits écologiques qui respectent l&apos;environnement et garantissent un brillant sans traces. Notre méthodologie unique combine technicité et expertise, avec un protocole d&apos;intervention qui minimise les risques et maximise la qualité de nettoyage. Chaque intervention est personnalisée, adaptée à la configuration spécifique de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe certifiée avec plus de 15 ans d&apos;expérience en nettoyage vertical
✓ Techniques cordistes conformes aux normes de sécurité les plus strictes
✓ Matériel high-tech et produits écologiques
✓ Intervention rapide sur tout Antibes et sa région
✓ Devis gratuit et transparent sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par mètre carré, selon la difficulté d&apos;accès, la hauteur et la fréquence. Un immeuble moyen de 300m² peut nécessiter un investissement entre 1500€ et 3500€ pour un nettoyage complet et professionnel.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les bâtiments en zone urbaine ou maritime nécessitent un nettoyage plus fréquent à cause de la pollution et des embruns. Un calendrier personnalisé permet d&apos;optimiser l&apos;entretien de vos surfaces vitrées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles de sécurité strictes : utilisation de harnais, formation aux techniques de cordage, certification IRATA, assurances professionnelles, et respect du protocole de prévention des risques. Nos techniciens sont équipés d&apos;EPI complets et suivent des formations annuelles de mise à jour des compétences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Antibes ?
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
