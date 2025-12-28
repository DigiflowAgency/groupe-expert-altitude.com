import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure pour les habitations de Villenave-d&apos;Ornon. Le Groupe E',
  keywords: 'terrasse bois villenave-d'ornon, terrasse sur plot villenave-d'ornon, terrasse bois sur plot villenave-d'ornon, pose terrasse bois villenave-d'ornon, terrasse composite villenave-d'ornon, terrasse bois piscine villenave-d'ornon',
};

export default function TerrasseBoisVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure pour les habitations de Villenave-d&apos;Ornon. Le Groupe Expert Altitude Com vous propose des solutions durables qui valorisent instantanément votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Notre service de pose de terrasse bois sur plot répond aux exigences les plus techniques et esthétiques. Nous sélectionnons rigoureusement des matériaux haut de gamme, bois composite ou bois naturel, adaptés au climat aquitain. Notre méthode de pose sur plot permet une parfaite isolation, une excellente circulation de l&apos;air et une stabilité optimale. Chaque projet est étudié individuellement pour garantir un résultat impeccable, que ce soit pour une terrasse autour d&apos;une piscine ou un aménagement paysager à Villenave-d&apos;Ornon. Nos équipes maîtrisent les techniques de nivellement et d&apos;adaptation aux différents types de sols, assurant une finition professionnelle et durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Villenave-d&apos;Ornon
✓ Devis personnalisé et gratuit sous 48h
✓ Matériaux certifiés et garantis 10 ans
✓ Équipe de 6 poseurs spécialisés terrasse bois
✓ Respect des normes environnementales et techniques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le matériau choisi. Un bois composite haut de gamme sera plus onéreux qu&apos;un pin traité, mais offrira une durabilité supérieure. Pour un projet moyen de 20m², comptez entre 1600€ et 5000€ tout compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. En moyenne, notre équipe réalise 10-15 m² par jour. Un projet standard de 30m² sera terminé en 2-3 jours ouvrés, préparation et finitions comprises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite pour sa durabilité ou l&apos;ipé pour son esthétique. Le bois composite résiste mieux aux intempéries, ne demande aucun entretien et offre une garantie de 25 ans. L&apos;ipé, plus traditionnel, nécessite un traitement annuel mais apporte un rendu naturel exceptionnel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Villenave-d'Ornon ?
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
