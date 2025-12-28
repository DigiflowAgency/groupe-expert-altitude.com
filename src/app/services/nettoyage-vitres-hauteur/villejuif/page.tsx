import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Villejuif | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Villejuif, propose des solutions professionnelles pour des surf',
  keywords: 'nettoyage vitres hauteur villejuif, lavage vitres immeuble villejuif, nettoyage facade vitree villejuif, cordiste vitre villejuif, entreprise nettoyage vitres villejuif, nettoyage verriere villejuif',
};

export default function NettoyageVitresHauteurVillejuifPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Villejuif</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Villejuif, propose des solutions professionnelles pour des surfaces vitrées impeccables. Nos experts cordistes interviennent sur tous types de bâtiments, garantissant une propreté et une transparence optimales.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Villejuif</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la solution ultime pour les immeubles, bureaux et façades vitrées de Villejuif et ses environs. Notre équipe hautement qualifiée utilise des techniques de cordiste avancées permettant d&apos;atteindre les surfaces les plus difficiles d&apos;accès. Chaque intervention est précédée d&apos;un diagnostic technique précis, nous permettant d&apos;adapter notre approche à la spécificité de chaque bâtiment. Nos professionnels sont équipés des dernières technologies et normes de sécurité, assurant un travail impeccable et sans risque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 15 ans d&apos;expérience
- Techniques de nettoyage innovantes respectueuses de l&apos;environnement
- Devis gratuit et transparent
- Intervention rapide sur Villejuif et communes limitrophes
- Matériel professionnel dernier cri
- Garantie satisfaction à 100%</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Un devis personnalisé vous sera proposé après un diagnostic précis de vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 2 à 4 fois par an, selon l&apos;exposition du bâtiment. Les immeubles en centre-ville ou exposés aux pollutions nécessitent un entretien plus fréquent pour maintenir une apparence impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos cordistes utilisent un équipement de sécurité complet : harnais antichute, points d&apos;ancrage certifiés, cordes homologuées. Chaque intervention respecte strictement les normes OPPBTP et forme un protocole de sécurité rigoureux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Villejuif ?
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
