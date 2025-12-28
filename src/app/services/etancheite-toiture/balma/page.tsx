import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Balma | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Balma et ses environs. Spécialistes reconnus dans l',
  keywords: 'etancheite toiture balma, etancheite toit terrasse balma, etancheite toiture terrasse balma, reparation etancheite balma, entreprise etancheite balma, fuite toiture terrasse balma',
};

export default function EtancheiteToitureBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Balma et ses environs. Spécialistes reconnus dans la protection de vos espaces, nous garantissons des solutions durables contre les infiltrations et les dégradations.</p>

        <h2>Nos services de étanchéité toiture terrasse a Balma</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences techniques les plus strictes. Nous intervenons sur tous types de surfaces, qu&apos;il s&apos;agisse de toitures résidentielles ou professionnelles à Balma. Notre approche commence par un diagnostic précis utilisant des technologies de détection infrarouge permettant de localiser les moindres points faibles. Nos techniciens qualifiés appliquent ensuite des membranes d&apos;étanchéité haute performance, adaptées à chaque configuration architecturale, avec une garantie décennale. Nos interventions permettent de protéger efficacement votre bâtiment contre l&apos;humidité, les risques de moisissures et les dégradations structurelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience
- Interventions rapides sur Balma et l&apos;agglomération toulousaine
- Matériaux de haute qualité garantis 10 ans
- Équipe de professionnels certifiés et formés en continu</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et le type de matériau. Pour une terrasse moyenne de 30m², comptez un investissement global entre 1500€ et 4500€. Un devis personnalisé gratuit vous permettra d&apos;avoir un chiffrage précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme des taches d&apos;humidité sur les plafonds, des infiltrations lors de fortes pluies, des zones de décoloration ou des moisissures. Nos experts utilisent des caméras thermiques et des tests d&apos;étanchéité pour identifier précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée dure entre 15 et 25 ans. La durée de vie dépend de la qualité des matériaux, de l&apos;installation et de l&apos;entretien régulier. Nos solutions utilisent des membranes synthétiques garantissant une protection optimale sur le long terme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Balma ?
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
