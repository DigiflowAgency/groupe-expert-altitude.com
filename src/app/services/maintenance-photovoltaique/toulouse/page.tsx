import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Toulouse | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire local à Toulouse spécialisé dans la maintenance et le nettoyage de panneaux solaires. Nous garantissons des',
  keywords: 'nettoyage panneaux solaires toulouse, maintenance photovoltaique toulouse, entretien panneaux solaires toulouse, nettoyage photovoltaique toulouse, maintenance panneaux photovoltaiques toulouse',
};

export default function MaintenancePhotovoltaiqueToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire local à Toulouse spécialisé dans la maintenance et le nettoyage de panneaux solaires. Nous garantissons des installations photovoltaïques performantes et durables pour les particuliers et professionnels de la région Occitanie.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Toulouse</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés interviennent sur l&apos;ensemble du territoire toulousain pour préserver la performance de vos installations. Nous utilisons des techniques et équipements spécialisés permettant un nettoyage sans rayure et une vérification complète de l&apos;intégrité de vos panneaux. Notre approche professionnelle permet en moyenne une augmentation de 12% du rendement énergétique après intervention. Chaque prestation comprend un diagnostic précis, un nettoyage écologique et une analyse des performances.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec 15 ans d&apos;expérience à Toulouse
- Techniciens certifiés et formés aux dernières technologies photovoltaïques
- Matériel de nettoyage haute précision sans produits chimiques
- Intervention rapide et devis personnalisé sous 48h
- Garantie satisfaction et performance énergétique</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la surface et la complexité de l&apos;installation. Notre tarif comprend un nettoyage complet, un diagnostic technique et un rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou proche de zones agricoles. Un nettoyage régulier permet de maintenir un rendement optimal de 95% de votre installation.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un diagnostic complet via des tests électriques, une thermographie infrarouge et une analyse visuelle. Les signes de dysfonctionnement incluent une baisse de production, des micro-fissures ou des traces d&apos;oxydation. Un contrôle annuel permet de détecter précocement tout problème potentiel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Toulouse ?
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
