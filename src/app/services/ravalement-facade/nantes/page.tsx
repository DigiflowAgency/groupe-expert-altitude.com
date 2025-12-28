import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Nantes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire référence en ravalement de façade à Nantes, transformant l&apos;apparence et la protection de vos bâtiments a',
  keywords: 'ravalement facade nantes, ravalement immeuble nantes, renovation facade nantes, peinture facade nantes, entreprise ravalement nantes, ravalement facade maison nantes',
};

export default function RavalementFacadeNantesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Nantes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire référence en ravalement de façade à Nantes, transformant l&apos;apparence et la protection de vos bâtiments avec un savoir-faire technique et esthétique unique dans l&apos;agglomération nantaise.</p>

        <h2>Nos services de ravalement de façade a Nantes</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une expertise complète qui protège durablement votre patrimoine immobilier contre les agressions climatiques et environnementales. Notre équipe de professionnels intervient sur tous types de bâtiments - maisons individuelles, immeubles collectifs, locaux commerciaux - en utilisant des techniques et matériaux de dernière génération. Chaque chantier fait l&apos;objet d&apos;un diagnostic précis, permettant de déterminer le traitement optimal : réfection des enduits, application de peintures spécifiques, traitement anti-humidité ou rénovation complète. Nous garantissons une intervention propre, rapide et respectueuse des normes environnementales actuelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Nantes, 2) Des techniciens certifiés et formés aux dernières normes, 3) Des matériaux écologiques et haute performance, 4) Un devis personnalisé et transparent sans frais cachés. Notre engagement qualité se traduit par des interventions sur-mesure et une satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ du m², selon la surface, l&apos;état initial et les techniques utilisées. Pour une maison moyenne de 100m², comptez un budget global entre 3000€ et 8000€. Nos devis détaillés incluent systématiquement le diagnostic, les matériaux et la main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa complexité. Pour un immeuble de 4 étages, notre équipe réalise généralement les travaux entre 10 et 15 jours ouvrés. Nous optimisons chaque intervention pour minimiser la gêne et respecter les délais convenus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans selon l&apos;arrêté du 31 janvier 1986. Les copropriétés et immeubles anciens sont particulièrement concernés. Les signes qui nécessitent une intervention : fissures, infiltrations, dégradation des peintures, présence de moisissures ou détérioration de l&apos;isolation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Nantes ?
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
