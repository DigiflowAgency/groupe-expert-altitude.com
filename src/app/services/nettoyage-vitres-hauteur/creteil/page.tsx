import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Créteil | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Créteil et dans tout le Val-de-Marne. Nos experts cordist',
  keywords: 'nettoyage vitres hauteur créteil, lavage vitres immeuble créteil, nettoyage facade vitree créteil, cordiste vitre créteil, entreprise nettoyage vitres créteil, nettoyage verriere créteil',
};

export default function NettoyageVitresHauteurCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Créteil et dans tout le Val-de-Marne. Nos experts cordistes transforment les façades vitrées des immeubles et entreprises en surfaces cristallines, garantissant propreté et sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Créteil</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et syndics de Créteil. Nos techniciens hautement qualifiés utilisent des techniques de cordage professionnel permettant d&apos;intervenir sur des surfaces verticales complexes, des immeubles de bureaux aux vérandas résidentielles. Chaque intervention est précédée d&apos;un diagnostic technique précis pour adapter notre approche : nous évaluons la configuration du bâtiment, les contraintes architecturales et les zones nécessitant un traitement spécifique. Nos équipements de dernière génération, combinés à une expertise de plus de 15 ans, garantissent un résultat impeccable sans risque pour les infrastructures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Certification AFNOR en travaux en hauteur
✓ Équipe de 12 cordistes experts
✓ Interventions 100% sécurisées
✓ Devis gratuit sous 24h
✓ Respect des normes environnementales
✓ Couverture assurance professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la complexité d&apos;accès, la hauteur et la surface totale. Pour un immeuble standard à Créteil, comptez environ 800€ à 2500€ pour un nettoyage complet des façades vitrées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 2 à 4 fois par an : au printemps pour éliminer les salissures hivernales, en été pour un aspect impeccable, à l&apos;automne pour préparer la saison froide, et éventuellement en hiver pour un entretien ponctuel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue : nos cordistes utilisent un équipement homologué (harnais anti-chute, points d&apos;ancrage certifiés), suivent des formations annuelles, et respectent strictement le protocole PPSPS (Plan Particulier de Sécurité et de Protection de la Santé).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Créteil ?
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
