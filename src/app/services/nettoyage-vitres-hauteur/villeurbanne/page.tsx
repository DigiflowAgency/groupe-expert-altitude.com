import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Villeurbanne, offrant des solutions professionnelles et sécu',
  keywords: 'nettoyage vitres hauteur villeurbanne, lavage vitres immeuble villeurbanne, nettoyage facade vitree villeurbanne, cordiste vitre villeurbanne, entreprise nettoyage vitres villeurbanne, nettoyage verriere villeurbanne',
};

export default function NettoyageVitresHauteurVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Villeurbanne, offrant des solutions professionnelles et sécurisées pour tous vos bâtiments commerciaux et résidentiels. Nos techniciens cordistes transforment vos façades vitrées en surfaces cristallines, garantissant une propreté impeccable.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Villeurbanne</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la solution ultime pour les immeubles, entreprises et établissements de Villeurbanne nécessitant un entretien professionnel. Équipés de techniques de cordage avancées, nos experts interviennent sur des hauteurs allant jusqu&apos;à 100 mètres, assurant un nettoyage précis et sans risque. Notre méthodologie combine des équipements haute technologie, des produits écologiques et une expertise technique pointue, permettant un résultat impeccable sans traces ni rayures. Chaque intervention est personnalisée, avec un diagnostic préalable et un plan d&apos;action adapté à la configuration spécifique de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : certification AFCEE, assurance professionnelle complète, équipe de 12 cordistes experts, matériel aux normes de sécurité européennes. Nous garantissons une intervention rapide, un devis transparent et des résultats de qualité supérieure. Notre engagement : zéro défaut, 100% satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par mètre carré selon la difficulté d&apos;accès, la hauteur et la fréquence. Pour un immeuble standard à Villeurbanne, comptez un budget global entre 500€ et 2500€. Un devis personnalisé gratuit vous permettra d&apos;obtenir un tarif précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an : au printemps pour éliminer les salissures hivernales, en été pour optimiser la luminosité, à l&apos;automne pour préparer la période froide. Les immeubles en centre-ville ou exposés à la pollution peuvent nécessiter jusqu&apos;à 6 nettoyages annuels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue : nos cordistes sont équipés de harnais antichute, de systèmes de double accroche, et possèdent les certifications IRATA. Chaque intervention fait l&apos;objet d&apos;un plan de prévention détaillé, avec balisage de la zone, protection des piétons et vérification complète du matériel avant intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Villeurbanne ?
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
