import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Sanary-sur-Mer | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires sur toute la région de Sanary-sur-',
  keywords: 'nettoyage panneaux solaires sanary-sur-mer, maintenance photovoltaique sanary-sur-mer, entretien panneaux solaires sanary-sur-mer, nettoyage photovoltaique sanary-sur-mer, maintenance panneaux photovoltaiques sanary-sur-mer',
};

export default function MaintenancePhotovoltaiqueSanarySurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Sanary-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires sur toute la région de Sanary-sur-Mer. Spécialistes depuis plus de 10 ans, nous garantissons des installations photovoltaïques performantes et durables.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Sanary-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nous intervenons sur tous types d&apos;installations, résidentielles et professionnelles, en utilisant des techniques innovantes et du matériel hautement spécialisé. Notre équipe technique effectue un diagnostic complet : nettoyage des modules, vérification des connexions électriques, contrôle des performances et détection préventive de potentiels dysfonctionnements. À Sanary-sur-Mer et ses environs, nous assurons une prestation clé en main qui optimise la production énergétique de vos panneaux photovoltaïques et prolonge leur durée de vie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe certifiée avec plus de 10 ans d&apos;expertise
✓ Interventions rapides et précises sur Sanary-sur-Mer
✓ Matériel technique de dernière génération
✓ Diagnostic personnalisé et transparent
✓ Amélioration garantie de 15% des performances</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la taille de l&apos;installation, avec un retour sur investissement rapide grâce à l&apos;optimisation de la production énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage recommandé est de 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones poussiéreuses ou à proximité de zones agricoles, nous préconisons un nettoyage trimestriel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous réalisons un diagnostic complet via des tests de performance, l&apos;analyse des données de production et un contrôle visuel. Un écart de plus de 10% par rapport à la production théorique nécessite une intervention technique approfondie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Sanary-sur-Mer ?
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
