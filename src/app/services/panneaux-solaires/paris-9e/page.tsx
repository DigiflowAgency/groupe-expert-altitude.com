import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Paris 9e | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat parisien en une source d&apos;énergie propre et économique avec Groupe Expert Altitude Com, votre spécialiste en installation de panne',
  keywords: 'panneaux solaires paris 9e, installation photovoltaique paris 9e, panneaux photovoltaiques paris 9e, installateur panneaux solaires paris 9e, pose panneaux solaires paris 9e, photovoltaique maison paris 9e',
};

export default function PanneauxSolairesParis9ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Paris 9e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat parisien en une source d&apos;énergie propre et économique avec Groupe Expert Altitude Com, votre spécialiste en installation de panneaux solaires photovoltaïques sur Paris 9e. Notre expertise technique vous permet de produire votre propre électricité verte et de réduire significativement votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Paris 9e</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;installation de panneaux photovoltaïques répond aux exigences techniques les plus strictes pour les habitations parisiennes. Nous réalisons une étude personnalisée de votre toiture, en évaluant son orientation, son inclinaison et sa capacité à accueillir des modules solaires haute performance. Notre équipe certifiée intervient sur Paris 9e et ses environs, garantissant une installation clé en main qui maximise votre production énergétique. Chaque projet fait l&apos;objet d&apos;un diagnostic précis : nous calculons votre potentiel de production, estimons vos économies et vous accompagnons dans les démarches administratives et les demandes de subventions.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique certifiée RGE avec plus de 10 ans d&apos;expérience
• Solutions 100% personnalisées adaptées à chaque habitat parisien
• Accompagnement complet : étude, installation, raccordement et suivi
• Matériels de dernière génération avec rendement énergétique optimal</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3 kWc pour un appartement parisien coûte environ 11 500€, avec un retour sur investissement estimé entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet pour des panneaux photovoltaïques à Paris 9e s&apos;étend généralement entre 4 et 8 semaines. Cela inclut l&apos;étude technique préalable (1-2 semaines), l&apos;obtention des autorisations (2-3 semaines) et la pose effective (1-2 semaines).
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement : son inscription sur le site officiel Qualibat, ses certifications énergétiques, son expérience locale, les avis clients, et sa capacité à fournir un dossier technique complet avec garanties décennales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Paris 9e ?
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
