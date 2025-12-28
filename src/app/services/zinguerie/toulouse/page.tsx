import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Toulouse | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Toulouse et sa région. Spécialistes des travaux de toiture et de protectio',
  keywords: 'zinguerie toulouse, travaux zinguerie toulouse, toiture zinc toulouse, zingueur toulouse, reparation zinc toulouse, zinco reflect toulouse',
};

export default function ZinguerieToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Toulouse et sa région. Spécialistes des travaux de toiture et de protection, nous intervenons avec précision et expertise pour tous vos projets de zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Toulouse</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;étanchéité de votre habitat. Nos équipes hautement qualifiées maîtrisent tous les aspects techniques des travaux de zinguerie, depuis l&apos;installation de gouttières jusqu&apos;à la rénovation complète des systèmes d&apos;évacuation. À Toulouse, nous utilisons des techniques et matériaux de dernière génération, garantissant une durabilité maximale et une performance optimale contre les intempéries. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention sur-mesure, avec une attention particulière aux spécificités architecturales de chaque bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans en zinguerie 2) Des techniciens certifiés et formés aux dernières normes 3) Un engagement qualité avec garantie décennale 4) Un service client personnalisé et réactif, adapté aux besoins spécifiques de Toulouse et sa région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;accessibilité. Un diagnostic précis permet d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc bien posée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques locales à Toulouse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des raccords et le traitement préventif contre la corrosion. Un professionnel recommande un contrôle tous les 5 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Toulouse ?
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
