import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Nice | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Nice, transforme l&apos;apparence extérieure de vos bâtiments avec précision et',
  keywords: 'ravalement facade nice, ravalement immeuble nice, renovation facade nice, peinture facade nice, entreprise ravalement nice, ravalement facade maison nice',
};

export default function RavalementFacadeNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Nice, transforme l&apos;apparence extérieure de vos bâtiments avec précision et expertise. Depuis plus de 15 ans, nous redonnons vie aux façades de la Côte d&apos;Azur avec des solutions sur-mesure.</p>

        <h2>Nos services de ravalement de façade a Nice</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une intervention technique complète qui protège et valorise votre patrimoine immobilier. Notre équipe de professionnels analyse méticuleusement chaque surface pour déterminer le traitement optimal, qu&apos;il s&apos;agisse de maisons individuelles ou d&apos;immeubles à Nice. Nous utilisons des techniques et matériaux de dernière génération garantissant une finition impeccable et une durabilité maximale contre les agressions climatiques méditerranéennes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Nice
- Techniciens certifiés et formés aux dernières normes
- Devis gratuit et personnalisé sous 48h
- Garantie décennale sur tous nos travaux
- Matériaux écologiques et haute performance</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ par m², selon la surface, l&apos;état initial et les finitions choisies. Pour un pavillon moyen à Nice, comptez un budget global entre 5 000€ et 12 000€. Nos devis détaillés vous permettront une transparence totale.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille. En moyenne, pour un immeuble de 4 étages à Nice, nous estimons un délai de 3 à 5 semaines. Notre planification précise minimise les nuisances et respecte strictement les délais convenus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10 ans selon le code de la construction, ou lorsque l&apos;état de la façade présente des dégradations significatives. À Nice, les conditions climatiques peuvent accélérer cette usure. Un diagnostic gratuit permet de déterminer la nécessité d&apos;intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Nice ?
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
