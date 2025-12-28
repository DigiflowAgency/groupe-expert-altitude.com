import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Bouguenais | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Bouguenais et ses environs. Spécialistes depuis plus ',
  keywords: 'couverture toiture bouguenais, renovation toiture bouguenais, reparation toiture bouguenais, couvreur bouguenais, refection toiture bouguenais, entreprise couverture bouguenais',
};

export default function CouvertureToitureBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Bouguenais et ses environs. Spécialistes depuis plus de 15 ans, nous intervenons sur tous types de toitures résidentielles et commerciales avec un engagement qualité total.</p>

        <h2>Nos services de couverture et rénovation toiture a Bouguenais</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux besoins spécifiques de chaque bâtiment à Bouguenais. Nous réalisons un diagnostic précis avant toute intervention, évaluant l&apos;état structural, les matériaux et les potentiels points faibles. Notre équipe de couvreurs qualifiés utilise des techniques modernes et des matériaux haute performance garantissant une étanchéité maximale et une durabilité de 25 à 30 ans. Nous proposons des solutions personnalisées allant de la réparation ponctuelle à la réfection complète, en privilégiant toujours l&apos;efficacité énergétique et l&apos;esthétique de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec 15 ans d&apos;expérience à Bouguenais
- Équipe de 12 couvreurs certifiés et formés aux dernières normes
- Devis gratuit et détaillé sous 48h
- Matériaux sélectionnés auprès de fournisseurs français
- Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité. Pour une maison de 100m², comptez environ 12 500€ en moyenne, incluant dépose de l&apos;ancienne toiture, fourniture et pose de nouveaux matériaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 25-30 ans, ou en cas de signes précurseurs : fuites récurrentes, tuiles cassées, infiltrations, déformation de la charpente, mousses ou verdissements importants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications professionnelles, son immatriculation au registre du commerce, ses références clients locales, ses assurances professionnelles et demandez plusieurs devis comparatifs détaillés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Bouguenais ?
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
