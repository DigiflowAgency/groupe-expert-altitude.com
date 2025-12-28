import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a L\'Union | Groupe Expert Altitude Com',
  description: 'À L&apos;Union, le ravalement de façade est bien plus qu&apos;une simple rénovation esthétique : c&apos;est un investissement durable pour protéger et valoriser votre pat',
  keywords: 'ravalement facade l'union, ravalement immeuble l'union, renovation facade l'union, peinture facade l'union, entreprise ravalement l'union, ravalement facade maison l'union',
};

export default function RavalementFacadeLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">À L&apos;Union, le ravalement de façade est bien plus qu&apos;une simple rénovation esthétique : c&apos;est un investissement durable pour protéger et valoriser votre patrimoine immobilier. Groupe Expert Altitude Com vous accompagne avec une expertise technique et un savoir-faire reconnu dans la rénovation de façades.</p>

        <h2>Nos services de ravalement de façade a L'Union</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade répond aux exigences techniques et esthétiques les plus strictes. Nous intervenons sur tous types de bâtiments à L&apos;Union, qu&apos;il s&apos;agisse de maisons individuelles ou d&apos;immeubles collectifs. Notre processus débute par un diagnostic précis de votre façade, évaluant l&apos;état des supports, les pathologies éventuelles et les besoins spécifiques. Nous utilisons des techniques et des matériaux haute performance garantissant une protection optimale contre l&apos;humidité, les intempéries et l&apos;usure. Notre équipe de professionnels maîtrise parfaitement les techniques de préparation des supports, d&apos;application des enduits et des peintures, assurant un résultat impeccable et durable. Chaque chantier est personnalisé, avec des solutions adaptées à votre budget et à vos attentes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés avec plus de 15 ans d&apos;expérience à L&apos;Union
- Devis gratuit et détaillé sous 48h
- Techniques respectueuses de l&apos;environnement
- Garantie décennale et assurance professionnelle complète
- Matériaux de haute qualité sélectionnés avec soin
- Délais respectés et chantiers propres</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ au m², selon la complexité du chantier, l&apos;état initial du support, les matériaux choisis et les traitements nécessaires. Pour une maison moyenne de 100m² à L&apos;Union, comptez un budget global entre 3 000€ et 8 000€. Un diagnostic précis permet d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa configuration. Pour un immeuble de 3 étages à L&apos;Union, le chantier dure généralement entre 10 et 15 jours ouvrés. Notre équipe optimise les délais tout en garantissant une qualité irréprochable, avec une planification rigoureuse et des moyens techniques performants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 15-20 ans, ou lorsque des désordres sont constatés : fissures, infiltrations, dégradations importantes. La réglementation impose également un ravalement dans certaines situations : copropriétés, zones protégées, ou sur injonction municipale. À L&apos;Union, nous vous conseillons et guidons dans ces démarches réglementaires.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a L'Union ?
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
