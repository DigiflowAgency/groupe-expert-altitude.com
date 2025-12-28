import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire local de référence pour la maintenance et le nettoyage de panneaux solaires à La Chapelle-sur-Erdre. Nous gara',
  keywords: 'nettoyage panneaux solaires la chapelle-sur-erdre, maintenance photovoltaique la chapelle-sur-erdre, entretien panneaux solaires la chapelle-sur-erdre, nettoyage photovoltaique la chapelle-sur-erdre, maintenance panneaux photovoltaiques la chapelle-sur-erdre',
};

export default function MaintenancePhotovoltaiqueLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire local de référence pour la maintenance et le nettoyage de panneaux solaires à La Chapelle-sur-Erdre. Nous garantissons des installations photovoltaïques performantes et durables grâce à un service technique précis et personnalisé.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>Notre expertise en maintenance et nettoyage de panneaux solaires couvre l&apos;ensemble des besoins techniques des propriétaires sur La Chapelle-sur-Erdre et ses environs. Nous proposons un diagnostic complet comprenant un nettoyage professionnel qui élimine poussières, mousses et résidus qui réduisent jusqu&apos;à 20% la performance de vos installations. Notre équipe utilise des techniques non-abrasives et des produits écologiques, respectant intégralement la structure délicate de vos panneaux photovoltaïques. Chaque intervention fait l&apos;objet d&apos;un rapport détaillé avec mesures de rendement, permettant de suivre précisément l&apos;efficacité énergétique de votre installation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Techniciens certifiés et formés aux dernières technologies photovoltaïques
• Intervention rapide sur La Chapelle-sur-Erdre et Loire-Atlantique
• Diagnostic technique gratuit avant toute intervention
• Matériel professionnel haute précision
• Garantie satisfaction totale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel de panneaux solaires varie entre 150€ et 350€, selon la surface et la complexité de l&apos;installation. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque configuration, avec un devis personnalisé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les panneaux solaires doivent être nettoyés idéalement 1 à 2 fois par an, principalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou proche de zones agricoles, nous recommandons jusqu&apos;à 3 interventions annuelles pour maintenir une performance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement de vos panneaux, surveillez votre production électrique via votre onduleur, comparez les rendements mensuels et annuels. Des variations significatives peuvent indiquer un besoin de maintenance. Notre diagnostic technique complet permet une analyse précise de votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a La Chapelle-sur-Erdre ?
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
