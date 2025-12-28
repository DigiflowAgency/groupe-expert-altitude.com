import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Muret | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en travaux sur corde à Muret, propose des solutions innovantes et sécurisées pour tous vos défis d&apos;intervention',
  keywords: 'cordiste muret, travaux sur corde muret, travaux acrobatiques muret, cordiste batiment muret, intervention cordiste muret, entreprise cordiste muret',
};

export default function CordisteMuretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Muret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en travaux sur corde à Muret, propose des solutions innovantes et sécurisées pour tous vos défis d&apos;intervention en hauteur. Nos cordistes hautement qualifiés interviennent sur l&apos;ensemble du territoire sud-toulousain avec un professionnalisme et une expertise inégalés.</p>

        <h2>Nos services de travaux sur corde - cordistes a Muret</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes couvrent un large éventail d&apos;interventions techniques, de la rénovation de façades aux travaux industriels complexes. Grâce à des techniques d&apos;accès difficile parfaitement maîtrisées, nous réalisons des missions impossibles pour les méthodes traditionnelles. Nos équipes disposent d&apos;un équipement de pointe homologué et suivent des formations continues garantissant une sécurité maximale. Chaque intervention à Muret et ses environs est précédée d&apos;un diagnostic précis permettant une optimisation des coûts et des délais.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification IRATA internationale garantissant la plus haute qualité de service
- Plus de 15 ans d&apos;expérience dans les travaux acrobatiques
- Équipe de 12 cordistes experts tous assurés et habilités
- Interventions rapides sur Muret et le sud-ouest, devis gratuit sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs d&apos;un cordiste varient entre 80€ et 250€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de proposer un devis précis et transparent sans surcoût caché.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir un diplôme de niveau III (Bac+2) en travaux acrobatiques, réussir la certification IRATA, et justifier d&apos;une condition physique irréprochable. Une formation continue est obligatoire tous les 3 ans.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une entreprise de cordistes certifiée doit posséder la certification IRATA, une assurance professionnelle complète, des habilitations sécurité à jour et des références clients vérifiables. Vérifiez toujours ces critères avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Muret ?
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
