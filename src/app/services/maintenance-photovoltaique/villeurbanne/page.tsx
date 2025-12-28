import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Villeurbanne, vous garantit des installations ',
  keywords: 'nettoyage panneaux solaires villeurbanne, maintenance photovoltaique villeurbanne, entretien panneaux solaires villeurbanne, nettoyage photovoltaique villeurbanne, maintenance panneaux photovoltaiques villeurbanne',
};

export default function MaintenancePhotovoltaiqueVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Villeurbanne, vous garantit des installations photovoltaïques performantes et durables. Nous intervenons sur l&apos;ensemble de la métropole lyonnaise pour optimiser la production énergétique de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Villeurbanne</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Notre équipe certifiée intervient sur tous types d&apos;installations photovoltaïques, résidentielles comme industrielles, avec un protocole précis et professionnel. Nous utilisons des techniques innovantes qui préservent l&apos;intégrité de vos panneaux, avec des outils haute technologie ne rayant pas les surfaces. Un nettoyage annuel permet en moyenne d&apos;augmenter la production électrique de 5 à 10%, ce qui représente un gain économique et environnemental significatif pour nos clients de Villeurbanne et ses environs. Notre expertise technique garantit une intervention sans risque, avec un diagnostic complet avant et après intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens hautement qualifiés et certifiés
- Intervention rapide sur Villeurbanne et métropole lyonnaise
- Matériel de nettoyage écologique et haute précision
- Devis gratuit et transparent
- Plus de 15 ans d&apos;expérience en maintenance photovoltaïque</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la surface et la configuration de vos panneaux. Pour une installation standard de 20m², comptez environ 250€ TTC, incluant nettoyage et vérification technique complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, avec un minimum d&apos;un entretien annuel. En région lyonnaise, les conditions climatiques nécessitent une vigilance particulière contre les dépôts calcaires et la pollution atmosphérique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un diagnostic précis nécessite un contrôle technique complet. Nos techniciens vérifient le rendement électrique, inspectent visuellement chaque panneau, mesurent les performances et détectent la moindre anomalie avec des outils de mesure électroniques de dernière génération.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Villeurbanne ?
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
