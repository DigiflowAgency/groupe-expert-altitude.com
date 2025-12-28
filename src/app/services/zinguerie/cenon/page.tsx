import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Cenon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Cenon, spécialiste des travaux de toiture et de protection contre les intempéries.',
  keywords: 'zinguerie cenon, travaux zinguerie cenon, toiture zinc cenon, zingueur cenon, reparation zinc cenon, zinco reflect cenon',
};

export default function ZinguerieCenonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Cenon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Cenon, spécialiste des travaux de toiture et de protection contre les intempéries. Nous intervenons sur l&apos;ensemble du territoire girondin avec une expertise technique garantissant des solutions durables pour vos bâtiments.</p>

        <h2>Nos services de travaux de zinguerie a Cenon</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;étanchéité de votre habitat. Notre équipe de professionnels à Cenon maîtrise parfaitement les techniques de pose et de rénovation des éléments en zinc, depuis les gouttières jusqu&apos;aux habillages de toiture. Nous utilisons uniquement des matériaux de haute qualité, résistants à la corrosion et aux variations climatiques. Notre processus d&apos;intervention comprend un diagnostic précis, un devis détaillé et une réalisation méticuleuse, avec une attention particulière aux finitions. Nos techniciens sont formés aux dernières normes techniques et privilégient des solutions esthétiques et performantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans en zinguerie 2) Des interventions rapides et sur-mesure 3) Un engagement qualité garanti par nos certifications professionnelles 4) Un rapport qualité-prix optimal pour les habitants de Cenon et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, les matériaux utilisés et l&apos;accessibilité du chantier. Un diagnostic précis nous permet de vous proposer un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 100 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques locales à Cenon.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses et lichens. Nous recommandons un contrôle professionnel tous les 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Cenon ?
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
