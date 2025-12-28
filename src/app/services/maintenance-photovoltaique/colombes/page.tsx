import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Colombes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Colombes et ses environs. Nous gara',
  keywords: 'nettoyage panneaux solaires colombes, maintenance photovoltaique colombes, entretien panneaux solaires colombes, nettoyage photovoltaique colombes, maintenance panneaux photovoltaiques colombes',
};

export default function MaintenancePhotovoltaiqueColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Colombes et ses environs. Nous garantissons des installations photovoltaïques performantes grâce à notre expertise technique et notre engagement qualité.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Colombes</h2>
        <div className="space-y-4">
          <p>Notre service spécialisé de maintenance et nettoyage de panneaux solaires répond aux besoins spécifiques des propriétaires et entreprises de Colombes. Nous intervenons avec du matériel haute précision pour éliminer poussières, pollens et résidus qui réduisent jusqu&apos;à 20% l&apos;efficacité énergétique de vos installations. Notre processus comprend un diagnostic complet, un nettoyage écologique sans produits chimiques et un contrôle technique approfondi des composants électriques et mécaniques. Nos techniciens certifiés utilisent des techniques non-abrasives qui préservent l&apos;intégrité de vos panneaux photovoltaïques tout en maximisant leur rendement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de techniciens hautement qualifiés avec plus de 10 ans d&apos;expérience
- Interventions rapides sur Colombes et départements limitrophes
- Diagnostic et devis gratuits sous 48h
- Respect des normes environnementales et techniques les plus exigeantes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la surface et la complexité de l&apos;installation, avec un prix moyen de 250€ pour un système résidentiel standard. Notre expertise permet de réduire vos coûts énergétiques à long terme.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Pour les zones à forte pollution ou proche de zones industrielles, un nettoyage trimestriel peut être nécessaire pour maintenir une performance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un diagnostic complet incluant : mesure du rendement électrique, vérification des connexions, analyse thermique des panneaux et test des onduleurs. Un écart de performance supérieur à 10% par rapport aux données constructeur nécessite une intervention technique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Colombes ?
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
