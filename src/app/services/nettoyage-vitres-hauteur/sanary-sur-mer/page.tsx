import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Sanary-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Sanary-sur-Mer, offre des solutions professionnelles pour tous ',
  keywords: 'nettoyage vitres hauteur sanary-sur-mer, lavage vitres immeuble sanary-sur-mer, nettoyage facade vitree sanary-sur-mer, cordiste vitre sanary-sur-mer, entreprise nettoyage vitres sanary-sur-mer, nettoyage verriere sanary-sur-mer',
};

export default function NettoyageVitresHauteurSanarySurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Sanary-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Sanary-sur-Mer, offre des solutions professionnelles pour tous vos besoins de nettoyage de facades vitrées. Notre expertise technique et notre engagement sécuritaire font de nous le choix incontournable sur la côte varoise.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Sanary-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent bien plus qu&apos;un simple lavage. Nous intervenons sur tous types de bâtiments - immeubles résidentiels, bureaux et établissements publics de Sanary-sur-Mer et ses environs. Nos techniciens cordistes utilisent des techniques d&apos;alpinisme industriel garantissant un nettoyage impeccable et sécurisé, même sur les surfaces les plus complexes. Équipés de matériel professionnel dernière génération, nous assurons une prestation qui respecte les normes de sécurité les plus strictes, avec un résultat brillant et sans traces.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience
- Équipe de 12 cordistes professionnels formés aux techniques spécialisées
- Matériel high-tech et respect des normes de sécurité
- Interventions rapides et devis personnalisés sous 24h sur Sanary-sur-Mer</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût varie entre 15€ et 50€ par m² selon la difficulté d&apos;accès, la hauteur et la surface. Un immeuble de 5 étages représente environ 500-800€ pour un nettoyage complet. Nous proposons des devis gratuits et détaillés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons 2 à 3 nettoyages par an pour les immeubles et facades exposées. Les bâtiments en bord de mer comme à Sanary-sur-Mer nécessitent un entretien plus fréquent à cause des embruns et sel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Notre méthode combine des équipements de protection individuelle, des systèmes d&apos;ancrage certifiés, des cordes homologuées et une formation continue aux techniques de travail en hauteur. Chaque intervention fait l&apos;objet d&apos;un protocole sécurité strict.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Sanary-sur-Mer ?
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
