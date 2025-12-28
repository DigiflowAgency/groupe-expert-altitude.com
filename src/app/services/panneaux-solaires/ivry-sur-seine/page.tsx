import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne la transition énergétique à Ivry-sur-Seine avec des solutions d&apos;installation de panneaux solaires photovoltaïque',
  keywords: 'panneaux solaires ivry-sur-seine, installation photovoltaique ivry-sur-seine, panneaux photovoltaiques ivry-sur-seine, installateur panneaux solaires ivry-sur-seine, pose panneaux solaires ivry-sur-seine, photovoltaique maison ivry-sur-seine',
};

export default function PanneauxSolairesIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne la transition énergétique à Ivry-sur-Seine avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur mesure. Nos experts transforment votre habitat en centrale électrique écologique et économique, directement adaptée aux spécificités architecturales de votre région.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nous proposons une installation complète et personnalisée de systèmes photovoltaïques, conçus pour maximiser votre production d&apos;énergie renouvelable. Notre approche technique débute par un diagnostic précis de votre toiture, évaluant son orientation, son inclinaison et sa capacité de support. Notre équipe certifiée utilise uniquement des panneaux de dernière génération, garantissant un rendement électrique optimal de 20% à 22%. Chaque installation à Ivry-sur-Seine est pensée pour réduire significativement votre facture énergétique, avec un amortissement moyen constaté entre 8 et 12 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise locale, notre certification RGE, et notre accompagnement total. Notre bureau technique réalise des études personnalisées, nos installateurs sont formés aux normes françaises, et nous gérons les démarches administratives et les demandes de subventions. Notre taux de satisfaction client dépasse 95%, preuve de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la puissance. Pour une maison moyenne de 100m², comptez environ 12 500€. Les aides de l&apos;État peuvent couvrir jusqu&apos;à 30% de ce coût, via MaPrimeRénov&apos; et les certificats d&apos;économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation s&apos;étend de 4 à 8 semaines. La pose des panneaux elle-même dure 1-2 jours, suivie des raccordements électriques et des tests de conformité. Notre équipe optimise chaque étape pour minimiser la gêne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un installateur RGE doit posséder la qualification officielle Qualibat, Qualit&apos;EnR ou Qualisol. Vérifiez sa certification sur le site officiel, son assurance décennale, et demandez systématiquement un devis détaillé avec les références techniques des matériels proposés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Ivry-sur-Seine ?
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
