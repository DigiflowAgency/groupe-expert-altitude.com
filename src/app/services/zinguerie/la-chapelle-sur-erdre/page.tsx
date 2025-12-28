import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire zinguerie de référence à La Chapelle-sur-Erdre, spécialisé dans la protection et l&apos;esthétique de vos toitur',
  keywords: 'zinguerie la chapelle-sur-erdre, travaux zinguerie la chapelle-sur-erdre, toiture zinc la chapelle-sur-erdre, zingueur la chapelle-sur-erdre, reparation zinc la chapelle-sur-erdre, zinco reflect la chapelle-sur-erdre',
};

export default function ZinguerieLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire zinguerie de référence à La Chapelle-sur-Erdre, spécialisé dans la protection et l&apos;esthétique de vos toitures. Nos experts en zinguerie interviennent sur l&apos;ensemble des projets, des plus simples aux plus complexes, avec un engagement qualité total.</p>

        <h2>Nos services de travaux de zinguerie a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation structurelle de votre habitat. Nos techniciens hautement qualifiés réalisent des travaux de zinguerie sur mesure, utilisant des techniques et matériaux de haute précision. Nous intervenons principalement sur les gouttières, descentes d&apos;eau, habillages de cheminées et protection des façades, en garantissant une étanchéité parfaite. Notre approche technique intègre systématiquement une analyse préalable de votre toiture, permettant un diagnostic précis et des solutions durables. Chaque intervention à La Chapelle-sur-Erdre est personnalisée, avec des matériaux de qualité supérieure comme le zinc Quartz-Zinc, reconnu pour sa résistance exceptionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise se distingue par plusieurs atouts majeurs : une expérience de plus de 15 ans dans le domaine, une équipe de 6 zingueurs certifiés, un taux de satisfaction client de 98%, et des interventions rapides dans un délai moyen de 72h. Nous proposons systématiquement un devis détaillé et transparent, sans frais cachés.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier. Pour une toiture standard à La Chapelle-sur-Erdre, comptez environ 80€/m², matériaux et main-d&apos;œuvre compris. Les prix dépendent de l&apos;accessibilité, de la pente et de l&apos;état initial de la toiture.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Les systèmes modernes en zinc Quartz-Zinc atteignent généralement 70 ans de durée de vie, avec une garantie minimale de 30 ans par nos soins.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des mousses et végétations, la vérification des joints et fixations. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de détérioration et maintenir l&apos;intégrité de votre zinguerie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a La Chapelle-sur-Erdre ?
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
