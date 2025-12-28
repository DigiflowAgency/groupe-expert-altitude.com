import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Lormont | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Lormont et dans toute la métropole bordelaise. Spécialistes des travaux de zing',
  keywords: 'zinguerie lormont, travaux zinguerie lormont, toiture zinc lormont, zingueur lormont, reparation zinc lormont, zinco reflect lormont',
};

export default function ZinguerieLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Lormont et dans toute la métropole bordelaise. Spécialistes des travaux de zinguerie, nous intervenons avec précision sur vos toitures, gouttières et évacuations pour garantir une protection optimale de votre habitat.</p>

        <h2>Nos services de travaux de zinguerie a Lormont</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins en rénovation et installation de systèmes d&apos;évacuation des eaux. Notre équipe maîtrise parfaitement les techniques de pose et de réparation du zinc, matériau noble et durable particulièrement adapté aux climats aquitains. Nous utilisons des matériaux haute qualité comme le zinc Zinco Reflect, qui offre une excellente résistance à la corrosion et une durabilité supérieure à 50 ans. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention sur-mesure, avec une attention méticuleuse aux détails techniques et esthétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans en zinguerie 2) Des techniciens certifiés et formés aux dernières normes 3) Un engagement qualité avec garantie décennale 4) Un conseil personnalisé adapté à chaque configuration de toiture à Lormont et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Pour une estimation précise, nous réalisons systématiquement un diagnostic gratuit sur votre site à Lormont.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc bien posée et entretenue peut durer entre 50 et 80 ans. Sa longévité exceptionnelle dépend de la qualité de la pose initiale, de l&apos;exposition et d&apos;un entretien régulier par des professionnels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses et lichens. Nous proposons des contrats de maintenance adaptés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Lormont ?
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
