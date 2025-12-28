import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Pessac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Pessac, garantit des installations photovoltaï',
  keywords: 'nettoyage panneaux solaires pessac, maintenance photovoltaique pessac, entretien panneaux solaires pessac, nettoyage photovoltaique pessac, maintenance panneaux photovoltaiques pessac',
};

export default function MaintenancePhotovoltaiquePessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Pessac, garantit des installations photovoltaïques performantes et durables. Nous intervenons sur l&apos;ensemble de la métropole bordelaise pour optimiser votre production d&apos;énergie solaire.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Pessac</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance photovoltaïque s&apos;articule autour d&apos;une expertise technique pointue et d&apos;interventions sur-mesure. Chaque année, nous réalisons plus de 200 interventions sur des installations résidentielles et professionnelles à Pessac et ses environs. Notre processus comprend un diagnostic complet, un nettoyage technique utilisant des équipements spécialisés et une vérification électrique approfondie. Nos techniciens certifiés détectent les moindres anomalies, assurant ainsi une performance maximale de vos panneaux solaires. Un entretien régulier permet de maintenir un rendement optimal et de prolonger la durée de vie de votre installation de 15 à 25%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : une équipe de 12 techniciens experts, un matériel de nettoyage haute technologie, des tarifs transparents, une intervention rapide sous 72h, et une garantie satisfaction. Nous sommes certifiés RGE et possédons plus de 10 ans d&apos;expérience dans le photovoltaïque. Notre approche technique et professionnelle fait de nous le partenaire idéal pour l&apos;entretien de vos panneaux solaires.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille et la complexité de votre installation. Pour une maison individuelle moyenne à Pessac, comptez environ 250€ pour un nettoyage et une maintenance complète, qui vous permettront d&apos;économiser jusqu&apos;à 15% sur votre production énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones poussiéreuses ou à proximité de zones industrielles, une intervention tous les 6 mois peut être nécessaire pour maintenir une performance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production sur l&apos;onduleur, comparez vos données de production mensuelle, et faites réaliser un diagnostic technique annuel. Des signes comme une baisse de rendement de plus de 10% nécessitent une intervention professionnelle immédiate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Pessac ?
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
