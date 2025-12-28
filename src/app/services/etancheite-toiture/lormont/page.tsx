import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Lormont | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour des solutions d&apos;étanchéité de toiture terrasse à Lormont et dans toute la région borde',
  keywords: 'etancheite toiture lormont, etancheite toit terrasse lormont, etancheite toiture terrasse lormont, reparation etancheite lormont, entreprise etancheite lormont, fuite toiture terrasse lormont',
};

export default function EtancheiteToitureLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour des solutions d&apos;étanchéité de toiture terrasse à Lormont et dans toute la région bordelaise. Spécialistes reconnus, nous intervenons avec précision pour protéger votre patrimoine immobilier contre les infiltrations et les dégradations.</p>

        <h2>Nos services de étanchéité toiture terrasse a Lormont</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente une solution technique complète et sur-mesure pour les propriétaires et professionnels de Lormont. Nous réalisons un diagnostic précis avant toute intervention, en utilisant des techniques modernes et des matériaux haute performance comme les membranes synthétiques EPDM ou les résines polyuréthanes. Notre processus comprend un état des lieux exhaustif, un traitement des points singuliers, une préparation de surface minutieuse et une application garantissant une imperméabilité totale. Nos équipes certifiées interviennent sur tous types de toitures terrasses : résidentielles, commerciales ou industrielles, avec une efficacité et une rapidité qui font notre réputation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages clés : un diagnostic gratuit, des techniciens hautement qualifiés, des matériaux de dernière génération, une garantie décennale, et une intervention rapide sur Lormont et ses environs. Nous sommes certifiés RGE et possédons plus de 15 ans d&apos;expérience dans le domaine de l&apos;étanchéité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la surface. Pour une toiture moyenne de 30m², comptez un budget global entre 1500€ et 4500€. Un diagnostic précis permet d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite sur une toiture terrasse, observez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, décoloration ou boursouflures de peinture, moisissures, et écoulements anormaux. Un test d&apos;étanchéité par nos experts peut confirmer et localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée varie entre 15 et 25 ans. Cette longévité dépend de plusieurs facteurs : qualité des matériaux, technique d&apos;application, entretien régulier et conditions climatiques. Nos solutions intègrent des garanties décennales et un suivi technique pour optimiser la durabilité de votre étanchéité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Lormont ?
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
