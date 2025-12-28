import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Bordeaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Bordeaux et en Nouvelle-Aquitaine. Nou',
  keywords: 'nettoyage panneaux solaires bordeaux, maintenance photovoltaique bordeaux, entretien panneaux solaires bordeaux, nettoyage photovoltaique bordeaux, maintenance panneaux photovoltaiques bordeaux',
};

export default function MaintenancePhotovoltaiqueBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Bordeaux et en Nouvelle-Aquitaine. Nous garantissons des installations photovoltaïques performantes et durables grâce à notre expertise technique unique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Bordeaux</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus pointues. Nos techniciens hautement qualifiés interviennent sur l&apos;ensemble des installations photovoltaïques, qu&apos;elles soient résidentielles ou professionnelles. Nous utilisons des techniques de nettoyage écologiques et des équipements haute précision permettant d&apos;éliminer poussières, salissures et traces sans endommager les cellules. Notre process complet comprend un diagnostic technique, un nettoyage personnalisé et un contrôle électrique approfondi, assurant une performance optimale de vos panneaux solaires. Avec plus de 92% de nos clients satisfaits à Bordeaux et ses environs, nous sommes reconnus pour notre professionnalisme et notre efficacité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de techniciens certifiés avec plus de 10 ans d&apos;expérience
- Interventions rapides et sur-mesure dans toute la région bordelaise
- Matériel de nettoyage dernière génération respectueux de l&apos;environnement
- Diagnostic technique gratuit et devis personnalisé sous 48h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel de panneaux solaires varie entre 150€ et 500€, selon la surface, l&apos;accessibilité et le type d&apos;installation. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque configuration, avec une moyenne de 250€ pour une installation résidentielle standard à Bordeaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois. En région bordelaise, où l&apos;environnement peut être poussiéreux, un nettoyage annuel est conseillé pour maintenir un rendement optimal. Les périodes idéales sont le printemps et l&apos;automne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement de vos panneaux, surveillez votre production électrique via un monitoring. Une baisse de performance supérieure à 10% nécessite un diagnostic. Nos techniciens peuvent réaliser un contrôle complet incluant test électrique, vérification des connexions et analyse thermographique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Bordeaux ?
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
