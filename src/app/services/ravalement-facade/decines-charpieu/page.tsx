import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Le ravalement de façade est un élément essentiel pour préserver et embellir votre patrimoine immobilier à Décines-Charpieu. Groupe Expert Altitude Com vous',
  keywords: 'ravalement facade décines-charpieu, ravalement immeuble décines-charpieu, renovation facade décines-charpieu, peinture facade décines-charpieu, entreprise ravalement décines-charpieu, ravalement facade maison décines-charpieu',
};

export default function RavalementFacadeDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le ravalement de façade est un élément essentiel pour préserver et embellir votre patrimoine immobilier à Décines-Charpieu. Groupe Expert Altitude Com vous propose des solutions complètes et durables pour redonner vie à vos murs extérieurs avec professionnalisme et expertise.</p>

        <h2>Nos services de ravalement de façade a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade à Décines-Charpieu combine technicité et esthétique pour transformer l&apos;apparence de votre bâtiment. Nous réalisons des interventions sur mesure, en analysant précisément l&apos;état des supports et en utilisant des techniques adaptées à chaque type de façade. Notre approche comprend un diagnostic technique complet, le choix des matériaux les plus performants et une préparation minutieuse des surfaces avant application. Nos équipes maîtrisent tous les types de finitions : peinture, enduit, résine, garantissant une protection optimale contre les intempéries et une valorisation durable de votre patrimoine.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans le ravalement de façade, 2) Des techniciens certifiés et formés aux dernières normes environnementales, 3) Un devis précis et transparent sans frais cachés, 4) Une intervention rapide et un suivi personnalisé sur Décines-Charpieu et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 40€ et 100€ au m², selon la surface, l&apos;état du support et les finitions choisies. Pour une maison moyenne de 100m², comptez un budget global entre 4 000€ et 10 000€. Un diagnostic préalable gratuit permet d&apos;affiner précisément le devis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa complexité. En moyenne, pour un immeuble de 4 étages, notre équipe réalise le chantier entre 10 et 15 jours ouvrés, en respectant un planning précis et des interventions efficaces.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement de façade devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de dégradation présente des risques pour la structure ou l&apos;environnement. À Décines-Charpieu, nous recommandons une inspection professionnelle tous les 8 à 12 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Décines-Charpieu ?
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
