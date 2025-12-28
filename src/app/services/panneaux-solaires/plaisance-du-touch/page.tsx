import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Plaisance-du-Touch | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Plaisance-du-Touch en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en inst',
  keywords: 'panneaux solaires plaisance-du-touch, installation photovoltaique plaisance-du-touch, panneaux photovoltaiques plaisance-du-touch, installateur panneaux solaires plaisance-du-touch, pose panneaux solaires plaisance-du-touch, photovoltaique maison plaisance-du-touch',
};

export default function PanneauxSolairesPlaisanceDuTouchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Plaisance-du-Touch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Plaisance-du-Touch en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous vous accompagnons vers une énergie propre et économique, adaptée aux besoins spécifiques de votre région.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Plaisance-du-Touch</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque couvre l&apos;intégralité du processus, depuis l&apos;étude personnalisée jusqu&apos;à la mise en service complète. Nous réalisons un diagnostic précis de votre toiture à Plaisance-du-Touch, évaluant son orientation, son inclinaison et sa capacité à accueillir des panneaux solaires performants. Notre équipe technique sélectionne des modules photovoltaïques de dernière génération garantissant un rendement énergétique optimal, avec des rendements atteignant jusqu&apos;à 22%. Nous proposons des solutions clés en main qui permettent de réduire votre facture énergétique de 40 à 70%, tout en minimisant votre impact carbone.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons une installation professionnelle et éligible aux aides gouvernementales. Notre bureau d&apos;études local maîtrise parfaitement les spécificités techniques du photovoltaïque. Nous proposons un accompagnement personnalisé, des financements adaptés et une maintenance sur le long terme. Nos techniciens sont formés en continu aux dernières innovations technologiques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 8 000€ et 15 000€ selon la puissance, avec des aides pouvant atteindre 30% du montant total. Un système de 3 à 5 kWc pour une maison individuelle coûte en moyenne 11 500€, mais les économies annuelles et le crédit d&apos;impôt réduisent significativement l&apos;investissement initial.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines. La phase de pose effective dure 1 à 3 jours, suivie des démarches administratives et du raccordement au réseau électrique. Notre équipe à Plaisance-du-Touch optimise chaque étape pour une mise en service rapide.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat ou Qualisol, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la garantie décennale. Notre entreprise répond à tous ces critères et dispose des certifications officielles garantissant une installation aux normes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Plaisance-du-Touch ?
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
