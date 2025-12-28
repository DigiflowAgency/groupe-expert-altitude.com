import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Drancy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour des ravalements de façade impeccables à Drancy et ses environs. Nous transformons l&apos;apparenc',
  keywords: 'ravalement facade drancy, ravalement immeuble drancy, renovation facade drancy, peinture facade drancy, entreprise ravalement drancy, ravalement facade maison drancy',
};

export default function RavalementFacadeDrancyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Drancy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour des ravalements de façade impeccables à Drancy et ses environs. Nous transformons l&apos;apparence extérieure de vos bâtiments avec un savoir-faire technique et un sens du détail qui font notre réputation depuis plus de 15 ans.</p>

        <h2>Nos services de ravalement de façade a Drancy</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une intervention complète qui protège durablement vos murs contre les agressions climatiques et environnementales. Notre équipe de professionnels réalise un diagnostic précis avant toute intervention, évaluant l&apos;état des surfaces, les éventuelles fissures et l&apos;usure des matériaux. Nous utilisons uniquement des techniques et des matériaux de haute qualité, garantissant une finition impeccable et une protection optimale. Que ce soit pour une maison individuelle ou un immeuble collectif à Drancy, nous adaptons notre approche à chaque configuration, en privilégiant des solutions techniques et esthétiques sur-mesure.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence du ravalement de façade. Notre différence réside dans notre expertise technique, notre équipe certifiée, nos matériaux haut de gamme et notre engagement qualité. Nous garantissons des délais respectés, un devis transparent et des finitions irréprochables. 95% de nos clients nous recommandent après leur première intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie généralement entre 30€ et 80€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la surface. Pour une maison de 100m² à Drancy, comptez un budget moyen de 4 500€ à 7 000€ tout compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa configuration. Un petit immeuble de 3-4 étages nécessite environ 2 à 3 semaines de travaux, tandis qu&apos;un grand ensemble peut demander jusqu&apos;à 5-6 semaines. Nos équipes optimisent chaque intervention pour minimiser la gêne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement de façade devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de dégradation compromet la solidité du bâtiment. À Drancy, nous recommandons une inspection professionnelle tous les 8-10 ans pour maintenir la valeur et la protection de votre patrimoine immobilier.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Drancy ?
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
