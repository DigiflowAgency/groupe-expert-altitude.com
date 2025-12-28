import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Caluire-et-Cuire et ses environs. Nos cordistes hautement qualifiés ',
  keywords: 'cordiste caluire-et-cuire, travaux sur corde caluire-et-cuire, travaux acrobatiques caluire-et-cuire, cordiste batiment caluire-et-cuire, intervention cordiste caluire-et-cuire, entreprise cordiste caluire-et-cuire',
};

export default function CordisteCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Caluire-et-Cuire et ses environs. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes avec une précision et une sécurité irréprochables.</p>

        <h2>Nos services de travaux sur corde - cordistes a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques représentent la solution technique et économique pour toute intervention en hauteur. Spécialisés dans les techniques de cordage professionnel, nous intervenons sur des sites industriels, des bâtiments historiques et des infrastructures urbaines complexes. Notre expertise couvre le nettoyage de façades, la rénovation, la maintenance technique et les interventions de sécurisation. Chaque mission est réalisée avec un équipement aux normes et une méthodologie rigoureuse garantissant 100% de sécurité pour nos équipes et vos installations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre entreprise cordiste, c&apos;est opter pour : 1) Une équipe certifiée avec plus de 15 ans d&apos;expérience à Caluire-et-Cuire, 2) Des techniciens formés aux dernières normes de sécurité, 3) Un matériel professionnel régulièrement contrôlé, 4) Des interventions rapides et sur-mesure adaptées à chaque configuration.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité des travaux, la hauteur d&apos;intervention et l&apos;équipement spécifique requis. Un devis personnalisé est toujours établi après une évaluation technique précise de votre projet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir une certification IRATA/SPICT, suivre des formations de sécurité hautement spécialisées, posséder une condition physique excellente et avoir une capacité à travailler sans vertige. Une formation initiale de 3 à 6 mois est généralement nécessaire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications officielles (IRATA, SPICT), consultez leurs références clients, demandez leurs attestations d&apos;assurance et d&apos;habilitation, et assurez-vous qu&apos;ils respectent strictement les normes de sécurité en vigueur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Caluire-et-Cuire ?
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
