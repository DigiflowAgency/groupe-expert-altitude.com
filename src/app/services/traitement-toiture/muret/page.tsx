import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Muret | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Muret et ses environs. Nos experts intervienn',
  keywords: 'demoussage toiture muret, traitement toiture muret, nettoyage toiture muret, antimousse toiture muret, hydrofuge toiture muret, entretien toiture muret',
};

export default function TraitementToitureMuretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Muret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Muret et ses environs. Nos experts interviennent rapidement pour protéger et restaurer la beauté de vos couvertures, garantissant leur longévité et leur performance.</p>

        <h2>Nos services de traitement et démoussage toiture a Muret</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région de Muret. Notre méthode professionnelle commence par un diagnostic précis de l&apos;état de votre toiture, identifiant les zones nécessitant un traitement. Nous utilisons des produits écologiques et haute performance qui éliminent la mousse, les lichens et les algues en profondeur. Notre technique d&apos;application assure une protection durable contre les infiltrations et la détérioration, préservant ainsi la structure et l&apos;esthétique de votre toiture. Nos techniciens certifiés interviennent avec un équipement adapté, garantissant un travail de qualité et une sécurité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans, 2) Des techniciens formés et certifiés, 3) Des produits écologiques et homologués, 4) Un devis gratuit et personnalisé. Nous intervenons sur Muret et l&apos;ensemble de la Haute-Garonne avec réactivité et professionnalisme.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 30€ au m², selon la complexité de l&apos;intervention, l&apos;état de la toiture et les traitements complémentaires nécessaires. Un diagnostic précis permet d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avant les périodes d&apos;humidité intense. Idéalement tous les 3-5 ans ou dès que les premières traces de mousse apparaissent pour prévenir les dégradations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un nettoyage complet et sec de la surface. On utilise un pulvérisateur professionnel, en 2 couches croisées, en évitant les surcharges. Le produit doit pénétrer sans former de film visible.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Muret ?
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
