import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Vallauris | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Vallauris, vous garantit des installat',
  keywords: 'nettoyage panneaux solaires vallauris, maintenance photovoltaique vallauris, entretien panneaux solaires vallauris, nettoyage photovoltaique vallauris, maintenance panneaux photovoltaiques vallauris',
};

export default function MaintenancePhotovoltaiqueVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Vallauris, vous garantit des installations photovoltaïques toujours performantes et durables. Nos experts interviennent sur l&apos;ensemble du territoire azuréen pour optimiser la production énergétique de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Vallauris</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés réalisent un diagnostic précis de vos installations photovoltaïques, identifiant chaque point nécessitant une intervention. Grâce à des techniques de nettoyage innovantes et écologiques, nous éliminons les résidus, poussières et salissures qui réduisent jusqu&apos;à 30% les performances de vos panneaux. À Vallauris, nous proposons une approche personnalisée, adaptant nos interventions à chaque configuration technique et environnementale, pour maximiser votre production d&apos;énergie solaire.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages clés : une équipe certifiée avec plus de 10 ans d&apos;expérience, un diagnostic gratuit avant intervention, des techniciens équipés de matériel haute précision, et des tarifs transparents sans surprises. Nous garantissons une augmentation moyenne de 25% de l&apos;efficacité énergétique après nos interventions.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel des panneaux solaires varie entre 150€ et 500€, selon la surface, l&apos;accessibilité et l&apos;état de vos installations. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque configuration, avec un devis personnalisé et sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 nettoyages par an, idéalement au printemps et à l&apos;automne. Dans des zones comme Vallauris avec un ensoleillement important, un nettoyage tous les 6 mois permet de maintenir une performance optimale et de prévenir l&apos;accumulation de débris.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production mensuelle via votre onduleur, comparez vos relevés aux données théoriques. Des variations supérieures à 15% nécessitent un diagnostic. Nous proposons un check-up complet incluant test électrique, nettoyage et analyse des performances.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Vallauris ?
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
