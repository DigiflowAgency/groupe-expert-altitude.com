import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Ramonville-Saint-Agne | Groupe Expert Altitude Com',
  description: 'Spécialiste du nettoyage et de la maintenance de panneaux solaires à Ramonville-Saint-Agne, le Groupe Expert Altitude Com garantit des installations photov',
  keywords: 'nettoyage panneaux solaires ramonville-saint-agne, maintenance photovoltaique ramonville-saint-agne, entretien panneaux solaires ramonville-saint-agne, nettoyage photovoltaique ramonville-saint-agne, maintenance panneaux photovoltaiques ramonville-saint-agne',
};

export default function MaintenancePhotovoltaiqueRamonvilleSaintAgnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Ramonville-Saint-Agne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste du nettoyage et de la maintenance de panneaux solaires à Ramonville-Saint-Agne, le Groupe Expert Altitude Com garantit des installations photovoltaïques performantes et durables. Notre expertise technique assure l&apos;optimisation de votre production d&apos;énergie solaire dans toute la région toulousaine.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Ramonville-Saint-Agne</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés interviennent sur tous types d&apos;installations, résidentielles et professionnelles, en utilisant des techniques non-abrasives et des équipements spécialisés. Nous réalisons un diagnostic complet avant chaque intervention, vérifiant l&apos;état des connectiques, l&apos;intégrité des modules et l&apos;efficacité globale du système. Notre processus permet de maintenir un rendement optimal, avec une moyenne d&apos;augmentation de 12% de la production énergétique après nettoyage. Sur Ramonville-Saint-Agne et ses environs, nous proposons un service clé en main qui protège votre investissement et maximise vos économies d&apos;énergie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre entreprise, c&apos;est opter pour l&apos;excellence technique. Nos points forts incluent : une équipe certifiée avec plus de 10 ans d&apos;expérience, un matériel de nettoyage dernière génération respectueux de vos installations, des tarifs transparents sans frais cachés, et un suivi personnalisé de vos panneaux solaires. Nous sommes votre partenaire de confiance pour une performance énergétique durable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût annuel d&apos;entretien varie entre 150€ et 450€ selon la taille et la complexité de votre installation. Notre diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à vos besoins spécifiques à Ramonville-Saint-Agne.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou environnement poussiéreux. Un nettoyage régulier permet de maintenir une efficacité de production solaire optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un contrôle complet via des tests thermographiques et électriques. Les signes d&apos;un bon fonctionnement incluent une production constante, l&apos;absence de points chauds sur les modules, et des connexions électriques intactes. Notre diagnostic précis vous garantit une installation performante.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Ramonville-Saint-Agne ?
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
