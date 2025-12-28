import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Toulon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en maintenance et nettoyage de panneaux solaires sur tout le territoire toulonnais. Avec plus ',
  keywords: 'nettoyage panneaux solaires toulon, maintenance photovoltaique toulon, entretien panneaux solaires toulon, nettoyage photovoltaique toulon, maintenance panneaux photovoltaiques toulon',
};

export default function MaintenancePhotovoltaiqueToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en maintenance et nettoyage de panneaux solaires sur tout le territoire toulonnais. Avec plus de 10 ans d&apos;expérience, nous garantissons des installations photovoltaïques performantes et durables dans la région de Toulon.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Toulon</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Notre équipe de techniciens hautement qualifiés utilise des techniques professionnelles pour éliminer poussières, salissures et traces qui réduisent jusqu&apos;à 25% l&apos;efficacité énergétique de vos installations. Nous intervenons sur tous types de systèmes photovoltaïques, qu&apos;il s&apos;agisse de toitures résidentielles ou de parcs industriels, avec un diagnostic précis et un nettoyage écologique. Notre processus comprend un contrôle électrique complet, un nettoyage par eau déminéralisée et un traitement anti-salissures qui protège vos panneaux durablement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec des techniciens formés aux dernières normes photovoltaïques, 2) Un service 100% personnalisé adapté à chaque installation, 3) Des tarifs transparents sans frais cachés, 4) Une intervention rapide sur Toulon et ses environs garantie sous 48h.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de l&apos;installation, avec un prix moyen de 250€ pour une installation résidentielle standard. Notre devis gratuit vous permettra d&apos;avoir un tarif précis et sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 nettoyages par an, idéalement au printemps et à l&apos;automne. Dans les zones très poussiéreuses ou proches du littoral comme Toulon, nous conseillons un nettoyage tous les 6 mois pour maintenir une performance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production électrique via votre onduleur. Une baisse de rendement supérieure à 10% nécessite un diagnostic. Nous proposons un contrôle complet avec mesures électriques précises et rapport détaillé.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Toulon ?
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
