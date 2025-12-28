import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Saint-Denis | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Saint-Denis et ses environs. Notre',
  keywords: 'couverture toiture saint-denis, renovation toiture saint-denis, reparation toiture saint-denis, couvreur saint-denis, refection toiture saint-denis, entreprise couverture saint-denis',
};

export default function CouvertureToitureSaintDenisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Saint-Denis</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Saint-Denis et ses environs. Notre expertise technique et notre passion pour la qualité font de nous le choix idéal pour protéger et valoriser votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Saint-Denis</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture s&apos;adaptent à tous types de bâtiments, qu&apos;il s&apos;agisse d&apos;une maison individuelle ou d&apos;un immeuble collectif à Saint-Denis. Notre équipe de professionnels hautement qualifiés réalise un diagnostic précis avant toute intervention, en évaluant l&apos;état structural, l&apos;isolation et les potentiels points faibles. Nous utilisons uniquement des matériaux de haute qualité, garantissant une étanchéité parfaite et une durabilité maximale. Notre processus comprend une évaluation technique complète, un devis détaillé transparent, et une réalisation minutieuse respectant les normes en vigueur. Chaque projet est personnalisé pour répondre aux besoins spécifiques de nos clients, avec une attention particulière portée à l&apos;esthétique et aux performances énergétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos couvreurs possèdent plus de 15 ans d&apos;expérience collective. Nous proposons une garantie décennale, une intervention rapide sous 48h, et un accompagnement personnalisé. Notre taux de satisfaction client dépasse les 95%, témoignant de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Un diagnostic précis de nos experts vous permettra d&apos;obtenir un devis détaillé et personnalisé, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes de détérioration comme des fuites, des tuiles cassées, de la mousse, ou une isolation dégradée. Un diagnostic annuel permet de prévenir les dommages structurels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder des certifications professionnelles, une assurance décennale, des références vérifiables et une expérience prouvée. Chez Groupe Expert Altitude Com, nos techniciens répondent à tous ces critères et sont régulièrement formés aux dernières techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Saint-Denis ?
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
