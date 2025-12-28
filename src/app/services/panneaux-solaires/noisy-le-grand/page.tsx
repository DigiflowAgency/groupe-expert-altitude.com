import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Noisy-le-Grand | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Noisy-le-Grand en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installa',
  keywords: 'panneaux solaires noisy-le-grand, installation photovoltaique noisy-le-grand, panneaux photovoltaiques noisy-le-grand, installateur panneaux solaires noisy-le-grand, pose panneaux solaires noisy-le-grand, photovoltaique maison noisy-le-grand',
};

export default function PanneauxSolairesNoisyLeGrandPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Noisy-le-Grand</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Noisy-le-Grand en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure pour valoriser votre patrimoine et réduire significativement votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Noisy-le-Grand</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque accompagnent chaque projet résidentiel avec une approche technique et personnalisée. Nous réalisons un diagnostic précis de votre toiture, évaluons votre potentiel énergétique et proposons des systèmes adaptés à vos besoins spécifiques. Notre processus comprend une étude technique gratuite, un dimensionnement optimal des panneaux et une installation réalisée par des techniciens certifiés. Avec un rendement moyen de 85% sur 25 ans, nos solutions permettent de produire jusqu&apos;à 70% de votre consommation électrique en autoconsommation, tout en bénéficiant de généreux dispositifs de subventions et de revente d&apos;électricité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique : des installateurs RGE certifiés, un accompagnement administratif complet, des matériels garantis 25 ans, et une expertise locale parfaitement adaptée aux spécificités de Noisy-le-Grand. Nous proposons des solutions clés en main qui maximisent votre retour sur investissement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 8 000€ et 15 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3 kWc pour une maison moyenne coûte environ 9 500€, mais permet des économies de 250€ à 500€ par an sur les factures d&apos;électricité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose. La phase d&apos;installation concrète sur site dure en moyenne 2 à 3 jours pour une maison individuelle à Noisy-le-Grand.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement : son numéro de certification Qualibat, son expérience documentée, les avis clients, la qualité des matériels proposés et la présence de garanties décennales. Un bon installateur propose systématiquement une étude personnalisée gratuite et transparente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Noisy-le-Grand ?
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
