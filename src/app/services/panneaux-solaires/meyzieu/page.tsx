import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Meyzieu | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Meyzieu en une source d&apos;énergie propre et économique grâce à Groupe Expert Altitude Com, votre spécialiste local en installatio',
  keywords: 'panneaux solaires meyzieu, installation photovoltaique meyzieu, panneaux photovoltaiques meyzieu, installateur panneaux solaires meyzieu, pose panneaux solaires meyzieu, photovoltaique maison meyzieu',
};

export default function PanneauxSolairesMeyzieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Meyzieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Meyzieu en une source d&apos;énergie propre et économique grâce à Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Optez pour une solution énergétique innovante qui valorise votre patrimoine immobilier tout en réduisant votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Meyzieu</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants de Meyzieu et ses environs de produire leur propre électricité verte, avec des rendements garantis et des économies substantielles. Notre équipe d&apos;experts réalise une étude personnalisée de votre toiture, en analysant son orientation, sa surface et sa structure pour maximiser la production énergétique. Nous utilisons uniquement des panneaux de dernière génération, certifiés et offrant un rendement supérieur à 22%, avec des garanties allant jusqu&apos;à 25 ans. Notre processus complet comprend le conseil technique, les démarches administratives, l&apos;installation et le raccordement au réseau électrique, pour une transition énergétique clé en main.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons une qualité d&apos;installation irréprochable. Notre bureau d&apos;études local à Meyzieu assure un suivi personnalisé. Nous proposons un accompagnement financier complet avec des solutions de financement adaptées. Nos techniciens sont formés en continu sur les dernières technologies photovoltaïques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3 kWc pour une maison individuelle revient en moyenne à 12 500€, mais permet des économies de 300€ à 600€ par an sur la facture énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose. L&apos;installation physique elle-même ne prend que 1 à 2 jours pour une maison standard à Meyzieu.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement : son numéro de certification, ses références clients locales, les garanties proposées, et son appartenance à un réseau professionnel reconnu. Exigez un devis détaillé et une visite technique préalable avec un diagnostic précis de votre installation potentielle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Meyzieu ?
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
