import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste en rénovation et couverture à Tassin-la-Demi-Lune. Nous protégeons votre hab',
  keywords: 'couverture toiture tassin-la-demi-lune, renovation toiture tassin-la-demi-lune, reparation toiture tassin-la-demi-lune, couvreur tassin-la-demi-lune, refection toiture tassin-la-demi-lune, entreprise couverture tassin-la-demi-lune',
};

export default function CouvertureToitureTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste en rénovation et couverture à Tassin-la-Demi-Lune. Nous protégeons votre habitat avec des solutions sur-mesure qui garantissent la longévité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences techniques les plus strictes. Nos équipes interviennent sur tous types de toitures, qu&apos;il s&apos;agisse de réparations ponctuelles ou de réfections complètes. Nous utilisons uniquement des matériaux de haute qualité, sélectionnés pour leur durabilité et leurs performances thermiques. Notre processus commence par un diagnostic précis, réalisé par nos experts qui évaluent chaque élément structural avec une attention méticuleuse. Nous proposons des solutions personnalisées qui s&apos;adaptent parfaitement à l&apos;architecture de votre bâtiment, en respectant les normes techniques et esthétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient rapidement sur Tassin-la-Demi-Lune, avec un taux de satisfaction de 98%. Nous proposons des garanties décennales, un devis gratuit et transparent, et une intervention sur-mesure adaptée à chaque configuration de toiture. Notre engagement qualité fait notre réputation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Chez nous, un diagnostic précis vous permettra d&apos;obtenir un devis détaillé sans surprise, avec des options de financement adaptées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses importantes, déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations et prolonger la durée de vie de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder des certifications professionnelles, une assurance décennale, des références vérifiables et une expertise technique large. Chez Groupe Expert Altitude Com, nos professionnels sont formés en continu et maîtrisent tous les types de toitures et de matériaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Tassin-la-Demi-Lune ?
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
