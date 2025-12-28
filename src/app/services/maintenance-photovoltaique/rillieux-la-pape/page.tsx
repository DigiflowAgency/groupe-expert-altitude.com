import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Rillieux-la-Pape | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Rillieux-la-Pape et ses environs. S',
  keywords: 'nettoyage panneaux solaires rillieux-la-pape, maintenance photovoltaique rillieux-la-pape, entretien panneaux solaires rillieux-la-pape, nettoyage photovoltaique rillieux-la-pape, maintenance panneaux photovoltaiques rillieux-la-pape',
};

export default function MaintenancePhotovoltaiqueRillieuxLaPapePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Rillieux-la-Pape</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Rillieux-la-Pape et ses environs. Spécialistes de l&apos;entretien photovoltaïque, nous garantissons des installations solaires performantes et durables pour les particuliers et professionnels de la région.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Rillieux-la-Pape</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés utilisent des techniques innovantes pour éliminer poussières, mousses et résidus qui peuvent réduire jusqu&apos;à 30% de la performance de vos installations. À Rillieux-la-Pape, nous intervenons avec du matériel écologique et des méthodes respectueuses de l&apos;environnement, sans produits chimiques agressifs. Chaque intervention comprend un diagnostic complet, un nettoyage précis et un contrôle électrique approfondi pour optimiser la production énergétique de vos panneaux solaires.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts certifiés avec plus de 10 ans d&apos;expérience
✓ Interventions rapides et sur-mesure
✓ Techniciens formés aux dernières technologies photovoltaïques
✓ Devis gratuit et transparent
✓ Couverture sur toute la métropole lyonnaise</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la surface et la complexité de l&apos;installation. Notre tarification inclut le nettoyage complet, le diagnostic technique et un rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois. En zone urbaine ou industrielle, la fréquence peut augmenter jusqu&apos;à 2 fois par an en raison des dépôts plus importants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens réalisent un contrôle complet vérifiant le rendement, l&apos;intégrité des connexions et l&apos;absence de microfissures. Un test électroluminescent permet de détecter les moindres anomalies affectant la production d&apos;énergie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Rillieux-la-Pape ?
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
