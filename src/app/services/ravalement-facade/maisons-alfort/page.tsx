import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Maisons-Alfort | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Maisons-Alfort, transforme l&apos;apparence extérieure de vos biens avec précis',
  keywords: 'ravalement facade maisons-alfort, ravalement immeuble maisons-alfort, renovation facade maisons-alfort, peinture facade maisons-alfort, entreprise ravalement maisons-alfort, ravalement facade maison maisons-alfort',
};

export default function RavalementFacadeMaisonsAlfortPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Maisons-Alfort</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Maisons-Alfort, transforme l&apos;apparence extérieure de vos biens avec précision et expertise. Nous redonnons vie et élégance à vos murs, en garantissant une rénovation qui protège et valorise votre patrimoine immobilier.</p>

        <h2>Nos services de ravalement de façade a Maisons-Alfort</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération esthétique. Nous proposons une rénovation complète qui protège votre bâtiment contre les intempéries et l&apos;usure du temps. Notre équipe de professionnels intervient sur tous types de surfaces - pierre, crépi, brique - en utilisant des techniques et matériaux de haute qualité. À Maisons-Alfort, nous comprenons les spécificités architecturales locales et adaptons nos interventions pour un résultat optimal. Chaque projet fait l&apos;objet d&apos;un diagnostic précis, avec un devis détaillé et transparent, intégrant les préparatifs, les traitements anti-humidité et les finitions.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans à Maisons-Alfort
• Équipe de 12 professionnels certifiés
• Garantie décennale et assurance professionnelle
• Techniques écoresponsables et matériaux durables
• Devis gratuit et personnalisé sous 48h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;état initial du support et les matériaux choisis. Pour un pavillon standard à Maisons-Alfort de 100m², comptez un budget entre 5 000€ et 12 000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. Pour un immeuble de 4 étages à Maisons-Alfort, le chantier dure généralement entre 3 et 5 semaines, incluant la préparation, le traitement et les finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans dans les copropriétés, selon le Code de la Construction. Il est également recommandé en cas de dégradations visibles, infiltrations, fissures ou pour améliorer la performance énergétique du bâtiment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Maisons-Alfort ?
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
