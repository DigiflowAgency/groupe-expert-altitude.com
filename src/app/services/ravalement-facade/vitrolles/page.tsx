import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Vitrolles | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire référence en ravalement de façade sur Vitrolles et ses environs. Spécialistes de la rénovation extérieure, ',
  keywords: 'ravalement facade vitrolles, ravalement immeuble vitrolles, renovation facade vitrolles, peinture facade vitrolles, entreprise ravalement vitrolles, ravalement facade maison vitrolles',
};

export default function RavalementFacadeVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire référence en ravalement de façade sur Vitrolles et ses environs. Spécialistes de la rénovation extérieure, nous transformons l&apos;apparence de vos bâtiments avec une expertise technique et un sens du détail inégalés.</p>

        <h2>Nos services de ravalement de façade a Vitrolles</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération de peinture. Nous proposons une approche globale qui protège et embellit votre patrimoine immobilier. Notre équipe de professionnels réalise un diagnostic précis avant toute intervention, identifiant les pathologies potentielles comme les micro-fissures ou les zones d&apos;usure. Nous utilisons des techniques et matériaux haute performance garantissant une protection durable contre les intempéries et une esthétique impeccable. Pour les immeubles comme pour les maisons individuelles de Vitrolles, nous adaptons systématiquement notre méthode aux spécificités architecturales et aux contraintes environnementales locales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Notre équipe certifiée intervient avec un outillage professionnel dernier cri. Nous garantissons des délais maîtrisés, une transparence totale des coûts et une finition irréprochable. Nos interventions sont couvertes par une garantie décennale, gage de notre engagement qualité. Nous sommes également spécialisés dans les techniques écologiques de ravalement, réduisant l&apos;impact environnemental de nos chantiers.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ au m², selon la complexité du chantier, l&apos;état initial du support, les matériaux choisis et la surface totale. Un ravalement de 100m² coûtera généralement entre 3 000€ et 8 000€. Chez Groupe Expert Altitude Com, nous proposons un devis personnalisé gratuit après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. Pour un immeuble moyen de 300m², comptez entre 10 et 15 jours ouvrés. Les étapes incluent le diagnostic, la préparation des surfaces, les réparations éventuelles, l&apos;application des enduits et la finition. Notre planning est toujours établi en concertation avec le client pour minimiser la gêne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient légalement obligatoire tous les 10 ans ou lorsque l&apos;état de la façade présente des désordres significatifs compromettant la sécurité ou l&apos;isolation. À Vitrolles, où le climat peut être agressif, nous recommandons une inspection professionnelle tous les 7-8 ans. Les copropriétés ont l&apos;obligation de voter ce type de travaux lors d&apos;une assemblée générale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Vitrolles ?
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
