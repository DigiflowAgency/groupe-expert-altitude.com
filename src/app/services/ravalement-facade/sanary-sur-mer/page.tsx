import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Sanary-sur-Mer | Groupe Expert Altitude Com',
  description: 'Votre façade mérite le meilleur traitement, et à Sanary-sur-Mer, Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements impeccab',
  keywords: 'ravalement facade sanary-sur-mer, ravalement immeuble sanary-sur-mer, renovation facade sanary-sur-mer, peinture facade sanary-sur-mer, entreprise ravalement sanary-sur-mer, ravalement facade maison sanary-sur-mer',
};

export default function RavalementFacadeSanarySurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Sanary-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre façade mérite le meilleur traitement, et à Sanary-sur-Mer, Groupe Expert Altitude Com est votre partenaire de confiance pour des ravalements impeccables. Nous transformons vos bâtiments avec un savoir-faire précis et une attention aux détails qui font toute la différence.</p>

        <h2>Nos services de ravalement de façade a Sanary-sur-Mer</h2>
        <div className="space-y-4">
          <p>Le ravalement de façade est bien plus qu&apos;une simple opération esthétique, c&apos;est un investissement durable pour votre patrimoine immobilier. Notre équipe de professionnels intervient sur tous types de bâtiments à Sanary-sur-Mer, des maisons individuelles aux immeubles collectifs. Nous réalisons un diagnostic technique précis avant toute intervention, évaluant l&apos;état des supports, les pathologies potentielles et les traitements nécessaires. Notre processus comprend le nettoyage haute pression, la réparation des supports, l&apos;application de produits techniques adaptés et une finition soignée qui protège durablement votre façade contre les intempéries et l&apos;usure. Avec plus de 15 ans d&apos;expérience, nous garantissons une intervention de qualité qui valorise votre bien.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec du matériel professionnel de dernière génération, nous proposons des devis transparents sans surprise, nos délais sont toujours respectés, et nous sommes assurés pour chaque chantier. Nos techniques innovantes permettent une économie d&apos;énergie et une protection optimale de vos façades.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial du support. Pour une maison moyenne de 100m² à Sanary-sur-Mer, comptez un budget global entre 3 000€ et 8 000€. Nous proposons des devis personnalisés après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de sa configuration. Pour un immeuble standard de 300m², notre équipe réalise généralement le chantier en 10 à 15 jours ouvrés. Nous optimisons toujours nos interventions pour minimiser la gêne et respecter les délais convenus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10-15 ans selon l&apos;arrêté du 31 janvier 1986. Les copropriétés et immeubles anciens doivent notamment le réaliser pour maintenir la salubrité et la conformité. À Sanary-sur-Mer, nous conseillons un diagnostic tous les 8-10 ans pour prévenir les dégradations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Sanary-sur-Mer ?
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
