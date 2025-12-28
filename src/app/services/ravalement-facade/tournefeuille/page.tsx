import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Tournefeuille | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements de façade impeccables à Tournefeuille. Nos experts en rénovation transfor',
  keywords: 'ravalement facade tournefeuille, ravalement immeuble tournefeuille, renovation facade tournefeuille, peinture facade tournefeuille, entreprise ravalement tournefeuille, ravalement facade maison tournefeuille',
};

export default function RavalementFacadeTournefeuillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Tournefeuille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements de façade impeccables à Tournefeuille. Nos experts en rénovation transforment votre patrimoine avec des solutions sur-mesure qui allient esthétique et protection durable.</p>

        <h2>Nos services de ravalement de façade a Tournefeuille</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous intervenons méticuleusement sur tous types de bâtiments à Tournefeuille, qu&apos;il s&apos;agisse de maisons individuelles ou d&apos;immeubles collectifs. Notre approche technique commence par un diagnostic précis de l&apos;état des surfaces, permettant de déterminer les traitements adaptés : réparation des fissures, protection contre l&apos;humidité, application de peintures spécialisées. Nos équipes utilisent uniquement des matériaux haute performance garantissant une résistance optimale aux intempéries et une tenue dans le temps. Chaque chantier est personnalisé, avec des techniques adaptées selon la nature des supports : enduit, pierre, crépi ou brique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : 15 ans d&apos;expérience locale, des techniciens certifiés, un devis gratuit sous 48h, des matériaux écologiques, et une garantie décennale. Nous sommes reconnus pour notre professionnalisme et notre engagement qualité total.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 35€ et 80€ par m², selon la complexité du chantier, les matériaux et les traitements nécessaires. Pour une maison moyenne de 100m², comptez un budget global entre 3500€ et 8000€. Un diagnostic précis permettra d&apos;affiner ce premier estimatif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de son état. En moyenne, nous réalisons les travaux entre 10 et 20 jours ouvrables. Un immeuble de 4 étages nécessitera environ 15 jours, incluant préparation, réparations, et finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans selon la réglementation. Les copropriétés doivent le réaliser quand l&apos;état de la façade présente des dégradations compromettant l&apos;isolation ou l&apos;esthétique. À Tournefeuille, nous conseillons un diagnostic tous les 8-10 ans pour prévenir les désordres.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Tournefeuille ?
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
