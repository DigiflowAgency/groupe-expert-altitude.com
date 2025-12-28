import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires sur la côte azuréenne, spécialement à',
  keywords: 'nettoyage panneaux solaires cagnes-sur-mer, maintenance photovoltaique cagnes-sur-mer, entretien panneaux solaires cagnes-sur-mer, nettoyage photovoltaique cagnes-sur-mer, maintenance panneaux photovoltaiques cagnes-sur-mer',
};

export default function MaintenancePhotovoltaiqueCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires sur la côte azuréenne, spécialement à Cagnes-sur-Mer. Nos experts garantissent des installations photovoltaïques performantes et durables, maximisant votre production d&apos;énergie solaire.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service complet de maintenance et nettoyage de panneaux solaires répond aux besoins spécifiques des propriétaires à Cagnes-sur-Mer et ses environs. Nous utilisons des techniques professionnelles pour éliminer poussières, débris et traces minérales qui réduisent l&apos;efficacité de vos installations. Notre équipe technique réalise un diagnostic précis, nettoyage à l&apos;eau déminéralisée et contrôle électrique complet, permettant jusqu&apos;à 15% d&apos;amélioration de rendement énergétique. Chaque intervention est personnalisée, avec un rapport détaillé et des recommandations techniques adaptées à votre installation photovoltaïque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés et expérimentés
- Intervention rapide sur Cagnes-sur-Mer et la région PACA
- Matériel high-tech et écologique
- Diagnostic précis et transparent
- Devis gratuit sous 48h
- Plus de 200 installations entretenues annuellement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la surface et la complexité de votre installation, mais représente un investissement minimal comparé aux économies énergétiques générées. Notre tarif inclut nettoyage complet, vérification électrique et rapport technique détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment dans les zones à forte pollution ou proche du littoral comme Cagnes-sur-Mer. Un nettoyage régulier maintient une efficacité optimale de vos panneaux solaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens réalisent un diagnostic complet vérifiant le rendement, l&apos;intégrité électrique et mécanique. Les signes de dysfonctionnement incluent baisse de production, présence de micro-fissures ou traces d&apos;oxydation. Un contrôle annuel permet de prévenir ces problèmes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Cagnes-sur-Mer ?
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
