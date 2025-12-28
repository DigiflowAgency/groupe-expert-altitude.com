import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Marseille | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Marseille et dans toute la région Sud. Spécialistes de la mai',
  keywords: 'nettoyage panneaux solaires marseille, maintenance photovoltaique marseille, entretien panneaux solaires marseille, nettoyage photovoltaique marseille, maintenance panneaux photovoltaiques marseille',
};

export default function MaintenancePhotovoltaiqueMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Marseille et dans toute la région Sud. Spécialistes de la maintenance et du nettoyage des panneaux solaires, nous garantissons des performances optimales et une durabilité maximale de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Marseille</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. À Marseille, notre équipe d&apos;experts intervient avec un matériel hautement spécialisé pour éliminer poussières, pollens et résidus qui réduisent jusqu&apos;à 25% l&apos;efficacité de vos installations. Nous utilisons des techniques écologiques, sans produits chimiques agressifs, qui préservent l&apos;intégrité de vos panneaux photovoltaïques. Notre processus comprend un diagnostic précis, un nettoyage manuel ou automatisé selon la configuration, et un contrôle complet des performances électriques. Chaque intervention est traçable et documentée pour votre tranquillité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés et formés aux dernières technologies photovoltaïques
- Intervention rapide sur Marseille et sa métropole
- Diagnostic technique gratuit avant toute intervention
- Garantie de performance énergétique après maintenance
- Plus de 150 installations entretenues chaque année</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen de l&apos;entretien annuel varie entre 150€ et 350€ selon la surface et la complexité de votre installation. Notre tarif inclut un nettoyage complet, un diagnostic électrique et un rapport détaillé des performances.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une installation à Marseille, nous recommandons un nettoyage professionnel tous les 12 à 18 mois. Dans les zones très exposées aux embruns ou à la pollution, un entretien annuel est conseillé pour maintenir un rendement optimal de 95% de vos panneaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous proposons un diagnostic complet avec analyse thermographique et mesure du rendement électrique. Les signes de dysfonctionnement incluent une baisse de production supérieure à 10%, des micro-fissures visibles ou des variations importantes de température entre cellules.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Marseille ?
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
