import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Gradignan | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite l&apos;expertise de Groupe Expert Altitude Com, le spécialiste de la rénovation et couverture à Gradignan. Nous protégeons votre habitat av',
  keywords: 'couverture toiture gradignan, renovation toiture gradignan, reparation toiture gradignan, couvreur gradignan, refection toiture gradignan, entreprise couverture gradignan',
};

export default function CouvertureToitureGradignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Gradignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite l&apos;expertise de Groupe Expert Altitude Com, le spécialiste de la rénovation et couverture à Gradignan. Nous protégeons votre habitat avec des solutions sur-mesure qui garantissent la longévité et l&apos;esthétique de votre bien immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Gradignan</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences techniques les plus strictes. Nos experts interviennent sur tous types de structures, qu&apos;il s&apos;agisse d&apos;une réfection partielle ou totale. Nous utilisons uniquement des matériaux de haute qualité, sélectionnés pour leur résistance aux conditions climatiques de la région bordelaise. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention methodique, avec une attention particulière portée à l&apos;isolation thermique et à l&apos;étanchéité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans la région de Gradignan, 2) Des techniciens certifiés et formés aux dernières normes, 3) Un engagement qualité avec garantie décennale, 4) Un accompagnement personnalisé de A à Z.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité. Pour une maison moyenne de 120m², comptez un budget entre 9 600€ et 30 000€. Nous proposons des financements adaptés et des solutions sur-mesure.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précis : fuites récurrentes, tuiles cassées à plus de 20%, déformations structurelles, ou après des événements climatiques majeurs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez systématiquement : sa certification RGE, son assurance décennale, ses références locales, ses avis clients, et sa capacité à fournir un diagnostic technique précis avant intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Gradignan ?
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
