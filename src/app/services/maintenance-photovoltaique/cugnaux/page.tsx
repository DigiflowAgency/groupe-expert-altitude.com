import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Cugnaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Cugnaux et ses environs. Spécialistes de la maintenance et du',
  keywords: 'nettoyage panneaux solaires cugnaux, maintenance photovoltaique cugnaux, entretien panneaux solaires cugnaux, nettoyage photovoltaique cugnaux, maintenance panneaux photovoltaiques cugnaux',
};

export default function MaintenancePhotovoltaiqueCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Cugnaux et ses environs. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales pour votre système énergétique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Cugnaux</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires représente bien plus qu&apos;un simple entretien. Nous proposons une approche technique et professionnelle pour préserver l&apos;efficacité de votre installation. Nos techniciens hautement qualifiés utilisent des techniques de nettoyage innovantes qui respectent l&apos;intégrité de vos équipements photovoltaïques. À Cugnaux, nous comprenons que chaque installation solaire est unique et nécessite une attention personnalisée. Notre processus comprend un diagnostic précis, un nettoyage écologique sans produits chimiques agressifs et une vérification complète des performances électriques. Nos interventions permettent en moyenne d&apos;augmenter la production énergétique de 15% et de prolonger la durée de vie de vos panneaux.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos atouts incluent : des techniciens certifiés, un matériel de nettoyage haute technologie, un diagnostic gratuit, une intervention rapide sur Cugnaux et ses alentours, et un engagement qualité garanti. Nous sommes votre partenaire de confiance pour maintenir votre installation photovoltaïque à son niveau de performance maximal.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;un entretien annuel de panneaux solaires varie entre 150€ et 350€ selon la taille et la complexité de l&apos;installation. Notre tarif comprend un diagnostic complet, un nettoyage professionnel et un rapport détaillé des performances. Un investissement raisonnable qui permet de garantir jusqu&apos;à 15% de rendement énergétique supplémentaire.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 nettoyages par an, idéalement au printemps et à l&apos;automne. Dans des zones comme Cugnaux avec un environnement poussiéreux ou à proximité de zones agricoles, nous conseillons deux interventions annuelles pour maintenir une efficacité optimale. Le nettoyage permet d&apos;éliminer poussières, résidus et traces qui réduisent la performance photovoltaïque.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement de vos panneaux solaires, surveillez votre production énergétique via votre onduleur ou application dédiée. Des signes d&apos;anomalies incluent une baisse de production supérieure à 10%, des bruits inhabituels ou des traces d&apos;oxydation. Notre diagnostic gratuit permet une expertise complète et précise de votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Cugnaux ?
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
