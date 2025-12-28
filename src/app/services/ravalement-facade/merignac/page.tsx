import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Mérignac | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Mérignac et ses environs. Spécialistes de la r',
  keywords: 'ravalement facade mérignac, ravalement immeuble mérignac, renovation facade mérignac, peinture facade mérignac, entreprise ravalement mérignac, ravalement facade maison mérignac',
};

export default function RavalementFacadeMerignacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Mérignac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Mérignac et ses environs. Spécialistes de la rénovation extérieure depuis plus de 15 ans, nous transformons l&apos;apparence de vos bâtiments avec un savoir-faire artisanal et une qualité irréprochable.</p>

        <h2>Nos services de ravalement de façade a Mérignac</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade répond aux exigences les plus strictes en matière de rénovation et de protection immobilière. Notre équipe de professionnels intervient sur tous types de bâtiments - maisons individuelles, immeubles collectifs et bâtiments tertiaires - avec une approche personnalisée et technique. Nous réalisons un diagnostic précis avant intervention, évaluant l&apos;état des supports, les pathologies potentielles et les traitements nécessaires. Nos techniques garantissent une protection durable contre l&apos;humidité, les agressions climatiques et une esthétique parfaite, en respectant les normes environnementales et techniques en vigueur.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : un devis gratuit et détaillé, une équipe certifiée avec plus de 15 ans d&apos;expérience, des matériaux haut de gamme respectueux de l&apos;environnement, une intervention rapide et propre, et une garantie décennale sur nos travaux. Nous sommes le partenaire de confiance des propriétaires de Mérignac et de la métropole bordelaise.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ du m², selon la complexité, les matériaux et les traitements nécessaires. Pour une maison moyenne de 100m², comptez un budget entre 3 000€ et 8 000€. Un diagnostic préalable gratuit permettra de préciser un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa superficie et de son état. Pour un immeuble de 3 étages, prévoyez entre 10 et 15 jours ouvrés. Notre équipe s&apos;engage à respecter les délais et à minimiser la gêne pour les occupants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de dégradation présente des risques pour la structure ou l&apos;environnement. À Mérignac, nous recommandons une inspection tous les 7-8 ans pour maintenir la valeur et l&apos;esthétique de votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Mérignac ?
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
