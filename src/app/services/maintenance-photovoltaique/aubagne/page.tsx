import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Aubagne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Aubagne et ses environs. Spécialist',
  keywords: 'nettoyage panneaux solaires aubagne, maintenance photovoltaique aubagne, entretien panneaux solaires aubagne, nettoyage photovoltaique aubagne, maintenance panneaux photovoltaiques aubagne',
};

export default function MaintenancePhotovoltaiqueAubagnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Aubagne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Aubagne et ses environs. Spécialistes de l&apos;entretien photovoltaïque, nous garantissons des installations performantes et durables pour les particuliers et professionnels.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Aubagne</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Sur Aubagne et la région, nous intervenons avec un équipement professionnel permettant d&apos;éliminer poussières, mousses et résidus qui réduisent jusqu&apos;à 30% la performance de vos installations. Notre processus comprend un diagnostic technique complet, un nettoyage écologique sans produits chimiques agressifs et un contrôle électrique précis de chaque module. Nos techniciens certifiés utilisent des techniques innovantes qui préservent l&apos;intégrité de vos panneaux tout en maximisant leur rendement énergétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 10 ans dans le photovoltaïque, 2) Un diagnostic technique gratuit avant intervention, 3) Des techniciens certifiés et équipés des dernières technologies, 4) Une garantie de performance énergétique après chaque maintenance.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel de panneaux solaires varie entre 150€ et 350€, selon la surface, l&apos;accessibilité et l&apos;état général de l&apos;installation. Chez Groupe Expert Altitude Com, nous proposons des forfaits personnalisés avec un devis gratuit.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zones à forte pollution ou environnement poussiéreux comme certains secteurs industriels d&apos;Aubagne. Un lavage annuel permet de maintenir une efficacité énergétique optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement de vos panneaux solaires, surveillez votre production électrique via un monitoring, observez l&apos;absence de traces, micro-fissures ou décolorations, et réalisez un contrôle technique annuel par des professionnels comme notre équipe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Aubagne ?
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
