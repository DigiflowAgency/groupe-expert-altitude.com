import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Ivry-sur-Seine, en proposant un service de maintenance et nettoy',
  keywords: 'nettoyage panneaux solaires ivry-sur-seine, maintenance photovoltaique ivry-sur-seine, entretien panneaux solaires ivry-sur-seine, nettoyage photovoltaique ivry-sur-seine, maintenance panneaux photovoltaiques ivry-sur-seine',
};

export default function MaintenancePhotovoltaiqueIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Ivry-sur-Seine, en proposant un service de maintenance et nettoyage de panneaux solaires sur-mesure. Notre expertise technique garantit des performances optimales et une durabilité maximale de vos équipements énergétiques.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos techniciens spécialisés réalisent un diagnostic complet de vos installations photovoltaïques, en utilisant des techniques de nettoyage écologiques et des équipements haute précision. Sur Ivry-sur-Seine et ses environs, nous intervenons pour éliminer poussières, salissures et traces qui peuvent réduire jusqu&apos;à 30% l&apos;efficacité de vos panneaux. Notre processus comprend un nettoyage sans produits chimiques, une vérification électrique complète et un rapport détaillé de l&apos;état de vos installations. Nous adaptons notre intervention à chaque configuration, qu&apos;il s&apos;agisse de toitures résidentielles ou de grandes installations professionnelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 10 ans d&apos;expérience
- Interventions rapides sur Ivry-sur-Seine (délai max 48h)
- Matériel de nettoyage dernière génération
- Garantie de performance énergétique après intervention</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la surface et la complexité de l&apos;installation, mais représente un investissement négligeable comparé aux économies énergétiques générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou avec un environnement poussiéreux comme certains secteurs industriels d&apos;Ivry-sur-Seine.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un diagnostic complet incluant un test de rendement, la vérification des connexions électriques et une analyse thermographique qui permet de détecter instantanément toute anomalie ou baisse de performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Ivry-sur-Seine ?
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
