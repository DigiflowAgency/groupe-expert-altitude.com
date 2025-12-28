import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Toulouse | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com transforme les façades de Toulouse avec un savoir-faire artisanal et une expertise technique inégalée. Spécialistes du ravalemen',
  keywords: 'ravalement facade toulouse, ravalement immeuble toulouse, renovation facade toulouse, peinture facade toulouse, entreprise ravalement toulouse, ravalement facade maison toulouse',
};

export default function RavalementFacadeToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com transforme les façades de Toulouse avec un savoir-faire artisanal et une expertise technique inégalée. Spécialistes du ravalement, nous redonnons vie et élégance à vos bâtiments grâce à des solutions sur-mesure adaptées à l&apos;architecture toulousaine.</p>

        <h2>Nos services de ravalement de façade a Toulouse</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une approche globale qui protège et valorise votre patrimoine immobilier. Notre équipe de professionnels réalise un diagnostic précis avant intervention, identifiant chaque spécificité de votre bâtiment. Nous utilisons uniquement des matériaux de haute qualité garantissant une protection durable contre les intempéries et une finition impeccable. Nos techniques respectent les normes environnementales et permettent d&apos;améliorer l&apos;isolation thermique de votre propriété, générant jusqu&apos;à 30% d&apos;économies d&apos;énergie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Toulouse
✓ Devis gratuit et personnalisé sous 48h
✓ Équipe certifiée et assurée
✓ Techniques éco-responsables
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial. Pour un pavillon standard à Toulouse, comptez environ 5 000€ à 12 000€ pour une surface moyenne de 100-150 m².
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. Pour un immeuble de 4-5 étages à Toulouse, notre équipe réalise généralement le chantier en 10 à 15 jours ouvrés, en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans selon le Code de la Construction. Il est notamment requis quand l&apos;état de la façade présente des signes de dégradation comme des fissures, des écaillages ou une perte significative d&apos;étanchéité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Toulouse ?
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
