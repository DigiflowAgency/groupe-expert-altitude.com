import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Menton | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Menton, spécialisé dans les travaux de toiture et de protection contre l&apos;humidité.',
  keywords: 'zinguerie menton, travaux zinguerie menton, toiture zinc menton, zingueur menton, reparation zinc menton, zinco reflect menton',
};

export default function ZinguerieMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Menton, spécialisé dans les travaux de toiture et de protection contre l&apos;humidité. Nos experts interviennent sur l&apos;ensemble des Alpes-Maritimes pour des solutions sur-mesure en zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Menton</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial de la protection de votre habitat contre les infiltrations et les dégradations. Notre équipe maîtrise parfaitement les techniques de pose et de rénovation des éléments en zinc, garantissant une étanchéité optimale. Nous intervenons sur tous types de structures à Menton : habitations individuelles, immeubles, bâtiments commerciaux et industriels. Nos zingueurs professionnels utilisent des techniques précises et des matériaux haute qualité, avec une attention particulière aux spécificités architecturales méditerranéennes. Chaque intervention fait l&apos;objet d&apos;un diagnostic technique précis et d&apos;une solution personnalisée.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Menton
- Équipe de 8 zingueurs certifiés
- Devis gratuit sous 48h
- Matériaux garantis 10 ans
- Interventions rapides et professionnelles
- Respect des normes techniques et environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Notre entreprise propose des devis transparents et détaillés, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques locales de Menton.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des fixations. Nous recommandons une inspection professionnelle tous les 5 ans pour garantir sa longévité et son étanchéité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Menton ?
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
