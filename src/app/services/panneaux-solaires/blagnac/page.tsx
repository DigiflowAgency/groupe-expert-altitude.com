import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Blagnac | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Blagnac en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux ',
  keywords: 'panneaux solaires blagnac, installation photovoltaique blagnac, panneaux photovoltaiques blagnac, installateur panneaux solaires blagnac, pose panneaux solaires blagnac, photovoltaique maison blagnac',
};

export default function PanneauxSolairesBlagnacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Blagnac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Blagnac en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous accompagnons les habitants de la région toulousaine vers une énergie propre et économique, adaptée aux toitures de votre région.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Blagnac</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux foyers de Blagnac et ses environs de produire leur propre électricité verte. Notre équipe d&apos;experts réalise un diagnostic précis de votre toiture, évaluant son orientation, son inclinaison et sa capacité à accueillir des panneaux solaires performants. Nous sélectionnons des modules de dernière génération garantissant un rendement optimal, avec des panneaux atteignant jusqu&apos;à 22% d&apos;efficacité énergétique. Notre processus comprend l&apos;étude technique gratuite, le dimensionnement personnalisé, l&apos;installation professionnelle et le raccordement au réseau électrique, le tout dans le respect des normes RGE.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise locale et son engagement qualité. Nous sommes certifiés RGE, garantissant une installation aux normes. Notre équipe compte plus de 10 ans d&apos;expérience en photovoltaïque. Nous proposons des financements adaptés et un accompagnement dans les démarches de subventions. Nos clients bénéficient d&apos;une garantie de 25 ans sur les panneaux et d&apos;un suivi technique personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un foyer moyen à Blagnac peut économiser environ 500€ par an sur ses factures d&apos;électricité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement de 4 à 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations, la pose des panneaux et le raccordement au réseau électrique. Notre équipe s&apos;engage à minimiser les perturbations pour votre foyer.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez sa qualification Qualibat ou Qualit&apos;EnR, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la présence d&apos;une garantie décennale. Groupe Expert Altitude Com répond à tous ces critères de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Blagnac ?
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
