import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Asnières-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Asnières-sur-Seine. Nos experts cordistes transforment vos f',
  keywords: 'nettoyage vitres hauteur asnières-sur-seine, lavage vitres immeuble asnières-sur-seine, nettoyage facade vitree asnières-sur-seine, cordiste vitre asnières-sur-seine, entreprise nettoyage vitres asnières-sur-seine, nettoyage verriere asnières-sur-seine',
};

export default function NettoyageVitresHauteurAsnieresSurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Asnières-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Asnières-sur-Seine. Nos experts cordistes transforment vos façades vitrées en surfaces cristallines, garantissant une transparence impeccable pour tous vos bâtiments professionnels et résidentiels.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Asnières-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des immeubles et entreprises d&apos;Asnières-sur-Seine. Nos techniciens hautement qualifiés utilisent des techniques de cordage professionnel permettant d&apos;atteindre les surfaces les plus difficiles d&apos;accès. Chaque intervention est précédée d&apos;un diagnostic technique complet, nous permettant d&apos;adapter nos méthodes aux spécificités de votre bâtiment. Nous utilisons des équipements de dernière génération et des produits écologiques, assurant un nettoyage impeccable sans impact environnemental. Notre processus garantit une propreté optimale, améliorant l&apos;image et la luminosité de vos espaces.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Techniques de cordage conformes aux normes de sécurité européennes
- Intervention rapide et sur-mesure à Asnières-sur-Seine
- Devis gratuit et transparent sous 24h
- Respect total des réglementations de sécurité du travail</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par mètre carré, selon la hauteur, l&apos;accessibilité et la complexité du bâtiment. Un immeuble de 5 étages représente environ 350-500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, avec un nettoyage minimal semestriel pour préserver la qualité et la transparence des surfaces vitrées. Les immeubles en centre-ville peuvent nécessiter un entretien plus fréquent.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur implique des équipements de sécurité spécifiques : harnais anti-chute, points d&apos;ancrage certifiés, cordes homologuées et formation continue aux techniques de cordage. Seuls des professionnels habilités peuvent réaliser ces interventions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Asnières-sur-Seine ?
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
