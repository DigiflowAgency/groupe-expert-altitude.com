import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Spécialiste du ravalement de façade à La Seyne-sur-Mer depuis plus de 15 ans, le Groupe Expert Altitude Com transforme votre patrimoine avec précision et é',
  keywords: 'ravalement facade la seyne-sur-mer, ravalement immeuble la seyne-sur-mer, renovation facade la seyne-sur-mer, peinture facade la seyne-sur-mer, entreprise ravalement la seyne-sur-mer, ravalement facade maison la seyne-sur-mer',
};

export default function RavalementFacadeLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste du ravalement de façade à La Seyne-sur-Mer depuis plus de 15 ans, le Groupe Expert Altitude Com transforme votre patrimoine avec précision et élégance. Nos solutions sur-mesure redonnent vie et éclat aux façades de votre maison ou immeuble.</p>

        <h2>Nos services de ravalement de façade a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous intervenons méticuleusement sur tous types de bâtiments à La Seyne-sur-Mer, en utilisant des techniques modernes et des matériaux haute performance. Notre expertise couvre le diagnostic préalable, le traitement des supports, l&apos;application de peintures et revêtements spécifiques, garantissant une protection durable contre les agressions climatiques. Chaque chantier fait l&apos;objet d&apos;une étude personnalisée, avec des solutions techniques adaptées à la configuration architecturale et aux contraintes environnementales locales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de 12 professionnels qualifiés spécialisés en ravalement
✓ Devis gratuit et détaillé sous 48h
✓ Garantie décennale et assurance professionnelle
✓ Techniques respectueuses de l&apos;environnement
✓ Plus de 500 chantiers réalisés sur la région</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen d&apos;un ravalement de façade varie entre 35€ et 80€ par m², selon la complexité, l&apos;état du support et les finitions choisies. Pour une maison de 100m², comptez un budget global entre 3 500€ et 8 000€ TTC.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble oscille généralement entre 2 et 4 semaines, en fonction de la surface, du nombre de niveaux et des traitements spécifiques nécessaires. Notre équipe optimise systématiquement les délais.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient obligatoire tous les 10-15 ans, ou en cas de dégradations significatives compromettant la structure. La réglementation impose également un ravalement dans les copropriétés présentant des désordres esthétiques ou structurels importants.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a La Seyne-sur-Mer ?
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
