import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Paris 8e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales sur Paris 8e, protège efficacement votre habitat contre les risques d&apos;in',
  keywords: 'gouttiere paris 8e, pose gouttiere paris 8e, reparation gouttiere paris 8e, nettoyage gouttiere paris 8e, descente pluviale paris 8e, gouttiere bouchee paris 8e',
};

export default function GouttiereParis8ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Paris 8e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales sur Paris 8e, protège efficacement votre habitat contre les risques d&apos;infiltration. Nous intervenons rapidement pour garantir la performance et la durabilité de vos systèmes d&apos;évacuation des eaux pluviales.</p>

        <h2>Nos services de gouttières et descentes pluviales a Paris 8e</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières proposent une solution complète adaptée à chaque configuration architecturale parisienne. Nous réalisons la pose, la réparation et l&apos;entretien de vos descentes pluviales avec une précision technique garantie. Notre approche sur mesure intègre un diagnostic préalable, le choix de matériaux résistants (zinc, aluminium, PVC) et une installation respectant les normes techniques. Pour les immeubles du 8e arrondissement, nous tenons compte des spécificités patrimoniales et esthétiques, assurant une intervention discrète et efficace.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience à Paris
- Intervention rapide sous 48h dans le 8e arrondissement
- Devis gratuit et transparent sans engagement
- Techniciens hautement qualifiés et assurés</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon le matériau et la complexité d&apos;installation. Pour un pavillon parisien moyen, comptez entre 500€ et 1500€ pour une installation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, nettoyez avec un jet haute pression, retirez manuellement les débris végétaux. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons 2 nettoyages par an : au printemps et à l&apos;automne. Pour les zones très arborées de Paris 8e, un nettoyage supplémentaire peut être nécessaire, idéalement en novembre avant l&apos;hiver.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Paris 8e ?
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
