import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Draguignan | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com, votre référence en travaux sur corde à Draguignan, propose des solutions acrobatiques professionnelles pour tous vos défis en hauteur.',
  keywords: 'cordiste draguignan, travaux sur corde draguignan, travaux acrobatiques draguignan, cordiste batiment draguignan, intervention cordiste draguignan, entreprise cordiste draguignan',
};

export default function CordisteDraguignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Draguignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com, votre référence en travaux sur corde à Draguignan, propose des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur le département du Var avec une expertise technique et une sécurité irréprochable.</p>

        <h2>Nos services de travaux sur corde - cordistes a Draguignan</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes couvrent un large éventail d&apos;interventions techniques, de la rénovation de bâtiments à l&apos;entretien industriel. Nos professionnels utilisent des techniques d&apos;accès difficile permettant d&apos;intervenir là où les méthodes traditionnelles échouent, garantissant une efficacité maximale et une précision chirurgicale. Chaque intervention est précédée d&apos;un diagnostic technique complet, assurant une planification méticuleuse et une exécution sans faille. Nos équipes sont équipées des dernières technologies et suivent une formation continue pour maintenir un niveau d&apos;excellence.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour : 1) Une certification QUALICORD garantissant notre professionnalisme, 2) Plus de 15 ans d&apos;expérience sur Draguignan et le Var, 3) Une équipe de 8 cordistes experts formés aux normes de sécurité les plus strictes, 4) Un engagement qualité avec zéro accident depuis notre création.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 180€ de l&apos;heure selon la complexité, avec un devis gratuit personnalisé. Les interventions simples commencent autour de 350€, tandis que des chantiers complexes peuvent atteindre 2500€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir un CACES spécifique, suivre une formation certifiante de 210 heures minimum, avoir une condition physique irréprochable et réussir des tests techniques et médicaux très stricts.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : l&apos;existence de certifications QUALICORD, l&apos;assurance professionnelle, les références clients, et l&apos;ancienneté de l&apos;entreprise dans le domaine des travaux acrobatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Draguignan ?
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
