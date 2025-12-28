import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Maisons-Alfort | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Maisons-Alfort et ses environs. Spécialistes des i',
  keywords: 'nettoyage vitres hauteur maisons-alfort, lavage vitres immeuble maisons-alfort, nettoyage facade vitree maisons-alfort, cordiste vitre maisons-alfort, entreprise nettoyage vitres maisons-alfort, nettoyage verriere maisons-alfort',
};

export default function NettoyageVitresHauteurMaisonsAlfortPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Maisons-Alfort</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Maisons-Alfort et ses environs. Spécialistes des interventions complexes, nous garantissons des surfaces vitrées impeccables, même dans les situations les plus délicates.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Maisons-Alfort</h2>
        <div className="space-y-4">
          <p>Nos experts en nettoyage de vitres en hauteur maîtrisent parfaitement les techniques de travail en cordage et en nacelle. Nous intervenons sur tous types de bâtiments - immeubles, bureaux, vérandas - avec un équipement de pointe et des méthodes respectueuses de l&apos;environnement. Nos techniciens hautement qualifiés utilisent des produits écologiques et des techniques innovantes qui permettent un nettoyage sans traces, tout en préservant l&apos;intégrité des surfaces vitrées. Chaque intervention est précédée d&apos;un diagnostic technique précis pour garantir une prestation sur-mesure et sécurisée.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique unique, notre certification en travaux en hauteur, et notre engagement qualité. 98% de nos clients nous recommandent, grâce à notre professionnalisme et notre attention aux détails. Notre équipe dispose de plus de 15 ans d&apos;expérience sur Maisons-Alfort et la région parisienne.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ au m², selon la difficulté d&apos;accès, la hauteur et la surface totale. Un devis personnalisé gratuit vous permettra d&apos;obtenir un tarif précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 nettoyages par an, selon l&apos;exposition du bâtiment. Les façades exposées à la pollution ou aux intempéries nécessitent un entretien plus régulier pour maintenir une apparence impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens utilisent un équipement de sécurité complet : harnais anti-chute, points d&apos;ancrage certifiés, cordes spécialisées et formations CACES. Chaque intervention respecte strictement les normes de sécurité en vigueur pour garantir zéro risque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Maisons-Alfort ?
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
