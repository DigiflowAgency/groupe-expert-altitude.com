import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Le Cannet | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements de façade impeccables sur Le Cannet et ses environs. Spécialistes depu',
  keywords: 'ravalement facade le cannet, ravalement immeuble le cannet, renovation facade le cannet, peinture facade le cannet, entreprise ravalement le cannet, ravalement facade maison le cannet',
};

export default function RavalementFacadeLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements de façade impeccables sur Le Cannet et ses environs. Spécialistes depuis plus de 15 ans, nous transformons l&apos;apparence extérieure de vos bâtiments avec un savoir-faire technique et esthétique.</p>

        <h2>Nos services de ravalement de façade a Le Cannet</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération de peinture. Nous proposons une rénovation complète qui protège et embellit votre patrimoine immobilier. Notre équipe qualifiée réalise un diagnostic précis avant toute intervention, évaluant l&apos;état des murs, les éventuelles fissures et les traitements nécessaires. Sur Le Cannet, nous adaptons nos techniques aux spécificités architecturales locales, en utilisant des matériaux de haute qualité résistant aux conditions méditerranéennes. Chaque projet fait l&apos;objet d&apos;une préparation méticuleuse : décapage, réparation des supports, application de primaires d&apos;accrochage et finition par des peintures ou enduits techniques garantissant durabilité et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes sont certifiées RGE, nos devis sont transparents sans frais cachés, nous proposons une garantie décennale, et notre réactivité est reconnue sur tout Le Cannet. Nos techniciens maîtrisent tous les types de supports : pierre, crépi, béton, avec une attention particulière à l&apos;esthétique et à la protection de votre bien.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, l&apos;état initial du support et les finitions choisies. Pour une maison moyenne de 100m², comptez entre 3 000€ et 8 000€. Un diagnostic précis permettra de définir un devis personnalisé adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état, généralement entre 2 et 4 semaines. Un petit immeuble de 4 étages nécessitera environ 10-15 jours de travaux, tandis qu&apos;un grand ensemble pourra demander jusqu&apos;à 1 mois. Notre planning est toujours établi avec précision et communiqué à l&apos;avance.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10-15 ans, ou lorsque des dégradations significatives sont constatées. La loi impose cette rénovation dans les copropriétés présentant des signes d&apos;usure importants, des fissures, ou des problèmes d&apos;étanchéité. À Le Cannet, nous recommandons un diagnostic tous les 10 ans pour maintenir la valeur et l&apos;aspect de votre patrimoine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Le Cannet ?
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
