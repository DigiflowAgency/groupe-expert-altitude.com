import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Mérignac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Mérignac et ses environs. Spécialistes des travaux de toiture et de protectio',
  keywords: 'zinguerie mérignac, travaux zinguerie mérignac, toiture zinc mérignac, zingueur mérignac, reparation zinc mérignac, zinco reflect mérignac',
};

export default function ZinguerieMerignacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Mérignac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Mérignac et ses environs. Spécialistes des travaux de toiture et de protection contre l&apos;eau, nous intervenons avec précision et expertise pour tous vos projets de zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Mérignac</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;étanchéité de votre habitat. Notre équipe de professionnels maîtrise parfaitement les techniques de pose et de rénovation des systèmes de collecte et d&apos;évacuation des eaux. Nous utilisons uniquement des matériaux de haute qualité, garantissant une durabilité optimale de vos installations. Sur Mérignac, nous proposons des solutions sur-mesure adaptées à chaque configuration architecturale, qu&apos;il s&apos;agisse de gouttières, descentes d&apos;eau, bavettes ou habillages de cheminées. Notre approche technique permet de prévenir les infiltrations et de préserver l&apos;intégrité de votre patrimoine immobilier.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un service premium : 15 ans d&apos;expérience, une équipe certifiée, un diagnostic technique gratuit, des interventions rapides sur Mérignac, et des garanties décennales. Nous combinons expertise technique et satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;accessibilité. Un devis personnalisé permet de définir précisément le coût de votre projet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 70 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses et lichens. Un professionnel recommande un diagnostic tous les 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Mérignac ?
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
