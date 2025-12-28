import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Aulnay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Aulnay-sous-Bois en centrale électrique verte avec Groupe Expert Altitude Com, votre partenaire local en installation de pannea',
  keywords: 'panneaux solaires aulnay-sous-bois, installation photovoltaique aulnay-sous-bois, panneaux photovoltaiques aulnay-sous-bois, installateur panneaux solaires aulnay-sous-bois, pose panneaux solaires aulnay-sous-bois, photovoltaique maison aulnay-sous-bois',
};

export default function PanneauxSolairesAulnaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Aulnay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Aulnay-sous-Bois en centrale électrique verte avec Groupe Expert Altitude Com, votre partenaire local en installation de panneaux solaires photovoltaïques. Nos solutions innovantes vous permettent de produire votre propre énergie propre et de réduire significativement votre facture énergétique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Aulnay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque proposent une solution clé en main adaptée à chaque configuration de maison à Aulnay-sous-Bois. Nous réalisons un diagnostic précis de votre toiture, calculons votre potentiel de production et concevons un système personnalisé. Nos panneaux haute performance garantissent un rendement optimal, avec des modules atteignant jusqu&apos;à 22% d&apos;efficacité énergétique. Notre processus comprend l&apos;étude technique, le dimensionnement du système, l&apos;obtention des autorisations administratives et l&apos;installation complète par nos techniciens certifiés.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se démarque par son expertise locale, sa certification RGE, et son accompagnement sur-mesure. Nos installateurs sont formés aux dernières technologies photovoltaïques, nous proposons des garanties jusqu&apos;à 25 ans, et nous gérons gratuitement vos démarches administratives et demandes de subventions.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État peuvent réduire jusqu&apos;à 30% du coût total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet varie de 4 à 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose. La pose des panneaux elle-même dure généralement 1 à 3 jours selon la complexité du projet.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIBAT ou QUALISOL, demandez des références locales, consultez les avis clients, et assurez-vous qu&apos;il propose un accompagnement complet incluant études techniques, installation et démarches administratives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Aulnay-sous-Bois ?
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
