import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Salon-de-Provence et ses environs. Nos experts cordis',
  keywords: 'nettoyage vitres hauteur salon-de-provence, lavage vitres immeuble salon-de-provence, nettoyage facade vitree salon-de-provence, cordiste vitre salon-de-provence, entreprise nettoyage vitres salon-de-provence, nettoyage verriere salon-de-provence',
};

export default function NettoyageVitresHauteurSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Salon-de-Provence et ses environs. Nos experts cordistes transforment les façades vitrées les plus complexes en surfaces cristallines, garantissant une propreté impeccable et une sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent une solution professionnelle et technique pour tous types de bâtiments, des immeubles résidentiels aux complexes tertiaires. Notre équipe hautement qualifiée utilise des techniques de cordiste avancées permettant d&apos;intervenir sur des surfaces jusqu&apos;à 100 mètres de hauteur. Chaque intervention est précédée d&apos;un diagnostic technique précis, évaluant les contraintes spécifiques du site et définissant le protocole d&apos;intervention optimal. Nous utilisons uniquement du matériel homologué et des produits écologiques, assurant un nettoyage respectueux de l&apos;environnement et des surfaces traitées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Techniciens certifiés avec plus de 10 ans d&apos;expérience
✓ Interventions 100% sécurisées selon les normes AFPS
✓ Devis gratuit sous 24h à Salon-de-Provence
✓ Techniques cordistes innovantes minimisant les perturbations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la hauteur, l&apos;accessibilité et la complexité. Pour un immeuble standard à Salon-de-Provence, comptez environ 800€ à 2500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition aux intempéries et à la pollution. Les immeubles en centre-ville nécessitent généralement un nettoyage plus fréquent, tous les 3-4 mois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques de cordage professionnelles, un équipement de protection individuelle complet, des points d&apos;ancrage certifiés et le respect strict des protocoles de sécurité INRS.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Salon-de-Provence ?
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
