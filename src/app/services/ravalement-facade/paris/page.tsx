import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Paris | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour la rénovation de façades à Paris, transforme l&apos;apparence de vos bâtiments avec un savoir-fai',
  keywords: 'ravalement facade paris, ravalement immeuble paris, renovation facade paris, peinture facade paris, entreprise ravalement paris, ravalement facade maison paris',
};

export default function RavalementFacadeParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour la rénovation de façades à Paris, transforme l&apos;apparence de vos bâtiments avec un savoir-faire unique et une expertise pointue. Nous redonnons vie et éclat aux façades des immeubles et maisons parisiennes depuis plus de 15 ans.</p>

        <h2>Nos services de ravalement de façade a Paris</h2>
        <div className="space-y-4">
          <p>Le ravalement de façade est bien plus qu&apos;une simple opération esthétique. C&apos;est un investissement stratégique qui protège et valorise votre patrimoine immobilier. Notre équipe de professionnels réalise des interventions complètes, depuis le diagnostic initial jusqu&apos;à la finition finale. Nous utilisons des techniques et matériaux innovants garantissant une protection optimale contre l&apos;humidité, les intempéries et la pollution urbaine parisienne. Chaque projet est personnalisé, avec une attention méticuleuse aux spécificités architecturales, aux normes environnementales et aux contraintes techniques de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise technique certifiée avec plus de 500 chantiers réalisés à Paris
✓ Devis gratuit et précis sous 48h
✓ Équipe de 15 professionnels spécialisés
✓ Garantie décennale et assurance professionnelle complète
✓ Techniques éco-responsables et matériaux haute performance</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ par m², selon la complexité, les matériaux et l&apos;état initial. Pour un immeuble parisien standard de 200m², comptez un budget global entre 10 000€ et 24 000€. Nos devis détaillés incluent tous les coûts sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble à Paris oscille généralement entre 3 et 6 semaines. Les facteurs déterminants sont la surface, l&apos;accessibilité, les techniques utilisées et les conditions météorologiques. Notre planning précis vous sera communiqué dès la phase de diagnostic.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans selon le Code de la Construction. À Paris, les immeubles doivent légalement présenter une façade en bon état, sans dégradations apparentes. Les copropriétés sont tenues de programmer ces travaux pour maintenir la valeur et la sécurité du bâtiment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Paris ?
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
