import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Antibes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence sur Antibes, spécialiste des travaux de toiture et de protection contre l&apos;humidit',
  keywords: 'zinguerie antibes, travaux zinguerie antibes, toiture zinc antibes, zingueur antibes, reparation zinc antibes, zinco reflect antibes',
};

export default function ZinguerieAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence sur Antibes, spécialiste des travaux de toiture et de protection contre l&apos;humidité. Nous intervenons avec précision sur l&apos;ensemble du département des Alpes-Maritimes pour des solutions techniques durables.</p>

        <h2>Nos services de travaux de zinguerie a Antibes</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie représentent bien plus qu&apos;une simple intervention technique : c&apos;est une expertise complète de protection de votre habitat. Nous réalisons des travaux sur mesure, en utilisant des techniques et matériaux de haute qualité, garantissant une étanchéité optimale et une durabilité exceptionnelle. Notre équipe maîtrise parfaitement les techniques de pose de zinc, gouttières, descentes et habillages, en respectant les normes techniques les plus exigeantes. Chaque intervention à Antibes est précédée d&apos;un diagnostic précis, permettant une solution sur-mesure adaptée à la configuration spécifique de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre approche : 15 ans d&apos;expérience, une équipe certifiée, un devis gratuit sous 48h, des matériaux premium, et une garantie décennale. Nous intervenons rapidement, avec un taux de satisfaction client de 98% et des délais d&apos;intervention courts. Nos zingueurs sont formés aux dernières technologies et techniques de protection.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour Antibes, notre moyenne se situe autour de 80€/m², incluant matériaux et main-d&apos;œuvre. Un diagnostic précis permettra un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 100 ans. Sa durée de vie dépend de la qualité de la pose, de l&apos;environnement et de l&apos;entretien régulier. Nos réalisations bénéficient d&apos;une garantie décennale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre la corrosion. Nous proposons des contrats d&apos;entretien spécifiques pour maintenir votre toiture en parfait état.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Antibes ?
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
