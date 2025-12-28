import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Istres | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Istres, en proposant des solutions professionnelles et sécurisées pour tous vos',
  keywords: 'nettoyage vitres hauteur istres, lavage vitres immeuble istres, nettoyage facade vitree istres, cordiste vitre istres, entreprise nettoyage vitres istres, nettoyage verriere istres',
};

export default function NettoyageVitresHauteurIstresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Istres</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Istres, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments. Nos experts cordistes transforment l&apos;entretien de vos surfaces vitrées en une prestation sans égal dans toute la région.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Istres</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur sont spécialement conçus pour répondre aux exigences techniques des immeubles, bureaux et bâtiments industriels d&apos;Istres. Nos techniciens hautement qualifiés utilisent des techniques de cordage professionnel permettant d&apos;atteindre les surfaces les plus difficiles d&apos;accès. Chaque intervention est précédée d&apos;un diagnostic précis pour garantir une propreté impeccable et une sécurité maximale. Nous utilisons uniquement du matériel aux normes et des produits écologiques, assurant un nettoyage respectueux de l&apos;environnement et des surfaces traitées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe de 12 cordistes certifiés avec plus de 15 ans d&apos;expérience
• Interventions 100% sécurisées selon les normes AFNOR
• Devis gratuit sous 24h pour toute demande à Istres
• Techniques innovantes de nettoyage sans traces garanties</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ le m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Un immeuble standard de 300m² nécessite un budget entre 4 500€ et 13 500€, avec un tarif moyen de 25€/m² pour une prestation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les bâtiments en centre-ville ou zones industrielles nécessitent un nettoyage plus fréquent (4 fois/an), tandis que les zones résidentielles peuvent se contenter de 2 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation de harnais homologués, formation CACES, vérification quotidienne du matériel, respect des zones de sécurité et protocoles d&apos;intervention. Seuls des professionnels certifiés peuvent réaliser ces prestations en toute sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Istres ?
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
