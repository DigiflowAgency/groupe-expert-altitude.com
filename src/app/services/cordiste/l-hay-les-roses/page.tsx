import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a L\'Haÿ-les-Roses | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence en travaux sur corde à L&apos;Haÿ-les-Roses, propose des solutions acrobatiques innovantes pour tous v',
  keywords: 'cordiste l'haÿ-les-roses, travaux sur corde l'haÿ-les-roses, travaux acrobatiques l'haÿ-les-roses, cordiste batiment l'haÿ-les-roses, intervention cordiste l'haÿ-les-roses, entreprise cordiste l'haÿ-les-roses',
};

export default function CordisteLHayLesRosesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a L'Haÿ-les-Roses</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence en travaux sur corde à L&apos;Haÿ-les-Roses, propose des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur des chantiers complexes avec une précision et une sécurité inégalées dans toute la région parisienne.</p>

        <h2>Nos services de travaux sur corde - cordistes a L'Haÿ-les-Roses</h2>
        <div className="space-y-4">
          <p>Nos interventions de cordistes couvrent un large éventail de prestations, depuis les travaux de maintenance industrielle jusqu&apos;aux rénovations de bâtiments historiques. Chaque mission commence par une analyse précise des contraintes techniques et une évaluation des risques. Nos équipes utilisent un équipement de pointe homologué, garantissant une efficacité maximale et une sécurité absolue. Nos cordistes sont formés aux techniques les plus récentes, permettant des interventions rapides et précises dans des zones difficiles d&apos;accès, que ce soit à L&apos;Haÿ-les-Roses ou dans ses environs. Nous intervenons notamment sur des façades, des monuments, des structures industrielles, avec une moyenne de 95% de satisfaction client.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : des techniciens certifiés IRATA, un engagement sécurité total, un matériel aux normes européennes, une réactivité garantie sous 24h et une expertise de plus de 15 ans dans le domaine des travaux acrobatiques. Nous sommes la solution professionnelle et fiable pour tous vos défis en hauteur.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs des cordistes varient entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, les équipements nécessaires et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de proposer un devis précis et transparent adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle qualifiante, obtenir des certifications comme IRATA niveau 1, 2 ou 3, posséder une condition physique excellente, avoir le vertige maîtrisé et réussir des examens théoriques et pratiques de sécurité et de techniques spécifiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA, leur assurance responsabilité civile professionnelle, leurs références clients, leurs années d&apos;expérience et demandez systématiquement un devis détaillé avec les garanties de sécurité et d&apos;intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a L'Haÿ-les-Roses ?
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
