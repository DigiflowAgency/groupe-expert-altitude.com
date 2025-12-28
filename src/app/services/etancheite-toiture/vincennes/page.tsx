import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Vincennes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Vincennes, spécialiste des solutions durables contre le',
  keywords: 'etancheite toiture vincennes, etancheite toit terrasse vincennes, etancheite toiture terrasse vincennes, reparation etancheite vincennes, entreprise etancheite vincennes, fuite toiture terrasse vincennes',
};

export default function EtancheiteToitureVincennesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Vincennes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Vincennes, spécialiste des solutions durables contre les infiltrations. Nous protégeons efficacement vos bâtiments depuis plus de 15 ans dans toute la région parisienne.</p>

        <h2>Nos services de étanchéité toiture terrasse a Vincennes</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente une solution technique complète pour prévenir et résoudre tous les problèmes d&apos;infiltration. Notre méthode professionnelle commence par un diagnostic précis utilisant des techniques d&apos;imagerie thermique et d&apos;expertise structurelle, permettant d&apos;identifier chaque point faible avec une précision chirurgicale. Nous utilisons uniquement des membranes synthétiques haute performance garantissant une protection optimale contre l&apos;eau, résistant aux variations climatiques de Vincennes et offrant une durabilité jusqu&apos;à 25 ans. Notre processus inclut une préparation rigoureuse de la surface, l&apos;application de systèmes d&apos;étanchéité adaptés et un contrôle qualité final garantissant une imperméabilité totale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise technique certifiée avec plus de 500 chantiers réalisés
✓ Équipe de professionnels hautement qualifiés
✓ Devis gratuit et diagnostic précis sous 48h
✓ Interventions rapides sur Vincennes et communes limitrophes
✓ Matériaux de dernière génération avec garantie décennale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, l&apos;état actuel et la complexité technique. Pour un appartement standard à Vincennes, comptez un budget moyen de 3 500€ à 6 500€ pour une rénovation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes révélateurs d&apos;une fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations lors de fortes pluies, des zones de décoloration, des moisissures ou des gonflements. Un test d&apos;étanchéité professionnel permet de localiser précisément l&apos;origine des infiltrations avec des caméras thermiques et des tests d&apos;eau.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 30 ans avec un entretien régulier. Nos solutions utilisent des membranes synthétiques garanties 10 ans, avec une durée de vie potentielle de 25 ans si les recommandations d&apos;entretien sont suivies.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Vincennes ?
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
