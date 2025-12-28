import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Saint-Raphaël. Spécialistes de la maintenance et du nettoyage des panne',
  keywords: 'nettoyage panneaux solaires saint-raphaël, maintenance photovoltaique saint-raphaël, entretien panneaux solaires saint-raphaël, nettoyage photovoltaique saint-raphaël, maintenance panneaux photovoltaiques saint-raphaël',
};

export default function MaintenancePhotovoltaiqueSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Saint-Raphaël. Spécialistes de la maintenance et du nettoyage des panneaux solaires, nous garantissons des performances optimales pour votre système photovoltaïque dans toute la région varoise.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires à Saint-Raphaël représente bien plus qu&apos;un simple entretien. Nous proposons un diagnostic complet de votre installation, avec un nettoyage professionnel utilisant des techniques innovantes qui préservent l&apos;intégrité de vos équipements. Notre équipe technique intervient avec du matériel spécialisé, éliminant poussières, traces, résidus calcaires et végétaux qui réduisent jusqu&apos;à 20% l&apos;efficacité de vos panneaux. Chaque intervention comprend un contrôle électrique et mécanique précis, assurant la longévité et la performance de votre système photovoltaïque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Techniciens certifiés et expérimentés dans le Var
✓ Intervention rapide sur Saint-Raphaël et communes environnantes
✓ Diagnostic technique gratuit avant intervention
✓ Matériel de nettoyage haute technologie sans produits chimiques agressifs
✓ Amélioration garantie de 15-25% de votre production énergétique</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de votre installation, avec un prix moyen de 250€ pour un système domestique standard. Notre diagnostic préalable permet un devis précis sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, avec un entretien léger possible en interne tous les 6 mois. Dans la région de Saint-Raphaël, l&apos;exposition au sel et à la poussière peut nécessiter des interventions plus fréquentes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un bon fonctionnement se vérifie par : la stabilité de votre production électrique, l&apos;absence de microfissures, l&apos;état de vos onduleurs et l&apos;absence de traces d&apos;oxydation. Nous proposons un diagnostic complet incluant un test de performance et un rapport détaillé.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Saint-Raphaël ?
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
