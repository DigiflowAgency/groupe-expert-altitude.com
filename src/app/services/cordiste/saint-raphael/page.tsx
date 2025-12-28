import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Saint-Raphaël, proposant des solutions acrobatiques professionnelles et s',
  keywords: 'cordiste saint-raphaël, travaux sur corde saint-raphaël, travaux acrobatiques saint-raphaël, cordiste batiment saint-raphaël, intervention cordiste saint-raphaël, entreprise cordiste saint-raphaël',
};

export default function CordisteSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Saint-Raphaël, proposant des solutions acrobatiques professionnelles et sécurisées pour tous vos défis en hauteur. Avec plus de 15 ans d&apos;expérience, nous intervenons sur les chantiers les plus techniques du littoral varois.</p>

        <h2>Nos services de travaux sur corde - cordistes a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Nos cordistes hautement qualifiés réalisent des interventions complexes sur tous types de structures, depuis les façades de bâtiments historiques de Saint-Raphaël jusqu&apos;aux installations industrielles. Notre technique unique permet d&apos;accéder aux zones difficiles d&apos;accès avec une précision chirurgicale et une sécurité maximale. Nous utilisons un équipement de pointe homologué et renouvelé régulièrement, garantissant des prestations irréprochables. Chaque intervention fait l&apos;objet d&apos;une étude préalable précise, avec un diagnostic technique et un plan d&apos;action personnalisé.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification IRATA internationale garantissant la qualité de nos interventions
- Équipe de 12 cordistes experts formés annuellement aux dernières normes de sécurité
- Assurance professionnelle couvrant tous types de travaux acrobatiques
- Interventions rapides sur tout le département du Var, délais garantis</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, avec un devis gratuit et personnalisé. Les facteurs déterminants sont la hauteur, l&apos;accessibilité et les équipements spécifiques nécessaires.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir un diplôme spécialisé (IRATA ou SPRAT), suivre des formations intensives en techniques de travail en hauteur, posséder une condition physique irréprochable et réussir des certifications de sécurité très strictes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications IRATA, l&apos;assurance professionnelle, les références clients, et demandez un portfolio détaillant les interventions précédentes. Un vrai professionnel acceptera de partager ces informations transparemment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Saint-Raphaël ?
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
