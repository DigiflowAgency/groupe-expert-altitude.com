import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Nanterre | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Nanterre en une source d&apos;énergie propre et économique grâce à Groupe Expert Altitude Com, votre partenaire local spécialisé en ',
  keywords: 'panneaux solaires nanterre, installation photovoltaique nanterre, panneaux photovoltaiques nanterre, installateur panneaux solaires nanterre, pose panneaux solaires nanterre, photovoltaique maison nanterre',
};

export default function PanneauxSolairesNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Nanterre en une source d&apos;énergie propre et économique grâce à Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure pour valoriser votre patrimoine et réduire votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Nanterre</h2>
        <div className="space-y-4">
          <p>Nos experts en photovoltaïque accompagnent chaque projet d&apos;installation avec une approche technique et personnalisée. Nous réalisons un diagnostic précis de votre toiture à Nanterre, en évaluant son orientation, sa structure et son potentiel énergétique. Notre équipe utilise uniquement des panneaux haute performance garantissant un rendement optimal, avec des modules atteignant jusqu&apos;à 22% d&apos;efficacité énergétique. Le processus comprend l&apos;étude technique, les démarches administratives, l&apos;installation professionnelle et le raccordement au réseau électrique, le tout dans le respect des normes RGE.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés RGE avec plus de 10 ans d&apos;expérience
- Solutions 100% personnalisées adaptées à votre habitat
- Accompagnement complet des aides financières et administratives
- Matériel garanti 25 ans avec un rendement optimal</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% des coûts. Un système de 3kWc pour une maison moyenne coûte environ 12 500€, mais permet des économies annuelles de 500€ à 800€ sur vos factures d&apos;électricité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement de 4 à 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose. L&apos;installation physique des panneaux elle-même ne prend que 2 à 3 jours pour une maison individuelle standard.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIBAT ou QUALIT&apos;EnR, demandez plusieurs devis détaillés, consultez ses références client et assurez-vous qu&apos;il propose une garantie décennale. Un professionnel sérieux proposera une étude personnalisée et transparente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Nanterre ?
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
