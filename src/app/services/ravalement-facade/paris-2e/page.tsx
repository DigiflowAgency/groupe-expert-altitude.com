import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Paris 2e | Groupe Expert Altitude Com',
  description: 'Au cœur de Paris 2e, Groupe Expert Altitude Com transforme vos façades avec un savoir-faire précis et une expertise inégalée. Spécialistes du ravalement de',
  keywords: 'ravalement facade paris 2e, ravalement immeuble paris 2e, renovation facade paris 2e, peinture facade paris 2e, entreprise ravalement paris 2e, ravalement facade maison paris 2e',
};

export default function RavalementFacadeParis2ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Paris 2e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Au cœur de Paris 2e, Groupe Expert Altitude Com transforme vos façades avec un savoir-faire précis et une expertise inégalée. Spécialistes du ravalement de façade, nous redonnons vie et élégance à vos bâtiments historiques et contemporains.</p>

        <h2>Nos services de ravalement de façade a Paris 2e</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nos experts interviennent avec une méthodologie rigoureuse, commençant par un diagnostic technique complet qui identifie les désordres potentiels. Nous utilisons uniquement des matériaux haute performance adaptés à l&apos;architecture parisienne, garantissant une protection durable contre l&apos;humidité et les agressions environnementales. Notre équipe qualifiée maîtrise parfaitement les techniques de ravalement pour immeubles anciens comme modernes, en respectant scrupuleusement les normes techniques et réglementaires spécifiques au 2e arrondissement de Paris.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre certification RGE, une expérience de plus de 15 ans à Paris, des techniciens hautement qualifiés, et des garanties décennales. Nous proposons un devis personnalisé sous 48h et un accompagnement total de votre projet de ravalement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ par m², selon la complexité, les matériaux et l&apos;état initial. Pour un immeuble parisien type dans le 2e arrondissement, comptez environ 80€/m² en moyenne, travaux préparatifs et finitions comprises.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade d&apos;immeuble à Paris prend généralement entre 3 et 6 semaines. Ce délai dépend de la surface, de l&apos;état initial, des techniques utilisées et des conditions météorologiques. Notre équipe optimise chaque étape pour minimiser la gêne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient obligatoire tous les 10 ans à Paris, conformément au Code de la Construction. Il est également requis en cas de dégradations visibles, de fissures supérieures à 0,5 mm, ou avant une vente immobilière pour maintenir la valeur du bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Paris 2e ?
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
