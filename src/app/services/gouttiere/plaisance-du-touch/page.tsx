import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Plaisance-du-Touch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de gouttières et descentes pluviales à Plaisance-du-Touch. Nos experts i',
  keywords: 'gouttiere plaisance-du-touch, pose gouttiere plaisance-du-touch, reparation gouttiere plaisance-du-touch, nettoyage gouttiere plaisance-du-touch, descente pluviale plaisance-du-touch, gouttiere bouchee plaisance-du-touch',
};

export default function GouttierePlaisanceDuTouchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Plaisance-du-Touch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de gouttières et descentes pluviales à Plaisance-du-Touch. Nos experts interviennent rapidement pour protéger votre habitat des risques d&apos;infiltration et garantir un écoulement optimal des eaux de pluie.</p>

        <h2>Nos services de gouttières et descentes pluviales a Plaisance-du-Touch</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Plaisance-du-Touch et ses environs. Nous proposons une intervention complète : diagnostic précis, pose de gouttières sur-mesure, réparation et nettoyage. Notre équipe utilise uniquement des matériaux de haute qualité - zinc, aluminium, PVC - adaptés à chaque configuration architecturale. Chaque intervention commence par un état des lieux technique permettant de définir la solution la plus performante. Nos techniciens certifiés garantissent une pose parfaitement étanche et esthétique, avec une attention particulière aux systèmes d&apos;évacuation pour prévenir tout risque de stagnation d&apos;eau.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Plaisance-du-Touch
- Devis gratuit et sans engagement
- Techniciens certifiés et assurés
- Matériaux aux normes et garantis
- Intervention rapide sous 48h
- SAV et garantie décennale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ le mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un pavillon standard de 100m² nécessite environ 20 mètres linéaires, soit un budget global entre 500€ et 900€ TTC.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer les feuilles et débris manuellement, puis nettoyez en profondeur. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières au minimum deux fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Plaisance-du-Touch, une intervention trimestrielle peut être nécessaire pour garantir un écoulement optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Plaisance-du-Touch ?
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
