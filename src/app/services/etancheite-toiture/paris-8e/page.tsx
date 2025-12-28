import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Paris 8e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en étanchéité de toiture terrasse sur Paris 8e, garantissant une protection optimale contre les ',
  keywords: 'etancheite toiture paris 8e, etancheite toit terrasse paris 8e, etancheite toiture terrasse paris 8e, reparation etancheite paris 8e, entreprise etancheite paris 8e, fuite toiture terrasse paris 8e',
};

export default function EtancheiteToitureParis8ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Paris 8e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en étanchéité de toiture terrasse sur Paris 8e, garantissant une protection optimale contre les infiltrations et les dégradations. Nous intervenons rapidement pour sécuriser et préserver la structure de votre bâtiment avec une expertise technique reconnue.</p>

        <h2>Nos services de étanchéité toiture terrasse a Paris 8e</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente une solution complète et sur-mesure pour protéger efficacement vos infrastructures. Nos techniciens hautement qualifiés réalisent un diagnostic précis avant d&apos;appliquer des membranes d&apos;étanchéité de dernière génération, adaptées à chaque configuration. Nous utilisons des techniques innovantes comme les résines liquides polymères ou les systèmes d&apos;étanchéité auto-protégés, assurant une protection durable contre les infiltrations. Notre processus inclut un contrôle approfondi de l&apos;état existant, une préparation méticuleuse des surfaces et une application professionnelle garantissant une imperméabilité totale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans sur Paris 8e, 2) Des techniciens certifiés et formés aux dernières technologies, 3) Un diagnostic gratuit précis avant intervention, 4) Des solutions personnalisées avec une garantie décennale. Nous intervenons rapidement et efficacement pour résoudre vos problématiques d&apos;étanchéité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la complexité, les matériaux et la surface. Pour un toit terrasse moyen de 50m², comptez un investissement global entre 4 000€ et 12 500€. Un diagnostic précalable permet d&apos;obtenir un devis détaillé et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, zones de décoloration, moisissures, ou boursoufflures sur la membrane. Un professionnel utilisera des techniques comme la thermographie ou des tests d&apos;étanchéité pour identifier précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée oscille entre 15 et 25 ans. Les facteurs déterminants sont la qualité des matériaux, la pose, l&apos;entretien régulier et l&apos;exposition aux conditions climatiques. Un suivi annuel et des réparations ponctuelles peuvent significativement prolonger cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Paris 8e ?
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
