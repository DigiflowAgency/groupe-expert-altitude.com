import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Le Cannet | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur sur Le Cannet et sa région, vous garantit des surfaces vitrées impeccables ',
  keywords: 'nettoyage vitres hauteur le cannet, lavage vitres immeuble le cannet, nettoyage facade vitree le cannet, cordiste vitre le cannet, entreprise nettoyage vitres le cannet, nettoyage verriere le cannet',
};

export default function NettoyageVitresHauteurLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur sur Le Cannet et sa région, vous garantit des surfaces vitrées impeccables et sécurisées. Nos experts en nettoyage vertical interviennent sur tous types de bâtiments, des résidences aux immeubles commerciaux.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Le Cannet</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente la solution professionnelle et technique pour tous vos besoins de nettoyage vertical. Nos cordistes hautement qualifiés utilisent des techniques d&apos;alpinisme industriel permettant d&apos;atteindre les surfaces les plus difficiles d&apos;accès, avec une précision et une efficacité remarquables. Équipés de matériel de pointe et certifiés aux normes de sécurité les plus strictes, nous intervenons sur des facades vitrées de 3 à 50 mètres de hauteur. Notre méthodologie combine des techniques manuelles et des outils professionnels pour un résultat cristallin, sans traces ni salissures, qui valorise l&apos;image de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés et experts en nettoyage vertical
- Équipement professionnel dernier cri
- Interventions 100% sécurisées sur Le Cannet et alentours
- Devis gratuit et personnalisé sous 48h
- Respect total des normes de sécurité et environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Pour un immeuble standard de 200m², comptez un budget entre 1500€ et 3000€ avec nettoyage complet et sécurisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition du bâtiment. Les immeubles en centre-ville ou proche mer (comme au Cannet) nécessitent un nettoyage plus fréquent à cause de la pollution et des embruns.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des protocoles stricts : utilisation de harnais, points d&apos;ancrage certifiés, formation continue en sécurité, assurances professionnelles, et équipements homologués. Nos cordistes suivent des formations annuelles pour garantir une intervention sans risque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Le Cannet ?
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
