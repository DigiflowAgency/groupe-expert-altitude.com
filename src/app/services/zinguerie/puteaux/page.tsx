import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Puteaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Puteaux, spécialiste des travaux de toiture et de protection contre les infiltr',
  keywords: 'zinguerie puteaux, travaux zinguerie puteaux, toiture zinc puteaux, zingueur puteaux, reparation zinc puteaux, zinco reflect puteaux',
};

export default function ZingueriePuteauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Puteaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Puteaux, spécialiste des travaux de toiture et de protection contre les infiltrations. Nos experts en zinguerie interviennent rapidement sur l&apos;ensemble de la région parisienne pour garantir la longévité et l&apos;étanchéité de vos infrastructures.</p>

        <h2>Nos services de travaux de zinguerie a Puteaux</h2>
        <div className="space-y-4">
          <p>Notre service de zinguerie répond aux exigences techniques les plus pointues. Nous réalisons des travaux complets incluant la pose, la rénovation et la réparation de tous systèmes de zinguerie : gouttières, descentes d&apos;eau, habillages de toiture et protection contre les intempéries. Notre équipe maîtrise parfaitement les techniques du zinc reflect et utilise des matériaux haute performance garantissant une durabilité exceptionnelle. À Puteaux, nous intervenons aussi bien sur des bâtiments résidentiels que professionnels, avec une précision chirurgicale et un souci constant de la qualité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de 15 ans, 2) Des techniciens certifiés et formés aux dernières normes, 3) Un devis personnalisé sous 48h, 4) Une intervention rapide et professionnelle sur Puteaux et ses environs. Nous garantissons tous nos travaux et proposons des solutions sur-mesure adaptées à chaque configuration.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture moyenne de 50m², comptez un budget global entre 2500€ et 6000€. Nos devis détaillés incluent systématiquement le matériel, la main-d&apos;œuvre et les finitions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Le zinc possède une excellente résistance à la corrosion et supporte parfaitement les variations climatiques. Notre processus d&apos;installation garantit une durabilité maximale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux et la vérification de l&apos;étanchéité des joints. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de dégradation et prolonger la durée de vie de votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Puteaux ?
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
