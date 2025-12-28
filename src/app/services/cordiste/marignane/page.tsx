import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Marignane | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en travaux sur corde à Marignane, propose des solutions acrobatiques innovantes pour tous vos défis en hauteur.',
  keywords: 'cordiste marignane, travaux sur corde marignane, travaux acrobatiques marignane, cordiste batiment marignane, intervention cordiste marignane, entreprise cordiste marignane',
};

export default function CordisteMarignanePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Marignane</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en travaux sur corde à Marignane, propose des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes experts interviennent avec précision et sécurité sur les chantiers les plus complexes de la région.</p>

        <h2>Nos services de travaux sur corde - cordistes a Marignane</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions en milieux verticaux et difficiles d&apos;accès. Grâce à une technologie d&apos;équipement de pointe et une formation continue, nos cordistes réalisent des missions variées : ravalement de façades, nettoyage industriel, réparations structurelles, et maintenance de bâtiments à Marignane et ses environs. Chaque intervention est précédée d&apos;une évaluation rigoureuse des risques, garantissant une exécution parfaitement sécurisée. Notre approche permet de réduire jusqu&apos;à 40% les coûts traditionnels d&apos;échafaudage tout en optimisant la rapidité et la qualité des travaux.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : certification IRATA internationale, plus de 15 ans d&apos;expérience, équipe de 12 cordistes hautement qualifiés, matériel aux normes les plus strictes. Nous intervenons sur des projets de toutes échelles, avec une réactivité et un professionnalisme qui font notre réputation à Marignane.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs d&apos;un cordiste varient entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Un devis personnalisé est systématiquement établi après une analyse technique précise, intégrant la durée, les équipements nécessaires et les difficultés spécifiques d&apos;intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation qualifiante de niveau IRATA (International Rope Access Trade Association), réussir des examens théoriques et pratiques, justifier d&apos;une condition physique irréprochable et obtenir des certifications de sécurité en hauteur. Une formation continue est obligatoire tous les 3 ans.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : la certification IRATA, l&apos;assurance professionnelle, les références clients, l&apos;ancienneté de l&apos;entreprise, et les qualifications individuelles des techniciens. Un audit préalable et des garanties écrites sont également des gages de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Marignane ?
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
