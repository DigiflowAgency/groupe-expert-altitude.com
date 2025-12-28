import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Bouguenais | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux sur corde à Bouguenais et dans toute la région nantaise. Nos cordiste',
  keywords: 'cordiste bouguenais, travaux sur corde bouguenais, travaux acrobatiques bouguenais, cordiste batiment bouguenais, intervention cordiste bouguenais, entreprise cordiste bouguenais',
};

export default function CordisteBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux sur corde à Bouguenais et dans toute la région nantaise. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus techniques, garantissant une sécurité et une efficacité maximales.</p>

        <h2>Nos services de travaux sur corde - cordistes a Bouguenais</h2>
        <div className="space-y-4">
          <p>Nos experts cordistes réalisent des interventions complexes sur des structures variées, de la rénovation de façades aux travaux industriels. Spécialisés dans les techniques d&apos;accès difficile, nous intervenons avec un équipement de pointe et des certifications professionnelles rigoureuses. Notre maîtrise technique nous permet de répondre à des missions exigeantes à Bouguenais, qu&apos;il s&apos;agisse de maintenance, d&apos;inspection ou de travaux acrobatiques. Chaque intervention est précédée d&apos;un diagnostic précis et d&apos;une évaluation des risques, assurant une prestation sur-mesure et sécurisée.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique, notre engagement sécuritaire et notre réactivité. Nos cordistes possèdent plus de 15 ans d&apos;expérience cumulée, une certification IRATA internationale, et interviennent avec un matériel aux normes les plus strictes. Notre taux de satisfaction client dépasse 98%, témoignant de notre professionnalisme et de notre qualité de service.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, le type d&apos;intervention et la durée. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et transparent, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle spécialisée, obtenir des certifications comme l&apos;IRATA niveau 1, 2 ou 3, et justifier d&apos;une condition physique irréprochable. Une formation continue et des habilitations spécifiques sont également nécessaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA, leur assurance responsabilité civile professionnelle, leurs références clients, et demandez systématiquement un devis détaillé avec les garanties associées.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Bouguenais ?
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
