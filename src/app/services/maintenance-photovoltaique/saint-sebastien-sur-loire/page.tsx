import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en maintenance et nettoyage de panneaux solaires à Saint-Sébastien-sur-Loire, vous garantit des i',
  keywords: 'nettoyage panneaux solaires saint-sébastien-sur-loire, maintenance photovoltaique saint-sébastien-sur-loire, entretien panneaux solaires saint-sébastien-sur-loire, nettoyage photovoltaique saint-sébastien-sur-loire, maintenance panneaux photovoltaiques saint-sébastien-sur-loire',
};

export default function MaintenancePhotovoltaiqueSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en maintenance et nettoyage de panneaux solaires à Saint-Sébastien-sur-Loire, vous garantit des installations photovoltaïques performantes et durables. Nos experts interviennent sur toute la région nantaise pour optimiser la production énergétique de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés réalisent un diagnostic complet de vos installations photovoltaïques, en utilisant du matériel spécialisé et des techniques innovantes. Nous nettoyons méticuleusement chaque panneau, éliminant poussières, mousses et résidus qui peuvent réduire jusqu&apos;à 30% de votre rendement énergétique. Notre intervention comprend un contrôle électrique approfondi, le test des connexions et l&apos;analyse des performances, garantissant une production maximale et une durabilité optimale de vos équipements.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages : équipe certifiée, intervention rapide sur Saint-Sébastien-sur-Loire, matériel de haute technologie, devis gratuit, service personnalisé, respect des normes environnementales. Nous sommes votre solution complète pour une maintenance photovoltaïque professionnelle et efficace.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de l&apos;installation, avec un prix moyen de 250€ pour un système domestique standard. Notre tarif inclut le nettoyage complet, le diagnostic technique et le rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou environnement poussiéreux. Un entretien régulier permet de maintenir une efficacité énergétique optimale de 95% de vos panneaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production électrique via un monitoring, comparez les données avec les performances théoriques, et faites réaliser un diagnostic annuel par nos experts qui détecteront tout dysfonctionnement potentiel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Saint-Sébastien-sur-Loire ?
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
