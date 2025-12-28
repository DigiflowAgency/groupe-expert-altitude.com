import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Cenon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Cenon et dans toute la région bordelaise. Nos cordistes hautement quali',
  keywords: 'cordiste cenon, travaux sur corde cenon, travaux acrobatiques cenon, cordiste batiment cenon, intervention cordiste cenon, entreprise cordiste cenon',
};

export default function CordisteCenonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Cenon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Cenon et dans toute la région bordelaise. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes avec précision et sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a Cenon</h2>
        <div className="space-y-4">
          <p>Les travaux acrobatiques représentent une solution technique unique pour les interventions en hauteur où les échafaudages traditionnels sont impossibles ou trop coûteux. Notre équipe de cordistes professionnels à Cenon dispose d&apos;un équipement de pointe et de certifications IRATA permettant des interventions sur des structures variées : bâtiments industriels, monuments historiques, ouvrages d&apos;art. Chaque mission fait l&apos;objet d&apos;une préparation méticuleuse avec analyse des risques, plan d&apos;intervention et respect strict des normes de sécurité. Nos techniciens maîtrisent parfaitement les techniques de progression sur cordes, garantissant des prestations rapides, précises et économiquement avantageuses.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Plus de 15 ans d&apos;expérience en travaux acrobatiques
- Équipe certifiée IRATA niveau international
- Intervention rapide sur tout le département de la Gironde
- Devis personnalisé et gratuit sous 24h
- Matériel aux normes de sécurité les plus récentes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de proposer un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir une certification IRATA/SPRAT, suivre des formations de sécurité intensives, justifier d&apos;une condition physique excellente et posséder un sens aigu de l&apos;analyse des risques. Une formation peut durer entre 3 et 6 mois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications IRATA, l&apos;assurance professionnelle, les références clients, et demandez les attestations de formation continue de l&apos;équipe. Un professionnel sérieux transmettra ces documents sans hésitation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Cenon ?
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
