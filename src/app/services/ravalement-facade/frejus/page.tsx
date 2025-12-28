import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Fréjus | Groupe Expert Altitude Com',
  description: 'Situé au cœur de la magnifique région de Fréjus, le Groupe Expert Altitude Com est votre partenaire de confiance pour transformer et protéger les façades d',
  keywords: 'ravalement facade fréjus, ravalement immeuble fréjus, renovation facade fréjus, peinture facade fréjus, entreprise ravalement fréjus, ravalement facade maison fréjus',
};

export default function RavalementFacadeFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Situé au cœur de la magnifique région de Fréjus, le Groupe Expert Altitude Com est votre partenaire de confiance pour transformer et protéger les façades de vos bâtiments. Nous offrons des services de ravalement de façade qui redonnent vie et éclat à votre patrimoine immobilier.</p>

        <h2>Nos services de ravalement de façade a Fréjus</h2>
        <div className="space-y-4">
          <p>Notre expertise en ravalement de façade s&apos;étend bien au-delà d&apos;une simple opération de peinture. Nous proposons une approche technique et esthétique complète, adaptée aux spécificités architecturales de Fréjus et de sa région. Notre processus commence par un diagnostic précis de l&apos;état de votre façade, évaluant les pathologies potentielles comme les micro-fissures, l&apos;usure des matériaux ou les traces d&apos;humidité. Nos équipes utilisent des techniques et des matériaux de haute qualité, garantissant une rénovation durable qui résiste aux conditions climatiques méditerranéennes. Chaque projet est personnalisé, qu&apos;il s&apos;agisse d&apos;une maison individuelle ou d&apos;un immeuble, avec des solutions techniques qui préservent l&apos;intégrité architecturale tout en améliorant l&apos;isolation thermique et l&apos;apparence générale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés et disposent de plus de 15 ans d&apos;expérience dans la rénovation de façades. Nous proposons des devis transparents sans frais cachés, utilisons des matériaux écologiques et bénéficions d&apos;une assurance décennale. Notre engagement qualité se traduit par des délais respectés et une finition impeccable, qui font de nous le leader du ravalement de façade à Fréjus.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, l&apos;état initial de la surface et les matériaux choisis. Pour une maison moyenne de 100m², comptez un budget global entre 3 000€ et 8 000€. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, pour un immeuble de 4 à 6 étages, le chantier s&apos;étend sur 3 à 5 semaines. Nos équipes optimisent chaque étape : préparation, réparations, application des enduits et peintures, pour minimiser les délais sans compromettre la qualité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10-15 ans ou lorsque des désordres significatifs sont constatés. La loi impose cette rénovation pour les copropriétés afin de garantir la sécurité et la préservation du bâti. À Fréjus, où l&apos;ensoleillement et l&apos;air marin peuvent dégrader rapidement les façades, une maintenance régulière est fortement recommandée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Fréjus ?
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
