import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Caluire-et-Cuire et ses environs. Spécialistes reco',
  keywords: 'etancheite toiture caluire-et-cuire, etancheite toit terrasse caluire-et-cuire, etancheite toiture terrasse caluire-et-cuire, reparation etancheite caluire-et-cuire, entreprise etancheite caluire-et-cuire, fuite toiture terrasse caluire-et-cuire',
};

export default function EtancheiteToitureCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Caluire-et-Cuire et ses environs. Spécialistes reconnus, nous protégeons votre bâtiment contre les infiltrations d&apos;eau grâce à des solutions techniques sur-mesure.</p>

        <h2>Nos services de étanchéité toiture terrasse a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences les plus strictes de protection et de durabilité. Nous intervenons sur tous types de structures, qu&apos;il s&apos;agisse de bâtiments résidentiels, commerciaux ou industriels à Caluire-et-Cuire. Notre méthode commence par un diagnostic précis, utilisant des techniques de détection avancées pour identifier les zones fragilisées. Nous proposons ensuite un traitement personnalisé avec des membranes haute performance garantissant une imperméabilité totale. Notre approche technique permet de prévenir les risques d&apos;infiltration et de préserver la structure de votre toiture à long terme.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique de plus de 15 ans dans l&apos;étanchéité 
• Techniciens certifiés et formés aux dernières normes 
• Interventions rapides sur Caluire-et-Cuire et la métropole lyonnaise 
• Garantie décennale sur tous nos travaux 
• Devis gratuit et transparent</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et les matériaux choisis. Pour une terrasse moyenne de 30m², comptez un budget global entre 1500€ et 4500€. Un diagnostic précalable nous permet de vous proposer un devis détaillé et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes révélateurs d&apos;une fuite incluent des traces d&apos;humidité sur les plafonds, des auréoles, des moisissures, ou des écoulements visibles lors de fortes pluies. Un professionnel détecte ces infiltrations grâce à des tests d&apos;étanchéité, des caméras thermiques et une inspection méthodique de la surface.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend de plusieurs facteurs : qualité des matériaux, technique de pose, exposition aux intempéries et entretien régulier. Nos solutions intègrent des membranes garanties avec un suivi technique annuel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Caluire-et-Cuire ?
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
