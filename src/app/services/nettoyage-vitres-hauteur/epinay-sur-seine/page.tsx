import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Épinay-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialiste en nettoyage de vitres en hauteur à Épinay-sur-Seine, transforme l&apos;entretien de vos surfaces vitré',
  keywords: 'nettoyage vitres hauteur épinay-sur-seine, lavage vitres immeuble épinay-sur-seine, nettoyage facade vitree épinay-sur-seine, cordiste vitre épinay-sur-seine, entreprise nettoyage vitres épinay-sur-seine, nettoyage verriere épinay-sur-seine',
};

export default function NettoyageVitresHauteurEpinaySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Épinay-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialiste en nettoyage de vitres en hauteur à Épinay-sur-Seine, transforme l&apos;entretien de vos surfaces vitrées en une expérience professionnelle et sécurisée. Nos techniciens cordistes interviennent sur tous types de bâtiments, des immeubles résidentiels aux structures tertiaires complexes.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Épinay-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences techniques les plus strictes. Équipés de techniques professionnelles et de matériel high-tech, nous garantissons une propreté impeccable sans compromettre la sécurité. Nos cordistes hautement qualifiés utilisent des équipements homologués permettant d&apos;accéder aux surfaces les plus difficiles, des façades vitrées aux verrières architecturales. Chaque intervention à Épinay-sur-Seine est personnalisée, avec une évaluation préalable précise pour un résultat optimal et une efficacité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de 12 cordistes certifiés
✓ Techniques d&apos;accès sur cordes brevetées
✓ Matériel professionnel dernière génération
✓ Assurance responsabilité civile complète
✓ Interventions rapides sur Épinay-sur-Seine et communes limitrophes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par mètre carré, selon l&apos;accessibilité et la hauteur. Pour un immeuble standard de 200m², comptez un budget global entre 1200€ et 3000€, incluant notre expertise technique et la garantie d&apos;un travail impeccable.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 nettoyages par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville ou zones industrielles nécessiteront des interventions plus fréquentes, tandis que les bâtiments résidentiels peuvent se contenter de 2 nettoyages annuels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos cordistes utilisent un équipement de protection individuelle complet, des systèmes antichute homologués, et suivent des protocoles stricts de prévention des risques. Chaque intervention fait l&apos;objet d&apos;une analyse préalable des points d&apos;ancrage et des conditions environnementales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Épinay-sur-Seine ?
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
