import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Ollioules | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Ollioules et dans toute la région Sud. Nos cordistes hautement qualifié',
  keywords: 'cordiste ollioules, travaux sur corde ollioules, travaux acrobatiques ollioules, cordiste batiment ollioules, intervention cordiste ollioules, entreprise cordiste ollioules',
};

export default function CordisteOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Ollioules et dans toute la région Sud. Nos cordistes hautement qualifiés réalisent des interventions acrobatiques complexes avec une précision et une sécurité irréprochables.</p>

        <h2>Nos services de travaux sur corde - cordistes a Ollioules</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde offrent une solution technique et sécurisée pour tous vos défis en hauteur. Spécialisés dans les interventions complexes, nous intervenons sur des chantiers industriels, patrimoniaux et tertiaires à Ollioules et ses environs. Notre équipe maîtrise parfaitement les techniques d&apos;accès difficile, garantissant des prestations rapides et efficaces sans compromettre la sécurité. Nos cordistes sont équipés de matériel professionnel dernier cri et bénéficient d&apos;une formation continue annuelle, assurant une qualité d&apos;intervention optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos points forts : certification AFPS, plus de 15 ans d&apos;expérience, interventions adaptées à chaque contexte, devis gratuit et transparent, respect strict des normes de sécurité. 98% de nos clients nous recommandent.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€/heure selon la complexité du chantier. À Ollioules, nos prix sont compétitifs et incluent le matériel, l&apos;assurance et l&apos;expertise technique. Un diagnostic préalable gratuit permet un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir le CQP Cordiste, suivre des formations de sécurité intensives, justifier d&apos;une condition physique excellente et posséder un sens aigu de l&apos;analyse des risques. Une formation continue est obligatoire chaque année.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours la certification AFPS, les assurances professionnelles, l&apos;expérience terrain, les références clients et les habilitations sécurité. Chez Groupe Expert Altitude Com, nous transparaissons tous ces éléments pour votre tranquillité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Ollioules ?
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
