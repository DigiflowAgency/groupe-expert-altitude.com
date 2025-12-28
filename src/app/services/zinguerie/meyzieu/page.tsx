import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Meyzieu | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en zinguerie sur Meyzieu et ses environs. Spécialistes des travaux de toiture et de protection',
  keywords: 'zinguerie meyzieu, travaux zinguerie meyzieu, toiture zinc meyzieu, zingueur meyzieu, reparation zinc meyzieu, zinco reflect meyzieu',
};

export default function ZinguerieMeyzieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Meyzieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en zinguerie sur Meyzieu et ses environs. Spécialistes des travaux de toiture et de protection contre l&apos;eau, nous intervenons avec précision pour tous vos projets de zinguerie dans l&apos;agglomération lyonnaise.</p>

        <h2>Nos services de travaux de zinguerie a Meyzieu</h2>
        <div className="space-y-4">
          <p>La zinguerie constitue un élément essentiel de la protection et de l&apos;esthétique de votre habitat. Notre expertise couvre l&apos;installation, la rénovation et la réparation de systèmes de zinguerie pour les particuliers et professionnels de Meyzieu. Nos techniciens qualifiés utilisent des techniques modernes et des matériaux haute qualité comme le zinc Zinco Reflect, garantissant une durabilité exceptionnelle. Chaque intervention est précédée d&apos;un diagnostic technique précis, permettant une solution sur-mesure adaptée à la configuration spécifique de votre toiture. Notre approche combine technicité et souci du détail pour des réalisations durables et esthétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de zingueurs certifiés avec plus de 15 ans d&apos;expérience
- Interventions rapides et devis gratuits sous 48h
- Matériaux de haute qualité et techniques innovantes
- Garantie décennale sur tous nos travaux de zinguerie</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Un diagnostic précis nous permet de vous proposer un devis personnalisé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 100 ans. Sa durée de vie dépend de la qualité de la pose, de l&apos;exposition aux intempéries et de la maintenance régulière.
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
          Vous avez un projet de travaux de zinguerie a Meyzieu ?
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
