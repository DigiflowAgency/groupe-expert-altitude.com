import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Villejuif | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Villejuif et dans toute la région parisienne. Spécialistes',
  keywords: 'etancheite toiture villejuif, etancheite toit terrasse villejuif, etancheite toiture terrasse villejuif, reparation etancheite villejuif, entreprise etancheite villejuif, fuite toiture terrasse villejuif',
};

export default function EtancheiteToitureVillejuifPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Villejuif</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Villejuif et dans toute la région parisienne. Spécialistes des solutions durables, nous protégeons efficacement vos bâtiments contre les infiltrations et les dégradations climatiques.</p>

        <h2>Nos services de étanchéité toiture terrasse a Villejuif</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences techniques les plus strictes, garantissant une protection maximale contre les infiltrations d&apos;eau. Notre équipe qualifiée intervient sur tous types de structures à Villejuif, qu&apos;il s&apos;agisse de bâtiments résidentiels, commerciaux ou industriels. Nous utilisons des membranes d&apos;étanchéité haute performance, posées selon les normes DTU, qui offrent une résistance exceptionnelle aux contraintes météorologiques. Notre processus comprend un diagnostic précis, la préparation du support, l&apos;application de primaires d&apos;accrochage et la pose de systèmes d&apos;étanchéité adaptés à chaque configuration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos interventions bénéficient de 15 ans d&apos;expertise, d&apos;un personnel certifié et d&apos;équipements professionnels de dernière génération. Nous proposons des garanties décennales, un diagnostic gratuit et un accompagnement personnalisé. Notre taux de satisfaction client dépasse 95% sur les chantiers d&apos;étanchéité de toiture terrasse.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité technique et les matériaux utilisés. Pour un projet moyen de 50m², comptez un investissement global entre 4 000€ et 12 500€. Un diagnostic précis permettra d&apos;établir un devis personnalisé adapté à votre situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : infiltrations intérieures, traces d&apos;humidité sur les plafonds, décoloration des murs, moisissures ou boursoufflures. Des tests d&apos;étanchéité professionnels avec caméra thermique permettent de localiser précisément les zones problématiques sans travaux invasifs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans, selon la qualité des matériaux, la pose et l&apos;entretien régulier. Les membranes synthétiques modernes comme l&apos;EPDM ou le TPO offrent une durabilité optimale. Un contrôle annuel et des petites réparations préventives prolongent significativement la durée de vie de votre étanchéité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Villejuif ?
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
