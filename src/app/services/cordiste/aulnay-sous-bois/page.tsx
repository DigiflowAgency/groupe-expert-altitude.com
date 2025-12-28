import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Aulnay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en travaux sur corde à Aulnay-sous-Bois, propose des solutions professionnelles et sécurisées pour tous vos cha',
  keywords: 'cordiste aulnay-sous-bois, travaux sur corde aulnay-sous-bois, travaux acrobatiques aulnay-sous-bois, cordiste batiment aulnay-sous-bois, intervention cordiste aulnay-sous-bois, entreprise cordiste aulnay-sous-bois',
};

export default function CordisteAulnaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Aulnay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en travaux sur corde à Aulnay-sous-Bois, propose des solutions professionnelles et sécurisées pour tous vos chantiers en hauteur. Nos cordistes hautement qualifiés interviennent sur des projets complexes avec une expertise technique inégalée dans toute la région parisienne.</p>

        <h2>Nos services de travaux sur corde - cordistes a Aulnay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes représentent la solution ultime pour les interventions techniques en milieux verticaux et difficiles d&apos;accès. Que ce soit pour la rénovation de façades, l&apos;entretien industriel ou les travaux acrobatiques, notre équipe maîtrise parfaitement les techniques d&apos;accès sur cordes. Chaque intervention est précédée d&apos;un diagnostic précis, garantissant une efficacité maximale et une sécurité absolue. Nos cordistes possèdent les certifications IRATA et SPIR qui attestent de leur professionnalisme, et utilisent un équipement de pointe homologué aux normes européennes les plus strictes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• 15 ans d&apos;expérience à Aulnay-sous-Bois et en région parisienne
• Équipe de 12 cordistes certifiés et formés en continu
• Interventions rapides sous 24h
• Devis gratuit et transparents
• Assurance professionnelle complète
• Respect systématique des normes de sécurité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable permet de définir précisément le coût, avec des forfaits adaptés pour les interventions à Aulnay-sous-Bois et ses environs.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications comme IRATA niveau 1, 2 ou 3, suivre des formations spécialisées en techniques de travail sur corde, posséder un CACES, et avoir une condition physique irréprochable. Une formation continue est également obligatoire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications IRATA, les habilitations de sécurité, l&apos;existence de formations continues, les références clients, et l&apos;assurance professionnelle. Un cordiste certifié garantit une intervention sécurisée et professionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Aulnay-sous-Bois ?
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
