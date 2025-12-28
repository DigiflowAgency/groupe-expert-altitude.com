import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Draguignan | Groupe Expert Altitude Com',
  description: 'Dans le Var, le Groupe Expert Altitude Com révolutionne l&apos;entretien des installations photovoltaïques à Draguignan. Spécialistes de la maintenance et du ne',
  keywords: 'nettoyage panneaux solaires draguignan, maintenance photovoltaique draguignan, entretien panneaux solaires draguignan, nettoyage photovoltaique draguignan, maintenance panneaux photovoltaiques draguignan',
};

export default function MaintenancePhotovoltaiqueDraguignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Draguignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans le Var, le Groupe Expert Altitude Com révolutionne l&apos;entretien des installations photovoltaïques à Draguignan. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances énergétiques optimales pour votre investissement durable.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Draguignan</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Sur Draguignan et ses environs, nous intervenons avec un équipement professionnel permettant un nettoyage sans rayure et sans détérioration des cellules photovoltaïques. Notre processus comprend un diagnostic précis, un nettoyage écologique utilisant uniquement de l&apos;eau déminéralisée et un contrôle électrique complet. Nos techniciens certifiés vérifient chaque connexion, évaluent l&apos;état des câbles et mesurent les performances de votre installation pour prévenir tout risque de sous-production énergétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens hautement qualifiés et certifiés 
- Matériel professionnel dernier cri 
- Intervention rapide sur Draguignan et le Var 
- Garantie de performance énergétique 
- Devis gratuit et transparent</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût annuel d&apos;entretien varie entre 150€ et 350€ selon la surface et la complexité de votre installation. Notre tarification inclut le nettoyage, le diagnostic technique et le rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone poussiéreuse ou proche de zones agricoles. Un panneau sale peut perdre jusqu&apos;à 30% de son efficacité énergétique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un diagnostic complet avec mesure du rendement, analyse thermographique et test électrique. Les signes de dysfonctionnement incluent une baisse de production, des micro-fissures visibles ou des variations importantes de température.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Draguignan ?
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
