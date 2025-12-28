import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Clichy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Clichy et dans toute la région pari',
  keywords: 'nettoyage panneaux solaires clichy, maintenance photovoltaique clichy, entretien panneaux solaires clichy, nettoyage photovoltaique clichy, maintenance panneaux photovoltaiques clichy',
};

export default function MaintenancePhotovoltaiqueClichyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Clichy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Clichy et dans toute la région parisienne. Nos techniciens hautement qualifiés garantissent des installations photovoltaïques performantes et durables.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Clichy</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nous intervenons sur tous types d&apos;installations, résidentielles et professionnelles, avec un diagnostic précis et un équipement professionnel. Notre processus comprend un nettoyage écologique utilisant des techniques sans détergents agressifs, une inspection thermographique pour détecter les anomalies et un contrôle électrique complet. À Clichy, nous optimisons la production énergétique de vos panneaux solaires avec une moyenne d&apos;amélioration de 12% de rendement après intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 10 ans d&apos;expérience
- Intervention rapide sur Clichy et communes limitrophes
- Matériel high-tech et techniques éco-responsables
- Rapport détaillé après chaque maintenance</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 450€ selon la taille de l&apos;installation, avec un prix moyen de 250€ pour un système résidentiel standard. Notre devis personnalisé vous garantit une transparence totale.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou proche de zones agricoles. Un nettoyage annuel permet de maintenir une efficacité optimale de 95-98% de votre installation.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un diagnostic complet incluant un test de performance, une analyse thermique et un contrôle électrique. Les signes d&apos;un bon fonctionnement sont une production constante, absence de points chauds et un rendement proche de 90-95% de la capacité nominale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Clichy ?
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
