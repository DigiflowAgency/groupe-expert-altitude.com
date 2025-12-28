import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Marseille | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en zinguerie à Marseille, transforme et protège vos toitures avec une expertise technique inégalée. Nos solut',
  keywords: 'zinguerie marseille, travaux zinguerie marseille, toiture zinc marseille, zingueur marseille, reparation zinc marseille, zinco reflect marseille',
};

export default function ZinguerieMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en zinguerie à Marseille, transforme et protège vos toitures avec une expertise technique inégalée. Nos solutions sur-mesure en travaux de zinguerie garantissent la durabilité et l&apos;esthétique de vos bâtiments dans toute la région provençale.</p>

        <h2>Nos services de travaux de zinguerie a Marseille</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;étanchéité de votre toiture. Notre équipe de professionnels intervient sur l&apos;ensemble des systèmes de récupération et d&apos;évacuation des eaux pluviales, en utilisant des techniques et matériaux de haute qualité. Nous réalisons des travaux complets incluant la pose de gouttières, descentes d&apos;eau, bavettes, habillages et raccords, en privilégiant le zinc comme matériau noble et durable. Notre approche technique permet de prévenir les infiltrations et assurer une protection optimale contre les intempéries marseillaises, connues pour leur variabilité climatique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Marseille
- Techniciens certifiés et formés aux dernières normes
- Devis gratuit et personnalisé sous 48h
- Matériaux premium avec garantie décennale
- Intervention rapide sur l&apos;ensemble des quartiers marseillais</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Un diagnostic précis nous permet de proposer un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques locales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des fixations. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir sa longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Marseille ?
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
