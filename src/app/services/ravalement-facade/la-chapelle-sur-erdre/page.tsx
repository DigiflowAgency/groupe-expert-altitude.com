import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements de façade impeccables à La Chapelle-sur-Erdre et ses environs. Nous trans',
  keywords: 'ravalement facade la chapelle-sur-erdre, ravalement immeuble la chapelle-sur-erdre, renovation facade la chapelle-sur-erdre, peinture facade la chapelle-sur-erdre, entreprise ravalement la chapelle-sur-erdre, ravalement facade maison la chapelle-sur-erdre',
};

export default function RavalementFacadeLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements de façade impeccables à La Chapelle-sur-Erdre et ses environs. Nous transformons l&apos;apparence extérieure de votre propriété avec un savoir-faire artisanal et des techniques de rénovation dernier cri.</p>

        <h2>Nos services de ravalement de façade a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération esthétique. Nous réalisons des interventions complètes qui protègent durablement vos murs contre l&apos;humidité, les intempéries et le vieillissement. Notre équipe de professionnels qualifiés analyse précisément l&apos;état de votre façade avant d&apos;appliquer un diagnostic personnalisé. Nous utilisons uniquement des matériaux de haute qualité garantissant une résistance maximale et un rendu impeccable. Pour les habitants de La Chapelle-sur-Erdre, nous proposons des solutions adaptées à l&apos;architecture locale et aux contraintes climatiques spécifiques de la région.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans dans le ravalement de façade
- Équipe de 12 professionnels certifiés
- Devis gratuit et précis sous 48h
- Techniques éco-responsables et économes en énergie
- Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen d&apos;un ravalement de façade varie entre 50€ et 120€ au m², selon la complexité des travaux, les matériaux choisis et l&apos;état initial de la surface. Pour une maison moyenne de 100m², comptez un budget global entre 5 000€ et 12 000€. Nous proposons des devis détaillés et transparents.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa configuration. En moyenne, un chantier complet prend entre 10 et 20 jours ouvrables. Pour un immeuble de 3 étages à La Chapelle-sur-Erdre, nous estimons un délai de 15 jours, préparation et finitions comprises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10-15 ans, ou lorsque des dégradations significatives sont constatées. La réglementation impose également un ravalement dans certaines situations : présence de fissures, infiltrations, désordres structurels ou simplement pour maintenir la valeur patrimoniale du bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a La Chapelle-sur-Erdre ?
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
