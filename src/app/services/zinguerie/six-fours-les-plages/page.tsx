import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Six-Fours-les-Plages | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Six-Fours-les-Plages et ses environs. Spécialistes des travaux de toiture et ',
  keywords: 'zinguerie six-fours-les-plages, travaux zinguerie six-fours-les-plages, toiture zinc six-fours-les-plages, zingueur six-fours-les-plages, reparation zinc six-fours-les-plages, zinco reflect six-fours-les-plages',
};

export default function ZinguerieSixFoursLesPlagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Six-Fours-les-Plages</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Six-Fours-les-Plages et ses environs. Spécialistes des travaux de toiture et de protection contre les intempéries, nous intervenons avec précision et expertise pour tous vos projets de zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Six-Fours-les-Plages</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation et la longévité de votre habitat. Nos interventions couvrent l&apos;installation, la rénovation et la réparation de systèmes de zinguerie, en utilisant des techniques et matériaux de haute qualité. Nos zingueurs professionnels maîtrisent parfaitement les techniques de pose de zinc, garantissant une étanchéité optimale et une résistance aux conditions climatiques variées. Nous réalisons des travaux sur mesure, adaptés à chaque configuration architecturale, en privilégiant des solutions durables et esthétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre entreprise se distingue par son expertise technique, son engagement qualité et sa connaissance approfondie des spécificités locales à Six-Fours-les-Plages. Nous proposons des interventions rapides, un diagnostic précis, des devis transparents et une garantie décennale. Notre équipe certifiée utilise un matériel professionnel et des techniques innovantes pour des résultats irréprochables.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, l&apos;accessibilité et les matériaux utilisés. Un diagnostic gratuit nous permet de vous proposer un devis personnalisé et précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques locales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des fixations. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir sa longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Six-Fours-les-Plages ?
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
