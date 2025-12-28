import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Orvault | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Orvault. Nos experts ',
  keywords: 'terrasse bois orvault, terrasse sur plot orvault, terrasse bois sur plot orvault, pose terrasse bois orvault, terrasse composite orvault, terrasse bois piscine orvault',
};

export default function TerrasseBoisOrvaultPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Orvault</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Orvault. Nos experts en aménagement extérieur vous proposent des solutions durables et esthétiques qui valoriseront instantanément votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Orvault</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est la création d&apos;un espace de vie supplémentaire, élégant et fonctionnel. Notre équipe spécialisée à Orvault maîtrise parfaitement les techniques de pose qui garantissent une stabilité et une durabilité optimales. Nous travaillons uniquement avec des matériaux de haute qualité, comme les bois composites résistants aux intempéries et aux UV, offrant un rendu esthétique impeccable. Notre processus inclut un diagnostic précis du terrain, une préparation minutieuse de la surface, et une installation selon les normes techniques les plus exigeantes. Chaque projet est personnalisé pour s&apos;adapter parfaitement à la configuration de votre terrain et à vos attentes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est l&apos;assurance d&apos;un service premium : notre expertise technique de plus de 15 ans, des devis transparents sans surprise, une équipe 100% certifiée, et des délais de réalisation garantis. Nous proposons une large gamme de finitions et de matériaux, avec un conseil personnalisé pour chaque projet d&apos;aménagement extérieur à Orvault.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis (bois exotique, composite, pin traité) et la complexité de l&apos;installation. Pour un projet standard à Orvault, comptez environ 120€/m² tout compris, pose et matériaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la configuration, mais en moyenne, notre équipe réalise un chantier de 20-30m² en 3 à 5 jours ouvrés. Un projet sur mesure nécessite un diagnostic préalable pour un planning précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le pin traité classe 4 (économique), le bois exotique comme l&apos;ipé (très résistant), et les composites (sans entretien). À Orvault, nous recommandons le composite pour sa durabilité et son aspect esthétique, avec une garantie de 25 ans contre les détériorations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Orvault ?
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
