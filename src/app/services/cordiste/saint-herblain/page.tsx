import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Saint-Herblain, offre des solutions acrobatiques professionnelles et sécuris',
  keywords: 'cordiste saint-herblain, travaux sur corde saint-herblain, travaux acrobatiques saint-herblain, cordiste batiment saint-herblain, intervention cordiste saint-herblain, entreprise cordiste saint-herblain',
};

export default function CordisteSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Saint-Herblain, offre des solutions acrobatiques professionnelles et sécurisées. Nos cordistes hautement qualifiés interviennent sur tous types de chantiers complexes avec une expertise technique unique.</p>

        <h2>Nos services de travaux sur corde - cordistes a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution idéale pour les interventions en hauteur nécessitant précision et technicité. Nos cordistes professionnels maîtrisent parfaitement les techniques d&apos;accès difficile, permettant des réalisations là où les méthodes traditionnelles échouent. À Saint-Herblain et ses environs, nous intervenons sur des chantiers industriels, de rénovation, de maintenance et de sécurisation. Notre équipe dispose d&apos;équipements homologués et respecte scrupuleusement les normes de sécurité, garantissant des interventions rapides et efficaces sans compromettre la sécurité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification IRATA internationale confirmant notre excellence technique
- Plus de 15 ans d&apos;expérience en travaux acrobatiques
- Équipe de 12 cordistes spécialisés et formés annuellement
- Interventions 100% sécurisées avec un taux de satisfaction client de 98%</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, son accessibilité et les équipements spécifiques requis. Un diagnostic préalable gratuit nous permet de proposer un devis précis et transparent adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation professionnelle rigoureuse incluant des certifications comme IRATA (International Rope Access Trade Association). Les candidats doivent réussir des formations techniques, des tests physiques et obtenir des habilitations spécifiques garantissant leur capacité à travailler en toute sécurité en hauteur.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : leurs certifications IRATA, leur expérience documentée, leurs références clients, leur couverture assurance responsabilité professionnelle et leurs équipements aux normes de sécurité actuelles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Saint-Herblain ?
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
