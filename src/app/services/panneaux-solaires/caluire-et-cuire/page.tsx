import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne la transition énergétique à Caluire-et-Cuire avec des solutions d&apos;installation de panneaux solaires photovoltaïques',
  keywords: 'panneaux solaires caluire-et-cuire, installation photovoltaique caluire-et-cuire, panneaux photovoltaiques caluire-et-cuire, installateur panneaux solaires caluire-et-cuire, pose panneaux solaires caluire-et-cuire, photovoltaique maison caluire-et-cuire',
};

export default function PanneauxSolairesCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne la transition énergétique à Caluire-et-Cuire avec des solutions d&apos;installation de panneaux solaires photovoltaïques innovantes et sur-mesure. Nos experts vous accompagnent pour transformer votre habitat en une source d&apos;énergie propre et économique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>Nos installations de panneaux photovoltaïques sont conçues pour maximiser la performance énergétique de votre propriété à Caluire-et-Cuire. Notre approche technique intègre des modules de dernière génération offrant un rendement électrique jusqu&apos;à 22% et garantissant une production d&apos;énergie stable. Chaque projet fait l&apos;objet d&apos;un diagnostic personnalisé, évaluant l&apos;orientation du toit, l&apos;ensoleillement et les besoins énergétiques spécifiques. Notre équipe certifiée réalise une mise en œuvre précise, avec des systèmes connectés permettant un suivi en temps réel de votre production.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts certifiés RGE, intervention sur Caluire-et-Cuire et ses environs. Devis gratuit et détaillé sous 48h. Financement et aides officielles accompagnés. Matériels garantis 25 ans avec un taux de performance minimal de 90% après 10 ans.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires pour une maison moyenne (3-4 kWc) varie entre 9 000€ et 15 000€, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% du coût total. Un retour sur investissement est généralement constaté entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet varie de 4 à 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations, la pose des panneaux et le raccordement au réseau électrique. Notre équipe à Caluire-et-Cuire optimise chaque étape pour une intervention rapide et professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat 5919, demandez ses références locales, étudiez les avis clients et assurez-vous de la présentation d&apos;un devis détaillé avec engagement de performance énergétique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Caluire-et-Cuire ?
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
