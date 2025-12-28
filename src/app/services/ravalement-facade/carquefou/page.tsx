import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Carquefou | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Carquefou et ses environs. Experts en rénovati',
  keywords: 'ravalement facade carquefou, ravalement immeuble carquefou, renovation facade carquefou, peinture facade carquefou, entreprise ravalement carquefou, ravalement facade maison carquefou',
};

export default function RavalementFacadeCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Carquefou et ses environs. Experts en rénovation, nous transformons l&apos;apparence de vos bâtiments avec un savoir-faire précis et des techniques modernes.</p>

        <h2>Nos services de ravalement de façade a Carquefou</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération cosmétique. Nous proposons une rénovation complète qui protège et valorise votre patrimoine immobilier. Notre équipe intervient sur tous types de bâtiments - maisons individuelles, immeubles collectifs et bâtiments professionnels - en utilisant des techniques adaptées à chaque support. À Carquefou, nous maîtrisons parfaitement les spécificités architecturales locales, garantissant un résultat esthétique et durable. Nos interventions comprennent le diagnostic précis de l&apos;état des murs, la préparation des surfaces, le traitement des imperfections et l&apos;application de peintures ou enduits haute performance.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour la qualité et la fiabilité. Nos techniciens sont certifiés, nos matériaux sont écologiques et nos devis transparents. Nous intervenons avec un équipement professionnel dernier cri, réalisons des travaux dans les délais annoncés et proposons une garantie décennale. Notre connaissance approfondie des normes techniques fait de nous un acteur de référence sur Carquefou.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, l&apos;état initial des murs et les matériaux choisis. Pour une maison moyenne de 100m², comptez entre 3 000€ et 8 000€. Chez Groupe Expert Altitude Com, nous établissons un devis personnalisé après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, un chantier de 300m² prend entre 10 et 15 jours ouvrables. Notre équipe optimise chaque étape : préparation, réparations, application des finitions, avec un planning serré et professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 15-20 ans, ou lorsque des dégradations significatives sont constatées. La loi impose ce rafraîchissement pour les copropriétés, afin de maintenir la valeur patrimoniale et garantir la sécurité des bâtiments. À Carquefou, nous conseillons un diagnostic tous les 10 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Carquefou ?
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
