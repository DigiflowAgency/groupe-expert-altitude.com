import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Bondy | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Bondy et ses environs. Spécialistes des travaux de toiture et de protectio',
  keywords: 'zinguerie bondy, travaux zinguerie bondy, toiture zinc bondy, zingueur bondy, reparation zinc bondy, zinco reflect bondy',
};

export default function ZinguerieBondyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Bondy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Bondy et ses environs. Spécialistes des travaux de toiture et de protection contre l&apos;eau, nous intervenons avec précision et expertise pour sécuriser et valoriser votre patrimoine immobilier.</p>

        <h2>Nos services de travaux de zinguerie a Bondy</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins en rénovation et protection de toiture. Nous réalisons des installations complètes de systèmes de zinguerie, en utilisant des techniques modernes et des matériaux de haute qualité. Notre équipe maîtrise parfaitement les techniques de pose de zinc, que ce soit pour des pavillons, des immeubles ou des bâtiments industriels à Bondy. Nous garantissons une étanchéité optimale grâce à des soudures professionnelles et un travail minutieux, avec une attention particulière aux détails techniques qui font la différence.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans en zinguerie 2) Des techniciens certifiés et formés aux dernières normes 3) Un diagnostic technique gratuit avant intervention 4) Des matériaux garantis et une intervention rapide sur Bondy et ses alentours.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la hauteur du bâtiment et l&apos;état initial de la toiture. Pour une estimation précise, nous proposons un diagnostic personnalisé gratuit à Bondy.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 60 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose, de l&apos;épaisseur du zinc utilisé et de l&apos;environnement local.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour prévenir tout risque de dégradation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Bondy ?
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
