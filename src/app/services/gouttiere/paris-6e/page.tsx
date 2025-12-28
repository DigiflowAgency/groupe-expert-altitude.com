import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Paris 6e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé dans les solutions de gouttières et descentes pluviales sur Paris 6e et ses environs. Nous proté',
  keywords: 'gouttiere paris 6e, pose gouttiere paris 6e, reparation gouttiere paris 6e, nettoyage gouttiere paris 6e, descente pluviale paris 6e, gouttiere bouchee paris 6e',
};

export default function GouttiereParis6ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Paris 6e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé dans les solutions de gouttières et descentes pluviales sur Paris 6e et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure et un savoir-faire technique reconnu.</p>

        <h2>Nos services de gouttières et descentes pluviales a Paris 6e</h2>
        <div className="space-y-4">
          <p>Nos experts interviennent pour l&apos;installation, la réparation et le nettoyage complet de vos systèmes de gouttières. Nous proposons une analyse technique précise avant chaque intervention, en évaluant la configuration architecturale spécifique de votre bâtiment. Notre approche garantit une protection optimale contre les eaux pluviales, en utilisant des matériaux haute durabilité comme l&apos;aluminium et le zinc. Dans le 6e arrondissement parisien, nous adaptons nos solutions aux caractéristiques patrimoniales uniques de chaque immeuble, avec une attention particulière aux normes de conservation du bâti historique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience
- Interventions rapides sous 48h à Paris 6e
- Devis gratuit et transparent sans engagement
- Techniciens qualifiés et assurés pour chaque chantier</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire, selon le matériau choisi (PVC, zinc, aluminium) et la complexité de l&apos;installation. Pour un pavillon standard à Paris 6e, comptez environ 500-1200€ pour un système complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un dégorgeoir, retirez manuellement les débris, utilisez un jet d&apos;eau à haute pression. En cas de difficultés, faites appel à un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage des gouttières est recommandé deux fois par an : au printemps et à l&apos;automne. Dans les zones très arborées de Paris 6e, nous conseillons un curage tous les 4-6 mois pour prévenir l&apos;accumulation de feuilles et de débris.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Paris 6e ?
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
