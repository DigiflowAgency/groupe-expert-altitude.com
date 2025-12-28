import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Le Cannet | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire zinguerie de référence sur Le Cannet et ses environs. Spécialistes des travaux de zinguerie, nous garantiss',
  keywords: 'zinguerie le cannet, travaux zinguerie le cannet, toiture zinc le cannet, zingueur le cannet, reparation zinc le cannet, zinco reflect le cannet',
};

export default function ZinguerieLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire zinguerie de référence sur Le Cannet et ses environs. Spécialistes des travaux de zinguerie, nous garantissons des solutions techniques durables pour protéger votre habitat contre les infiltrations et les dégradations.</p>

        <h2>Nos services de travaux de zinguerie a Le Cannet</h2>
        <div className="space-y-4">
          <p>Notre expertise en zinguerie couvre l&apos;intégralité des interventions techniques sur toiture et façades. Nous intervenons sur la pose, réparation et rénovation de tous systèmes de zinguerie, en utilisant des techniques et matériaux de haute qualité. Nos zingueurs professionnels maîtrisent parfaitement les techniques de mise en œuvre du zinc, notamment les systèmes Zinco Reflect qui offrent une excellente résistance aux intempéries. Chaque chantier sur Le Cannet fait l&apos;objet d&apos;un diagnostic précis, avec un devis détaillé et personnalisé, pour répondre spécifiquement aux contraintes de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Interventions rapides sur Le Cannet et département
- Matériaux premium et techniques innovantes
- Garantie décennale sur tous nos travaux de zinguerie</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Un diagnostic précis permettra de définir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc implique un nettoyage annuel, le contrôle des joints et raccords, et le traitement préventif contre les mousses et lichens. Un professionnel recommande une visite technique tous les 5 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Le Cannet ?
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
