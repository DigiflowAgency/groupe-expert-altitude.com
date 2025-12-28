import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Hyères | Groupe Expert Altitude Com',
  description: 'À Hyères et dans tout le Var, Groupe Expert Altitude Com transforme votre habitat en centrale électrique solaire écologique. Spécialistes de l&apos;installation',
  keywords: 'panneaux solaires hyères, installation photovoltaique hyères, panneaux photovoltaiques hyères, installateur panneaux solaires hyères, pose panneaux solaires hyères, photovoltaique maison hyères',
};

export default function PanneauxSolairesHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">À Hyères et dans tout le Var, Groupe Expert Altitude Com transforme votre habitat en centrale électrique solaire écologique. Spécialistes de l&apos;installation de panneaux photovoltaïques, nous vous accompagnons de la conception à la mise en service de votre solution énergétique sur mesure.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Hyères</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;installation de panneaux solaires photovoltaïques répond aux exigences techniques et environnementales les plus strictes. Sur le territoire hyérois, nous proposons une approche personnalisée qui commence par un diagnostic précis de votre toiture et de vos consommations énergétiques. Nos techniciens certifiés utilisent uniquement des modules photovoltaïques haute performance, garantissant une production électrique optimale et une rentabilité rapide. Chaque projet est étudié individuellement pour maximiser votre autonomie énergétique, avec des rendements pouvant atteindre 85% de votre consommation domestique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Experts certifiés RGE avec plus de 10 ans d&apos;expérience
• Matériels de haute qualité avec garanties constructeurs
• Étude personnalisée et gratuite avant installation
• Accompagnement dans les démarches administratives et demandes de subventions</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires coûte entre 9 000€ et 18 000€ selon la surface et la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides gouvernementales comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 50% du coût total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques varie entre 4 et 8 semaines. La phase de pose technique dure généralement 2 à 3 jours, suivie d&apos;un raccordement au réseau électrique par notre équipe et les techniciens d&apos;Enedis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez trois critères essentiels : qualification officielle Qualibat ou Qualit&apos;EnR, références clients vérifiables, et proposition détaillée incluant études techniques, devis précis et garanties de performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Hyères ?
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
