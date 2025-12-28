import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a L\'Union | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne la transition énergétique à L&apos;Union avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur-mesu',
  keywords: 'panneaux solaires l'union, installation photovoltaique l'union, panneaux photovoltaiques l'union, installateur panneaux solaires l'union, pose panneaux solaires l'union, photovoltaique maison l'union',
};

export default function PanneauxSolairesLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne la transition énergétique à L&apos;Union avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur-mesure. Nos experts transforment votre toiture en une source d&apos;énergie propre et économique, adaptée aux besoins spécifiques des habitants de la région.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a L'Union</h2>
        <div className="space-y-4">
          <p>Nos installations photovoltaïques représentent bien plus qu&apos;un simple équipement : c&apos;est un investissement intelligent pour votre patrimoine. Nous proposons des systèmes clés en main, parfaitement intégrés à l&apos;architecture de votre maison à L&apos;Union. Notre processus commence par un diagnostic technique précis, évaluant l&apos;orientation, l&apos;inclinaison et la surface de votre toiture pour optimiser la production énergétique. Nos panneaux haute performance permettent de produire jusqu&apos;à 4000 kWh par an, couvrant en moyenne 60% des besoins électriques d&apos;un foyer standard. Nous garantissons une installation professionnelle, esthétique et durable, avec des équipements bénéficiant de 25 ans de garantie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous maîtrisons tous les aspects techniques de l&apos;installation photovoltaïque. Notre équipe locale intervient rapidement sur L&apos;Union et ses environs. Nous proposons un accompagnement complet : étude personnalisée, financement, démarches administratives et raccordement. Notre taux de satisfaction client dépasse 95%, grâce à notre expertise et notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec des aides de l&apos;État pouvant atteindre 5 000€. Un retour sur investissement est généralement constaté entre 8 et 12 ans, grâce aux économies sur les factures d&apos;électricité et aux revenus de la revente d&apos;électricité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations et la pose effective. La pose des panneaux elle-même ne durant que 1 à 2 jours, selon la configuration de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un installateur RGE doit impérativement posséder la qualification Qualibat 5919 ou Qualipv. Vérifiez sa certification sur le site officiel, demandez ses références locales et exigez un devis détaillé avec les caractéristiques techniques précises des équipements proposés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a L'Union ?
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
