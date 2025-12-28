import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Lyon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Lyon, transforme l&apos;entretien de vos façades vitrées en une opération de p',
  keywords: 'nettoyage vitres hauteur lyon, lavage vitres immeuble lyon, nettoyage facade vitree lyon, cordiste vitre lyon, entreprise nettoyage vitres lyon, nettoyage verriere lyon',
};

export default function NettoyageVitresHauteurLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Lyon, transforme l&apos;entretien de vos façades vitrées en une opération de précision et de sécurité. Nous intervenons sur tous types de bâtiments dans la métropole lyonnaise, en garantissant des résultats impeccables.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Lyon</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente la solution professionnelle ultime pour les immeubles, entreprises et établissements lyonnais. Nos techniciens cordistes, hautement qualifiés et équipés des dernières technologies, réalisent des interventions complexes avec une efficacité remarquable. Nous utilisons des techniques spécialisées permettant un nettoyage en profondeur, sans trace et en toute sécurité, quelque soit la configuration architecturale. Notre approche combine expertise technique, respect des normes de sécurité et souci du détail, assurant une transparence cristalline de vos surfaces vitrées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 cordistes certifiés avec plus de 15 ans d&apos;expérience
- Matériel high-tech garantissant une propreté à 100%
- Interventions rapides et sur-mesure à Lyon
- Devis gratuit et transparent sous 24h
- Respect strict des normes de sécurité professionnelles</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la hauteur, l&apos;accessibilité et la complexité de l&apos;intervention. Un immeuble standard de 500m² nécessite généralement un budget entre 2500€ et 5000€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 2 à 4 fois par an, avec une fréquence adaptée à votre environnement. En centre-ville de Lyon, avec pollution et poussières, 3 à 4 nettoyages annuels sont idéaux pour maintenir une brillance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur nécessite une formation CACES, un équipement de protection individuelle complet, des systèmes antichute homologués et une évaluation précise des risques. Nos techniciens suivent un protocole strict garantissant 100% de sécurité lors des interventions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Lyon ?
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
