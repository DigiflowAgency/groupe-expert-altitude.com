import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Paris 4e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales au cœur de Paris 4e. Spécialistes d',
  keywords: 'gouttiere paris 4e, pose gouttiere paris 4e, reparation gouttiere paris 4e, nettoyage gouttiere paris 4e, descente pluviale paris 4e, gouttiere bouchee paris 4e',
};

export default function GouttiereParis4ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Paris 4e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales au cœur de Paris 4e. Spécialistes de la protection de votre habitat contre les intempéries, nous intervenons rapidement et efficacement dans tout l&apos;arrondissement.</p>

        <h2>Nos services de gouttières et descentes pluviales a Paris 4e</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires parisiens : installation, réparation, nettoyage et entretien. Nous utilisons uniquement des matériaux haut de gamme résistant aux conditions climatiques spécifiques de Paris, garantissant une durabilité maximale. Notre équipe technique réalise un diagnostic précis avant toute intervention, évaluant l&apos;état de vos descentes pluviales et proposant des solutions sur-mesure. Nous travaillons avec des matériaux comme l&apos;aluminium, le zinc et le PVC, adaptés aux architectures traditionnelles et contemporaines du 4e arrondissement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique de plus de 15 ans dans le traitement des gouttières parisiennes
- Intervention rapide sous 48h dans Paris 4e
- Devis gratuit et transparent sans engagement
- Techniciens certifiés et équipements professionnels de dernière génération</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 50€ et 120€ au mètre linéaire selon le matériau et la complexité. Pour un pavillon parisien typique, comptez un budget global entre 800€ et 2500€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un décapeur haute pression, un furet de plomberie ou un aspirateur industriel. Portez des gants, retirez les feuilles et débris manuellement avant de procéder au nettoyage. En cas de difficulté, faites appel à un professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages par an : au printemps et à l&apos;automne. Dans l&apos;environnement parisien dense, avec de nombreux arbres, un nettoyage tous les 6 mois est idéal pour prévenir les obstructions et les dégradations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Paris 4e ?
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
