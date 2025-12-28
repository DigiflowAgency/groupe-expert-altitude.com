import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Paris 6e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence dans le 6e arrondissement parisien, spécialisé dans les travaux de toiture et rén',
  keywords: 'zinguerie paris 6e, travaux zinguerie paris 6e, toiture zinc paris 6e, zingueur paris 6e, reparation zinc paris 6e, zinco reflect paris 6e',
};

export default function ZinguerieParis6ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Paris 6e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence dans le 6e arrondissement parisien, spécialisé dans les travaux de toiture et rénovation de systèmes d&apos;évacuation. Avec plus de 15 ans d&apos;expertise, nous garantissons des solutions techniques précises adaptées à l&apos;architecture historique de Paris.</p>

        <h2>Nos services de travaux de zinguerie a Paris 6e</h2>
        <div className="space-y-4">
          <p>Nos prestations de zinguerie couvrent l&apos;intégralité des besoins techniques pour les immeubles parisiens, depuis les gouttières jusqu&apos;aux habillages de toiture. Notre équipe maîtrise parfaitement les techniques de pose et de rénovation du zinc, en respectant les normes architecturales spécifiques au 6e arrondissement. Nous utilisons uniquement des matériaux haute qualité comme le zinc Quartz-Zinc® et le zinc Vmzinc®, offrant une durabilité et une résistance optimales contre les conditions climatiques parisiennes. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention sur-mesure, avec une attention méticuleuse aux détails.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise technique certifiée avec plus de 250 chantiers réalisés à Paris
✓ Équipe de zingueurs hautement qualifiés et formés aux techniques spécifiques
✓ Garantie décennale et assurances professionnelles complètes
✓ Interventions rapides et adaptées aux contraintes parisiennes
✓ Devis gratuit et transparent sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 80€ et 250€ au m², selon la complexité des travaux. Pour le 6e arrondissement, notre moyenne se situe autour de 120€/m², incluant matériaux et main-d&apos;œuvre. Un chiffrage précis nécessite un diagnostic sur place.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Les systèmes modernes en zinc naturel ou prépatine atteignent facilement 70 ans de durée de vie, avec un entretien régulier et professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture zinc implique un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des systèmes d&apos;évacuation. Nous recommandons une inspection professionnelle tous les 5-7 ans pour prévenir tout risque de détérioration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Paris 6e ?
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
