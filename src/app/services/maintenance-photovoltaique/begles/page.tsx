import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Bègles | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Bègles et dans toute la région b',
  keywords: 'nettoyage panneaux solaires bègles, maintenance photovoltaique bègles, entretien panneaux solaires bègles, nettoyage photovoltaique bègles, maintenance panneaux photovoltaiques bègles',
};

export default function MaintenancePhotovoltaiqueBeglesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Bègles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Bègles et dans toute la région bordelaise. Nos techniciens spécialisés garantissent des installations photovoltaïques performantes et durables, en optimisant leur rendement énergétique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Bègles</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos experts interviennent avec un équipement professionnel permettant un nettoyage précis sans endommager les cellules photovoltaïques. À Bègles, nous proposons un diagnostic complet comprenant le contrôle électrique, le nettoyage des surfaces et la vérification des systèmes de fixation. Nos interventions permettent de maintenir un rendement optimal, avec une augmentation moyenne de 15% de la production énergétique après entretien. Nous utilisons des techniques écologiques, sans produits chimiques agressifs, respectueuses de l&apos;environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés et formés aux dernières technologies photovoltaïques
- Intervention rapide sur Bègles et l&apos;agglomération bordelaise
- Diagnostic technique précis et transparent
- Matériel professionnel de haute qualité
- Devis gratuit et personnalisé</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 300€ selon la taille de l&apos;installation, avec un retour sur investissement rapide grâce à l&apos;optimisation de la production énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou environnement poussiéreux comme certains secteurs de Bègles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un bon fonctionnement se vérifie par la stabilité de la production électrique, l&apos;absence de traces de corrosion, et un rendement proche des spécifications d&apos;origine. Nous proposons un diagnostic complet pour vérifier ces paramètres.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Bègles ?
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
