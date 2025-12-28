import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Cannes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour le nettoyage de vitres en hauteur à Cannes, apporte une solution professionnelle et sécurisé',
  keywords: 'nettoyage vitres hauteur cannes, lavage vitres immeuble cannes, nettoyage facade vitree cannes, cordiste vitre cannes, entreprise nettoyage vitres cannes, nettoyage verriere cannes',
};

export default function NettoyageVitresHauteurCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour le nettoyage de vitres en hauteur à Cannes, apporte une solution professionnelle et sécurisée pour tous vos besoins de nettoyage de façades vitrées. Notre expertise technique garantit des résultats impeccables pour les immeubles et bâtiments de la région.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Cannes</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la solution ultime pour les professionnels et syndics de Cannes exigeant une qualité irréprochable. Nos techniciens cordistes, spécialement formés aux techniques d&apos;accès difficile, utilisent un équipement de pointe pour traiter les surfaces vitrées les plus complexes. Nous intervenons sur tous types de bâtiments, des immeubles résidentiels aux grands complexes tertiaires, avec une méthodologie précise incluant un diagnostic préalable, un nettoyage écologique et un contrôle qualité systématique. Notre process innovant permet un résultat brillant et durable, tout en minimisant les perturbations pour nos clients.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : techniciens certifiés, matériel dernière génération, techniques respectueuses de l&apos;environnement, intervention rapide sur Cannes et ses environs. Nous garantissons une transparence totale, des devis précis et un service sur-mesure adapté à chaque configuration architecturale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la complexité d&apos;accès, la hauteur et la surface totale. Un diagnostic gratuit permet un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 nettoyages par an, avec un minimum de deux interventions annuelles pour maintenir une qualité optimale, particulièrement dans les zones exposées aux embruns marins comme Cannes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur nécessite des équipements homologués, une formation spécifique aux techniques de cordage, un harnais de sécurité et le respect strict des normes de sécurité professionnelles (arrêté du 22 septembre 2017).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Cannes ?
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
