import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Ramonville-Saint-Agne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Ramonville-Saint-Agne, transforme vos bâtiments avec une expertise techniq',
  keywords: 'ravalement facade ramonville-saint-agne, ravalement immeuble ramonville-saint-agne, renovation facade ramonville-saint-agne, peinture facade ramonville-saint-agne, entreprise ravalement ramonville-saint-agne, ravalement facade maison ramonville-saint-agne',
};

export default function RavalementFacadeRamonvilleSaintAgnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Ramonville-Saint-Agne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Ramonville-Saint-Agne, transforme vos bâtiments avec une expertise technique et esthétique inégalée. Nous rénovons vos façades pour leur redonner brillance et protection, en garantissant une intervention sur-mesure adaptée à chaque projet.</p>

        <h2>Nos services de ravalement de façade a Ramonville-Saint-Agne</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération cosmétique. Nous réalisons un diagnostic précis de votre bâtiment, en analysant l&apos;état des murs, les potentiels défauts d&apos;étanchéité et les besoins spécifiques. Notre équipe utilise des techniques modernes et des matériaux haute performance pour assurer une rénovation durable. Chaque intervention comprend un nettoyage approfondi, un traitement anti-humidité et une application de peinture ou d&apos;enduit parfaitement adapté. Nos experts maîtrisent tous les types de supports : pierre, béton, crépi, et garantissent un résultat esthétique et technique optimal.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour la qualité et la fiabilité. Nos équipes sont certifiées RGE, nous proposons des devis détaillés et transparents, et intervenons rapidement sur Ramonville-Saint-Agne. Nos rénovations bénéficient d&apos;une garantie décennale, et nous utilisons uniquement des matériaux écologiques et performants. Notre taux de satisfaction client dépasse les 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la surface. Pour une maison moyenne de 100m², comptez un budget global entre 3 000€ et 8 000€. Nous réalisons un diagnostic précis pour un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de sa configuration. En moyenne, un chantier complet prend entre 1 et 3 semaines. Pour un immeuble de 4 étages, estimez environ 10 à 15 jours ouvrables. Nos équipes optimisent chaque intervention pour minimiser la gêne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient obligatoire tous les 10 ans dans les copropriétés, selon le code de la construction. Il est également recommandé en cas de dégradations visibles, infiltrations, fissures ou simple vieillissement esthétique. À Ramonville-Saint-Agne, nous conseillons une vérification tous les 7-8 ans pour maintenir la valeur de votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Ramonville-Saint-Agne ?
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
