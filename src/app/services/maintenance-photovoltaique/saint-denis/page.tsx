import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Saint-Denis | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Saint-Denis. Spécialistes de la maintenance et du nettoyage de panneaux',
  keywords: 'nettoyage panneaux solaires saint-denis, maintenance photovoltaique saint-denis, entretien panneaux solaires saint-denis, nettoyage photovoltaique saint-denis, maintenance panneaux photovoltaiques saint-denis',
};

export default function MaintenancePhotovoltaiqueSaintDenisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Saint-Denis</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Saint-Denis. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales pour votre système photovoltaïque dans toute l&apos;Île-de-France.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Saint-Denis</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires est une solution complète et professionnelle adaptée aux particuliers et entreprises de Saint-Denis. Nos techniciens hautement qualifiés utilisent des techniques innovantes pour éliminer poussières, salissures et traces qui réduisent jusqu&apos;à 25% l&apos;efficacité de vos installations. Nous réalisons un diagnostic précis avant chaque intervention, vérifiant l&apos;état des connexions, l&apos;intégrité des modules et l&apos;ensemble du système photovoltaïque. Notre processus inclut un nettoyage écologique sans produits chimiques agressifs, utilisant uniquement de l&apos;eau purifiée et des outils spécialisés qui préservent l&apos;intégrité de vos panneaux.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages clés : une équipe certifiée avec plus de 10 ans d&apos;expérience, un diagnostic gratuit avant intervention, un service 100% personnalisé adapté à chaque configuration, et une garantie de performance améliorée de vos installations solaires.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 450€ selon la surface et la complexité de votre installation. Pour une maison moyenne à Saint-Denis, comptez environ 250€ pour un nettoyage et une maintenance complets qui vous permettront d&apos;économiser jusqu&apos;à 15% sur votre production énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones plus poussiéreuses ou à proximité d&apos;axes routiers, nous conseillons un nettoyage tous les 6 mois pour maintenir une efficacité maximale de vos panneaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production mensuelle via votre onduleur, comparez avec les données historiques. Des variations significatives peuvent indiquer un besoin de maintenance. Nous proposons également un diagnostic numérique complet avec mesure du rendement et détection des éventuels dysfonctionnements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Saint-Denis ?
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
