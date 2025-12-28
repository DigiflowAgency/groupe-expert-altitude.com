import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Maisons-Alfort | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Maisons-Alfort en source d&apos;énergie propre avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de',
  keywords: 'panneaux solaires maisons-alfort, installation photovoltaique maisons-alfort, panneaux photovoltaiques maisons-alfort, installateur panneaux solaires maisons-alfort, pose panneaux solaires maisons-alfort, photovoltaique maison maisons-alfort',
};

export default function PanneauxSolairesMaisonsAlfortPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Maisons-Alfort</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Maisons-Alfort en source d&apos;énergie propre avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure qui valorisent votre patrimoine et réduisent votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Maisons-Alfort</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux exigences techniques et environnementales les plus strictes. Nous réalisons un diagnostic personnalisé de votre toiture, évaluant précisément son orientation, sa surface et sa capacité à accueillir des panneaux solaires. Notre équipe de techniciens certifiés intervient sur l&apos;ensemble de Maisons-Alfort et ses environs, garantissant une pose professionnelle et optimisée. Chaque installation est conçue pour maximiser votre production énergétique, avec des rendements pouvant atteindre 85% de vos besoins électriques annuels. Nous sélectionnons uniquement des matériels de haute qualité, bénéficiant de 25 ans de garantie, pour assurer la pérennité de votre investissement écologique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un installateur local reconnu. Nos points forts : certification RGE officielle, devis gratuit et détaillé, accompagnement administratif complet pour vos demandes de subventions, équipe 100% française, intervention sous 15 jours, et un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 70% de votre investissement. Nos solutions commencent à partir de 12 m² pour une maison moyenne à Maisons-Alfort, avec un retour sur investissement estimé entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation de panneaux photovoltaïques s&apos;étend de 3 à 6 semaines, incluant le diagnostic technique, les autorisations administratives et la pose. Notre équipe réalise généralement l&apos;installation complète en 2-3 jours ouvrés, avec un planning précis et respecté.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement : son numéro de qualification QUALIT&apos;EnR, ses références clients locaux, ses certifications officielles, et son appartenance à un réseau professionnel reconnu. Groupe Expert Altitude Com répond à tous ces critères et vous propose une vérification transparente de nos accréditations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Maisons-Alfort ?
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
