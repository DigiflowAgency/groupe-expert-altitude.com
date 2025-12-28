import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Vénissieux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Vénissieux et dans toute la région lyonnais',
  keywords: 'nettoyage panneaux solaires vénissieux, maintenance photovoltaique vénissieux, entretien panneaux solaires vénissieux, nettoyage photovoltaique vénissieux, maintenance panneaux photovoltaiques vénissieux',
};

export default function MaintenancePhotovoltaiqueVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Vénissieux et dans toute la région lyonnaise. Nos experts garantissent des installations photovoltaïques performantes et durables grâce à un service sur-mesure.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Vénissieux</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nous intervenons sur tous types d&apos;installations, résidentielles comme industrielles, avec une méthodologie précise et des équipements professionnels. Notre équipe réalise un diagnostic complet comprenant le nettoyage technique, la vérification des connexions électriques et l&apos;analyse des performances. Chaque intervention permet d&apos;optimiser jusqu&apos;à 15% le rendement énergétique de vos panneaux, en éliminant poussières, mousses et résidus qui réduisent leur efficacité. À Vénissieux, nous sommes reconnus pour notre expertise technique et notre engagement environnemental.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : techniciens certifiés, interventions rapides sous 48h, matériel high-tech de nettoyage, devis gratuit et transparent, contrats de maintenance personnalisés. Nous sommes le partenaire de confiance pour prolonger la durée de vie de vos installations photovoltaïques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de l&apos;installation, avec un prix moyen de 250€ pour un système résidentiel standard. Notre tarification inclut le nettoyage complet, le contrôle technique et un rapport détaillé des performances.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zones à forte pollution ou environnement poussiéreux. Un nettoyage régulier permet de maintenir un rendement optimal de 95-98% de vos panneaux solaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production électrique via un monitoring, comparez les relevés mensuels et consultez nos techniciens en cas de baisse de performance supérieure à 10%. Nous proposons des diagnostics complets avec analyses thermographiques et électriques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Vénissieux ?
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
