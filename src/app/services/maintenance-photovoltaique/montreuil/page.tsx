import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Montreuil | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Montreuil et ses environs. Spéci',
  keywords: 'nettoyage panneaux solaires montreuil, maintenance photovoltaique montreuil, entretien panneaux solaires montreuil, nettoyage photovoltaique montreuil, maintenance panneaux photovoltaiques montreuil',
};

export default function MaintenancePhotovoltaiqueMontreuilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Montreuil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Montreuil et ses environs. Spécialistes de l&apos;entretien photovoltaïque, nous garantissons des installations solaires performantes et durables.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Montreuil</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés interviennent sur l&apos;ensemble des installations photovoltaïques, en utilisant des techniques non-abrasives et des équipements haute précision. À Montreuil, nous comprenons que chaque installation est unique : notre approche personnalisée permet de préserver l&apos;efficacité énergétique de vos panneaux et d&apos;optimiser leur durée de vie. Un nettoyage régulier permet de maintenir un rendement optimal, pouvant augmenter la production électrique jusqu&apos;à 15% annuellement. Nos interventions comprennent un diagnostic technique complet, un nettoyage écologique et une vérification des connexions électriques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise locale, interventions rapides, techniciens certifiés, matériel professionnel, respect des normes environnementales. Nous proposons un suivi personnalisé, des tarifs transparents et une garantie de satisfaction. Notre connaissance approfondie du territoire de Montreuil nous permet d&apos;intervenir efficacement sur tous types d&apos;installations solaires.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel varie entre 150€ et 350€, selon la taille et la complexité de votre installation. Notre diagnostic préalable gratuit vous permet d&apos;obtenir un devis précis sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou avec un environnement poussiéreux. Un nettoyage régulier maintient une efficacité énergétique maximale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens réalisent un diagnostic complet vérifiant la production électrique, l&apos;état des connexions et des cellules photovoltaïques. Des outils de mesure précis permettent de détecter la moindre anomalie et garantir des performances optimales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Montreuil ?
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
