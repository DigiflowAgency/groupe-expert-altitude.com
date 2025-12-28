import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Bron | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Bron et ses environs. Spécialistes de la maintenance et du nettoyage',
  keywords: 'nettoyage panneaux solaires bron, maintenance photovoltaique bron, entretien panneaux solaires bron, nettoyage photovoltaique bron, maintenance panneaux photovoltaiques bron',
};

export default function MaintenancePhotovoltaiqueBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Bron et ses environs. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales pour vos systèmes photovoltaïques, en préservant leur efficacité et leur durabilité.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Bron</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires représente bien plus qu&apos;un simple entretien. Nous intervenons sur l&apos;ensemble des installations photovoltaïques, en utilisant des techniques professionnelles qui permettent de préserver jusqu&apos;à 15% de rendement énergétique. Notre équipe technique, basée à Bron, réalise un diagnostic complet avant toute intervention, vérifiant l&apos;état des connectiques, l&apos;intégrité des modules et l&apos;efficacité globale du système. Nous utilisons des équipements spécifiques - perches télescopiques, systèmes de nettoyage à eau pure - qui garantissent un traitement sans rayure ni dégradation des panneaux. Notre approche combine expertise technique et respect des normes environnementales, assurant une performance durable de vos installations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : Une expertise locale certifiée, Des techniciens formés aux dernières technologies photovoltaïques, Un diagnostic précis incluant un rapport détaillé, Une intervention rapide sur Bron et ses communes limitrophes, Une approche éco-responsable garantissant la préservation de vos équipements.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 450€ selon la taille de l&apos;installation, avec un prix moyen de 250€ pour un système résidentiel standard. Ce tarif inclut un nettoyage complet, un diagnostic technique et un rapport de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 nettoyages par an, idéalement au printemps et à l&apos;automne. Dans des zones poussiéreuses ou proches d&apos;zones industrielles à Bron, nous conseillons jusqu&apos;à 3 interventions annuelles pour maintenir un rendement optimal.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production énergétique via l&apos;onduleur, comparez les relevés mensuels et observez l&apos;absence de traces, salissures ou micro-impacts sur les panneaux. Un diagnostic professionnel reste le moyen le plus fiable de confirmer la performance de votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Bron ?
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
