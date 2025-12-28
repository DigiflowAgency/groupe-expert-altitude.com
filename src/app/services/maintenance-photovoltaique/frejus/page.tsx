import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Fréjus | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en maintenance et nettoyage de panneaux solaires à Fréjus, garantit des installations photovoltaï',
  keywords: 'nettoyage panneaux solaires fréjus, maintenance photovoltaique fréjus, entretien panneaux solaires fréjus, nettoyage photovoltaique fréjus, maintenance panneaux photovoltaiques fréjus',
};

export default function MaintenancePhotovoltaiqueFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en maintenance et nettoyage de panneaux solaires à Fréjus, garantit des installations photovoltaïques performantes et durables. Nous optimisons votre production d&apos;énergie solaire grâce à un service technique précis et personnalisé.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Fréjus</h2>
        <div className="space-y-4">
          <p>Notre expertise en maintenance photovoltaïque couvre l&apos;intégralité des besoins techniques des installations solaires sur Fréjus et ses environs. Nous intervenons avec du matériel hautement spécialisé pour nettoyer et contrôler vos panneaux, éliminant poussières, mousses et résidus qui réduisent leur efficacité énergétique. Notre processus comprend un diagnostic complet, un nettoyage écologique utilisant des techniques sans produits chimiques, et un contrôle électrique approfondi. Nos techniciens certifiés détectent immédiatement les moindres anomalies, assurant une performance optimale de votre installation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une équipe locale de techniciens experts, 2) Un diagnostic précis avec compte-rendu détaillé, 3) Des interventions rapides et adaptées à chaque type d&apos;installation, 4) Une garantie de performance énergétique améliorée.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel de panneaux solaires varie entre 250€ et 600€, selon la taille et la complexité de votre installation. Notre devis personnalisé vous permettra d&apos;avoir un tarif précis et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans la région de Fréjus, l&apos;ensoleillement intense peut nécessiter un entretien plus fréquent pour maintenir une efficacité maximale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement de vos panneaux, surveillez votre production électrique via votre onduleur, comparez vos relevés aux performances théoriques et faites réaliser un diagnostic technique annuel par nos experts.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Fréjus ?
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
