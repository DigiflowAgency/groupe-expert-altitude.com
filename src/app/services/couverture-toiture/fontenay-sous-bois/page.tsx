import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Fontenay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Spécialiste de la couverture et rénovation toiture à Fontenay-sous-Bois, le Groupe Expert Altitude Com protège votre patrimoine avec des solutions sur-mesu',
  keywords: 'couverture toiture fontenay-sous-bois, renovation toiture fontenay-sous-bois, reparation toiture fontenay-sous-bois, couvreur fontenay-sous-bois, refection toiture fontenay-sous-bois, entreprise couverture fontenay-sous-bois',
};

export default function CouvertureToitureFontenaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Fontenay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de la couverture et rénovation toiture à Fontenay-sous-Bois, le Groupe Expert Altitude Com protège votre patrimoine avec des solutions sur-mesure. Notre expertise technique garantit la longévité et la performance de votre toiture dans tout le Val-de-Marne.</p>

        <h2>Nos services de couverture et rénovation toiture a Fontenay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Notre service de rénovation de toiture répond aux problématiques spécifiques de l&apos;habitat francilien. Nous intervenons sur tous types de structures - pavillons, immeubles collectifs, bâtiments historiques - en utilisant des techniques et matériaux d&apos;avant-garde. Notre diagnostic précédant chaque intervention permet d&apos;identifier les désordres structurels et d&apos;proposer une solution adaptée. Nos équipes maîtrisent la réfection complète ou partielle, en intégrant les dernières normes thermiques et environnementales. À Fontenay-sous-Bois, nous comprenons les contraintes architecturales locales et adaptons systématiquement notre approche.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- 15 ans d&apos;expertise technique dans la rénovation de toiture
- Équipe certifiée et formée aux techniques modernes
- Devis gratuit et transparent sous 48h
- Garantie décennale sur tous nos travaux
- Interventions rapides sur Fontenay-sous-Bois et communes limitrophes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€ selon la superficie, les matériaux et la complexité technique. Notre expertise permet de vous proposer des solutions financièrement optimisées avec des aides potentielles.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes comme infiltrations, tuiles cassées, déformations, mousses importantes. Un diagnostic précis permet d&apos;évaluer l&apos;urgence et les réels besoins.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder : certifications professionnelles, assurances décennales, références vérifiables, maîtrise des normes actuelles. Vérifiez toujours ses attestations et demandez plusieurs devis comparatifs avant intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Fontenay-sous-Bois ?
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
