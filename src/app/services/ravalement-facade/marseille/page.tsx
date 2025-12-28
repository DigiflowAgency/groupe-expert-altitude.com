import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Marseille | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Marseille, transforme l&apos;apparence extérieure de vos bâtiments avec précisi',
  keywords: 'ravalement facade marseille, ravalement immeuble marseille, renovation facade marseille, peinture facade marseille, entreprise ravalement marseille, ravalement facade maison marseille',
};

export default function RavalementFacadeMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Marseille, transforme l&apos;apparence extérieure de vos bâtiments avec précision et expertise. Nous intervenons sur tous types de surfaces dans la région marseillaise, en apportant une solution sur-mesure à chaque projet de rénovation.</p>

        <h2>Nos services de ravalement de façade a Marseille</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération esthétique. Nous réalisons un diagnostic complet avant toute intervention, évaluant l&apos;état structural et les spécificités de votre bâtiment. Notre équipe utilise des techniques innovantes adaptées au climat méditerranéen, protégeant efficacement vos murs contre l&apos;humidité, les UV et les agressions environnementales. Nous travaillons avec des matériaux haute performance garantissant une tenue dans le temps et une isolation thermique optimale. Chaque chantier à Marseille est traité avec une attention méticuleuse, en respectant les normes techniques et esthétiques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans le ravalement de façade, 2) Des techniciens certifiés et formés aux dernières techniques, 3) Un devis personnalisé et transparent sans frais cachés, 4) Une garantie décennale sur nos travaux. Nous sommes reconnus comme le spécialiste de la rénovation de façade à Marseille et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 35€ et 80€ par m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la surface. Pour une maison de 100m², comptez un budget global entre 3 500€ et 8 000€. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, pour un immeuble de 4 étages à Marseille, nous estimons un délai de 10 à 15 jours ouvrables. Nos équipes optimisent chaque étape : préparation, réparation, application des enduits et peintures, finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement de façade devient obligatoire tous les 10 ans dans les copropriétés, selon le Code de la Construction. À Marseille, cette obligation est particulièrement importante en raison des conditions climatiques qui sollicitent fortement les façades. Un ravalement permet également de maintenir la valeur immobilière et de prévenir les dégradations structurelles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Marseille ?
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
