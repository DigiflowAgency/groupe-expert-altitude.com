import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Nantes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Nantes. Nos experts garantissent ',
  keywords: 'gouttiere nantes, pose gouttiere nantes, reparation gouttiere nantes, nettoyage gouttiere nantes, descente pluviale nantes, gouttiere bouchee nantes',
};

export default function GouttiereNantesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Nantes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Nantes. Nos experts garantissent une protection optimale de votre habitat contre les infiltrations d&apos;eau, avec un service sur mesure adapté à chaque type de propriété nantaise.</p>

        <h2>Nos services de gouttières et descentes pluviales a Nantes</h2>
        <div className="space-y-4">
          <p>Nos solutions de gouttières professionnelles couvrent l&apos;intégralité de vos besoins : installation, réparation et maintenance. Nous utilisons uniquement des matériaux haute qualité comme l&apos;aluminium et le zinc, garantissant une durabilité de 20 à 30 ans. Notre processus débute par un diagnostic précis de votre toiture, permettant une installation parfaitement adaptée à la configuration de votre habitation. Nos techniciens qualifiés interviennent rapidement, avec un équipement technique dernier cri, assurant une pose parfaite et une évacuation optimale des eaux pluviales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos avantages clés : 15 ans d&apos;expérience à Nantes, techniciens certifiés, devis gratuit sous 48h, interventions rapides, garantie décennale, et un taux de satisfaction client de 98%. Nous proposons une approche personnalisée et un suivi technique complet.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ le mètre linéaire selon le matériau choisi (PVC, aluminium, zinc). Pour une maison standard de 100m², comptez un budget global entre 1500€ et 3500€, installation et fourniture comprises.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un débourbeur haute pression, un furet métallique ou un aspirateur spécial. Portez des gants, sécurisez votre échelle, et retirez manuellement feuilles et débris. En cas de difficulté, faites appel à un professionnel pour éviter tout risque.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans des zones très boisées de Nantes, une intervention trimestrielle peut être nécessaire pour prévenir les obstructions et garantir un écoulement optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Nantes ?
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
