import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Arles | Groupe Expert Altitude Com',
  description: 'Dans la région ensoleillée d&apos;Arles, le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques. Spécialistes de la mainten',
  keywords: 'nettoyage panneaux solaires arles, maintenance photovoltaique arles, entretien panneaux solaires arles, nettoyage photovoltaique arles, maintenance panneaux photovoltaiques arles',
};

export default function MaintenancePhotovoltaiqueArlesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Arles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans la région ensoleillée d&apos;Arles, le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques. Spécialistes de la maintenance et du nettoyage panneaux solaires, nous garantissons des performances optimales pour votre système énergétique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Arles</h2>
        <div className="space-y-4">
          <p>Nos experts en maintenance photovoltaique proposent un service complet et personnalisé pour préserver l&apos;efficacité de vos panneaux solaires. Basés à Arles, nous intervenons avec des techniques de nettoyage innovantes qui éliminent poussières, pollens et résidus qui réduisent jusqu&apos;à 20% la performance de vos installations. Notre processus inclut un diagnostic technique précis, un nettoyage écologique utilisant des technologies sans produits chimiques, et un contrôle électrique complet. Chaque intervention est adaptée à votre configuration, qu&apos;il s&apos;agisse d&apos;une installation résidentielle ou professionnelle, avec un objectif : maximiser votre production d&apos;énergie solaire.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Pourquoi nous choisir ? Notre différence réside dans notre expertise technique, notre approche locale et notre engagement qualité. Nous sommes certifiés RGE, disposons de matériel hautement spécialisé, et intervenons rapidement sur tout le territoire arlésien. Notre taux de satisfaction client dépasse 95%, et nous proposons des contrats d&apos;entretien flexibles adaptés à chaque budget.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de votre installation. Pour un système résidentiel standard de 3kWc, comptez environ 250€ par an, incluant nettoyage et vérification technique complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones poussiéreuses comme certaines zones rurales autour d&apos;Arles, une intervention supplémentaire peut être nécessaire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous vérifions les performances via un diagnostic complet : mesure du rendement, contrôle des connexions, analyse thermique des panneaux. Des signes comme une baisse de production de plus de 10% nécessitent un diagnostic approfondi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Arles ?
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
