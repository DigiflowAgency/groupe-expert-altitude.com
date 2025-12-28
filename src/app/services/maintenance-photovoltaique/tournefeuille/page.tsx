import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Tournefeuille | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Tournefeuille. Nous garantissons de',
  keywords: 'nettoyage panneaux solaires tournefeuille, maintenance photovoltaique tournefeuille, entretien panneaux solaires tournefeuille, nettoyage photovoltaique tournefeuille, maintenance panneaux photovoltaiques tournefeuille',
};

export default function MaintenancePhotovoltaiqueTournefeuillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Tournefeuille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Tournefeuille. Nous garantissons des installations photovoltaïques performantes et durables grâce à notre expertise technique précise.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Tournefeuille</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Sur Tournefeuille et ses environs, nous intervenons avec un équipement spécialisé permettant un nettoyage sans rayure et une vérification complète de l&apos;installation. Nos techniciens utilisent des techniques écologiques qui préservent l&apos;intégrité de vos panneaux tout en optimisant leur rendement énergétique. Une intervention régulière permet de maintenir une efficacité de production solaire jusqu&apos;à 15% supérieure aux installations non entretenues.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 10 ans d&apos;expérience
- Interventions rapides sur Tournefeuille et l&apos;agglomération toulousaine
- Diagnostic technique gratuit avant intervention
- Matériel de nettoyage haute précision sans produits chimiques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel de panneaux solaires varie entre 150€ et 350€, selon la surface et l&apos;accessibilité de votre installation. Notre tarif comprend un nettoyage complet et un diagnostic technique détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zones à forte pollution ou environnement poussiéreux. Un entretien régulier permet de maintenir une production électrique optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production mensuelle via l&apos;application de votre onduleur. Un écart de plus de 10% par rapport à la production théorique nécessite un diagnostic technique approfondi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Tournefeuille ?
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
