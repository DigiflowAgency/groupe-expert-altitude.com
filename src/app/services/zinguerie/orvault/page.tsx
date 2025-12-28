import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Orvault | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Orvault, spécialiste des travaux de toiture et de protection contre les infiltrati',
  keywords: 'zinguerie orvault, travaux zinguerie orvault, toiture zinc orvault, zingueur orvault, reparation zinc orvault, zinco reflect orvault',
};

export default function ZinguerieOrvaultPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Orvault</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Orvault, spécialiste des travaux de toiture et de protection contre les infiltrations. Nous intervenons sur l&apos;ensemble des chantiers de zinguerie avec une expertise technique et un engagement de qualité pour tous vos projets.</p>

        <h2>Nos services de travaux de zinguerie a Orvault</h2>
        <div className="space-y-4">
          <p>La zinguerie constitue un élément essentiel de la protection et de l&apos;étanchéité de votre habitat. Notre équipe de professionnels réalise des interventions complètes, depuis le diagnostic jusqu&apos;à la pose de systèmes de zinguerie sur mesure. Nous travaillons avec des matériaux haut de gamme comme le zinc Quartz-Zinc, garantissant une durabilité exceptionnelle et une résistance aux conditions climatiques d&apos;Orvault et sa région. Nos techniciens maîtrisent parfaitement les techniques de raccordement, de soudure et d&apos;installation, assurant une étanchéité optimale et une esthétique irréprochable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience
- Devis gratuit et personnalisé sous 48h
- Interventions rapides sur Orvault et son agglomération
- Matériaux de haute qualité et normes environnementales respectées
- Équipe de zingueurs certifiés et formés en continu</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de votre toiture. Un diagnostic précis nous permet de vous proposer un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie exceptionnelle dépend de la qualité de la pose, de l&apos;exposition et de l&apos;entretien régulier. Le zinc possède une grande résistance à la corrosion et aux intempéries.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;état des joints et des raccords. Nous recommandons une inspection professionnelle tous les 5-7 ans pour garantir sa longévité et ses performances.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Orvault ?
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
