import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Neuilly-sur-Seine | Groupe Expert Altitude Com',
  description: 'Spécialiste de la zinguerie à Neuilly-sur-Seine depuis plus de 15 ans, le Groupe Expert Altitude Com transforme vos projets de toiture avec une précision c',
  keywords: 'zinguerie neuilly-sur-seine, travaux zinguerie neuilly-sur-seine, toiture zinc neuilly-sur-seine, zingueur neuilly-sur-seine, reparation zinc neuilly-sur-seine, zinco reflect neuilly-sur-seine',
};

export default function ZinguerieNeuillySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Neuilly-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de la zinguerie à Neuilly-sur-Seine depuis plus de 15 ans, le Groupe Expert Altitude Com transforme vos projets de toiture avec une précision chirurgicale. Nos solutions innovantes en zinguerie garantissent la protection et l&apos;esthétique de votre patrimoine immobilier dans les Hauts-de-Seine.</p>

        <h2>Nos services de travaux de zinguerie a Neuilly-sur-Seine</h2>
        <div className="space-y-4">
          <p>La zinguerie représente bien plus qu&apos;un simple travail technique : c&apos;est l&apos;art de protéger durablement votre habitat contre les intempéries. Notre équipe de professionnels intervient sur tous types de structures à Neuilly-sur-Seine, en proposant des solutions sur-mesure adaptées à chaque configuration architecturale. Nous utilisons uniquement des matériaux haute qualité comme le zinc Quartz-Zinc, reconnu pour sa résistance exceptionnelle et sa durabilité de plus de 70 ans. Notre processus complet comprend un diagnostic précis, une conception technique personnalisée et une réalisation méticuleuse, avec un taux de satisfaction client de 98%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale confirmée à Neuilly-sur-Seine depuis 2008
• Techniciens certifiés et formés aux dernières normes
• Devis gratuit et transparent sous 48h
• Matériaux premium garantis 30 ans
• Intervention rapide et professionnelle
• Solutions techniques innovantes et éco-responsables</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 80€ et 250€ au m², selon la complexité du chantier, la qualité des matériaux et l&apos;accessibilité. Pour Neuilly-sur-Seine, notre moyenne se situe autour de 120€/m², incluant pose et fourniture.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 60 et 100 ans. Notre garantie standard est de 30 ans, avec un potentiel de longévité dépassant largement les 70 ans grâce à nos techniques de pose et aux qualités intrinsèques du zinc.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons un contrôle professionnel tous les 5 ans pour prévenir tout risque d&apos;infiltration ou de détérioration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Neuilly-sur-Seine ?
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
