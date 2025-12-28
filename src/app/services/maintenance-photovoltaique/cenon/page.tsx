import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Cenon | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Cenon et ses environs. Spécialistes de la maintenance et du n',
  keywords: 'nettoyage panneaux solaires cenon, maintenance photovoltaique cenon, entretien panneaux solaires cenon, nettoyage photovoltaique cenon, maintenance panneaux photovoltaiques cenon',
};

export default function MaintenancePhotovoltaiqueCenonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Cenon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Cenon et ses environs. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales pour votre système d&apos;énergie renouvelable.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Cenon</h2>
        <div className="space-y-4">
          <p>Notre service complet de maintenance photovoltaïque répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés interviennent sur l&apos;ensemble des installations solaires, en réalisant un diagnostic précis de votre système. Nous utilisons des techniques de nettoyage innovantes qui préservent l&apos;intégrité de vos panneaux, avec des équipements spécialisés permettant d&apos;éliminer poussières, mousses et résidus sans endommager les surfaces sensibles. Notre intervention permet en moyenne d&apos;améliorer de 15% le rendement énergétique de vos installations, en assurant une propreté et un fonctionnement optimal. À Cenon, nous sommes reconnus pour notre expertise technique et notre approche sur-mesure.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre entreprise, c&apos;est opter pour l&apos;excellence technique. Nous proposons un suivi personnalisé, des techniciens certifiés, un diagnostic gratuit, et une intervention rapide sur Cenon et la région. Notre engagement qualité se traduit par des interventions précises, un matériel de pointe et une expérience de plus de 10 ans dans le domaine photovoltaïque.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel d&apos;un système photovoltaïque varie entre 150€ et 500€, selon la taille et la complexité de l&apos;installation. Notre tarification transparente inclut un diagnostic complet, le nettoyage et la vérification des performances, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 nettoyages par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou avec beaucoup de végétation, nous conseillons jusqu&apos;à 3 interventions annuelles pour maintenir un rendement optimal.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production électrique via votre onduleur, comparez vos relevés mensuels et contactez-nous pour un diagnostic précis. Des baisses de rendement supérieures à 10% nécessitent une intervention technique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Cenon ?
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
