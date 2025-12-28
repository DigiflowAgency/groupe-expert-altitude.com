import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Blagnac | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Blagnac. Nos solution',
  keywords: 'terrasse bois blagnac, terrasse sur plot blagnac, terrasse bois sur plot blagnac, pose terrasse bois blagnac, terrasse composite blagnac, terrasse bois piscine blagnac',
};

export default function TerrasseBoisBlagnacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Blagnac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Blagnac. Nos solutions haut de gamme métamorphosent vos espaces extérieurs en véritables havres de détente.</p>

        <h2>Nos services de terrasse bois sur plot a Blagnac</h2>
        <div className="space-y-4">
          <p>Notre service de pose de terrasse bois sur plot représente l&apos;alliance parfaite entre esthétique et technicité. À Blagnac, nous proposons des solutions personnalisées qui s&apos;adaptent à chaque configuration de terrain, qu&apos;il s&apos;agisse d&apos;un jardin, d&apos;une piscine ou d&apos;une zone de détente. Notre expertise technique nous permet de garantir une pose précise et durable, avec un nivellement optimal grâce à des plots réglables. Nous travaillons principalement avec des matériaux composites et bois haut de gamme, offrant une résistance maximale aux intempéries et une durabilité de plus de 20 ans. Chaque projet fait l&apos;objet d&apos;un diagnostic précis pour assurer une intégration harmonieuse à votre environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience à Blagnac
- Bureau d&apos;études intégré pour des plans techniques précis
- Matériaux sélectionnés auprès de fournisseurs certifiés
- Délais de réalisation garantis et devis transparents
- Équipe de poseurs certifiés et formés aux dernières techniques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis (bois exotique, composite) et la complexité de pose. Pour un projet standard de 20m², comptez un investissement entre 1600€ et 5000€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un projet moyen de 20-30m², notre équipe réalise l&apos;installation en 2-3 jours ouvrables, préparation du terrain et finitions comprises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite ou l&apos;ipé pour leur durabilité exceptionnelle. Le composite offre un entretien minimal, tandis que l&apos;ipé garantit une résistance naturelle aux agressions extérieures. Le choix dépendra de votre budget et de l&apos;exposition de votre terrain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Blagnac ?
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
