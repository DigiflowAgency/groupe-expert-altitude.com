import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a L\'Union | Groupe Expert Altitude Com',
  description: 'Dans la région de L&apos;Union, Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires. Nous gara',
  keywords: 'nettoyage panneaux solaires l'union, maintenance photovoltaique l'union, entretien panneaux solaires l'union, nettoyage photovoltaique l'union, maintenance panneaux photovoltaiques l'union',
};

export default function MaintenancePhotovoltaiqueLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans la région de L&apos;Union, Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires. Nous garantissons des installations photovoltaïques performantes et durables grâce à notre expertise technique unique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a L'Union</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nous intervenons sur tous types d&apos;installations photovoltaïques, en réalisant un diagnostic complet qui permet d&apos;optimiser la production énergétique. Notre équipe certifiée utilise des techniques de nettoyage écologiques et non-abrasives, préservant l&apos;intégrité de vos panneaux. Un entretien régulier permet de maintenir un rendement optimal, avec en moyenne 15% de production énergétique supplémentaire après intervention. Nous couvrons L&apos;Union et ses environs, en proposant un service sur-mesure adapté à chaque configuration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : Une expertise technique de plus de 10 ans, Des techniciens certifiés et formés aux dernières technologies, Un diagnostic précis et personnalisé, Une intervention rapide et professionnelle, Une approche éco-responsable garantissant la performance de vos installations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la taille de votre installation, avec un retour sur investissement rapide grâce à l&apos;amélioration du rendement énergétique. Nous proposons des forfaits adaptés à chaque configuration.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou près de zones agricoles. Un contrôle semestriel permet d&apos;évaluer précisément vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, nous réalisons un diagnostic complet incluant : Mesure du rendement énergétique, Contrôle visuel des connexions, Analyse thermographique des panneaux, Test des onduleurs. Un rapport détaillé vous sera systématiquement remis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a L'Union ?
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
