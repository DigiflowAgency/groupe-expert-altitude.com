import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Nanterre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Nanterre, garantit des installations photovolt',
  keywords: 'nettoyage panneaux solaires nanterre, maintenance photovoltaique nanterre, entretien panneaux solaires nanterre, nettoyage photovoltaique nanterre, maintenance panneaux photovoltaiques nanterre',
};

export default function MaintenancePhotovoltaiqueNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Nanterre, garantit des installations photovoltaïques performantes et durables. Nous optimisons la production énergétique de vos équipements grâce à un service professionnel et personnalisé.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Nanterre</h2>
        <div className="space-y-4">
          <p>Notre expertise en maintenance photovoltaïque couvre l&apos;intégralité des besoins des particuliers et professionnels à Nanterre et ses environs. Notre processus complet comprend un diagnostic technique précis, un nettoyage professionnel utilisant des techniques non abrasives et un contrôle électrique approfondi. Nos techniciens certifiés interviennent avec du matériel spécialisé pour éliminer poussières, mousses et résidus qui réduisent jusqu&apos;à 30% l&apos;efficacité de vos panneaux. Nous utilisons des systèmes de nettoyage à eau pure et des outils télescopiques garantissant un travail sans trace et sans risque pour vos installations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de techniciens hautement qualifiés et certifiés
✓ Intervention rapide sur Nanterre et département 92
✓ Diagnostic technique inclus sans surcoût
✓ Technologies de nettoyage écologiques et innovantes
✓ Tarifs transparents et devis gratuit sous 48h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel d&apos;un système photovoltaïque varie entre 150€ et 350€ selon la surface et la complexité. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque installation, avec un tarif moyen de 220€ pour un nettoyage complet et une maintenance préventive.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 nettoyages par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou proche de zones industrielles à Nanterre, nous conseillons un nettoyage tous les 6 mois pour maintenir une performance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production électrique via votre onduleur, comparez les données mensuelles et vérifiez l&apos;absence de baisse significative. Nous proposons un diagnostic complet incluant un test électrique, une analyse thermographique et un contrôle visuel de l&apos;intégrité des panneaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Nanterre ?
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
