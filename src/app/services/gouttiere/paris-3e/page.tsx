import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Paris 3e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour la gestion professionnelle de vos gouttières et descentes pluviales sur Paris 3e. Spécial',
  keywords: 'gouttiere paris 3e, pose gouttiere paris 3e, reparation gouttiere paris 3e, nettoyage gouttiere paris 3e, descente pluviale paris 3e, gouttiere bouchee paris 3e',
};

export default function GouttiereParis3ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Paris 3e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour la gestion professionnelle de vos gouttières et descentes pluviales sur Paris 3e. Spécialistes de la protection de votre habitat, nous intervenons rapidement pour garantir l&apos;intégrité et la performance de vos systèmes d&apos;évacuation des eaux.</p>

        <h2>Nos services de gouttières et descentes pluviales a Paris 3e</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires parisiens, depuis l&apos;installation jusqu&apos;à la maintenance préventive. Notre équipe technique hautement qualifiée réalise des poses sur-mesure, en utilisant des matériaux résistants comme l&apos;aluminium et le zinc, parfaitement adaptés aux contraintes architecturales du 3e arrondissement. Nous proposons un diagnostic précis de votre système d&apos;évacuation, avec un rapport détaillé identifiant les zones potentiellement problématiques. Chaque intervention est personnalisée, en respectant les normes techniques et esthétiques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique de plus de 15 ans dans le traitement des gouttières parisiennes
- Intervention sous 48h en cas d&apos;urgence
- Devis gratuit et transparent sans engagement
- Techniciens certifiés et équipements professionnels de dernière génération</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 35€ et 75€ au mètre linéaire, selon les matériaux et la complexité de l&apos;installation. Pour un pavillon parisien moyen, comptez un budget global entre 800€ et 1500€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un tuyau flexible à haute pression. Commencez par retirer manuellement les débris, puis rincez avec un jet d&apos;eau. En cas de blocage persistant, faites appel à un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières au minimum deux fois par an : au printemps après la fonte des neiges et à l&apos;automne après la chute des feuilles. Dans un environnement parisien avec beaucoup de végétation, une intervention trimestrielle peut être nécessaire.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Paris 3e ?
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
