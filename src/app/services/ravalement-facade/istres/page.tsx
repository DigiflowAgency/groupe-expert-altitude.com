import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Istres | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour les ravalements de façade à Istres, transformant vos bâtiments avec un savoir-faire te',
  keywords: 'ravalement facade istres, ravalement immeuble istres, renovation facade istres, peinture facade istres, entreprise ravalement istres, ravalement facade maison istres',
};

export default function RavalementFacadeIstresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Istres</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour les ravalements de façade à Istres, transformant vos bâtiments avec un savoir-faire technique et une expertise locale unique.</p>

        <h2>Nos services de ravalement de façade a Istres</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade répond aux exigences techniques et esthétiques les plus pointues. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles collectifs et bâtiments professionnels - avec une approche personnalisée. Notre équipe qualifiée utilise uniquement des matériaux haute performance, garantissant une protection durable contre les agressions climatiques typiques de la région d&apos;Istres. Chaque projet fait l&apos;objet d&apos;un diagnostic précis, permettant de sélectionner les techniques et revêtements les mieux adaptés : peinture, enduit, résine ou technique mixte.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expérience sur Istres et sa région. Devis gratuit et détaillé sous 48h. Techniciens formés aux dernières normes environnementales. Garantie décennale sur tous nos travaux. Utilisation exclusive de matériaux écologiques et résistants.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 40€ et 80€ par m², selon la complexité du support, les matériaux choisis et l&apos;état initial. Pour une maison moyenne de 100m², comptez entre 4 000€ et 8 000€ TTC. Un diagnostic préalable permet un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de sa configuration. Pour un immeuble standard de 300m², notre équipe réalise généralement les travaux entre 10 et 15 jours ouvrés, en respectant un planning précis et sans interruption.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans, ou lorsque des dégradations significatives sont constatées : fissures, infiltrations, décoloration importante. La réglementation impose également un ravalement dans les copropriétés tous les 20 ans ou en cas de désordres structurels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Istres ?
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
