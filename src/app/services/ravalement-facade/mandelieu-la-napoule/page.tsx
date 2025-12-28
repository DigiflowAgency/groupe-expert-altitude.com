import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Mandelieu-la-Napoule, transforme l&apos;apparence extérieure de vos biens avec ',
  keywords: 'ravalement facade mandelieu-la-napoule, ravalement immeuble mandelieu-la-napoule, renovation facade mandelieu-la-napoule, peinture facade mandelieu-la-napoule, entreprise ravalement mandelieu-la-napoule, ravalement facade maison mandelieu-la-napoule',
};

export default function RavalementFacadeMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Mandelieu-la-Napoule, transforme l&apos;apparence extérieure de vos biens avec une expertise technique et un sens du détail inégalés. Nous offrons des solutions sur-mesure qui protègent et valorisent votre patrimoine immobilier dans la région.</p>

        <h2>Nos services de ravalement de façade a Mandelieu-la-Napoule</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération esthétique. Nous réalisons des interventions complètes qui associent rénovation technique et embellissement architectural. Notre équipe de professionnels analyse précisément l&apos;état de vos murs, sélectionne les matériaux adaptés et met en œuvre des techniques de rénovation garantissant une protection durable contre les agressions climatiques. Chaque chantier à Mandelieu-la-Napoule est traité avec une attention particulière, en respectant les normes environnementales et les caractéristiques architecturales locales. Nos interventions permettent non seulement d&apos;améliorer l&apos;aspect visuel de votre propriété mais également d&apos;augmenter sa valeur patrimoniale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans dans le ravalement de façade
✓ Équipe de techniciens certifiés et formés aux dernières techniques
✓ Devis personnalisé et transparent sans frais cachés
✓ Utilisation exclusive de matériaux écologiques et haute performance
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 35€ et 80€ par m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial des murs. Pour une maison moyenne de 100m² à Mandelieu-la-Napoule, comptez un budget global entre 3500€ et 8000€. Nous proposons systématiquement un diagnostic précis et un devis détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa configuration. En moyenne, un chantier complet prend entre 10 et 20 jours ouvrables. Pour un immeuble de 4 étages à Mandelieu-la-Napoule, estimez environ 15 jours de travaux, hors conditions météorologiques exceptionnelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de dégradation présente des risques pour la structure ou l&apos;environnement. Les copropriétés doivent également le réaliser si l&apos;état général nuit à l&apos;image du bâtiment. Notre expertise vous aide à identifier le bon moment pour cette intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Mandelieu-la-Napoule ?
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
