import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Aubervilliers | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Aubervilliers, offrant une expertise technique irréprochable',
  keywords: 'nettoyage vitres hauteur aubervilliers, lavage vitres immeuble aubervilliers, nettoyage facade vitree aubervilliers, cordiste vitre aubervilliers, entreprise nettoyage vitres aubervilliers, nettoyage verriere aubervilliers',
};

export default function NettoyageVitresHauteurAubervilliersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Aubervilliers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Aubervilliers, offrant une expertise technique irréprochable pour les immeubles et façades les plus exigeants. Notre équipe de cordistes professionnels transforme l&apos;entretien de vos surfaces vitrées en une prestation de haute précision et de sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Aubervilliers</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la solution ultime pour les professionnels et copropriétés d&apos;Aubervilliers recherchant une qualité impeccable. Nos techniciens hautement qualifiés utilisent des techniques de cordage industriel permettant d&apos;atteindre les zones les plus difficiles d&apos;accès, garantissant un nettoyage complet et respectueux des normes de sécurité. Nous intervenons sur tous types de bâtiments, des immeubles résidentiels aux complexes tertiaires, avec un équipement technique dernier cri qui assure une propreté cristalline et durable. Notre processus comprend un diagnostic préalable, un nettoyage écologique et un contrôle qualité systématique, pour des résultats qui dépassent vos attentes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe certifiée avec plus de 15 ans d&apos;expérience en travaux verticaux
✓ Techniques de nettoyage innovantes et respectueuses de l&apos;environnement
✓ Intervention rapide et sur-mesure à Aubervilliers et ses environs
✓ Conformité totale aux normes de sécurité et d&apos;hygiène professionnelles
✓ Devis gratuit et transparence tarifaire garantis</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la complexité de l&apos;intervention. Pour un immeuble standard à Aubervilliers, comptez un budget global entre 500€ et 2500€. Un devis personnalisé après diagnostic précis vous permettra d&apos;obtenir un tarif exact.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, en fonction de votre environnement. Les immeubles en centre-ville ou exposés à la pollution nécessiteront un nettoyage plus régulier. Un rythme semestriel est généralement optimal pour maintenir une brillance et une transparence optimales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos cordistes utilisent un équipement homologué (harnais, points d&apos;ancrage certifiés), suivent des formations annuelles aux techniques de travail en hauteur et respectent strictement le protocole PPSPS. Chaque intervention fait l&apos;objet d&apos;une évaluation des risques préalable garantissant une intervention 100% sécurisée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Aubervilliers ?
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
