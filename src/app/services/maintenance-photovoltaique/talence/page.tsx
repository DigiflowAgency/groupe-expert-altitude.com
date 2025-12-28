import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Talence | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Talence et dans toute la région ',
  keywords: 'nettoyage panneaux solaires talence, maintenance photovoltaique talence, entretien panneaux solaires talence, nettoyage photovoltaique talence, maintenance panneaux photovoltaiques talence',
};

export default function MaintenancePhotovoltaiqueTalencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Talence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Talence et dans toute la région bordelaise. Nos experts interviennent pour garantir des installations photovoltaïques performantes et durables, en optimisant chaque système énergétique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Talence</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nous intervenons sur tous types d&apos;installations, résidentielles et professionnelles, avec une méthodologie précise et des équipements hautement spécialisés. Notre équipe technique réalise un diagnostic complet, vérifiant l&apos;intégrité des modules, les connexions électriques et l&apos;état général de votre installation. Le nettoyage est effectué avec des produits écologiques, sans rayure ni détérioration, permettant de maintenir un rendement optimal. À Talence, nous comprenons que chaque installation solaire est unique et nécessite une approche personnalisée.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec plus de 15 ans d&apos;expérience, 2) Un diagnostic précis incluant des tests de performance, 3) Des techniciens certifiés et équipés de matériel professionnel, 4) Une intervention rapide et sur-mesure garantissant jusqu&apos;à 25% d&apos;efficacité énergétique supplémentaire.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de l&apos;installation, la complexité et l&apos;accessibilité. Pour une installation standard de 3 kWc à Talence, nous proposons un forfait maintenance complet à partir de 250€, incluant nettoyage, vérification électrique et rapport technique détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou environnement poussiéreux. Un panneau sale peut perdre jusqu&apos;à 30% de son rendement énergétique, d&apos;où l&apos;importance d&apos;un entretien régulier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, observez votre production électrique via l&apos;onduleur, comparez les données mensuelles, et surveillez l&apos;absence d&apos;anomalies visuelles comme des microfissures ou des traces d&apos;oxydation. Notre diagnostic complet permet une analyse précise de vos performances photovoltaïques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Talence ?
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
