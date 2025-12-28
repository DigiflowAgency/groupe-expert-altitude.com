import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Paris 5e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour des ravalements de façade impeccables au cœur du Paris 5e. Nous transformons l&apos;apparence de ',
  keywords: 'ravalement facade paris 5e, ravalement immeuble paris 5e, renovation facade paris 5e, peinture facade paris 5e, entreprise ravalement paris 5e, ravalement facade maison paris 5e',
};

export default function RavalementFacadeParis5ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Paris 5e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour des ravalements de façade impeccables au cœur du Paris 5e. Nous transformons l&apos;apparence de vos bâtiments avec une expertise technique et un sens du détail qui font toute la différence dans l&apos;arrondissement.</p>

        <h2>Nos services de ravalement de façade a Paris 5e</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une intervention complète qui protège et valorise votre patrimoine immobilier. Notre équipe de professionnels analyse précisément l&apos;état de votre façade, sélectionne les techniques et matériaux adaptés, et réalise un travail sur-mesure. Que ce soit pour un immeuble historique du Quartier Latin ou une maison contemporaine, nous garantissons une finition impeccable qui résiste aux conditions climatiques parisiennes. Nos interventions combinent technique de pointe, respect des normes environnementales et souci du détail architectural.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Paris, 2) Des techniciens certifiés et formés aux dernières techniques de ravalement, 3) Un devis précis et transparent sans surprise, 4) Une approche éco-responsable avec des produits de rénovation haute performance et à faible impact environnemental.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ par m², selon la complexité du bâtiment, les matériaux utilisés et l&apos;état initial de la façade. Pour un immeuble parisien moyen dans le 5e arrondissement, comptez environ 80€/m² pour une rénovation complète et de qualité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, nous réalisons les travaux entre 3 et 6 semaines. Un immeuble de 4 étages dans le Paris 5e prendra environ 4 semaines, travaux préparatoires et finitions comprises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de dégradation présente des risques pour la sécurité ou l&apos;esthétique. À Paris, les copropriétés du 5e arrondissement sont particulièrement attentives à maintenir l&apos;aspect architectural de leurs immeubles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Paris 5e ?
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
