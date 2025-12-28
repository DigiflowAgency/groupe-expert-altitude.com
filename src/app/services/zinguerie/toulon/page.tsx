import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Toulon | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire référent en zinguerie sur Toulon et ses environs. Spécialistes des travaux de toiture et de protection, ',
  keywords: 'zinguerie toulon, travaux zinguerie toulon, toiture zinc toulon, zingueur toulon, reparation zinc toulon, zinco reflect toulon',
};

export default function ZinguerieToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire référent en zinguerie sur Toulon et ses environs. Spécialistes des travaux de toiture et de protection, nous intervenons avec précision et expertise pour tous vos projets de zinguerie dans le Var.</p>

        <h2>Nos services de travaux de zinguerie a Toulon</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie représentent bien plus qu&apos;une simple intervention technique. Nous proposons des solutions complètes de protection et de rénovation de vos toitures, en utilisant des techniques et des matériaux de haute qualité. Notre équipe maîtrise parfaitement la pose et la réparation d&apos;éléments en zinc, garantissant une étanchéité optimale et une durabilité exceptionnelle. Nous intervenons sur tous types de bâtiments à Toulon, qu&apos;il s&apos;agisse de résidences individuelles, immeubles ou bâtiments professionnels. Notre approche technique intègre les dernières innovations en zinco-reflect, assurant une protection contre la corrosion et une esthétique impeccable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un savoir-faire reconnu. Nos zingueurs sont certifiés et disposent de plus de 15 ans d&apos;expérience. Nous garantissons des interventions rapides, un devis précis sous 48h et une transparence totale sur les coûts. Notre engagement qualité se traduit par des matériaux premium et un suivi personnalisé de chaque chantier.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Un diagnostic précis nous permet de vous proposer un devis détaillé et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose initiale, de l&apos;environnement et des conditions climatiques locales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux et la vérification de l&apos;étanchéité des joints. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir sa longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Toulon ?
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
