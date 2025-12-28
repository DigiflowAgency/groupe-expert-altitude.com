import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Antibes | Groupe Expert Altitude Com',
  description: 'Dans le cœur ensoleillé d&apos;Antibes, Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques. Spécialistes du nettoyage et d',
  keywords: 'nettoyage panneaux solaires antibes, maintenance photovoltaique antibes, entretien panneaux solaires antibes, nettoyage photovoltaique antibes, maintenance panneaux photovoltaiques antibes',
};

export default function MaintenancePhotovoltaiqueAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans le cœur ensoleillé d&apos;Antibes, Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques. Spécialistes du nettoyage et de la maintenance de panneaux solaires, nous garantissons des performances optimales pour votre investissement écologique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Antibes</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Sur la région antiboise, nous intervenons avec un équipement hautement professionnel permettant un nettoyage sans rayure et sans détérioration des cellules photovoltaïques. Notre processus comprend un diagnostic précis, un nettoyage écologique utilisant des produits biodégradables et un contrôle électrique complet. Nos techniciens certifiés détectent immédiatement toute baisse de rendement, assurant une productivité énergétique maximale. En moyenne, un nettoyage professionnel permet de récupérer 15 à 25% de rendement perdu par l&apos;accumulation de poussières, sels marins et débris.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages clés : une équipe 100% locale d&apos;Antibes, une intervention sous 48h, un diagnostic gratuit, un matériel de nettoyage dernière génération et une garantie de performance. Nous sommes certifiés RGE et intervenons sur tous types d&apos;installations photovoltaïques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 450€ selon la surface et la complexité de votre installation. Notre tarif comprend un nettoyage complet, un diagnostic technique et un rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, avec une attention particulière pour les zones proches du littoral antibois où l&apos;accumulation de sel peut être plus rapide. Un contrôle visuel annuel est fortement conseillé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production électrique via l&apos;onduleur. Une baisse supérieure à 10% nécessite un diagnostic. Nos techniciens peuvent réaliser un bilan complet avec analyse thermographique et mesure précise du rendement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Antibes ?
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
