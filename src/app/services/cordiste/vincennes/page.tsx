import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Vincennes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Vincennes et en région parisienne. Nos cordistes hautement qualifiés ré',
  keywords: 'cordiste vincennes, travaux sur corde vincennes, travaux acrobatiques vincennes, cordiste batiment vincennes, intervention cordiste vincennes, entreprise cordiste vincennes',
};

export default function CordisteVincennesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Vincennes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Vincennes et en région parisienne. Nos cordistes hautement qualifiés réalisent des interventions techniques et sécurisées pour tous vos projets en hauteur, avec une expertise reconnue dans le domaine des travaux acrobatiques.</p>

        <h2>Nos services de travaux sur corde - cordistes a Vincennes</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes couvrent un large éventail d&apos;interventions professionnelles, depuis la rénovation de façades jusqu&apos;à l&apos;entretien de structures complexes. Chaque mission est précédée d&apos;une évaluation technique minutieuse garantissant une sécurité maximale. Nos techniciens utilisent un équipement de pointe homologué, permettant des interventions rapides et précises dans des zones difficiles d&apos;accès à Vincennes et ses environs. Notre approche combine technicité, rapidité et respect des normes de sécurité les plus strictes, avec plus de 95% de nos chantiers réalisés dans les délais impartis.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 10 ans d&apos;expérience
- Interventions 100% sécurisées selon les normes AFPS
- Devis gratuit et transparent sous 48h
- Matériel professionnel dernier cri et régulièrement contrôlé</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, la hauteur, et les équipements spécifiques nécessaires. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir un CACES spécifique, suivre des formations de sécurité hauteur, et justifier d&apos;une condition physique irréprochable. Une certification IRATA ou SPRAT est fortement recommandée, avec a minima un niveau 1 requis pour les interventions professionnelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez les certifications AFPS, demandez des références clients, assurez-vous de l&apos;assurance responsabilité civile professionnelle, et exigez un historique de réalisations. Chez Groupe Expert Altitude Com, nous mettons un point d&apos;honneur à la transparence et à la qualité de nos interventions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Vincennes ?
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
