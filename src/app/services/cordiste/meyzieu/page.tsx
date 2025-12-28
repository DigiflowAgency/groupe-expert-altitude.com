import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Meyzieu | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Meyzieu, offrant des solutions acrobatiques professionnelles pour tous vo',
  keywords: 'cordiste meyzieu, travaux sur corde meyzieu, travaux acrobatiques meyzieu, cordiste batiment meyzieu, intervention cordiste meyzieu, entreprise cordiste meyzieu',
};

export default function CordisteMeyzieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Meyzieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Meyzieu, offrant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur l&apos;ensemble de la métropole lyonnaise avec une expertise technique inégalée.</p>

        <h2>Nos services de travaux sur corde - cordistes a Meyzieu</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques représentent la solution ultime pour les interventions complexes en hauteur. Grâce à une technique de cordage parfaitement maîtrisée, nous intervenons sur des chantiers variés : rénovation de façades, nettoyage de vitres, maintenance industrielle et expertises techniques. Notre approche garantit une sécurité maximale avec un équipement aux normes et des techniciens certifiés. Plus de 95% de nos missions sont réalisées sans échafaudage, réduisant ainsi les coûts et les délais d&apos;intervention pour nos clients à Meyzieu et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : des cordistes formés annuellement aux dernières normes de sécurité, un matériel certifié NF, une réactivité garantie sous 24h et plus de 10 ans d&apos;expérience sur des projets complexes. Nous sommes assurés pour tous types d&apos;interventions et disposons des habilitations professionnelles requises.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 180€ de l&apos;heure selon la complexité du chantier, l&apos;équipement nécessaire et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de proposer un devis précis et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle diplômante (OPPBTP), obtenir le certificat de qualification professionnelle (CQP), justifier d&apos;une aptitude médicale et réussir des tests techniques et physiques rigoureux. Une formation continue annuelle est obligatoire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez les points suivants : certification AFCEE, assurance responsabilité civile professionnelle, habilitations QUALIBAT, références clients, équipements aux normes européennes et formation continue des techniciens.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Meyzieu ?
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
