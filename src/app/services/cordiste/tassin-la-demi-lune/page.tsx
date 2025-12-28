import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne les travaux en hauteur à Tassin-la-Demi-Lune grâce à ses cordistes hautement qualifiés. Nos techniciens acrobati',
  keywords: 'cordiste tassin-la-demi-lune, travaux sur corde tassin-la-demi-lune, travaux acrobatiques tassin-la-demi-lune, cordiste batiment tassin-la-demi-lune, intervention cordiste tassin-la-demi-lune, entreprise cordiste tassin-la-demi-lune',
};

export default function CordisteTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne les travaux en hauteur à Tassin-la-Demi-Lune grâce à ses cordistes hautement qualifiés. Nos techniciens acrobatiques maîtrisent parfaitement les techniques d&apos;intervention sur cordes, garantissant sécurité et efficacité maximales.</p>

        <h2>Nos services de travaux sur corde - cordistes a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Nos cordistes professionnels interviennent sur tous types de chantiers complexes nécessitant des compétences techniques spécifiques. Que ce soit pour des travaux de rénovation, de maintenance industrielle ou de nettoyage de façades, nous disposons d&apos;un équipement ultramoderne et de certifications strictes. Notre approche permet d&apos;accéder aux zones les plus difficiles sans installations d&apos;échafaudages coûteuses, réduisant ainsi les délais et les coûts d&apos;intervention. Dans la région de Tassin-la-Demi-Lune, nous sommes reconnus pour notre expertise technique et notre engagement total en matière de sécurité. Chaque intervention est précédée d&apos;un diagnostic précis et d&apos;une évaluation des risques, assurant une prestation de haute qualité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Plus de 15 ans d&apos;expérience dans les travaux acrobatiques
- Équipe certifiée IRATA et SPIR avec habilitations tous travaux
- Matériel de dernière génération conforme aux normes de sécurité
- Interventions rapides et sur-mesure dans tout le département du Rhône</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs d&apos;un cordiste varient entre 80€ et 150€ de l&apos;heure selon la complexité du chantier, avec un devis gratuit et personnalisé. Les facteurs déterminants sont la hauteur, l&apos;accessibilité et le type de travaux à réaliser.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications spécifiques comme le niveau IRATA, suivre des formations professionnelles intensives et justifier d&apos;une condition physique irréprochable. Un cursus technique et des formations en sécurité sont essentiels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez une entreprise disposant des certifications IRATA, SPIR, avec des assurances professionnelles complètes. Vérifiez leurs références, leur ancienneté et demandez systématiquement un devis détaillé avec les garanties associées.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Tassin-la-Demi-Lune ?
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
