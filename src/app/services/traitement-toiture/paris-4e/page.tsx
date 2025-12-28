import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Paris 4e | Groupe Expert Altitude Com',
  description: 'Dans le cœur historique de Paris 4e, Groupe Expert Altitude Com apporte une solution professionnelle pour protéger et valoriser votre toiture grâce à un tr',
  keywords: 'demoussage toiture paris 4e, traitement toiture paris 4e, nettoyage toiture paris 4e, antimousse toiture paris 4e, hydrofuge toiture paris 4e, entretien toiture paris 4e',
};

export default function TraitementToitureParis4ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Paris 4e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans le cœur historique de Paris 4e, Groupe Expert Altitude Com apporte une solution professionnelle pour protéger et valoriser votre toiture grâce à un traitement et démoussage expert. Nos interventions sur mesure garantissent la longévité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Paris 4e</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture représente bien plus qu&apos;un simple nettoyage. Nous intervenons avec une méthodologie précise qui préserve l&apos;intégrité de vos tuiles et ardoises. Notre équipe utilise des produits écologiques et haute performance qui éliminent durablement la mousse et les lichens. Chaque intervention commence par un diagnostic technique complet permettant d&apos;adapter notre traitement à la spécificité de votre toiture. Nous traitons ensuite les surfaces avec un antimousse professionnel qui agit en profondeur tout en protégeant les matériaux. Notre traitement hydrofuge final assure une protection contre l&apos;humidité et les intempéries pendant plusieurs années.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts certifiés intervenant sur Paris 4e depuis 15 ans
✓ Techniques innovantes respectueuses de l&apos;environnement
✓ Diagnostic gratuit avant intervention
✓ Garantie de résultat pendant 5 ans
✓ Devis personnalisé sous 48h
✓ Équipe de professionnels hautement qualifiés</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son accessibilité et son état. Pour une maison moyenne de 100m² à Paris 4e, comptez un budget global entre 1500€ et 3000€. Nous proposons systématiquement un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et septembre, période où les conditions météorologiques permettent un séchage optimal. Idéalement, réalisez ce traitement tous les 3 à 5 ans pour maintenir une protection efficace contre les développements biologiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après le démoussage, l&apos;application d&apos;un hydrofuge nécessite un nettoyage préalable parfait. Nous utilisons un rouleau ou un pulvérisateur professionnel pour appliquer le produit uniformément. Le séchage dure environ 24h et offre une protection contre l&apos;eau et les agressions extérieures pendant 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Paris 4e ?
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
