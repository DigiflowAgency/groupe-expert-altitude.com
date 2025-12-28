import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Rillieux-la-Pape | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Rillieux-la-Pape, offrant une expertise technique et une séc',
  keywords: 'nettoyage vitres hauteur rillieux-la-pape, lavage vitres immeuble rillieux-la-pape, nettoyage facade vitree rillieux-la-pape, cordiste vitre rillieux-la-pape, entreprise nettoyage vitres rillieux-la-pape, nettoyage verriere rillieux-la-pape',
};

export default function NettoyageVitresHauteurRillieuxLaPapePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Rillieux-la-Pape</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Rillieux-la-Pape, offrant une expertise technique et une sécurité maximale pour tous vos projets de lavage de surfaces vitrées complexes.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Rillieux-la-Pape</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et des particuliers de Rillieux-la-Pape. Nos techniciens cordistes hautement qualifiés utilisent des techniques d&apos;escalade professionnelle pour atteindre les surfaces vitrées les plus difficiles d&apos;accès, garantissant un résultat impeccable et une propreté cristalline. Nous intervenons sur tous types de bâtiments : immeubles, façades commerciales, vérandas et immeubles de grande hauteur. Notre équipement high-tech et nos méthodes innovantes nous permettent de traiter chaque surface avec précision, en minimisant les risques et en maximisant l&apos;efficacité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 cordistes certifiés avec plus de 15 ans d&apos;expérience
- Techniques de nettoyage écologiques et respectueuses de l&apos;environnement
- Assurance professionnelle complète et garantie qualité
- Interventions rapides sur Rillieux-la-Pape et ses environs</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par mètre carré, selon la complexité d&apos;accès, la hauteur et l&apos;état des surfaces. Un devis personnalisé gratuit vous permettra d&apos;obtenir un tarif précis adapté à votre projet spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 nettoyages par an, selon l&apos;exposition du bâtiment, son environnement et les normes de votre copropriété. Les façades exposées à la pollution ou aux intempéries peuvent nécessiter des interventions plus fréquentes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens utilisent un équipement de sécurité complet : harnais antichute, points d&apos;ancrage certifiés, cordes spécialisées et formations continues en techniques de travail en hauteur. Chaque intervention respecte strictement les normes de sécurité INRS et les réglementations professionnelles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Rillieux-la-Pape ?
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
