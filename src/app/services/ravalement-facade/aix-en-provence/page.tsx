import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Aix-en-Provence, transforme l&apos;apparence de vos bâtiments avec une expertis',
  keywords: 'ravalement facade aix-en-provence, ravalement immeuble aix-en-provence, renovation facade aix-en-provence, peinture facade aix-en-provence, entreprise ravalement aix-en-provence, ravalement facade maison aix-en-provence',
};

export default function RavalementFacadeAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Aix-en-Provence, transforme l&apos;apparence de vos bâtiments avec une expertise technique et esthétique inégalée. Nous redonnons vie à vos murs avec des solutions sur-mesure qui valorisent votre patrimoine immobilier.</p>

        <h2>Nos services de ravalement de façade a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>Nos services de ravalement de façade représentent bien plus qu&apos;une simple rénovation cosmétique. Nous proposons une approche complète qui protège et embellit votre bien immobilier. Notre équipe d&apos;experts analyse précisément l&apos;état de votre façade, sélectionne les matériaux les plus adaptés et met en œuvre des techniques de rénovation dernier cri. Dans la région aixoise, nous intervenons aussi bien sur les maisons individuelles que sur les immeubles collectifs, en garantissant une finition impeccable et une durabilité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : des techniciens certifiés, un diagnostic gratuit, des délais respectés à 100%, des matériaux écologiques et une garantie décennale. Nos réalisations à Aix-en-Provence témoignent de notre savoir-faire et de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial du support. Pour une maison moyenne de 100m² à Aix-en-Provence, comptez un budget global entre 3 000€ et 8 000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade d&apos;immeuble prend généralement entre 2 et 4 semaines, en fonction de la surface totale, de l&apos;accessibilité et des conditions météorologiques. Notre équipe optimise chaque intervention pour minimiser la gêne et respecter les délais convenus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans, ou lorsque des signes de dégradation apparaissent : fissures, infiltrations, écaillements. À Aix-en-Provence, la réglementation municipale recommande également une rénovation périodique pour maintenir l&apos;esthétique urbaine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Aix-en-Provence ?
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
