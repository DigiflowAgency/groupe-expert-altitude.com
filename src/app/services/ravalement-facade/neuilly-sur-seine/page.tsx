import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Neuilly-sur-Seine | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de haute qualité à Neuilly-sur-Seine. Spécialistes de la rén',
  keywords: 'ravalement facade neuilly-sur-seine, ravalement immeuble neuilly-sur-seine, renovation facade neuilly-sur-seine, peinture facade neuilly-sur-seine, entreprise ravalement neuilly-sur-seine, ravalement facade maison neuilly-sur-seine',
};

export default function RavalementFacadeNeuillySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Neuilly-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de haute qualité à Neuilly-sur-Seine. Spécialistes de la rénovation et de l&apos;embellissement, nous transformons l&apos;apparence de vos bâtiments avec une expertise technique et un sens du détail inégalés.</p>

        <h2>Nos services de ravalement de façade a Neuilly-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération esthétique. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles résidentiels et copropriétés - en proposant une approche sur-mesure. Notre méthodologie commence par un diagnostic précis de l&apos;état des surfaces, suivi d&apos;un traitement adapté contre l&apos;humidité, les micro-fissures et les dégradations. À Neuilly-sur-Seine, nous utilisons uniquement des matériaux de haute qualité garantissant une protection durable et un rendu impeccable. Nos équipes maîtrisent parfaitement les techniques modernes de ravalement, des traitements anti-mousse aux peintures écologiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expertise dans le ravalement de façades
✓ Équipe certifiée et formée aux dernières normes techniques
✓ Devis gratuit et personnalisé sous 48h
✓ Garantie décennale sur tous nos travaux
✓ Solutions respectueuses de l&apos;environnement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ par m², selon la complexité des travaux, les matériaux choisis et l&apos;état initial de la surface. Pour un immeuble à Neuilly-sur-Seine, comptez en moyenne 80€/m² pour un ravalement complet incluant préparation, réparations et peinture.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. Pour un immeuble moyen de 300-500 m², notre équipe réalise généralement les travaux entre 3 et 6 semaines. Nous optimisons chaque étape pour minimiser la gêne pour les occupants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10 ans selon le Code de la Construction, ou en cas de dégradations significatives. À Neuilly-sur-Seine, nous recommandons une inspection tous les 7-8 ans pour maintenir la valeur et l&apos;esthétique de votre patrimoine immobilier.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Neuilly-sur-Seine ?
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
