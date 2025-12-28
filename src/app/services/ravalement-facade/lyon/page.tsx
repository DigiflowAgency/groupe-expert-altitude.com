import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Lyon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Lyon, transforme vos bâtiments avec une expertise technique et un sens aig',
  keywords: 'ravalement facade lyon, ravalement immeuble lyon, renovation facade lyon, peinture facade lyon, entreprise ravalement lyon, ravalement facade maison lyon',
};

export default function RavalementFacadeLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Lyon, transforme vos bâtiments avec une expertise technique et un sens aigu de l&apos;esthétique. Nos solutions sur-mesure redonnent vie et élégance aux façades lyonnaises, qu&apos;il s&apos;agisse d&apos;habitations individuelles ou d&apos;immeubles.</p>

        <h2>Nos services de ravalement de façade a Lyon</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation cosmétique. Nous réalisons un diagnostic précis de votre bâtiment, évaluant l&apos;état des supports, les potentiels désordres structurels et les besoins spécifiques. Notre équipe utilise des techniques et matériaux haute performance, garantissant une protection durable contre les intempéries et une esthétique impeccable. Nous travaillons avec des peintures écologiques certifiées, proposant des finitions mates, satinées ou texturées qui s&apos;harmonisent parfaitement avec l&apos;architecture lyonnaise. Chaque projet fait l&apos;objet d&apos;une préparation méticuleuse, incluant le traitement des fissures, le rebouchage, le ponçage et l&apos;application de primaires adaptés.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre certification RGE, une expérience de plus de 15 ans à Lyon, des techniciens formés aux dernières normes, un devis détaillé et transparent, et une garantie décennale. Nous intervenons rapidement, avec un respect total des délais et des budgets prévisionnels.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ le m², selon la complexité du support, les matériaux choisis et l&apos;état initial. Pour un pavillon lyonnais moyen de 100m², comptez un budget global entre 5 000€ et 12 000€. Un diagnostic préalable gratuit permet d&apos;affiner précisément ce chiffrage.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. Pour un immeuble de 4-5 étages à Lyon, nous estimons un délai de 2 à 4 semaines, incluant la préparation, le traitement et les finitions. Notre planning est toujours communiqué à l&apos;avance pour minimiser la gêne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de la façade présente des désordres significatifs. À Lyon, les bâtiments anciens nécessitent une vigilance particulière, notamment dans les quartiers historiques comme le Vieux Lyon où la préservation du patrimoine est essentielle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Lyon ?
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
