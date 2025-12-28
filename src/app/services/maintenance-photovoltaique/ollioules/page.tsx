import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Ollioules | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Ollioules, en proposant un service de maintenance et nettoyage de pa',
  keywords: 'nettoyage panneaux solaires ollioules, maintenance photovoltaique ollioules, entretien panneaux solaires ollioules, nettoyage photovoltaique ollioules, maintenance panneaux photovoltaiques ollioules',
};

export default function MaintenancePhotovoltaiqueOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Ollioules, en proposant un service de maintenance et nettoyage de panneaux solaires ultra-précis et performant. Nos experts garantissent l&apos;optimisation maximale de votre production photovoltaïque dans toute la région.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Ollioules</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage photovoltaïque depuis plus de 10 ans, nous intervenons sur l&apos;ensemble des installations solaires du territoire d&apos;Ollioules et ses environs. Notre processus complet comprend un diagnostic technique approfondi, un nettoyage écologique haute précision et une maintenance préventive qui préserve l&apos;intégrité de vos équipements. Nos techniciens utilisent des techniques non-abrasives qui respectent la surface délicate des panneaux, avec des outils professionnels permettant d&apos;éliminer poussières, mousses et résidus sans risquer d&apos;endommager les cellules photovoltaïques. Une intervention régulière permet de maintenir un rendement optimal, pouvant augmenter jusqu&apos;à 15% la production électrique de votre installation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 10 ans d&apos;expérience en maintenance solaire
- Interventions rapides et sur-mesure à Ollioules
- Matériel technique dernier cri garantissant un nettoyage sans rayures
- Devis gratuit et transparent sans engagement
- Respect total des normes environnementales et techniques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût annuel d&apos;entretien varie entre 150€ et 500€ selon la taille de l&apos;installation, avec un prix moyen de 250€ pour un système domestique standard. Notre tarification inclut le diagnostic, le nettoyage complet et un rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou environnement poussiéreux comme certaines zones d&apos;Ollioules, une intervention supplémentaire peut être conseillée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens réalisent un bilan complet vérifiant le rendement, l&apos;absence de micro-fissures, la propreté et la connexion électrique. Des signes comme une baisse de production, des traces d&apos;oxydation ou des salissures importantes nécessitent un contrôle immédiat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Ollioules ?
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
