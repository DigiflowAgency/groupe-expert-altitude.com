import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Aubagne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne les travaux en hauteur à Aubagne grâce à son équipe de cordistes hautement qualifiés. Spécialistes des intervention',
  keywords: 'cordiste aubagne, travaux sur corde aubagne, travaux acrobatiques aubagne, cordiste batiment aubagne, intervention cordiste aubagne, entreprise cordiste aubagne',
};

export default function CordisteAubagnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Aubagne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne les travaux en hauteur à Aubagne grâce à son équipe de cordistes hautement qualifiés. Spécialistes des interventions techniques et acrobatiques, nous intervenons sur tous types de chantiers complexes avec une sécurité et une précision garanties.</p>

        <h2>Nos services de travaux sur corde - cordistes a Aubagne</h2>
        <div className="space-y-4">
          <p>Nos cordistes professionnels maîtrisent parfaitement les techniques d&apos;accès difficile, offrant des solutions innovantes pour les bâtiments, monuments historiques et infrastructures industrielles. Notre expertise couvre la maintenance, le nettoyage, la rénovation et l&apos;inspection technique en hauteur, avec un équipement de pointe certifié. Chaque intervention est précédée d&apos;une analyse détaillée des risques et respecte strictement les normes de sécurité en vigueur. Sur Aubagne et ses environs, nous intervenons rapidement avec un taux de satisfaction de plus de 95% auprès de nos clients professionnels et particuliers.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Interventions rapides et sur-mesure
- Matériel professionnel dernier cri
- Devis gratuit et transparent
- Agrément et assurances complètes
- Respect total des réglementations de sécurité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, son accessibilité et les équipements nécessaires. Un diagnostic préalable gratuit nous permet de proposer un devis précis et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir une formation qualifiante de niveau CAP/BEP, réussir des certifications spécifiques comme le CQP Cordiste et justifier d&apos;une condition physique irréprochable. Une formation continue en sécurité et techniques spécialisées est également obligatoire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez une entreprise de cordistes avec des certifications AFPS, des assurances professionnelles complètes, un historique de références clients, des équipements aux normes et une transparence totale sur ses pratiques de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Aubagne ?
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
