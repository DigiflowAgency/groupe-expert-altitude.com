import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Istres | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Istres avec des solutions photovoltaïques innovantes et sur-mesure. Nos experts en installation',
  keywords: 'panneaux solaires istres, installation photovoltaique istres, panneaux photovoltaiques istres, installateur panneaux solaires istres, pose panneaux solaires istres, photovoltaique maison istres',
};

export default function PanneauxSolairesIstresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Istres</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Istres avec des solutions photovoltaïques innovantes et sur-mesure. Nos experts en installation de panneaux solaires transforment votre habitat en centrale électrique écologique et économique au cœur des Bouches-du-Rhône.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Istres</h2>
        <div className="space-y-4">
          <p>Spécialistes de l&apos;installation de panneaux photovoltaïques sur Istres et ses environs, nous proposons une approche complète et personnalisée. Notre démarche commence par un diagnostic précis de votre toiture, évaluant son orientation, son inclinaison et son potentiel énergétique. Nos techniciens certifiés utilisent uniquement des panneaux de dernière génération garantissant un rendement optimal, avec des modules atteignant jusqu&apos;à 22% d&apos;efficacité. Chaque installation est conçue pour maximiser votre production électrique, vous permettant non seulement de réduire votre facture énergétique mais également de revendre l&apos;électricité excédentaire au réseau.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Experts certifiés RGE avec plus de 10 ans d&apos;expérience
• Matériel photovoltaïque haute performance
• Accompagnement administratif complet pour les aides et subventions
• Garantie décennale et suivi technique personnalisé
• Solutions adaptées à chaque configuration de toiture à Istres</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 30% du coût total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai moyen d&apos;installation de panneaux photovoltaïques est de 3 à 5 jours ouvrés. La phase préparatoire comprend le diagnostic, les démarches administratives et la conception du projet, qui peut prendre 4 à 6 semaines avant l&apos;installation effective.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat 5919, demandez des références locales, consultez les avis clients, et assurez-vous qu&apos;il propose un accompagnement complet incluant étude technique, installation et suivi post-pose.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Istres ?
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
