import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Villenave-d&apos;Ornon, offre des solutions acrobatiques professionnelles pour to',
  keywords: 'cordiste villenave-d'ornon, travaux sur corde villenave-d'ornon, travaux acrobatiques villenave-d'ornon, cordiste batiment villenave-d'ornon, intervention cordiste villenave-d'ornon, entreprise cordiste villenave-d'ornon',
};

export default function CordisteVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Villenave-d&apos;Ornon, offre des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Notre équipe de cordistes hautement qualifiés intervient sur l&apos;ensemble de la métropole bordelaise avec précision et sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions complexes en hauteur. Que ce soit pour des travaux de rénovation, de maintenance industrielle ou de nettoyage de façades, nos cordistes utilisent des techniques d&apos;accès spéciales garantissant une efficacité et une sécurité optimales. Chaque intervention est minutieusement préparée, avec un diagnostic technique précis et un équipement aux normes les plus strictes. Notre expertise technique nous permet d&apos;intervenir sur des structures variées - bâtiments industriels, monuments historiques, ouvrages complexes - avec une rapidité et une précision remarquables. Plus de 95% de nos missions sont réalisées sans incident, témoignant de notre professionnalisme.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : des techniciens certifiés IRATA/SPICT, un matériel de pointe régulièrement contrôlé, une assurance responsabilité civile professionnelle complète, et une expérience de plus de 15 ans sur le territoire de Villenave-d&apos;Ornon et ses environs. Nous garantissons des interventions rapides, sécurisées et économiquement compétitives.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité technique, l&apos;accessibilité du site et les équipements spécifiques nécessaires. Un devis personnalisé gratuit est systématiquement proposé après un diagnostic précis de votre projet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste requiert une formation professionnelle spécifique incluant des certifications comme IRATA (International Rope Access Trade Association), une condition physique irréprochable, et une capacité à travailler sereinement en hauteur. Une formation initiale de 3 à 6 mois est généralement nécessaire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement leurs certifications IRATA/SPICT, leur assurance professionnelle, leurs références clients, et demandez un portfolio détaillant leurs interventions précédentes. Les entreprises sérieuses proposent toujours un diagnostic technique préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Villenave-d'Ornon ?
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
