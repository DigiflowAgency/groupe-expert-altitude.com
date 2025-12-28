import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Draguignan | Groupe Expert Altitude Com',
  description: 'Découvrez la solution énergétique d&apos;avenir avec Groupe Expert Altitude Com, votre partenaire local en installation de panneaux solaires photovoltaïques à D',
  keywords: 'panneaux solaires draguignan, installation photovoltaique draguignan, panneaux photovoltaiques draguignan, installateur panneaux solaires draguignan, pose panneaux solaires draguignan, photovoltaique maison draguignan',
};

export default function PanneauxSolairesDraguignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Draguignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution énergétique d&apos;avenir avec Groupe Expert Altitude Com, votre partenaire local en installation de panneaux solaires photovoltaïques à Draguignan. Transformez votre habitat en centrale électrique écologique et économique au cœur du Var.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Draguignan</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque vous proposent une solution clé en main adaptée à chaque configuration de toiture à Draguignan et ses environs. Nous réalisons un diagnostic précis de votre propriété, évaluant l&apos;orientation, l&apos;inclinaison et l&apos;ensoleillement pour maximiser la production électrique. Notre équipe certifiée utilise uniquement des panneaux de haute performance, garantissant un rendement optimal et une durabilité jusqu&apos;à 25 ans. Nous prenons en charge l&apos;intégralité du projet, du conseil technique aux démarches administratives, pour une transition énergétique sans contrainte.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 10 ans d&apos;expérience dans l&apos;installation photovoltaïque
- Techniciens certifiés RGE et formés aux dernières technologies
- Accompagnement personnalisé et suivi technique complet
- Devis gratuit et transparent sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Les aides gouvernementales peuvent réduire jusqu&apos;à 30% du coût total, incluant le crédit d&apos;impôt et MaPrimeRénov&apos;.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet varie de 4 à 8 semaines, comprenant le diagnostic initial, l&apos;obtention des autorisations, la pose des panneaux (2-3 jours) et le raccordement au réseau électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez la certification RGE, consultez leurs références, demandez un audit énergétique gratuit, vérifiez leur assurance décennale et leurs garanties. Un installateur certifié RGE doit pouvoir justifier de formations récentes et de compétences techniques précises.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Draguignan ?
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
