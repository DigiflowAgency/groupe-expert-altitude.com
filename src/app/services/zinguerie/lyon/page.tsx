import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Lyon | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Lyon, spécialisé dans les travaux de toiture et de protection des bâtiments. No',
  keywords: 'zinguerie lyon, travaux zinguerie lyon, toiture zinc lyon, zingueur lyon, reparation zinc lyon, zinco reflect lyon',
};

export default function ZinguerieLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Lyon, spécialisé dans les travaux de toiture et de protection des bâtiments. Nous intervenons sur l&apos;ensemble de la métropole lyonnaise avec une expertise technique et un savoir-faire reconnu dans le domaine de la zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Lyon</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins en rénovation et protection de toiture. Nous proposons des solutions sur-mesure en zinc, utilisant les techniques les plus modernes et des matériaux de haute qualité. Notre équipe de professionnels maîtrise parfaitement les techniques de pose, de soudure et de finition pour garantir une étanchéité et une durabilité optimales. Nous intervenons aussi bien sur les toitures plates que pentues, pour les particuliers comme pour les professionnels, en neuf comme en rénovation. Notre approche technique précise permet de prévenir les risques d&apos;infiltration et de prolonger significativement la durée de vie de vos toitures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un service premium. Nos zingueurs sont certifiés et disposent de plus de 15 ans d&apos;expérience. Nous utilisons uniquement des matériaux certifiés NF avec une garantie décennale. Notre devis est toujours gratuit et détaillé, sans surprise. Nous intervenons rapidement sur Lyon et sa région, avec un délai moyen de 72h après votre première demande.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture standard à Lyon, comptez environ 80€/m². Ce prix comprend la fourniture des matériaux, la main-d&apos;œuvre qualifiée et les finitions. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. La qualité des matériaux et la pose sont déterminantes. Notre zinc Zinco Reflect offre une durabilité supérieure grâce à sa composition et son traitement anti-corrosion, garantissant une protection à long terme.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris et la vérification des points de jonction. Nous recommandons une inspection professionnelle tous les 5 ans pour détecter d&apos;éventuels signes d&apos;usure. Notre équipe propose un service de maintenance préventive adapté à vos besoins.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Lyon ?
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
