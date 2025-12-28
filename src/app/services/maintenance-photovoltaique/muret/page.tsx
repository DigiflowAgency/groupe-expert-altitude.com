import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Muret | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Muret et ses environs. Spécialistes de la maintenance et du nettoyage d',
  keywords: 'nettoyage panneaux solaires muret, maintenance photovoltaique muret, entretien panneaux solaires muret, nettoyage photovoltaique muret, maintenance panneaux photovoltaiques muret',
};

export default function MaintenancePhotovoltaiqueMuretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Muret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Muret et ses environs. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales pour votre système photovoltaïque.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Muret</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux besoins spécifiques des propriétaires et entreprises de la région de Muret. Nous utilisons des techniques de nettoyage innovantes qui préservent l&apos;intégrité de vos équipements photovoltaïques tout en maximisant leur rendement énergétique. Notre équipe technique procède à un diagnostic complet, éliminant les salissures, poussières et résidus qui peuvent réduire jusqu&apos;à 25% la performance de vos panneaux. Chaque intervention comprend un nettoyage écologique, un contrôle électrique et une analyse thermographique pour détecter les moindres anomalies.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts à Muret : une expertise locale de plus de 10 ans, des techniciens certifiés, un matériel de nettoyage haute précision, des tarifs transparents, et un engagement qualité garanti. Nous sommes le partenaire de confiance pour l&apos;entretien de vos installations photovoltaïques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de votre installation, avec un prix moyen de 250€ pour un système domestique standard. Notre devis personnalisé inclut le nettoyage complet, le contrôle technique et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, avec un minimum d&apos;un contrôle annuel. Dans des zones plus poussiéreuses comme certains secteurs de Muret, nous conseillons deux interventions par an pour maintenir une performance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production électrique via votre onduleur. Une baisse de rendement supérieure à 10% nécessite un diagnostic. Nos techniciens peuvent réaliser un contrôle complet incluant une analyse thermique et électrique pour détecter les éventuels dysfonctionnements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Muret ?
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
