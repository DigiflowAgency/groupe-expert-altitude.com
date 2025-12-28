import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Saint-Denis | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Saint-Denis en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installatio',
  keywords: 'panneaux solaires saint-denis, installation photovoltaique saint-denis, panneaux photovoltaiques saint-denis, installateur panneaux solaires saint-denis, pose panneaux solaires saint-denis, photovoltaique maison saint-denis',
};

export default function PanneauxSolairesSaintDenisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Saint-Denis</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Saint-Denis en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure pour valoriser votre patrimoine et réduire significativement votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Saint-Denis</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux besoins énergétiques croissants des habitants de Saint-Denis et ses environs. Nous proposons une approche complète, depuis l&apos;étude technique personnalisée jusqu&apos;à la mise en service de votre système. Nos techniciens certifiés réalisent un diagnostic précis de votre toiture, évaluent son potentiel solaire et dimensionnent l&apos;installation optimale. Chaque projet est unique : nous sélectionnons des panneaux haute performance garantissant jusqu&apos;à 30% d&apos;économies sur vos factures énergétiques. Notre process intègre les dernières innovations technologiques pour maximiser votre production électrique et minimiser votre dépendance au réseau.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Installateurs RGE certifiés avec plus de 10 ans d&apos;expérience
✓ Matériels de haute qualité avec garanties constructeurs étendues
✓ Accompagnement administratif complet (aides, déclarations)
✓ Devis personnalisé et transparent sans frais cachés
✓ Support technique local et réactivité garantie</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides publiques pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un retour sur investissement estimé entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement de 4 à 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose effective. Notre équipe à Saint-Denis optimise chaque étape pour une intervention rapide et professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIPV, consultez ses références locales, demandez plusieurs devis comparatifs et assurez-vous de la présence d&apos;une garantie décennale. Nos experts sont systématiquement accrédités et régulièrement formés aux nouvelles normes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Saint-Denis ?
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
