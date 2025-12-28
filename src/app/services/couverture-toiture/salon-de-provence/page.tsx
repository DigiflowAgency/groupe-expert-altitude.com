import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste référent en couverture et rénovation à Salon-de-Provence. Nous protégeons vo',
  keywords: 'couverture toiture salon-de-provence, renovation toiture salon-de-provence, reparation toiture salon-de-provence, couvreur salon-de-provence, refection toiture salon-de-provence, entreprise couverture salon-de-provence',
};

export default function CouvertureToitureSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste référent en couverture et rénovation à Salon-de-Provence. Nous protégeons votre patrimoine avec des solutions techniques sur-mesure, garantissant la longévité et l&apos;esthétique de votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture représentent bien plus qu&apos;un simple travail technique : c&apos;est un engagement total envers la qualité et la durabilité. Notre équipe de professionnels intervient sur tous types de toitures - tuiles, ardoises, zinc - en réalisant un diagnostic précis avant toute intervention. Nous utilisons uniquement des matériaux haute performance, sélectionnés pour résister aux conditions climatiques de la région provençale. Notre processus comprend une évaluation complète, un devis détaillé et une réalisation méticuleuse, avec une attention particulière portée à l&apos;isolation et l&apos;étanchéité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Salon-de-Provence, 2) Des artisans certifiés et formés aux dernières techniques, 3) Un engagement qualité avec garantie décennale, 4) Un service client personnalisé et réactif. Nous transformons chaque chantier en une solution sur-mesure.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€, selon la surface (de 50m² à 200m²), les matériaux choisis et la complexité des travaux. Un diagnostic précis nous permet de proposer un devis transparent sans surprises.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses importantes, déformations structurelles. Un contrôle annuel permet de prévenir les dégradations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder : certifications professionnelles, assurances décennales, références vérifiables, avis clients positifs. Vérifiez toujours ses qualifications, demandez un devis détaillé et n&apos;hésitez pas à comparer plusieurs professionnels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Salon-de-Provence ?
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
