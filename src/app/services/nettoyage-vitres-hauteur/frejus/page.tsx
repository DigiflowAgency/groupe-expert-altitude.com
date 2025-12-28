import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Fréjus | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Fréjus, offrant des solutions professionnelles pour tous vos',
  keywords: 'nettoyage vitres hauteur fréjus, lavage vitres immeuble fréjus, nettoyage facade vitree fréjus, cordiste vitre fréjus, entreprise nettoyage vitres fréjus, nettoyage verriere fréjus',
};

export default function NettoyageVitresHauteurFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Fréjus, offrant des solutions professionnelles pour tous vos bâtiments résidentiels et commerciaux. Nos experts cordistes transforment vos façades vitrées en véritables surfaces cristallines, garantissant propreté et sécurité.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Fréjus</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente l&apos;excellence technique et la précision absolue. Équipés de techniques cordistes innovantes, nous intervenons sur tous types de structures à Fréjus : immeubles, hôtels, bureaux et vérandas. Nos professionnels utilisent uniquement du matériel homologué et des produits écologiques, assurant un nettoyage impeccable sans impact environnemental. Chaque intervention est précédée d&apos;un diagnostic technique précis pour déterminer la meilleure approche, en minimisant les risques et maximisant l&apos;efficacité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise certifiée avec plus de 15 ans d&apos;expérience, 2) Des techniciens hautement qualifiés et formés aux dernières normes de sécurité, 3) Un engagement qualité garanti avec un contrôle systématique post-intervention, 4) Des tarifs transparents et compétitifs adaptés à chaque configuration.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon l&apos;accessibilité, la hauteur et la complexité de la surface. Pour un immeuble standard à Fréjus, comptez environ 350-600€ pour un nettoyage complet des façades vitrées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition environnementale. Les bâtiments en centre-ville ou près de zones industrielles nécessiteront des nettoyages plus fréquents, tandis que les immeubles en zones résidentielles peuvent se contenter de 2 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques cordistes, l&apos;emploi d&apos;équipements de protection individuelle aux normes, une évaluation préalable des risques et le respect strict des protocoles de sécurité INRS. Nos techniciens sont certifiés et suivent des formations continues.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Fréjus ?
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
