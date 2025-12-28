import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Écully | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Écully, offre des solutions professionnelles pour les immeubles',
  keywords: 'nettoyage vitres hauteur écully, lavage vitres immeuble écully, nettoyage facade vitree écully, cordiste vitre écully, entreprise nettoyage vitres écully, nettoyage verriere écully',
};

export default function NettoyageVitresHauteurEcullyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Écully</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Écully, offre des solutions professionnelles pour les immeubles, entreprises et particuliers exigeants. Nos experts cordistes transforment vos surfaces vitrées en véritables transparences lumineuses.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Écully</h2>
        <div className="space-y-4">
          <p>Nos techniciens hautement qualifiés réalisent des interventions de nettoyage de vitres sur tous types de bâtiments à Écully, des immeubles résidentiels aux grands complexes tertiaires. Équipés de techniques de cordage professionnel, nous intervenons sur des hauteurs jusqu&apos;à 100 mètres, garantissant une propreté impeccable et une sécurité maximale. Notre processus comprend un diagnostic précis, un nettoyage avec des produits écologiques et un contrôle qualité systématique, assurant des surfaces vitrées cristallines sans traces ni salissures. Nous utilisons des matériels dernière génération permettant un nettoyage rapide et efficace, avec un taux de satisfaction client de plus de 95%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés en travaux en hauteur
- Techniques de nettoyage innovantes et écologiques
- Intervention rapide sur Écully et ses environs
- Devis gratuit et personnalisé
- Équipement de sécurité haute performance
- Respect strict des normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par fenêtre selon la hauteur, l&apos;accessibilité et la surface. Pour un immeuble standard à Écully, comptez un budget entre 500€ et 2000€ selon la complexité de l&apos;intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, avec un nettoyage saisonnier au printemps et à l&apos;automne. Pour les bâtiments exposés à la pollution ou en centre-ville, nous conseillons un nettoyage trimestriel pour maintenir une transparence optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur nécessite une formation spécifique, un équipement de sécurité complet (harnais, cordes homologuées) et le respect strict des protocoles INRS. Nos cordistes sont formés annuellement aux techniques de travail en suspension et utilisent un matériel certifié répondant aux normes de sécurité les plus strictes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Écully ?
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
