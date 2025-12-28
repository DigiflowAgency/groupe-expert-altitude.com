import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Puteaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Puteaux, transforme l&apos;entretien de vos surfaces vitrées en une opération ',
  keywords: 'nettoyage vitres hauteur puteaux, lavage vitres immeuble puteaux, nettoyage facade vitree puteaux, cordiste vitre puteaux, entreprise nettoyage vitres puteaux, nettoyage verriere puteaux',
};

export default function NettoyageVitresHauteurPuteauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Puteaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur à Puteaux, transforme l&apos;entretien de vos surfaces vitrées en une opération de précision et de sécurité. Nos experts cordistes interviennent sur les immeubles et façades les plus complexes de la région parisienne.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Puteaux</h2>
        <div className="space-y-4">
          <p>Nos prestations de nettoyage de vitres en hauteur représentent bien plus qu&apos;un simple lavage. Nous utilisons des techniques de cordistes professionnels, garantissant un résultat impeccable pour tous types de bâtiments à Puteaux, des immeubles de bureaux aux résidences modernes. Notre équipe dispose d&apos;équipements hautement spécialisés permettant d&apos;atteindre les surfaces vitrées les plus difficiles d&apos;accès, avec une efficacité et une sécurité maximales. Chaque intervention est précédée d&apos;un diagnostic technique précis, nous permettant d&apos;adapter notre approche aux spécificités de chaque façade et de chaque environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : des techniciens certifiés, un matériel aux normes de sécurité les plus strictes, une expérience de plus de 15 ans dans le nettoyage de vitres en hauteur. Nous intervenons rapidement sur Puteaux et ses environs, avec un engagement qualité total et des tarifs transparents.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la hauteur, l&apos;accessibilité et la fréquence. Un devis personnalisé gratuit vous permettra d&apos;obtenir un tarif précis adapté à votre bâtiment.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, avec un nettoyage minimal semestriel pour maintenir la propreté et la transparence de vos surfaces vitrées. Les immeubles en centre-ville de Puteaux peuvent nécessiter des interventions plus fréquentes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur impose des règles strictes : utilisation de harnais de sécurité, formation CACES, respect des normes de sécurité du travail en hauteur. Nos cordistes sont équipés et formés pour intervenir sans risque, avec un matériel contrôlé régulièrement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Puteaux ?
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
