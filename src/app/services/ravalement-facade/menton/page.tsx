import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Menton | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en ravalement de façade à Menton, transforme l&apos;apparence extérieure de vos bâtiments avec précision et élégan',
  keywords: 'ravalement facade menton, ravalement immeuble menton, renovation facade menton, peinture facade menton, entreprise ravalement menton, ravalement facade maison menton',
};

export default function RavalementFacadeMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en ravalement de façade à Menton, transforme l&apos;apparence extérieure de vos bâtiments avec précision et élégance. Nos solutions sur-mesure redonnent vie et éclat aux façades des maisons et immeubles de la Côte d&apos;Azur.</p>

        <h2>Nos services de ravalement de façade a Menton</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous réalisons un diagnostic technique complet avant toute intervention, évaluant l&apos;état des supports, les potentiels désordres structurels et les besoins spécifiques de votre bâtiment. Notre équipe de professionnels utilise des techniques et matériaux adaptés aux conditions climatiques méditerranéennes, garantissant une protection durable contre l&apos;humidité, les UV et les variations de température. Nous proposons différentes finitions - enduit traditionnel, peinture minérale, revêtement technique - toujours dans le respect des normes environnementales et architecturales locales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre expérience de plus de 15 ans à Menton, une équipe de 12 experts certifiés, un devis précis sous 48h, des garanties décennales, et une approche éco-responsable. Nous intervenons sur tous types de bâtiments, des villas individuelles aux copropriétés complexes, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 45€ et 120€ le m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial du support. Pour une maison moyenne de 100m² à Menton, comptez un budget global entre 4 500€ et 12 000€. Un diagnostic préalable gratuit permet d&apos;affiner précisément ce chiffrage.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de sa configuration. Pour un immeuble de 300m², notre équipe réalise généralement le chantier entre 10 et 15 jours ouvrés. Les phases principales incluent la préparation des surfaces, les réparations éventuelles, l&apos;application des enduits et des peintures, avec des temps de séchage adaptés.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de dégradation présente des risques pour la structure ou l&apos;environnement. À Menton, compte tenu du climat maritime, nous recommandons une inspection professionnelle tous les 7-8 ans pour prévenir toute détérioration prématurée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Menton ?
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
