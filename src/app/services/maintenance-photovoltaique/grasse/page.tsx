import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Grasse | Groupe Expert Altitude Com',
  description: 'Dans la région de Grasse, où l&apos;ensoleillement est exceptionnel, Groupe Expert Altitude Com offre des services de maintenance et nettoyage de panneaux solai',
  keywords: 'nettoyage panneaux solaires grasse, maintenance photovoltaique grasse, entretien panneaux solaires grasse, nettoyage photovoltaique grasse, maintenance panneaux photovoltaiques grasse',
};

export default function MaintenancePhotovoltaiqueGrassePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Grasse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans la région de Grasse, où l&apos;ensoleillement est exceptionnel, Groupe Expert Altitude Com offre des services de maintenance et nettoyage de panneaux solaires essentiels pour optimiser votre production énergétique. Notre expertise garantit des installations photovoltaïques performantes et durables.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Grasse</h2>
        <div className="space-y-4">
          <p>Notre service spécialisé de maintenance et nettoyage de panneaux solaires répond aux besoins spécifiques des propriétaires dans les Alpes-Maritimes. Nos techniciens hautement qualifiés utilisent des techniques innovantes pour éliminer poussières, pollens et résidus qui diminuent l&apos;efficacité de vos installations. Avec un nettoyage professionnel, nous permettons une augmentation moyenne de 15% de la production électrique. Notre intervention comprend un diagnostic complet, un nettoyage écologique et une vérification technique minutieuse des connexions et des performances.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise locale basée à Grasse, nous possédons une connaissance approfondie des spécificités climatiques régionales. Nos techniciens sont certifiés et disposent d&apos;un équipement de haute technologie. Nous proposons des interventions rapides, un devis gratuit et une garantie de satisfaction. Notre engagement : maximiser la rentabilité de votre installation solaire.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la taille et l&apos;accessibilité de votre installation. Ce tarif inclut un nettoyage complet, un diagnostic technique et un rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une installation à Grasse, nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Cette fréquence permet d&apos;éliminer les accumulations de saison et maintenir une efficacité optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous réalisons un diagnostic complet incluant le rendement électrique, l&apos;état des connexions et l&apos;intégrité des panneaux. Des signes comme une baisse de production supérieure à 10%, des micro-fissures ou des décolorations nécessitent une intervention immédiate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Grasse ?
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
