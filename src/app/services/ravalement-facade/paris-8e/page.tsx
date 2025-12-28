import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Paris 8e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade d&apos;exception dans le prestigieux 8e arrondissement parisien. Nos',
  keywords: 'ravalement facade paris 8e, ravalement immeuble paris 8e, renovation facade paris 8e, peinture facade paris 8e, entreprise ravalement paris 8e, ravalement facade maison paris 8e',
};

export default function RavalementFacadeParis8ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Paris 8e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade d&apos;exception dans le prestigieux 8e arrondissement parisien. Nos experts transforment vos bâtiments avec des solutions sur-mesure qui combinent esthétique, durabilité et protection.</p>

        <h2>Nos services de ravalement de façade a Paris 8e</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade répond aux exigences les plus pointues de l&apos;immobilier parisien. Nous intervenons sur tous types de bâtiments, des immeubles historiques aux résidences contemporaines du 8e arrondissement. Notre approche technique intègre un diagnostic précis, un traitement des supports, une préparation minutieuse et une application de peinture ou d&apos;enduit haute performance. Nos équipes utilisent uniquement des matériaux certifiés, garantissant une finition impeccable et une protection durable contre les intempéries. Chaque chantier fait l&apos;objet d&apos;un suivi personnalisé, avec des techniques adaptées à la structure et à l&apos;environnement architectural spécifique de Paris.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos experts comptent plus de 15 ans d&apos;expérience dans le ravalement de façade. Nous proposons des devis transparents sans surprises, un délai d&apos;intervention rapide de 10 jours maximum, et une garantie décennale. Notre certification QualiParis atteste de notre engagement qualité et notre maîtrise technique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ par m², selon la complexité, les matériaux et l&apos;état initial du support. Pour un immeuble parisien typique du 8e arrondissement, comptez en moyenne 80€/m². Un diagnostic préalable gratuit permet un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble oscille entre 2 et 4 semaines, selon la surface, l&apos;accessibilité et les techniques utilisées. Un immeuble moyen de 300m² nécessitera environ 15 jours de travaux, hors conditions météorologiques exceptionnelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient obligatoire tous les 10 ans à Paris, conformément à l&apos;arrêté municipal. Il est également requis en cas de dégradations visibles, fissures, écaillements ou problèmes d&apos;étanchéité. Notre expertise vous guide dans ces démarches réglementaires.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Paris 8e ?
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
