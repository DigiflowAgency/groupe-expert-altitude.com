import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Vincennes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Vincennes avec des solutions photovoltaïques sur-mesure. Nos installations de panneaux solaires',
  keywords: 'panneaux solaires vincennes, installation photovoltaique vincennes, panneaux photovoltaiques vincennes, installateur panneaux solaires vincennes, pose panneaux solaires vincennes, photovoltaique maison vincennes',
};

export default function PanneauxSolairesVincennesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Vincennes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Vincennes avec des solutions photovoltaïques sur-mesure. Nos installations de panneaux solaires transforment votre habitat en une source d&apos;énergie propre et économique, adaptée aux toitures vincennoises.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Vincennes</h2>
        <div className="space-y-4">
          <p>Nos experts en installation de panneaux solaires proposent une approche complète et personnalisée pour chaque projet photovoltaïque. Nous réalisons un diagnostic précis de votre toiture, sélectionnons les panneaux les plus performants et garantissons une intégration esthétique et technique optimale. Notre process inclut une étude énergétique détaillée, un dimensionnement précis de l&apos;installation et un accompagnement administratif pour maximiser vos aides et subventions. Nos solutions permettent de réduire jusqu&apos;à 70% de votre facture électrique et contribuent significativement à la transition énergétique locale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Certifications RGE et qualification Qualipv garantissant une expertise reconnue
✓ Bureau d&apos;études intégré pour des solutions techniques sur-mesure
✓ Intervention rapide sur tout Vincennes et ses environs
✓ Financement et montage de dossiers d&apos;aides entièrement pris en charge
✓ Matériel de haute performance avec garanties constructeurs jusqu&apos;à 25 ans</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires coûte entre 9 000€ et 18 000€ selon la surface, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État peuvent couvrir jusqu&apos;à 30% du coût total, incluant le crédit d&apos;impôt et MaPrimeRénov&apos;.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques varie entre 4 et 8 semaines, comprenant l&apos;étude technique, les autorisations administratives, la pose et le raccordement au réseau électrique. Notre équipe optimise chaque étape pour une intervention rapide et efficace.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement : son immatriculation SIRET, ses certifications Qualibel ou Qualipv, ses références clients locaux, et la présence d&apos;une assurance décennale. Demandez systématiquement plusieurs devis détaillés et comparez les garanties proposées.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Vincennes ?
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
