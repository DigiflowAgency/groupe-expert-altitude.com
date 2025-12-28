import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur sur Tassin-la-Demi-Lune, transforme l&apos;entretien de vos surfaces v',
  keywords: 'nettoyage vitres hauteur tassin-la-demi-lune, lavage vitres immeuble tassin-la-demi-lune, nettoyage facade vitree tassin-la-demi-lune, cordiste vitre tassin-la-demi-lune, entreprise nettoyage vitres tassin-la-demi-lune, nettoyage verriere tassin-la-demi-lune',
};

export default function NettoyageVitresHauteurTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur sur Tassin-la-Demi-Lune, transforme l&apos;entretien de vos surfaces vitrées en une expérience professionnelle et sécurisée. Nos techniciens cordistes interviennent avec une précision chirurgicale pour des résultats impeccables.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Nous proposons un service complet de nettoyage de vitres en hauteur, adapté aux immeubles, bureaux et bâtiments tertiaires de Tassin-la-Demi-Lune et ses environs. Nos experts utilisent des techniques de cordage professionnel permettant d&apos;atteindre les surfaces les plus complexes, garantissant un nettoyage optimal sans échafaudage. Notre équipement technique de pointe, composé de matériels homologués et de produits écologiques, nous permet d&apos;intervenir sur des hauteurs allant jusqu&apos;à 100 mètres. Chaque intervention fait l&apos;objet d&apos;un diagnostic précis et d&apos;un protocole de sécurité strict, assurant une prestation de qualité et une transparence totale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 15 ans d&apos;expérience
- Techniques de cordage innovantes et sécurisées
- Matériel professionnel dernière génération
- Devis gratuit et personnalisé sous 24h
- Interventions respectueuses de l&apos;environnement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par vitre selon la difficulté d&apos;accès, la hauteur et la surface. Un immeuble de 5 étages représente en moyenne un budget entre 500€ et 1500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, avec un nettoyage a minima semestriel. Les immeubles en centre-ville ou exposés à la pollution nécessitent des interventions plus fréquentes pour maintenir une transparence optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des normes de sécurité strictes : port du harnais, point d&apos;ancrage certifié, formation CACES obligatoire, et équipements de protection individuelle. Nos cordistes sont formés annuellement aux dernières réglementations de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Tassin-la-Demi-Lune ?
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
