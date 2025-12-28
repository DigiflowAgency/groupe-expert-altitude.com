import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Clichy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Clichy, offrant des solutions professionnelles pour les imme',
  keywords: 'nettoyage vitres hauteur clichy, lavage vitres immeuble clichy, nettoyage facade vitree clichy, cordiste vitre clichy, entreprise nettoyage vitres clichy, nettoyage verriere clichy',
};

export default function NettoyageVitresHauteurClichyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Clichy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Clichy, offrant des solutions professionnelles pour les immeubles et façades les plus complexes. Nos experts cordistes transforment vos surfaces vitrées en véritables surfaces brillantes, avec une précision et une sécurité inégalées.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Clichy</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et syndics de Clichy. Nos techniciens hautement qualifiés utilisent des techniques de cordage industriel permettant d&apos;intervenir sur des surfaces jusqu&apos;à 100 mètres de hauteur, garantissant un nettoyage impeccable et sécurisé. Nous employons des équipements de dernière génération, incluant des perches télescopiques haute performance et des solutions écologiques de lavage, pour un résultat optimal sans impact environnemental. Chaque intervention est précédée d&apos;un diagnostic technique personnalisé, assurant une prestation sur-mesure adaptée à la configuration spécifique de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée IRATA, plus de 15 ans d&apos;expérience en nettoyage vertical, un taux de satisfaction client de 98%, et une approche 100% sécurisée. Nous intervenons rapidement sur Clichy et ses environs, avec un engagement qualité garanti et des tarifs transparents.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par mètre carré, selon la complexité d&apos;accès, la hauteur et la fréquence. Pour un immeuble standard à Clichy, comptez environ 1200€ à 2500€ pour un nettoyage complet des façades vitrées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an : un nettoyage au printemps et un autre à l&apos;automne permet de maintenir l&apos;esthétique et la longévité de vos surfaces vitrées. Pour les immeubles en centre-ville comme à Clichy, une intervention trimestrielle peut être conseillée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur nécessite des compétences spécifiques : nos cordistes utilisent un équipement de protection individuelle complet, des systèmes antichute homologués, et suivent des protocoles stricts de sécurité. Chaque intervention est réalisée par des professionnels certifiés, garantissant zéro risque pour les opérateurs et votre bâtiment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Clichy ?
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
