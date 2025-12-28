import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Boulogne-Billancourt | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire référent en travaux sur corde à Boulogne-Billancourt, proposant des solutions acrobatiques innovantes pour ',
  keywords: 'cordiste boulogne-billancourt, travaux sur corde boulogne-billancourt, travaux acrobatiques boulogne-billancourt, cordiste batiment boulogne-billancourt, intervention cordiste boulogne-billancourt, entreprise cordiste boulogne-billancourt',
};

export default function CordisteBoulogneBillancourtPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Boulogne-Billancourt</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire référent en travaux sur corde à Boulogne-Billancourt, proposant des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur des chantiers complexes avec précision et sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a Boulogne-Billancourt</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions en milieux verticaux et difficiles d&apos;accès. Nos équipes de cordistes professionnels sont spécialisées dans des missions variées : ravalement de façades, nettoyage de vitres, rénovation de monuments historiques, inspection de structures industrielles et maintenance technique en hauteur. Chaque intervention est minutieusement planifiée, avec un accent mis sur la sécurité et l&apos;efficacité. Nos techniciens utilisent un équipement de pointe homologué, garantissant des prestations de qualité supérieure dans le respect strict des normes de sécurité en vigueur. Basés à Boulogne-Billancourt, nous intervenons sur tout le territoire francilien avec une réactivité et un professionnalisme reconnus.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique : nos cordistes possèdent plus de 15 ans d&apos;expérience collective, une certification IRATA internationale, et une assurance responsabilité professionnelle complète. Nous proposons des devis transparents, un délai d&apos;intervention rapide, et une approche personnalisée pour chaque projet. Notre taux de satisfaction client dépasse les 95%, témoignant de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité de l&apos;intervention, l&apos;équipement nécessaire et la durée estimée. Un diagnostic préalable gratuit nous permet de définir un devis précis adapté à vos besoins spécifiques à Boulogne-Billancourt et ses environs.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste requiert une formation professionnelle spécialisée, incluant des certifications comme IRATA niveau 1, 2 ou 3. Il faut réussir des examens théoriques et pratiques, justifier d&apos;une condition physique excellente, posséder un sens aigu de l&apos;analyse des risques et maîtriser parfaitement les techniques de sécurité en hauteur.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : la certification IRATA ou SPRAT, l&apos;assurance professionnelle, les références clients, les années d&apos;expérience, et les habilitations spécifiques. Demandez systématiquement les documents justificatifs et un entretien technique préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Boulogne-Billancourt ?
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
