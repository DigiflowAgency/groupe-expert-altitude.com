import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Bordeaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Bordeaux, offre des solutions professionnelles et sécurisées po',
  keywords: 'nettoyage vitres hauteur bordeaux, lavage vitres immeuble bordeaux, nettoyage facade vitree bordeaux, cordiste vitre bordeaux, entreprise nettoyage vitres bordeaux, nettoyage verriere bordeaux',
};

export default function NettoyageVitresHauteurBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Bordeaux, offre des solutions professionnelles et sécurisées pour les immeubles et bâtiments commerciaux de la métropole girondine. Nos experts cordistes transforment vos façades vitrées en véritables surfaces cristallines.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Bordeaux</h2>
        <div className="space-y-4">
          <p>Nos services de nettoyage de vitres en hauteur représentent la solution ultime pour les professionnels exigeants de Bordeaux. Nous intervenons sur tous types de structures, des immeubles historiques du centre-ville aux bâtiments contemporains, en utilisant des techniques de cordage hautement spécialisées. Notre équipe certifiée maîtrise parfaitement les techniques d&apos;accès difficile, garantissant un nettoyage impeccable sans risque pour les bâtiments. Chaque intervention est précédée d&apos;un diagnostic technique précis, permettant d&apos;adapter notre approche aux spécificités architecturales de votre bâtiment. Nos techniciens utilisent uniquement des équipements homologués et des produits écologiques, assurant un résultat brillant et respectueux de l&apos;environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés avec plus de 15 ans d&apos;expérience à Bordeaux
- Techniques de cordage conformes aux normes de sécurité les plus strictes
- Matériel professionnel dernier cri garantissant une qualité de nettoyage optimale
- Intervention rapide et devis personnalisé sous 48h
- Engagement environnemental avec des produits 100% biodégradables</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la complexité d&apos;accès, la hauteur et la surface totale. Pour un immeuble bordelais standard de 300m², comptez un budget global entre 4 500€ et 13 500€. Un devis gratuit et détaillé vous sera systématiquement proposé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les bâtiments en centre-ville de Bordeaux, plus exposés à la pollution, nécessiteront un nettoyage plus fréquent. Un entretien semestriel permet de préserver la qualité et la transparence de vos surfaces vitrées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos cordistes utilisent un équipement de protection individuelle complet, des systèmes antichute homologués, et suivent des formations annuelles de prévention des risques. Chaque intervention fait l&apos;objet d&apos;une analyse de risques préalable et respecte scrupuleusement les normes AFNOR et OPPBTP.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Bordeaux ?
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
