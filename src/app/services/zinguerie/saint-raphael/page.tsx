import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour des travaux de zinguerie de haute qualité à Saint-Raphaël et ses environs. Spécialiste',
  keywords: 'zinguerie saint-raphaël, travaux zinguerie saint-raphaël, toiture zinc saint-raphaël, zingueur saint-raphaël, reparation zinc saint-raphaël, zinco reflect saint-raphaël',
};

export default function ZinguerieSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour des travaux de zinguerie de haute qualité à Saint-Raphaël et ses environs. Spécialistes du zinc depuis plus de 15 ans, nous garantissons des solutions durables et esthétiques pour protéger votre toiture dans le var.</p>

        <h2>Nos services de travaux de zinguerie a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie représentent bien plus qu&apos;une simple intervention technique. Nous intervenons sur l&apos;ensemble des ouvrages en zinc : gouttières, descentes d&apos;eau, bavettes, habillages de cheminées et toitures. Notre expertise technique nous permet de réaliser des installations parfaitement étanches, résistant aux conditions climatiques méditerranéennes de Saint-Raphaël. Chaque intervention commence par un diagnostic précis, permettant d&apos;identifier les besoins spécifiques de votre bâtiment. Nous utilisons uniquement des matériaux de première qualité, garantissant une durabilité exceptionnelle et une résistance aux agressions extérieures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence en zinguerie. Nos techniciens sont certifiés et formés aux dernières techniques. Nous proposons des devis transparents sans surprise, un délai d&apos;intervention rapide de 72h et une garantie décennale. Notre approche sur-mesure s&apos;adapte à chaque configuration architecturale, avec un engagement qualité total.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture moyenne à Saint-Raphaël, comptez environ 80€/m² incluant matériaux et main-d&apos;œuvre. Un diagnostic préalable gratuit permet d&apos;affiner ce prix.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose, de l&apos;épaisseur du zinc (généralement entre 0,7 et 1,2 mm) et de l&apos;environnement climatique local.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le contrôle de l&apos;état général. Nous recommandons une inspection professionnelle tous les 5-7 ans pour garantir sa longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Saint-Raphaël ?
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
