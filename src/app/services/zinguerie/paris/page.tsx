import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Paris | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des travaux de zinguerie de haute qualité à Paris et en région parisienne. Spécialiste',
  keywords: 'zinguerie paris, travaux zinguerie paris, toiture zinc paris, zingueur paris, reparation zinc paris, zinco reflect paris',
};

export default function ZinguerieParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des travaux de zinguerie de haute qualité à Paris et en région parisienne. Spécialistes de la toiture zinc, nous intervenons avec précision et expertise sur l&apos;ensemble de vos projets de rénovation et de protection.</p>

        <h2>Nos services de travaux de zinguerie a Paris</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément essentiel de la protection et de l&apos;étanchéité de votre toiture. Notre équipe de professionnels maîtrise parfaitement les techniques de pose, de réparation et d&apos;installation de systèmes de zinguerie. Nous utilisons uniquement des matériaux de haute qualité, garantissant une durabilité exceptionnelle et une résistance optimale aux conditions climatiques parisiennes. Notre processus complet comprend un diagnostic précis, une préparation méticuleuse et une installation selon les normes techniques les plus exigeantes. Chaque intervention est personnalisée, qu&apos;il s&apos;agisse de gouttières, de raccords, ou de travaux complexes de toiture zinc.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience à Paris
- Équipe de zingueurs hautement qualifiés et formés en continu
- Devis gratuit et transparent sans engagement
- Matériaux premium et techniques d&apos;installation innovantes
- Intervention rapide sur l&apos;ensemble de la région parisienne</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 150€ au m², selon la complexité des travaux, les matériaux utilisés et l&apos;état initial de la toiture. Un diagnostic précis nous permet de vous proposer un devis détaillé et personnalisé, sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie exceptionnelle dépend de la qualité des matériaux, de la pose et de l&apos;entretien régulier. Le zinc offre une résistance remarquable à la corrosion et aux variations climatiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, le contrôle des joints et des raccords, et l&apos;élimination des débris. Nous recommandons une inspection professionnelle tous les 5-7 ans pour garantir l&apos;intégrité et la longévité de votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Paris ?
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
