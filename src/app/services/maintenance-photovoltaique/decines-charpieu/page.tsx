import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Décines-Charpieu. Spécialistes de la maintenance et du nettoyage de ',
  keywords: 'nettoyage panneaux solaires décines-charpieu, maintenance photovoltaique décines-charpieu, entretien panneaux solaires décines-charpieu, nettoyage photovoltaique décines-charpieu, maintenance panneaux photovoltaiques décines-charpieu',
};

export default function MaintenancePhotovoltaiqueDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Décines-Charpieu. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales pour votre système photovoltaïque grâce à notre expertise technique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires est conçu pour maximiser la productivité et la durabilité de votre installation. À Décines-Charpieu et ses environs, nous intervenons avec des techniciens hautement qualifiés équipés de matériel professionnel. Chaque intervention comprend un diagnostic complet, un nettoyage minutieux utilisant des techniques non abrasives et un contrôle électrique précis. Nos protocoles permettent de préserver l&apos;intégrité de vos panneaux tout en améliorant leur rendement énergétique de 10 à 15%. Nous utilisons des technologies de pointe pour éliminer poussières, mousses et résidus qui peuvent réduire significativement la performance photovoltaïque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec plus de 15 ans d&apos;expérience 2) Des techniciens formés et habilités 3) Un diagnostic personnalisé et gratuit 4) Des interventions rapides et respectueuses de vos installations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel varie entre 150€ et 350€, selon la surface et la complexité de votre installation. Notre tarif inclut le nettoyage complet, le diagnostic technique et un rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou avec un environnement poussiéreux. Un entretien régulier permet de maintenir un rendement optimal de 95% de votre système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production mensuelle, comparez-la aux données du constructeur. Des variations importantes peuvent indiquer un besoin de maintenance. Nous proposons un diagnostic complet avec analyse de performance et contrôle électrique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Décines-Charpieu ?
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
