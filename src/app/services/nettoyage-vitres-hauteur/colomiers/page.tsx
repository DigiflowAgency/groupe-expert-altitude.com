import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Colomiers | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Colomiers et ses environs. Spécialistes des intervent',
  keywords: 'nettoyage vitres hauteur colomiers, lavage vitres immeuble colomiers, nettoyage facade vitree colomiers, cordiste vitre colomiers, entreprise nettoyage vitres colomiers, nettoyage verriere colomiers',
};

export default function NettoyageVitresHauteurColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Colomiers et ses environs. Spécialistes des interventions complexes, nous garantissons des surfaces vitrées impeccables avec une expertise technique inégalée.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Colomiers</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la solution professionnelle ultime pour les immeubles, bureaux et bâtiments commerciaux de Colomiers. Notre équipe de cordistes hautement qualifiés utilise des techniques d&apos;alpinisme industriel permettant d&apos;atteindre les surfaces les plus difficiles d&apos;accès. Nous intervenons avec du matériel homologué et des protocoles de sécurité stricts, assurant un nettoyage impeccable sans risque pour vos infrastructures. Nos techniciens maîtrisent parfaitement les techniques de travail en suspension, offrant une prestation complète allant du simple lavage de vitres à l&apos;entretien de façades vitrées complexes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 10 ans d&apos;expérience
- Matériel professionnel dernière génération
- Interventions 100% sécurisées
- Devis gratuit et personnalisé sous 24h
- Respect des normes environnementales et de sécurité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Un immeuble moyen de 300m² représente un budget estimé entre 4 500€ et 13 500€, avec un tarif dégressif pour les grandes surfaces.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les immeubles en centre-ville ou zones industrielles nécessitent un nettoyage plus fréquent, tandis que les bâtiments en zones résidentielles peuvent se contenter de 2 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation d&apos;équipements de protection individuelle, formation spécifique CACES, amarrages certifiés, et respect du Plan de Prévention. Nos cordistes sont formés aux techniques d&apos;escalade professionnelle et suivent des protocoles de sécurité rigoureux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Colomiers ?
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
