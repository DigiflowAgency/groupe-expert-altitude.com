import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Orvault | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Orvault en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de',
  keywords: 'panneaux solaires orvault, installation photovoltaique orvault, panneaux photovoltaiques orvault, installateur panneaux solaires orvault, pose panneaux solaires orvault, photovoltaique maison orvault',
};

export default function PanneauxSolairesOrvaultPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Orvault</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Orvault en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous accompagnons les propriétaires d&apos;Orvault et ses environs vers une transition énergétique performante et économique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Orvault</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent de produire votre propre électricité verte, réduisant significativement vos factures énergétiques. Chaque installation est précédée d&apos;un diagnostic technique précis, évaluant l&apos;orientation, l&apos;inclinaison de votre toiture et votre consommation électrique. Nos techniciens certifiés utilisent des panneaux haute performance garantissant un rendement optimal, avec des modules atteignant jusqu&apos;à 22% d&apos;efficacité énergétique. Le processus comprend l&apos;étude personnalisée, les démarches administratives, l&apos;installation technique et le raccordement au réseau électrique, le tout dans le respect des normes environnementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons une expertise technique irréprochable. Notre connaissance du territoire d&apos;Orvault nous permet de proposer des solutions adaptées à l&apos;habitat local. Nous proposons un accompagnement complet, des aides financières jusqu&apos;au suivi de production. Notre équipe locale intervient rapidement et nos installations bénéficient d&apos;une garantie de 25 ans.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides pouvant atteindre 30% du montant total grâce au crédit d&apos;impôt et aux certificats d&apos;économie d&apos;énergie. Un investissement rentabilisé en 7 à 10 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 8 semaines, comprenant l&apos;étude technique (2 semaines), les autorisations administratives (3 semaines) et la pose effective des panneaux (1 à 2 jours).
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIBAT, QUALIT&apos;EnR ou AFCEE, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la présence d&apos;une garantie décennale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Orvault ?
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
