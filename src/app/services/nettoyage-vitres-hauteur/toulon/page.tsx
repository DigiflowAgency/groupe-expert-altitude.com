import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Toulon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Toulon, transforme l&apos;entretien de vos façades vitrées en une opération de',
  keywords: 'nettoyage vitres hauteur toulon, lavage vitres immeuble toulon, nettoyage facade vitree toulon, cordiste vitre toulon, entreprise nettoyage vitres toulon, nettoyage verriere toulon',
};

export default function NettoyageVitresHauteurToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Toulon, transforme l&apos;entretien de vos façades vitrées en une opération de précision et de sécurité. Nous intervenons sur tous types de bâtiments, des immeubles résidentiels aux complexes tertiaires du Var.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Toulon</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente bien plus qu&apos;un simple lavage. Nos techniciens cordistes, formés aux techniques alpines, garantissent un nettoyage impeccable et sécurisé des surfaces verticales les plus complexes. Équipés de matériel professionnel et de techniques innovantes, nous nettoyons vitres, vérandas et facades vitrées avec une efficacité remarquable. À Toulon et ses environs, nous utilisons des produits écologiques qui respectent l&apos;environnement et préservent l&apos;éclat de vos surfaces vitrées. Notre méthodologie combine expertise technique, respect des normes de sécurité et souci du détail, assurant un résultat parfait à chaque intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de cordistes certifiés et expérimentés
✓ Techniques alpines garantissant 100% de sécurité
✓ Interventions rapides sur Toulon et le département du Var
✓ Matériel dernière génération et produits écologiques
✓ Devis gratuit et transparent sous 24h
✓ Plus de 15 ans d&apos;expérience en nettoyage de hauteur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par vitre, selon la hauteur, l&apos;accessibilité et la surface. Un immeuble de 5 étages représente généralement un investissement entre 500€ et 1500€. Nous proposons des forfaits adaptés et un devis personnalisé gratuit.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville de Toulon ou proche du littoral nécessitent un nettoyage plus fréquent en raison de la pollution et des embruns marins.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos cordistes utilisent un équipement homologué (harnais, points d&apos;ancrage certifiés), suivent des formations annuelles et respectent strictement les protocoles de sécurité INRS. Chaque intervention fait l&apos;objet d&apos;une analyse précise des risques avant démarrage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Toulon ?
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
