import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a La Teste-de-Buch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à La Teste-de-Buch. Avec plus de 15 ans d&apos;expérienc',
  keywords: 'ravalement facade la teste-de-buch, ravalement immeuble la teste-de-buch, renovation facade la teste-de-buch, peinture facade la teste-de-buch, entreprise ravalement la teste-de-buch, ravalement facade maison la teste-de-buch',
};

export default function RavalementFacadeLaTesteDeBuchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a La Teste-de-Buch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à La Teste-de-Buch. Avec plus de 15 ans d&apos;expérience, nous transformons l&apos;apparence extérieure de vos bâtiments en alliant expertise technique et esthétique parfaite.</p>

        <h2>Nos services de ravalement de façade a La Teste-de-Buch</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une expertise complète qui protège et valorise votre patrimoine immobilier. Notre équipe réalise un diagnostic précis avant intervention, identifiant les zones nécessitant un traitement spécifique. Nous utilisons uniquement des matériaux haute qualité adaptés au climat océanique de La Teste-de-Buch, garantissant une durabilité maximale. Chaque projet fait l&apos;objet d&apos;un suivi personnalisé, depuis le premier rendez-vous jusqu&apos;à la réception finale des travaux, avec une attention méticuleuse aux moindres détails.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Experts locaux parfaitement intégrés sur le Bassin d&apos;Arcachon
• Devis gratuit et précis sous 48h
• Techniques certifiées et matériaux écologiques
• Plus de 200 chantiers réalisés avec 98% de satisfaction client</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ au m², selon la surface, l&apos;état initial et les matériaux choisis. Pour une maison moyenne de 100m² à La Teste-de-Buch, comptez un budget global entre 5 000€ et 12 000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille. Pour un immeuble de 3 étages, le chantier dure généralement entre 10 et 15 jours ouvrables, incluant préparation, traitement et finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans selon le Code de la Construction. Les critères déclencheurs incluent des dégradations visibles, des fissures supérieures à 0,5mm, ou un aspect délabré pouvant affecter la valeur immobilière.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a La Teste-de-Buch ?
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
