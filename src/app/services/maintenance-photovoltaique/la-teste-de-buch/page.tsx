import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a La Teste-de-Buch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à La Teste-de-Buch et ses environs. N',
  keywords: 'nettoyage panneaux solaires la teste-de-buch, maintenance photovoltaique la teste-de-buch, entretien panneaux solaires la teste-de-buch, nettoyage photovoltaique la teste-de-buch, maintenance panneaux photovoltaiques la teste-de-buch',
};

export default function MaintenancePhotovoltaiqueLaTesteDeBuchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a La Teste-de-Buch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à La Teste-de-Buch et ses environs. Nos experts garantissent des installations photovoltaïques performantes et durables pour maximiser votre production d&apos;énergie renouvelable.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a La Teste-de-Buch</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux besoins spécifiques des propriétaires à La Teste-de-Buch. Nous utilisons des techniques professionnelles et écologiques pour éliminer poussières, débris et traces qui réduisent l&apos;efficacité de vos installations. Notre équipe technique réalise un diagnostic complet, vérifiant l&apos;intégrité des connexions, l&apos;état des supports et l&apos;efficacité des modules. Nous intervenons avec du matériel spécialisé permettant un nettoyage sans rayure, respectant l&apos;intégrité de vos panneaux photovoltaïques. Nos interventions permettent en moyenne d&apos;augmenter la production énergétique de 10 à 15%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Des techniciens certifiés et formés aux dernières technologies photovoltaïques, 2) Un diagnostic précis incluant un rapport détaillé, 3) Des tarifs transparents sans frais cachés, 4) Une intervention rapide sur La Teste-de-Buch et le Bassin d&apos;Arcachon.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la surface et la complexité de votre installation. Notre tarification inclut le nettoyage, le diagnostic technique et un rapport complet de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment si vous êtes situé dans une zone avec beaucoup de poussière, de pollution ou près de zones boisées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens vérifient la performance via des tests électriques précis, l&apos;analyse des connexions, et comparent votre production réelle aux données théoriques. Un rendement inférieur de 5-10% nécessite un diagnostic approfondi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a La Teste-de-Buch ?
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
