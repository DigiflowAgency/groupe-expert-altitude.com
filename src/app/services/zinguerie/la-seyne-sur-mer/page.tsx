import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur La Seyne-sur-Mer et ses environs. Spécialistes des travaux de toiture et de p',
  keywords: 'zinguerie la seyne-sur-mer, travaux zinguerie la seyne-sur-mer, toiture zinc la seyne-sur-mer, zingueur la seyne-sur-mer, reparation zinc la seyne-sur-mer, zinco reflect la seyne-sur-mer',
};

export default function ZinguerieLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur La Seyne-sur-Mer et ses environs. Spécialistes des travaux de toiture et de protection contre l&apos;eau, nous intervenons avec précision et expertise dans tout le Var.</p>

        <h2>Nos services de travaux de zinguerie a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie représentent bien plus qu&apos;un simple travail technique : c&apos;est une garantie de protection durable pour votre habitat. Nous réalisons des installations complètes de systèmes de zinguerie, depuis les gouttières jusqu&apos;aux habillages de toiture, en utilisant des techniques et matériaux de haute qualité. Notre équipe maîtrise parfaitement les techniques du zinc, avec une attention particulière portée à l&apos;étanchéité et à la résistance aux conditions climatiques méditerranéennes. Chaque intervention est précédée d&apos;un diagnostic précis, permettant une solution sur-mesure adaptée à votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans dans le domaine de la zinguerie, 2) Un diagnostic technique gratuit avant intervention, 3) Des matériaux certifiés répondant aux normes françaises, 4) Une intervention rapide et propre garantissant votre tranquillité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, les matériaux utilisés et l&apos;accessibilité de votre toiture. Pour La Seyne-sur-Mer, nos devis sont transparents et détaillés, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 70 ans. Notre zinc Zinco Reflect offre une durabilité supérieure grâce à ses propriétés anti-corrosion et sa résistance aux variations climatiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, et la vérification de l&apos;état des joints et fixations. Nous proposons un service de maintenance préventive pour prolonger la durée de vie de votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a La Seyne-sur-Mer ?
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
