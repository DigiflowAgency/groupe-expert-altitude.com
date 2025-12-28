import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Mérignac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire référence en travaux sur corde à Mérignac et dans toute la région bordelaise. Nos cordistes hautement quali',
  keywords: 'cordiste mérignac, travaux sur corde mérignac, travaux acrobatiques mérignac, cordiste batiment mérignac, intervention cordiste mérignac, entreprise cordiste mérignac',
};

export default function CordisteMerignacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Mérignac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire référence en travaux sur corde à Mérignac et dans toute la région bordelaise. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes, garantissant sécurité et expertise technique.</p>

        <h2>Nos services de travaux sur corde - cordistes a Mérignac</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques couvrent une large gamme d&apos;interventions professionnelles, depuis les inspections de façades jusqu&apos;aux maintenances industrielles complexes. Notre équipe de cordistes certifiés dispose d&apos;un équipement de pointe permettant d&apos;accéder aux zones les plus difficiles d&apos;accès, avec une précision et une efficacité remarquables. Chaque intervention est minutieusement préparée, respectant les normes de sécurité les plus strictes et offrant des solutions sur-mesure adaptées à chaque contexte. Nos techniciens maîtrisent parfaitement les techniques d&apos;accès difficile, permettant des réalisations là où d&apos;autres échouent.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans les travaux sur corde, 2) Des techniciens diplômés et certifiés IRATA, 3) Un engagement sécurité total avec zéro accident depuis 2010, 4) Une intervention rapide sur Mérignac et ses environs, avec un délai moyen de 24h après votre demande.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité des travaux. Pour une intervention standard à Mérignac, comptez environ 120€/heure, incluant le matériel et la main-d&apos;œuvre qualifiée.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation professionnelle rigoureuse : obtention du CQP Cordiste, formation IRATA niveau 1 à 3, tests physiques et techniques approfondis, et une expérience minimum de 1000 heures en hauteur.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez : la certification IRATA, les références clients, l&apos;assurance professionnelle, les diplômes des techniciens, et les avis externes sur des plateformes indépendantes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Mérignac ?
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
