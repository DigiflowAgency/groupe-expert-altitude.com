import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Tassin-la-Demi-Lune. Spécialistes du nettoyage et de la maintena',
  keywords: 'nettoyage panneaux solaires tassin-la-demi-lune, maintenance photovoltaique tassin-la-demi-lune, entretien panneaux solaires tassin-la-demi-lune, nettoyage photovoltaique tassin-la-demi-lune, maintenance panneaux photovoltaiques tassin-la-demi-lune',
};

export default function MaintenancePhotovoltaiqueTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Tassin-la-Demi-Lune. Spécialistes du nettoyage et de la maintenance de panneaux solaires, nous garantissons des performances optimales pour votre système énergétique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires s&apos;adapte parfaitement aux spécificités techniques de votre installation. Nos techniciens hautement qualifiés utilisent des techniques innovantes pour éliminer poussières, mousses et résidus qui réduisent jusqu&apos;à 20% l&apos;efficacité de vos panneaux. Un nettoyage professionnel permet non seulement d&apos;augmenter votre production d&apos;énergie mais également de prolonger la durée de vie de votre équipement. Sur Tassin-la-Demi-Lune, nous intervenons avec du matériel écologique, sans produits chimiques agressifs, garantissant un entretien respectueux de l&apos;environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts certifiés avec plus de 10 ans d&apos;expérience
✓ Interventions rapides et sur-mesure
✓ Diagnostic technique complet inclus
✓ Tarifs transparents sans frais cachés
✓ Couverture locale sur Tassin-la-Demi-Lune et ses environs</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la surface et la complexité de votre installation. Notre tarification inclut un nettoyage complet, un diagnostic technique et un rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois. En région lyonnaise, l&apos;accumulation de pollens, poussières industrielles et calcaire nécessite une maintenance régulière pour maintenir un rendement optimal.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un diagnostic complet comprenant : mesure du rendement électrique, vérification des connexions, analyse thermique et contrôle visuel. Un écart de performance supérieur à 10% par rapport aux données constructeur nécessite une intervention approfondie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Tassin-la-Demi-Lune ?
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
