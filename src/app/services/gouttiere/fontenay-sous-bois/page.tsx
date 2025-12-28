import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Fontenay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Votre partenaire expert en gouttières et descentes pluviales à Fontenay-sous-Bois, le Groupe Expert Altitude Com protège votre habitat contre les risques d',
  keywords: 'gouttiere fontenay-sous-bois, pose gouttiere fontenay-sous-bois, reparation gouttiere fontenay-sous-bois, nettoyage gouttiere fontenay-sous-bois, descente pluviale fontenay-sous-bois, gouttiere bouchee fontenay-sous-bois',
};

export default function GouttiereFontenaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Fontenay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre partenaire expert en gouttières et descentes pluviales à Fontenay-sous-Bois, le Groupe Expert Altitude Com protège votre habitat contre les risques d&apos;infiltration et de dégradation. Nous intervenons rapidement pour garantir la longévité de votre système d&apos;évacuation des eaux.</p>

        <h2>Nos services de gouttières et descentes pluviales a Fontenay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Fontenay-sous-Bois et ses environs. Nous proposons une intervention complète comprenant le diagnostic précis, la pose, la réparation et l&apos;entretien de vos descentes pluviales. Notre équipe qualifiée utilise des matériaux haute résistance (zinc, aluminium, PVC) adaptés à chaque configuration architecturale. Nous réalisons un travail sur-mesure, en respectant les normes techniques et esthétiques, avec une attention particulière portée à l&apos;étanchéité et à la solidité de l&apos;installation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expérience sur Fontenay-sous-Bois
✓ Techniciens certifiés et formés en continu
✓ Devis gratuit et transparents
✓ Intervention rapide sous 48h
✓ Garantie décennale sur nos installations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Pour une maison moyenne à Fontenay-sous-Bois, comptez entre 500€ et 1500€ pour une installation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un dégorgeoir, un jet d&apos;eau à haute pression, retirez manuellement les débris. En cas de problème persistant, contactez un professionnel pour éviter d&apos;endommager votre système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. En zone boisée, nous conseillons jusqu&apos;à 3 nettoyages annuels pour prévenir l&apos;accumulation de feuilles et de débris.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Fontenay-sous-Bois ?
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
