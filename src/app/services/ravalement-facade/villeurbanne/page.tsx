import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Villeurbanne et ses environs. Avec plus de 15 ans',
  keywords: 'ravalement facade villeurbanne, ravalement immeuble villeurbanne, renovation facade villeurbanne, peinture facade villeurbanne, entreprise ravalement villeurbanne, ravalement facade maison villeurbanne',
};

export default function RavalementFacadeVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Villeurbanne et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons l&apos;apparence extérieure de vos bâtiments en alliant technique professionnelle et esthétique soignée.</p>

        <h2>Nos services de ravalement de façade a Villeurbanne</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération de peinture. Nous réalisons un diagnostic précis de votre bâtiment, évaluant chaque détail architectural à Villeurbanne. Notre équipe utilise des techniques modernes de rénovation qui protègent durablement vos murs contre l&apos;humidité, les intempéries et les dégradations. Nous travaillons avec des matériaux haute qualité garantissant une finition impeccable et une durabilité de 10 à 15 ans. Notre processus comprend un nettoyage approfondi, les réparations structurelles nécessaires, l&apos;application de primaires techniques et une finition parfaitement uniforme qui valorise votre patrimoine immobilier.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes sont certifiées RGE, nos devis sont transparents sans frais cachés, nous utilisons des techniques écologiques et nos interventions sont garanties 5 ans. Nous intervenons rapidement sur Villeurbanne et sa métropole, avec un délai moyen de réalisation de 5 à 10 jours selon la surface.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ du m² selon la complexité, l&apos;état initial du support et les matériaux choisis. Pour un pavillon standard de 100m², comptez un budget global entre 5 000€ et 12 000€. Nos devis détaillés incluent toujours une analyse précise sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. Un immeuble de 4 étages nécessite généralement 8 à 15 jours de travaux. Notre planning précis vous sera communiqué dès le diagnostic initial, avec une coordination optimale pour minimiser la gêne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 15-20 ans selon la réglementation, ou en cas de dégradations visibles comme des fissures, écaillages ou infiltrations. À Villeurbanne, les copropriétés doivent également respecter certaines normes esthétiques et de conservation du patrimoine architectural.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Villeurbanne ?
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
