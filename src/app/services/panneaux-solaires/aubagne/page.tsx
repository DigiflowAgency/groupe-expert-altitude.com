import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Aubagne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour l&apos;installation de panneaux solaires photovoltaïques à Aubagne et dans toute la région Sud. N',
  keywords: 'panneaux solaires aubagne, installation photovoltaique aubagne, panneaux photovoltaiques aubagne, installateur panneaux solaires aubagne, pose panneaux solaires aubagne, photovoltaique maison aubagne',
};

export default function PanneauxSolairesAubagnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Aubagne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour l&apos;installation de panneaux solaires photovoltaïques à Aubagne et dans toute la région Sud. Nous transformons votre toiture en une source d&apos;énergie propre et économique, adaptée aux spécificités climatiques de notre territoire.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Aubagne</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux besoins croissants des habitants d&apos;Aubagne en matière de transition énergétique. Nous proposons des solutions clés en main, depuis l&apos;étude personnalisée jusqu&apos;à la mise en service de votre installation solaire. Notre approche technique garantit un rendement optimal, en exploitant au maximum l&apos;ensoleillement exceptionnel de la région PACA. Chaque projet est unique : nous dimensionnons précisément votre système pour maximiser vos économies d&apos;énergie et votre retour sur investissement, avec des panneaux haute performance atteignant jusqu&apos;à 22% d&apos;efficacité énergétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Certification RGE officielle garantissant la qualité de nos interventions
• Plus de 10 ans d&apos;expérience exclusive sur le territoire d&apos;Aubagne
• Accompagnement administratif complet pour les aides et subventions
• Équipe technique locale maîtrisant les spécificités techniques régionales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires pour une maison moyenne (3-4 kWc) varie entre 9 000€ et 15 000€ avant aides. Avec les subventions de l&apos;État et MaPrimeRénov&apos;, le reste à charge peut descendre jusqu&apos;à 30% du coût initial. Un retour sur investissement est généralement constaté entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement entre 4 et 8 semaines. La phase de pose des panneaux elle-même dure 1 à 2 jours, suivie des raccordements électriques et des démarches administratives auprès d&apos;Enedis. Notre équipe à Aubagne optimise chaque étape pour une rapidité maximale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement : son inscription sur le site officiel FAIRE.gouv.fr, ses certifications QUALIPV et QUALIBAT, son ancienneté sur le marché local, et ses références clients. Un professionnel sérieux proposera systématiquement une visite technique préalable et un devis détaillé.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Aubagne ?
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
