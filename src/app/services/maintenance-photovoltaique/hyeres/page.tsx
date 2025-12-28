import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Hyères | Groupe Expert Altitude Com',
  description: 'Dans la région ensoleillée d&apos;Hyères, le Groupe Expert Altitude Com vous propose des solutions professionnelles de maintenance et nettoyage de panneaux sola',
  keywords: 'nettoyage panneaux solaires hyères, maintenance photovoltaique hyères, entretien panneaux solaires hyères, nettoyage photovoltaique hyères, maintenance panneaux photovoltaiques hyères',
};

export default function MaintenancePhotovoltaiqueHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans la région ensoleillée d&apos;Hyères, le Groupe Expert Altitude Com vous propose des solutions professionnelles de maintenance et nettoyage de panneaux solaires, garantissant des performances optimales et une durabilité maximale de vos installations photovoltaïques.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Hyères</h2>
        <div className="space-y-4">
          <p>Notre service spécialisé de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nous intervenons sur l&apos;ensemble des installations photovoltaïques, qu&apos;elles soient résidentielles ou professionnelles à Hyères et ses environs. Notre équipe technique utilise des techniques innovantes et du matériel haute précision pour éliminer poussières, débris et résidus qui peuvent réduire jusqu&apos;à 30% l&apos;efficacité énergétique de vos panneaux. Un nettoyage régulier permet non seulement d&apos;améliorer les performances mais aussi de prolonger la durée de vie de votre installation solaire. Notre approche sur-mesure s&apos;adapte à chaque configuration technique, en respectant les normes environnementales et de sécurité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour une expertise reconnue : techniciens certifiés, intervention rapide sur Hyères, diagnostic technique précis, utilisation de technologies écologiques, devis gratuit et transparent. Nous garantissons une augmentation moyenne de 25% de rendement après notre intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille et la complexité de votre installation. Notre tarification comprend un diagnostic complet, un nettoyage professionnel et un rapport technique détaillé. Un investissement raisonnable qui permet de maintenir une production énergétique optimale.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones particulièrement poussiéreuses ou proches du littoral comme Hyères, une intervention supplémentaire peut être conseillée pour garantir des performances maximales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement de vos panneaux, surveillez votre production électrique via un monitoring, observez l&apos;absence de traces, micro-fissures ou décolorations. Notre diagnostic technique complet permet une évaluation précise de l&apos;état de vos installations photovoltaïques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Hyères ?
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
