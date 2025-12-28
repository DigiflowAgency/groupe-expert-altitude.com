import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Neuilly-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne la transition énergétique à Neuilly-sur-Seine avec des solutions d&apos;installation de panneaux solaires photovoltaïque',
  keywords: 'panneaux solaires neuilly-sur-seine, installation photovoltaique neuilly-sur-seine, panneaux photovoltaiques neuilly-sur-seine, installateur panneaux solaires neuilly-sur-seine, pose panneaux solaires neuilly-sur-seine, photovoltaique maison neuilly-sur-seine',
};

export default function PanneauxSolairesNeuillySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Neuilly-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne la transition énergétique à Neuilly-sur-Seine avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur mesure. Nos experts vous accompagnent vers une production d&apos;énergie propre et économique, adaptée aux spécificités architecturales de votre habitat.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Neuilly-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos installations photovoltaïques représentent la solution moderne pour réduire votre empreinte carbone et maîtriser vos dépenses énergétiques. Notre équipe technique intervient sur Neuilly-sur-Seine et ses environs, en proposant un diagnostic personnalisé qui analyse l&apos;orientation, la surface et la structure de votre toiture. Nous sélectionnons des panneaux haute performance garantissant un rendement optimal, avec des modules atteignant jusqu&apos;à 22% d&apos;efficacité énergétique. Notre processus inclut une étude technique gratuite, un dimensionnement précis de l&apos;installation et un accompagnement administratif complet pour obtenir les aides et financements disponibles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons une qualité d&apos;installation irréprochable. Notre bureau d&apos;études intégré assure un suivi technique personnalisé. Nous proposons des solutions clés en main avec des équipements bénéficiant de 25 ans de garantie. Notre engagement : maximiser votre production d&apos;énergie renouvelable tout en minimisant votre investissement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec des aides pouvant atteindre 40% du montant total. Un système de 3 kWc pour une maison individuelle coûte environ 12 500€, mais permet des économies de 300€ à 600€ par an sur vos factures d&apos;électricité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation s&apos;étend de 4 à 8 semaines, incluant l&apos;étude technique, les démarches administratives et la pose. La pose des panneaux elle-même ne nécessite que 1 à 2 jours ouvrés avec notre équipe professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez impérativement son certificat Qualibel, demandez plusieurs devis détaillés, consultez ses références clients et assurez-vous de la présence d&apos;une garantie décennale. Notre entreprise répond à tous ces critères avec plus de 10 ans d&apos;expérience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Neuilly-sur-Seine ?
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
