import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a L\'Union | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde hautement sécurisés et précis à L&apos;Union et dans toute la région tou',
  keywords: 'cordiste l'union, travaux sur corde l'union, travaux acrobatiques l'union, cordiste batiment l'union, intervention cordiste l'union, entreprise cordiste l'union',
};

export default function CordisteLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde hautement sécurisés et précis à L&apos;Union et dans toute la région toulousaine. Nos cordistes professionnels interviennent sur les chantiers les plus complexes avec une expertise technique et une exigence de sécurité inégalées.</p>

        <h2>Nos services de travaux sur corde - cordistes a L'Union</h2>
        <div className="space-y-4">
          <p>Nos interventions de cordistes couvrent un large éventail de prestations techniques : ravalement de façades, nettoyage de vitreries, réparations structurelles, maintenance industrielle et travaux acrobatiques. Chaque mission à L&apos;Union est réalisée avec un équipement de pointe homologué et des techniciens diplômés, garantissant une efficacité maximale sans compromettre la sécurité. Notre approche unique permet d&apos;accéder aux zones les plus difficiles, réduisant les coûts d&apos;échafaudage et minimisant les perturbations sur site. Plus de 95% de nos interventions sont réalisées dans des délais inférieurs à 48h, grâce à notre réactivité et notre organisation professionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification IRATA internationale pour tous nos cordistes
- Plus de 15 ans d&apos;expérience en travaux acrobatiques
- Assurance professionnelle comprehensive
- Interventions rapides et précises sur L&apos;Union et ses environs
- Devis gratuit et personnalisé sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité des travaux, l&apos;équipement nécessaire et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation certifiante IRATA (International Rope Access Trade Association), obtenir un diplôme de niveau 1, 2 ou 3, posséder une condition physique irréprochable et réussir des examens théoriques et pratiques de sécurité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications IRATA, l&apos;assurance professionnelle, les références clients, et demandez un portfolio de réalisations. Un cordiste professionnel doit pouvoir justifier de formations récentes et d&apos;une expérience solide dans des interventions similaires à vos besoins.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a L'Union ?
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
