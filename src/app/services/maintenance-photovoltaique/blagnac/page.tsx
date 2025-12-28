import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Blagnac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Blagnac et dans toute l&apos;agglomérati',
  keywords: 'nettoyage panneaux solaires blagnac, maintenance photovoltaique blagnac, entretien panneaux solaires blagnac, nettoyage photovoltaique blagnac, maintenance panneaux photovoltaiques blagnac',
};

export default function MaintenancePhotovoltaiqueBlagnacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Blagnac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Blagnac et dans toute l&apos;agglomération toulousaine. Spécialistes de l&apos;entretien photovoltaïque, nous garantissons des installations performantes et durables.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Blagnac</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Notre équipe certifiée intervient sur tous types d&apos;installations, résidentielles et professionnelles, avec un protocole précis et personnalisé. Nous utilisons des techniques non-abrasives qui préservent l&apos;intégrité de vos panneaux, avec un équipement haute technologie permettant un nettoyage en profondeur sans risque de rayures. Nos techniciens réalisent un diagnostic complet : vérification des connexions, mesure des performances, détection des éventuels défauts. À Blagnac, nous intervenons rapidement pour maintenir un rendement optimal de vos installations photovoltaïques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de techniciens certifiés avec plus de 10 ans d&apos;expérience
- Interventions rapides et sur-mesure dans tout Blagnac et sa région
- Matériel de nettoyage dernière génération respectant les normes
- Garantie de performance et de satisfaction</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel de panneaux solaires varie entre 150€ et 300€, selon la surface et la complexité de l&apos;installation. Notre tarif inclut un diagnostic complet, un nettoyage professionnel et un rapport détaillé des performances.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une performance optimale, nous recommandons un nettoyage professionnel 1 à 2 fois par an, généralement au printemps et à l&apos;automne. Dans des zones poussiéreuses ou à forte pollution, une intervention supplémentaire peut être nécessaire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens vérifient la performance via des tests électriques précis : mesure du rendement, contrôle de l&apos;onduleur, analyse des courbes de production. Un écart de plus de 10% par rapport aux performances théoriques nécessite un diagnostic approfondi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Blagnac ?
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
