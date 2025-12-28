import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Balma | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Balma et ses environs. Nos techniciens cordistes intervien',
  keywords: 'nettoyage vitres hauteur balma, lavage vitres immeuble balma, nettoyage facade vitree balma, cordiste vitre balma, entreprise nettoyage vitres balma, nettoyage verriere balma',
};

export default function NettoyageVitresHauteurBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Balma et ses environs. Nos techniciens cordistes interviennent avec précision et sécurité pour des façades vitrées impeccables, garantissant un résultat professionnel et brillant.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Balma</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences techniques des immeubles, copropriétés et bâtiments tertiaires de Balma. Nos équipes utilisent des techniques de cordage professionnel permettant d&apos;accéder aux surfaces les plus complexes, avec un équipement aux normes de sécurité les plus strictes. Nous réalisons un diagnostic précis avant chaque intervention, évaluant la configuration du bâtiment et les contraintes spécifiques. Notre processus inclut un nettoyage haute précision, un traitement anti-traces et une finition sans rayures, utilisant des produits écologiques et des techniques respectueuses de l&apos;environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Techniciens certifiés en travaux en hauteur
✓ Matériel professionnel dernier cri
✓ Intervention rapide sur Balma et zones limitrophes
✓ Devis gratuit et personnalisé
✓ Plus de 15 ans d&apos;expérience dans le nettoyage de surfaces vitrées complexes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par vitre selon l&apos;accessibilité, la hauteur et la surface. Un immeuble de 5 étages représente généralement un budget entre 500€ et 1500€. Nous proposons des devis détaillés et transparents sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 nettoyages par an, selon l&apos;exposition du bâtiment. Les façades exposées aux intempéries ou à la pollution nécessitent un entretien plus fréquent. Un nettoyage semestriel permet de préserver l&apos;esthétique et la longévité des surfaces vitrées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des normes de sécurité strictes : utilisation de harnais anti-chute, points d&apos;ancrage certifiés, formation CACES, assurances professionnelles. Nos cordistes suivent des formations annuelles et utilisent un équipement aux normes européennes, garantissant une intervention 100% sécurisée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Balma ?
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
