import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Lyon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Lyon, spécialiste des interventions acrobatiques pour tous vos projets ',
  keywords: 'cordiste lyon, travaux sur corde lyon, travaux acrobatiques lyon, cordiste batiment lyon, intervention cordiste lyon, entreprise cordiste lyon',
};

export default function CordisteLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Lyon, spécialiste des interventions acrobatiques pour tous vos projets en hauteur. Nos cordistes hautement qualifiés garantissent des solutions techniques et sécurisées pour les bâtiments et structures complexes de la région lyonnaise.</p>

        <h2>Nos services de travaux sur corde - cordistes a Lyon</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent une solution innovante et ultra-précise pour les interventions en milieux verticaux et difficiles d&apos;accès. Nos équipes de cordistes professionnels maîtrisent parfaitement les techniques d&apos;accès sur cordes, permettant des réalisations rapides et économiques sur des chantiers où les moyens traditionnels seraient inadaptés. Que ce soit pour de la maintenance industrielle, des travaux de rénovation, de nettoyage ou de sécurisation, nous intervenons avec un équipement de pointe et des certifications strictes. Notre expertise lyonnaise nous permet d&apos;offrir des prestations sur mesure, adaptées à chaque configuration architecturale et technique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée IRATA/SPIR avec plus de 15 ans d&apos;expérience
- Interventions 100% sécurisées conformes aux normes de sécurité françaises
- Matériel professionnel dernier cri et contrôlé annuellement
- Devis personnalisé et transparent sous 24h
- Périmètre d&apos;intervention couvrant Lyon et sa métropole</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 180€ de l&apos;heure selon la complexité du chantier, l&apos;équipement nécessaire et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de définir un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle diplômante, obtenir les certifications IRATA/SPIR, réussir des tests techniques et médicaux, et justifier d&apos;une condition physique irréprochable. Une expérience en travaux du bâtiment ou en alpinisme est souvent un plus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications officielles (IRATA/SPIR), leur expérience sur des chantiers similaires, leurs références clients, leur assurance professionnelle et leurs équipements de sécurité aux normes actuelles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Lyon ?
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
