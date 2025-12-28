import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Asnières-sur-Seine | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Asnières-sur-Seine en centrale électrique écologique grâce à nos solutions d&apos;installation de panneaux solaires photovoltaïques.',
  keywords: 'panneaux solaires asnières-sur-seine, installation photovoltaique asnières-sur-seine, panneaux photovoltaiques asnières-sur-seine, installateur panneaux solaires asnières-sur-seine, pose panneaux solaires asnières-sur-seine, photovoltaique maison asnières-sur-seine',
};

export default function PanneauxSolairesAsnieresSurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Asnières-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Asnières-sur-Seine en centrale électrique écologique grâce à nos solutions d&apos;installation de panneaux solaires photovoltaïques. Groupe Expert Altitude Com vous propose une transition énergétique clé en main, adaptée aux spécificités de votre patrimoine immobilier local.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Asnières-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos installations photovoltaïques représentent la solution moderne pour produire votre propre électricité verte. Sur Asnières-sur-Seine, nous analysons précisément votre toiture pour optimiser le rendement énergétique, avec des panneaux haute performance atteignant jusqu&apos;à 22% d&apos;efficacité. Notre équipe réalise un diagnostic technique complet, évalue l&apos;orientation, l&apos;inclinaison et l&apos;ensoleillement pour maximiser votre production. Nous garantissons une installation professionnelle respectant les normes RGE, avec un accompagnement administratif pour obtenir les aides gouvernementales et le raccordement au réseau électrique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise technique certifiée, intervention rapide sur Asnières-sur-Seine, devis personnalisé gratuit, matériel garanti 25 ans, équipe de techniciens locaux, conseils personnalisés sur l&apos;optimisation énergétique, suivi technique après installation, financement sur mesure.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires coûte entre 9 000€ et 18 000€ selon la surface, avec un retour sur investissement estimé entre 10 et 15 ans. Des aides de l&apos;État peuvent réduire jusqu&apos;à 30% du coût total, comme MaPrimeRénov&apos; et les certificats d&apos;économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation varie entre 4 à 8 semaines, incluant le diagnostic technique, les démarches administratives, la pose qui dure 1-2 jours, et le raccordement final au réseau électrique par le gestionnaire local.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat, demandez ses références locales, consultez les avis clients, assurez-vous d&apos;un devis détaillé, et vérifiez son assurance décennale professionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Asnières-sur-Seine ?
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
