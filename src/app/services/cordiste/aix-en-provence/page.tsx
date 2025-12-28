import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Aix-en-Provence, offrant des solutions acrobatiques innovantes et sécuris',
  keywords: 'cordiste aix-en-provence, travaux sur corde aix-en-provence, travaux acrobatiques aix-en-provence, cordiste batiment aix-en-provence, intervention cordiste aix-en-provence, entreprise cordiste aix-en-provence',
};

export default function CordisteAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Aix-en-Provence, offrant des solutions acrobatiques innovantes et sécurisées pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur des chantiers complexes avec une expertise technique et une précision remarquables.</p>

        <h2>Nos services de travaux sur corde - cordistes a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions en hauteur dans la région aixoise. Nous intervenons sur des projets variés : rénovation de façades, nettoyage de vitres, maintenance industrielle, et travaux de bâtiment. Notre approche technique unique permet des interventions rapides et précises, minimisant les perturbations et garantissant une sécurité maximale. Nos cordistes disposent d&apos;un équipement de pointe et d&apos;une formation certifiée, leur permettant de réaliser des missions complexes avec une efficacité remarquable, que ce soit pour des particuliers ou des professionnels à Aix-en-Provence et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre entreprise se distingue par son expertise technique pointue, notre engagement sécuritaire total et notre flexibilité d&apos;intervention. Plus de 15 ans d&apos;expérience dans les travaux acrobatiques, une équipe certifiée IRATA, un taux de satisfaction client de 98%, et une capacité d&apos;intervention sous 48h sur tout le territoire aixois. Nous garantissons des prestations sur mesure, adaptées à chaque problématique spécifique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, son accessibilité et les équipements nécessaires. Pour une estimation précise, nous proposons un diagnostic gratuit sur site à Aix-en-Provence.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir une certification IRATA/SPRAT, suivre des formations intensives de sécurité, avoir une condition physique excellente et réussir des examens techniques pratiques et théoriques. Une formation initiale dure généralement entre 5 et 10 jours.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA/SPRAT, leur assurance responsabilité civile professionnelle, leurs références clients, et demandez systématiquement un devis détaillé avec les garanties associées.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Aix-en-Provence ?
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
