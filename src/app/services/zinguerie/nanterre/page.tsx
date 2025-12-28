import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Nanterre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Nanterre et ses environs. Spécialistes des travaux de toiture et de protectio',
  keywords: 'zinguerie nanterre, travaux zinguerie nanterre, toiture zinc nanterre, zingueur nanterre, reparation zinc nanterre, zinco reflect nanterre',
};

export default function ZinguerieNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Nanterre et ses environs. Spécialistes des travaux de toiture et de protection contre les infiltrations, nous intervenons avec précision et expertise pour sécuriser votre patrimoine immobilier.</p>

        <h2>Nos services de travaux de zinguerie a Nanterre</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection de votre habitat contre les risques d&apos;infiltration et de dégradation. Notre équipe de professionnels à Nanterre réalise des interventions complètes, depuis le diagnostic jusqu&apos;à la pose de systèmes de zinguerie sur mesure. Nous travaillons avec des matériaux haute qualité comme le zinc Zinco Reflect, garantissant une durabilité exceptionnelle et une esthétique moderne. Nos techniciens maîtrisent les techniques de raccordement, de découpe et de soudure, assurant une étanchéité parfaite de vos gouttières, chéneaux et habillages de toiture. Chaque intervention fait l&apos;objet d&apos;un diagnostic précis et d&apos;un devis détaillé, avec une attention constante à la performance technique et à l&apos;efficacité énergétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : une expertise de plus de 15 ans, une équipe certifiée, un stock de matériaux premium, des interventions rapides sur Nanterre, un engagement qualité avec garantie décennale. Nous proposons des solutions personnalisées, un conseil technique gratuit et une réactivité qui fait notre réputation. Notre taux de satisfaction client dépasse les 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la toiture. Un diagnostic précis permettra de définir un devis personnalisé adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc de qualité, correctement posée et entretenue, peut durer entre 50 et 80 ans. Sa durée de vie dépend de plusieurs facteurs : qualité de la pose, exposition aux intempéries, entretien régulier et épaisseur du zinc utilisé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le contrôle de l&apos;état général. Nous recommandons une inspection professionnelle tous les 5 ans pour garantir sa longévité et ses performances.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Nanterre ?
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
