import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a La Ciotat | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à La Ciotat et ses environs. Avec plus de 15 ans',
  keywords: 'ravalement facade la ciotat, ravalement immeuble la ciotat, renovation facade la ciotat, peinture facade la ciotat, entreprise ravalement la ciotat, ravalement facade maison la ciotat',
};

export default function RavalementFacadeLaCiotatPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a La Ciotat</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à La Ciotat et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons l&apos;apparence de vos bâtiments en alliant technique professionnelle et esthétique soignée.</p>

        <h2>Nos services de ravalement de façade a La Ciotat</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une approche complète qui protège et valorise votre patrimoine immobilier. Notre équipe réalise un diagnostic précis avant intervention, évaluant l&apos;état des supports, les désordres potentiels et les techniques de rénovation adaptées. À La Ciotat, où l&apos;environnement maritime sollicite particulièrement les façades, nous utilisons des matériaux haute résistance garantissant une protection optimale contre l&apos;humidité et les embruns. Nos interventions comprennent le traitement des fissures, le nettoyage haute pression, les enduits techniques et la mise en peinture finale selon les normes en vigueur.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à La Ciotat
- Équipe de 12 professionnels certifiés
- Devis gratuit et précis sous 48h
- Techniques respectueuses de l&apos;environnement
- Garantie décennale sur nos travaux
- Matériaux premium sélectionnés avec soin</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ le m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial de la surface. Pour une maison moyenne de 100m² à La Ciotat, comptez un budget global entre 3 000€ et 8 000€, travaux préparatoires et finitions comprises.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, un immeuble de 3-4 étages nécessite entre 10 et 15 jours ouvrés. Notre équipe s&apos;engage à respecter un planning précis, avec des interventions méthodiques minimisant la gêne pour les occupants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10-15 ans selon le Code de la Construction. Les copropriétés doivent légalement l&apos;effectuer quand l&apos;état de dégradation compromet l&apos;isolation, l&apos;esthétique ou la solidité du bâtiment. À La Ciotat, notre climat maritime peut accélérer cette nécessité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a La Ciotat ?
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
