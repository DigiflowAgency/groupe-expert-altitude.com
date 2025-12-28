import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a La Teste-de-Buch | Groupe Expert Altitude Com',
  description: 'Spécialistes de la zinguerie sur La Teste-de-Buch depuis plus de 15 ans, le Groupe Expert Altitude Com transforme vos projets de toiture avec précision et ',
  keywords: 'zinguerie la teste-de-buch, travaux zinguerie la teste-de-buch, toiture zinc la teste-de-buch, zingueur la teste-de-buch, reparation zinc la teste-de-buch, zinco reflect la teste-de-buch',
};

export default function ZinguerieLaTesteDeBuchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a La Teste-de-Buch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialistes de la zinguerie sur La Teste-de-Buch depuis plus de 15 ans, le Groupe Expert Altitude Com transforme vos projets de toiture avec précision et expertise. Nous intervenons sur tout le Bassin d&apos;Arcachon pour des solutions de zinguerie durables et esthétiques.</p>

        <h2>Nos services de travaux de zinguerie a La Teste-de-Buch</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;étanchéité de votre toiture. Notre équipe de professionnels maîtrise parfaitement les techniques de pose et de réparation de systèmes de gouttières, descentes d&apos;eau et habillages en zinc. Nous utilisons uniquement des matériaux de haute qualité garantissant une résistance optimale aux conditions climatiques locales. Notre processus débute par un diagnostic précis de votre toiture, suivi d&apos;un devis détaillé et transparent. Chaque intervention est réalisée avec un souci constant de performance technique et d&apos;esthétique, en respectant les normes professionnelles les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre entreprise se démarque par son expertise technique, son engagement local et sa réactivité. Nous proposons des interventions sur-mesure, un délai de réalisation rapide de 72h après diagnostic, une garantie décennale et une expérience de plus de 150 chantiers réalisés sur le Bassin d&apos;Arcachon. Notre équipe est certifiée RGE et dispose des dernières certifications techniques en zinguerie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la hauteur du bâtiment et l&apos;état initial de la toiture. À La Teste-de-Buch, nos prix sont compétitifs et incluent systématiquement le diagnostic, la main-d&apos;œuvre et les matériaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Notre zinc haute performance offre une durabilité exceptionnelle, avec une garantie minimale de 30 ans contre la corrosion et les déformations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le contrôle de l&apos;état général. Nous proposons des contrats de maintenance préventive pour prolonger la durée de vie de votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a La Teste-de-Buch ?
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
