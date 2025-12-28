import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire référence pour des ravalements de façade impeccables à Salon-de-Provence. Nous transformons l&apos;apparence ext',
  keywords: 'ravalement facade salon-de-provence, ravalement immeuble salon-de-provence, renovation facade salon-de-provence, peinture facade salon-de-provence, entreprise ravalement salon-de-provence, ravalement facade maison salon-de-provence',
};

export default function RavalementFacadeSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire référence pour des ravalements de façade impeccables à Salon-de-Provence. Nous transformons l&apos;apparence extérieure de vos bâtiments avec un savoir-faire technique et une précision qui font notre réputation dans toute la région.</p>

        <h2>Nos services de ravalement de façade a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une expertise complète qui protège durablement vos murs contre les agressions climatiques. Notre processus débute par un diagnostic précis de l&apos;état de votre façade, suivi d&apos;un nettoyage haute pression, de réparations éventuelles et d&apos;une application de peinture ou d&apos;enduit adapté. À Salon-de-Provence, nous comprenons les spécificités architecturales locales et utilisons des techniques qui respectent le patrimoine tout en garantissant une performance technique optimale. Nos équipes maîtrisent parfaitement les normes environnementales et techniques actuelles, vous assurant un résultat qui allie beauté et protection.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Salon-de-Provence, 2) Des techniciens certifiés et formés aux dernières techniques, 3) Un devis gratuit et détaillé sous 48h, 4) Des matériaux écologiques et haute durabilité. Nous garantissons un travail impeccable et une plus-value immédiate pour votre patrimoine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial du support. Un pavillon moyen de 100m² représente un investissement entre 3000€ et 8000€. Nous proposons systématiquement un devis personnalisé après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble oscille généralement entre 1 et 3 semaines, selon la surface (100 à 500m²), l&apos;accessibilité et les travaux préparatoires nécessaires. Un immeuble de 4 étages nécessitera environ 10 à 15 jours de travaux avec notre équipe.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient légalement obligatoire tous les 10 ans dans les copropriétés, ou lorsque la façade présente des dégradations significatives compromettant l&apos;isolation ou la structure. À Salon-de-Provence, nous recommandons une vérification tous les 8-12 ans pour maintenir la valeur de votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Salon-de-Provence ?
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
