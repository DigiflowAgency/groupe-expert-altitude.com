import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Vallauris | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Vallauris et ses environs. Spéc',
  keywords: 'couverture toiture vallauris, renovation toiture vallauris, reparation toiture vallauris, couvreur vallauris, refection toiture vallauris, entreprise couverture vallauris',
};

export default function CouvertureToitureVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Vallauris et ses environs. Spécialistes reconnus dans la protection de votre habitat, nous intervenons avec précision et expertise sur l&apos;ensemble des chantiers de toiture.</p>

        <h2>Nos services de couverture et rénovation toiture a Vallauris</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences techniques les plus strictes. Nous réalisons un diagnostic précis de votre toiture, en évaluant son état structural et ses potentiels points faibles. Notre équipe qualifiée intervient sur tous types de toitures - tuiles, ardoises, zinc - en utilisant des matériaux de haute qualité garantissant une durabilité maximale. Chaque intervention à Vallauris est personnalisée, avec un accompagnement technique complet depuis le premier rendez-vous jusqu&apos;à la réception finale des travaux. Nos solutions techniques intègrent les dernières innovations en matière d&apos;isolation thermique et d&apos;étanchéité, permettant une rénovation performante et économique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans dans la région de Vallauris
- Équipe de 12 couvreurs certifiés et formés en permanence
- Devis gratuit et détaillé sous 48h
- Garantie décennale sur tous nos travaux de couverture
- Utilisation de matériaux écologiques et haute performance</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€ selon la surface, le type de matériaux et la complexité des travaux. Un diagnostic précis nous permet de vous proposer un devis détaillé et transparent, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs comme des infiltrations, des tuiles cassées, de la mousse, ou des déformations visibles. Un diagnostic annuel permet de prévenir les dégradations importantes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder : une certification professionnelle, une assurance décennale, des références vérifiables, une expertise technique récente, et une capacité à fournir un devis détaillé. Vérifiez toujours ses certifications et avis clients.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Vallauris ?
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
