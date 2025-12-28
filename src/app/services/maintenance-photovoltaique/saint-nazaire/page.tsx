import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Saint-Nazaire. Nos experts intervie',
  keywords: 'nettoyage panneaux solaires saint-nazaire, maintenance photovoltaique saint-nazaire, entretien panneaux solaires saint-nazaire, nettoyage photovoltaique saint-nazaire, maintenance panneaux photovoltaiques saint-nazaire',
};

export default function MaintenancePhotovoltaiqueSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Saint-Nazaire. Nos experts interviennent sur l&apos;ensemble du territoire nazairien pour garantir des installations photovoltaïques performantes et durables.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. À Saint-Nazaire, nous intervenons avec un équipement professionnel spécialisé permettant un nettoyage sans rayure et une vérification complète de votre installation. Nos techniciens utilisent des techniques innovantes qui préservent l&apos;intégrité de vos panneaux, avec un protocole qui comprend un diagnostic électrique, un nettoyage haute précision et un contrôle des performances. Nos interventions permettent de maintenir un rendement optimal, avec en moyenne une amélioration de 15% de la production énergétique après notre passage.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos avantages clés : Une expertise locale de plus de 10 ans, des techniciens certifiés, un matériel de nettoyage haute technologie, des tarifs transparents et une intervention rapide sur Saint-Nazaire et sa région. Nous sommes engagés dans une démarche éco-responsable et garantissons une qualité de service irréprochable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel de panneaux solaires varie entre 150€ et 350€, selon la surface et la complexité de l&apos;installation. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque configuration, avec un diagnostic préalable gratuit.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 nettoyages par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou proche du littoral comme Saint-Nazaire, nous conseillons deux interventions annuelles pour maintenir une performance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement de vos panneaux, surveillez votre production mensuelle, vérifiez l&apos;absence de traces, d&apos;ombres ou de salissures et consultez régulièrement votre onduleur. Nous proposons également un diagnostic complet incluant une analyse thermographique et électrique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Saint-Nazaire ?
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
