import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour les ravalements de façade à Ivry-sur-Seine, transforme vos bâtiments avec un savoir-faire te',
  keywords: 'ravalement facade ivry-sur-seine, ravalement immeuble ivry-sur-seine, renovation facade ivry-sur-seine, peinture facade ivry-sur-seine, entreprise ravalement ivry-sur-seine, ravalement facade maison ivry-sur-seine',
};

export default function RavalementFacadeIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour les ravalements de façade à Ivry-sur-Seine, transforme vos bâtiments avec un savoir-faire technique et esthétique. Nous sublimez l&apos;apparence extérieure de vos propriétés grâce à des solutions sur-mesure adaptées à l&apos;architecture urbaine locale.</p>

        <h2>Nos services de ravalement de façade a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous intervenons de manière professionnelle sur tous types de bâtiments - maisons individuelles, immeubles collectifs ou bâtiments tertiaires - en garantissant une protection durable contre les agressions climatiques. Notre expertise technique nous permet de réaliser des travaux précis, en utilisant des matériaux haute performance qui préservent la structure et l&apos;isolation de votre bien. Chaque projet fait l&apos;objet d&apos;un diagnostic personnalisé, avec une évaluation précise des supports, des pathologies existantes et des solutions techniques les plus adaptées. Nos équipes maîtrisent parfaitement les techniques de peinture, d&apos;enduit, de nettoyage et de réfection, en respectant les normes environnementales et techniques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale confirmée sur Ivry-sur-Seine depuis plus de 15 ans
✓ Équipe de 12 professionnels certifiés et formés en permanence
✓ Devis gratuit et détaillé sous 48h
✓ Garantie décennale sur tous nos travaux
✓ Solutions techniques innovantes respectueuses de l&apos;environnement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie généralement entre 50€ et 120€ par m², selon la complexité des travaux, l&apos;état initial du support, les matériaux choisis et l&apos;accessibilité du chantier. Pour un pavillon de 100m², comptez un budget global entre 5 000€ et 12 000€. Un diagnostic précis est indispensable pour obtenir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa complexité. En moyenne, pour un immeuble de 4 à 6 étages, les travaux s&apos;étendent sur 3 à 5 semaines. Les étapes principales incluent le diagnostic, la préparation des surfaces, les réparations, l&apos;application des enduits et des peintures, avec des temps de séchage entre chaque intervention.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement de façade devient obligatoire tous les 10 ans dans les copropriétés, conformément au Code de la construction. Il est également imposé lorsque l&apos;état de dégradation présente des risques pour la sécurité (fissures importantes, infiltrations, décollement d&apos;enduit). À Ivry-sur-Seine, nous recommandons une inspection professionnelle tous les 8 à 12 ans pour maintenir la valeur et l&apos;esthétique de votre patrimoine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Ivry-sur-Seine ?
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
