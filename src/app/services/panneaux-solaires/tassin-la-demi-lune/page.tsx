import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Tassin-la-Demi-Lune en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en ins',
  keywords: 'panneaux solaires tassin-la-demi-lune, installation photovoltaique tassin-la-demi-lune, panneaux photovoltaiques tassin-la-demi-lune, installateur panneaux solaires tassin-la-demi-lune, pose panneaux solaires tassin-la-demi-lune, photovoltaique maison tassin-la-demi-lune',
};

export default function PanneauxSolairesTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Tassin-la-Demi-Lune en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous convertissons l&apos;énergie solaire en solution économique et durable pour votre foyer.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux exigences techniques les plus strictes, en proposant des solutions sur-mesure adaptées à chaque configuration de toiture. Nous réalisons une étude personnalisée précise, analysant l&apos;orientation, l&apos;inclinaison et les caractéristiques de votre habitat pour optimiser la production énergétique. Nos techniciens certifiés interviennent avec un matériel de dernière génération, garantissant un rendement énergétique pouvant atteindre jusqu&apos;à 22% de votre consommation électrique. Chaque installation est conçue pour maximiser vos économies et réduire votre empreinte carbone, tout en valorisant votre patrimoine immobilier à Tassin-la-Demi-Lune.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience en Auvergne-Rhône-Alpes
- Certifications RGE et qualifications professionnelles officielles
- Accompagnement complet : étude, financement, installation et suivi
- Matériel garanti 25 ans avec performances optimales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Nous proposons des financements adaptés avec des mensualités à partir de 150€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations administratives et la pose effective. Notre équipe optimise chaque étape pour une intervention rapide et professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat, ses références locales, demandez plusieurs devis comparatifs et assurez-vous de l&apos;accompagnement administratif complet pour les demandes de subventions et raccordement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Tassin-la-Demi-Lune ?
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
