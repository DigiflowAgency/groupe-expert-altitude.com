import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Colomiers | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Colomiers et ses environs. Spécialistes de la maintenance et ',
  keywords: 'nettoyage panneaux solaires colomiers, maintenance photovoltaique colomiers, entretien panneaux solaires colomiers, nettoyage photovoltaique colomiers, maintenance panneaux photovoltaiques colomiers',
};

export default function MaintenancePhotovoltaiqueColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Colomiers et ses environs. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales et une durabilité maximale de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Colomiers</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance photovoltaïque complet couvre tous les aspects essentiels de l&apos;entretien de vos panneaux solaires. Notre équipe technique intervient sur site à Colomiers et dans le sud-ouest de la région toulousaine, en réalisant un diagnostic précis de vos installations. Nous effectuons un nettoyage professionnel qui élimine poussières, mousses et résidus qui réduisent jusqu&apos;à 20% l&apos;efficacité énergétique. Notre processus comprend un contrôle électrique minutieux, un nettoyage haute précision avec des équipements écologiques et une vérification complète des connectiques et supports.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Techniciens certifiés et formés aux dernières normes photovoltaïques
✓ Intervention rapide sous 48h sur Colomiers et agglomération
✓ Diagnostic et devis gratuit
✓ Matériel technique de dernière génération
✓ Garantie satisfaction totale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel de panneaux solaires varie entre 150€ et 500€ selon la surface et la complexité de l&apos;installation. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque configuration, avec une moyenne de 250€ pour un système résidentiel standard.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les panneaux solaires doivent être nettoyés idéalement 1 à 2 fois par an, généralement au printemps et à l&apos;automne. Dans des zones à forte pollution ou avec beaucoup de végétation, nous recommandons jusqu&apos;à 3 interventions annuelles pour maintenir une performance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement de vos panneaux, surveillez votre production électrique via un monitoring, observez l&apos;absence de traces, micro-fissures ou décolorations, et faites réaliser un diagnostic technique annuel par des professionnels comme notre équipe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Colomiers ?
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
