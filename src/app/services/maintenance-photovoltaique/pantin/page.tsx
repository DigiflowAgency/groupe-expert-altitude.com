import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Pantin | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Pantin, vous garantit des installation',
  keywords: 'nettoyage panneaux solaires pantin, maintenance photovoltaique pantin, entretien panneaux solaires pantin, nettoyage photovoltaique pantin, maintenance panneaux photovoltaiques pantin',
};

export default function MaintenancePhotovoltaiquePantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Pantin, vous garantit des installations photovoltaïques performantes et durables. Nos experts interviennent sur l&apos;ensemble du territoire pantinois pour optimiser la production énergétique de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Pantin</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés réalisent un diagnostic complet de vos installations, vérifiant chaque composant électrique et mécanique. Nous utilisons des techniques de nettoyage innovantes qui préservent l&apos;intégrité de vos panneaux, permettant jusqu&apos;à 15% d&apos;augmentation de rendement énergétique. Notre processus comprend un nettoyage écologique sans produits chimiques, une inspection thermographique et un contrôle électrique précis, assurant une performance maximale de votre système photovoltaïque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos avantages clés incluent : une équipe certifiée avec plus de 10 ans d&apos;expérience, un diagnostic gratuit, des interventions rapides sur Pantin et ses environs, un suivi personnalisé, et des tarifs transparents. Nous sommes engagés dans une démarche éco-responsable et garantissons la performance de vos installations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la taille de votre installation, avec un retour sur investissement rapide grâce à l&apos;optimisation de la production énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne, pour éliminer poussières, pollens et résidus qui réduisent l&apos;efficacité de vos panneaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un bon fonctionnement se mesure par une production constante, l&apos;absence de microfissures, un rendement stable et des valeurs électriques conformes. Nous proposons un diagnostic complet pour vérifier ces paramètres.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Pantin ?
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
