import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Meyzieu | Groupe Expert Altitude Com',
  description: 'Protégez votre toiture des dommages causés par la mousse avec Groupe Expert Altitude Com, le spécialiste du traitement et démoussage à Meyzieu. Nos experts',
  keywords: 'demoussage toiture meyzieu, traitement toiture meyzieu, nettoyage toiture meyzieu, antimousse toiture meyzieu, hydrofuge toiture meyzieu, entretien toiture meyzieu',
};

export default function TraitementToitureMeyzieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Meyzieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Protégez votre toiture des dommages causés par la mousse avec Groupe Expert Altitude Com, le spécialiste du traitement et démoussage à Meyzieu. Nos experts interviennent rapidement pour préserver la longévité et l&apos;esthétique de votre couverture dans toute l&apos;agglomération lyonnaise.</p>

        <h2>Nos services de traitement et démoussage toiture a Meyzieu</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est une étape cruciale pour maintenir l&apos;intégrité de votre habitat. Notre méthode professionnelle commence par un diagnostic précis de l&apos;état de votre couverture. Nos techniciens utilisent des produits écologiques et haute performance qui éliminent efficacement la mousse sans endommager les matériaux. Nous traitons tous types de toitures - tuiles, ardoises, béton - avec un protocole adapté à chaque situation. Notre intervention complète comprend le nettoyage, le traitement antimousse et l&apos;application d&apos;un hydrofuge protecteur qui empêche la repousse pendant 5 à 7 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est garantir un service de qualité : techniciens certifiés, devis gratuit sous 48h, interventions sur Meyzieu et communes environnantes, produits respectueux de l&apos;environnement, traitement garanti 5 ans, plus de 15 ans d&apos;expérience dans le traitement de toiture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et son état. Un tarif précis nécessite un diagnostic sur place. Nous proposons un devis personnalisé et transparent sans frais.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avant les périodes d&apos;humidité intense. Idéalement tous les 5-7 ans ou dès que la prolifération de mousse devient visible, pour prévenir les dégradations structurelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge se fait en 3 étapes : nettoyage complet, séchage total de la surface, puis pulvérisation uniforme du produit hydrofuge avec du matériel professionnel. Le produit doit être adapté au type de matériau et appliqué par des professionnels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Meyzieu ?
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
