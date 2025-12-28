import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a La Ciotat | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à La Ciotat et dans toute la région sud. Spécialistes de la mai',
  keywords: 'nettoyage panneaux solaires la ciotat, maintenance photovoltaique la ciotat, entretien panneaux solaires la ciotat, nettoyage photovoltaique la ciotat, maintenance panneaux photovoltaiques la ciotat',
};

export default function MaintenancePhotovoltaiqueLaCiotatPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a La Ciotat</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à La Ciotat et dans toute la région sud. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales et une durabilité maximale de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a La Ciotat</h2>
        <div className="space-y-4">
          <p>Notre service complet de maintenance photovoltaïque répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés interviennent sur site pour effectuer un diagnostic précis de vos panneaux solaires, en utilisant des techniques de nettoyage écologiques et non-abrasives. Nous réalisons un nettoyage en profondeur qui élimine poussières, résidus et traces minérales qui réduisent l&apos;efficacité énergétique. Chaque intervention comprend un contrôle électrique complet, une vérification des connexions et une analyse des performances, permettant de maintenir un rendement optimal de votre installation à La Ciotat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un service de proximité et d&apos;expertise. Nos interventions sont rapides, nos techniciens certifiés, et nous proposons un suivi personnalisé. Nous intervenons avec du matériel professionnel adapté, garantissant un nettoyage sans rayure et un diagnostic précis. Notre engagement : préserver la performance de vos installations photovoltaïques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la surface et la complexité de votre installation. Notre diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis et transparent sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones poussiéreuses ou proches du littoral comme La Ciotat, une intervention supplémentaire peut être conseillée pour maintenir un rendement optimal.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production électrique via votre onduleur. Une baisse de performance supérieure à 10% nécessite un diagnostic. Nos techniciens peuvent réaliser un bilan complet avec analyse thermographique et test électrique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a La Ciotat ?
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
