import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Mérignac | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires sur Mérignac et ses environs. Nos ',
  keywords: 'nettoyage panneaux solaires mérignac, maintenance photovoltaique mérignac, entretien panneaux solaires mérignac, nettoyage photovoltaique mérignac, maintenance panneaux photovoltaiques mérignac',
};

export default function MaintenancePhotovoltaiqueMerignacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Mérignac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires sur Mérignac et ses environs. Nos experts garantissent des installations photovoltaïques performantes et durables, en préservant leur efficacité énergétique maximale.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Mérignac</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Sur Mérignac, nous intervenons avec un équipement professionnel permettant d&apos;éliminer poussières, mousses et résidus qui réduisent significativement la production électrique. Notre processus comprend un diagnostic technique complet, un nettoyage écologique utilisant des produits sans détergents agressifs, et un contrôle électrique précis. Nos techniciens certifiés détectent immédiatement toute anomalie, assurant une productivité optimale de vos installations photovoltaïques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience
- Interventions rapides sur Mérignac et Gironde
- Équipement high-tech de dernière génération
- Garantie de performance énergétique
- Respect total des normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel varie entre 150€ et 350€, selon la surface et la complexité de votre installation. Notre diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois. En région Nouvelle-Aquitaine, l&apos;exposition aux pollens et embruns nécessite une vigilance particulière pour maintenir un rendement optimal de 95-98%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens réalisent un diagnostic complet vérifiant : le rendement électrique, l&apos;état des connexions, l&apos;absence de microfissures et la propreté des panneaux. Un test de performance vous sera systématiquement remis après intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Mérignac ?
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
