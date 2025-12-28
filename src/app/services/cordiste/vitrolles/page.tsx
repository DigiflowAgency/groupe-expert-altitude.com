import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Vitrolles | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Vitrolles, offrant des solutions acrobatiques professionnelles et sécu',
  keywords: 'cordiste vitrolles, travaux sur corde vitrolles, travaux acrobatiques vitrolles, cordiste batiment vitrolles, intervention cordiste vitrolles, entreprise cordiste vitrolles',
};

export default function CordisteVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Vitrolles, offrant des solutions acrobatiques professionnelles et sécurisées pour tous vos défis en hauteur. Nos cordistes experts interviennent sur l&apos;ensemble du département des Bouches-du-Rhône avec une précision et un savoir-faire inégalés.</p>

        <h2>Nos services de travaux sur corde - cordistes a Vitrolles</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions complexes nécessitant agilité et expertise. Nos cordistes hautement qualifiés réalisent des missions variées : ravalement de façades, nettoyage industriel, maintenance de structures, inspection de bâtiments et travaux de rénovation. Grâce à des équipements de pointe et une formation continue, nous garantissons des interventions rapides, sécurisées et économiques. Notre approche technique permet de réduire jusqu&apos;à 40% les coûts traditionnels d&apos;échafaudage tout en minimisant les perturbations sur site.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée IRATA, une expérience de plus de 15 ans à Vitrolles, un engagement sécurité total, des techniciens diplômés et une réactivité garantie sous 48h. Nous sommes assurés pour tous types d&apos;interventions complexes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité technique, la hauteur d&apos;intervention et l&apos;équipement spécifique requis. Un diagnostic préalable gratuit nous permet de définir un devis précis et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications spécifiques comme le niveau IRATA, suivre des formations intensives de sécurité, maîtriser les techniques de progression sur cordes et posséder une condition physique irréprochable. Un cursus technique ou BTP est généralement recommandé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une entreprise de cordistes certifiée doit justifier de diplômes IRATA, proposer une assurance professionnelle complète, disposer d&apos;un agrément pour les travaux en hauteur et présenter des références clients vérifiables. Vérifiez toujours ces critères avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Vitrolles ?
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
