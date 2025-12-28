import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Pessac | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Pessac et ses environs. Avec plus de 15 ans d',
  keywords: 'demoussage toiture pessac, traitement toiture pessac, nettoyage toiture pessac, antimousse toiture pessac, hydrofuge toiture pessac, entretien toiture pessac',
};

export default function TraitementToiturePessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Pessac et ses environs. Avec plus de 15 ans d&apos;expérience, nous protégeons et valorisons votre patrimoine immobilier grâce à des techniques innovantes et respectueuses de l&apos;environnement.</p>

        <h2>Nos services de traitement et démoussage toiture a Pessac</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région bordelaise. Nous intervenons sur tous types de matériaux - tuiles, ardoises, béton - en utilisant des produits écologiques garantissant une efficacité maximale. Notre processus comprend un diagnostic précis, un nettoyage haute pression adapté, et un traitement antimousse qui protège durablement votre toiture contre l&apos;humidité et les proliférations végétales. Chaque intervention est personnalisée, avec un objectif de préservation de la structure et de l&apos;esthétique de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts à Pessac : une équipe certifiée, un matériel professionnel dernier cri, des produits écologiques, un devis gratuit sous 48h, une intervention rapide et un traitement garanti 5 ans. Nous sommes reconnus pour notre expertise technique et notre approche sur-mesure.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son état et son accessibilité. Pour une maison moyenne à Pessac (120 m²), comptez un budget global entre 1800€ et 3600€, incluant le nettoyage et le traitement antimousse.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin septembre ou début octobre, avant les premières pluies et les températures plus fraîches. Cette période permet une application optimale et une protection efficace durant l&apos;hiver, notamment dans notre région à climat océanique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après le démoussage, l&apos;application d&apos;un hydrofuge se fait en 3 étapes : préparation de surface, application au pulvérisateur en couche fine et uniforme, et temps de séchage de 24h. Nos produits garantissent une protection contre l&apos;eau et les UV pendant 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Pessac ?
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
