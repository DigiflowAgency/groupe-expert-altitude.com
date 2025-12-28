import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Nice | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Nice et dans toute la région Côt',
  keywords: 'nettoyage panneaux solaires nice, maintenance photovoltaique nice, entretien panneaux solaires nice, nettoyage photovoltaique nice, maintenance panneaux photovoltaiques nice',
};

export default function MaintenancePhotovoltaiqueNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Nice et dans toute la région Côte d&apos;Azur. Nos experts garantissent des installations photovoltaïques performantes et durables, adaptées aux conditions climatiques méditerranéennes.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Nice</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés utilisent des techniques innovantes pour éliminer poussières, débris et résidus qui réduisent l&apos;efficacité énergétique. Un nettoyage professionnel permet d&apos;augmenter jusqu&apos;à 15% la production électrique de vos installations. Nous intervenons avec un équipement spécialisé, respectueux des surfaces fragiles, et adapté aux différents types de panneaux photovoltaïques. Chaque intervention comprend un diagnostic complet, un nettoyage minutieux et un rapport détaillé de l&apos;état de vos installations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nous sommes certifiés RGE, possédons plus de 10 ans d&apos;expérience sur Nice et la région PACA. Notre équipe dispose d&apos;assurances professionnelles complètes et utilise du matériel de dernière génération. Nous proposons des interventions rapides, un devis personnalisé sous 48h et une garantie de satisfaction totale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la surface et la complexité de l&apos;installation. Pour une maison individuelle de 20m², comptez environ 250€ par an, incluant nettoyage et vérification technique complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, avec un minimum d&apos;un contrôle visuel annuel. Dans la région de Nice, en raison du climat méditerranéen et de la proximité maritime, un nettoyage tous les 12 mois est fortement conseillé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production électrique via votre onduleur. Une baisse de performance supérieure à 10% nécessite un diagnostic. Nos techniciens peuvent réaliser un audit complet avec des instruments de mesure précis, détectant toute anomalie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Nice ?
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
