import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Villenave-d&apos;Ornon, spécialiste des travaux de toiture et de protection contre l',
  keywords: 'zinguerie villenave-d'ornon, travaux zinguerie villenave-d'ornon, toiture zinc villenave-d'ornon, zingueur villenave-d'ornon, reparation zinc villenave-d'ornon, zinco reflect villenave-d'ornon',
};

export default function ZinguerieVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Villenave-d&apos;Ornon, spécialiste des travaux de toiture et de protection contre les intempéries. Forts de plus de 15 ans d&apos;expertise, nous intervenons sur tous types de chantiers de zinguerie avec une précision et un professionnalisme reconnus dans toute la métropole bordelaise.</p>

        <h2>Nos services de travaux de zinguerie a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Notre service de zinguerie répond aux exigences les plus techniques de protection et d&apos;étanchéité des toitures. Nous réalisons des interventions complètes, depuis le diagnostic initial jusqu&apos;à la pose finale, en utilisant uniquement des matériaux de haute qualité comme le zinc Quartz-Zinc® et le zinco-reflect. Notre équipe maîtrise parfaitement les techniques de façonnage, de soudure et de pose, garantissant une étanchéité optimale et une durabilité exceptionnelle. À Villenave-d&apos;Ornon, nous adaptons chaque intervention aux spécificités architecturales locales, qu&apos;il s&apos;agisse de rénovations de bâtiments anciens ou d&apos;installations contemporaines.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Une expertise technique certifiée avec plus de 250 chantiers réalisés
- Devis gratuit et personnalisé sous 48h
- Équipe de zingueurs hautement qualifiés et formés aux dernières normes
- Matériaux premium et techniques d&apos;installation innovantes
- Intervention rapide et professionnelle sur Villenave-d&apos;Ornon et ses environs</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 150€ au m², selon la complexité du chantier, l&apos;accessibilité, et les matériaux utilisés. Chez Groupe Expert Altitude Com, nous proposons des devis détaillés sans surprise, avec un rapport qualité-prix optimal.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Notre garantie décennale et nos techniques de pose professionnelles assurent une longévité maximale de vos installations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des systèmes de drainage. Nous proposons des contrats de maintenance préventive pour prolonger la durée de vie de vos installations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Villenave-d'Ornon ?
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
