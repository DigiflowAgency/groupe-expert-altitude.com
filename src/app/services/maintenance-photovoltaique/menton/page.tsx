import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Menton | Groupe Expert Altitude Com',
  description: 'Dans la région de Menton, où le soleil est roi, Groupe Expert Altitude Com vous propose des solutions professionnelles de maintenance et nettoyage de panne',
  keywords: 'nettoyage panneaux solaires menton, maintenance photovoltaique menton, entretien panneaux solaires menton, nettoyage photovoltaique menton, maintenance panneaux photovoltaiques menton',
};

export default function MaintenancePhotovoltaiqueMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans la région de Menton, où le soleil est roi, Groupe Expert Altitude Com vous propose des solutions professionnelles de maintenance et nettoyage de panneaux solaires. Notre expertise garantit des installations photovoltaïques performantes et durables, adaptées aux spécificités climatiques de la Côte d&apos;Azur.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Menton</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires est conçu pour maximiser la performance de vos installations photovoltaïques. À Menton et ses environs, nous intervenons avec des techniques précises pour éliminer poussières, sel marin et débris qui réduisent l&apos;efficacité énergétique. Notre équipe utilise du matériel spécialisé sans produits chimiques, préservant l&apos;intégrité de vos panneaux. Une intervention régulière permet d&apos;augmenter jusqu&apos;à 15% la production électrique et de prolonger la durée de vie de votre installation. Nous réalisons un diagnostic complet, vérifiant chaque connexion, nettoyant chaque surface avec une attention méticuleuse.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos atouts : une expertise locale de plus de 10 ans, des techniciens certifiés, un service 100% personnalisé. Nous intervenons rapidement sur Menton et la région, avec un diagnostic gratuit. Notre approche combine technicité et respect environnemental, garantissant une performance optimale de vos panneaux solaires.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la taille de l&apos;installation, avec un retour sur investissement rapide grâce à l&apos;amélioration de la production énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. À Menton, la proximité marine peut nécessiter des interventions plus fréquentes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous proposons un diagnostic complet incluant test de performance, mesure du rendement et vérification des connexions. Des signes comme une baisse de production ou des micro-fissures nécessitent une intervention rapide.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Menton ?
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
