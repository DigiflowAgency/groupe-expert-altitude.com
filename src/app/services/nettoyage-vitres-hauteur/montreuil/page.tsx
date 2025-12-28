import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Montreuil | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Montreuil, en proposant des solutions professionnelles et sécurisées pour to',
  keywords: 'nettoyage vitres hauteur montreuil, lavage vitres immeuble montreuil, nettoyage facade vitree montreuil, cordiste vitre montreuil, entreprise nettoyage vitres montreuil, nettoyage verriere montreuil',
};

export default function NettoyageVitresHauteurMontreuilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Montreuil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Montreuil, en proposant des solutions professionnelles et sécurisées pour tous les immeubles et bâtiments complexes. Nos experts cordistes transforment l&apos;entretien de vos facades vitrées en une opération impeccable et sans risque.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Montreuil</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage de vitres en hauteur, nous intervenons sur tous types de structures à Montreuil et ses environs. Notre équipe de techniciens hautement qualifiés utilise des techniques d&apos;escalade professionnelle pour atteindre les surfaces les plus inaccessibles. Nous garantissons un nettoyage optimal grâce à des équipements de pointe et des méthodes respectueuses de l&apos;environnement. Nos prestations couvrent les immeubles de bureaux, résidentiels, vérandas et façades complexes, avec une attention méticuleuse aux détails et à la sécurité. Chaque intervention est précédée d&apos;un diagnostic précis pour adapter notre approche à vos besoins spécifiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe certifiée de cordistes experts
✓ Matériel professionnel dernier cri
✓ 100% de conformité aux normes de sécurité
✓ Intervention rapide sur Montreuil et région parisienne
✓ Devis gratuit et transparent
✓ Plus de 15 ans d&apos;expérience dans le nettoyage de hauteur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la complexité de l&apos;accès, la hauteur et la surface totale. Pour un immeuble standard à Montreuil, comptez environ 800€ à 2500€ pour un nettoyage complet. Nous proposons des devis personnalisés après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement et l&apos;exposition. Les immeubles en centre-ville ou zones industrielles nécessitent un nettoyage plus fréquent, tandis que les bâtiments moins exposés peuvent se contenter de 2 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos cordistes utilisent un équipement homologué comprenant harnais de sécurité, points d&apos;ancrage certifiés, cordes spécialisées et EPI conformes aux normes européennes. Chaque intervention fait l&apos;objet d&apos;une évaluation des risques et d&apos;un protocole de sécurité strict.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Montreuil ?
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
