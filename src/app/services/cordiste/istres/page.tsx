import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Istres | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Istres, offrant des solutions acrobatiques innovantes pour tous vos dé',
  keywords: 'cordiste istres, travaux sur corde istres, travaux acrobatiques istres, cordiste batiment istres, intervention cordiste istres, entreprise cordiste istres',
};

export default function CordisteIstresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Istres</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Istres, offrant des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur l&apos;ensemble du territoire istréen avec précision et sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a Istres</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions complexes en hauteur. Grâce à une méthodologie éprouvée, nos cordistes professionnels réalisent des missions dans les domaines du bâtiment, de l&apos;industrie et de la maintenance. Chaque intervention est précédée d&apos;une analyse rigoureuse des risques, garantissant une exécution parfaite à 100% des normes de sécurité. Nos équipes maîtrisent parfaitement les techniques d&apos;accès difficile, permettant des interventions là où les moyens traditionnels échouent, avec un taux de réussite de plus de 95%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : des techniciens certifiés IRATA, un équipement de pointe renouvelé tous les 18 mois, une assurance professionnelle complète et une réactivité garantie sous 24h. Nos cordistes cumulent plus de 15 ans d&apos;expérience collective sur des chantiers complexes à Istres et sa région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité et la durée de l&apos;intervention. Un diagnostic préalable gratuit permet de définir un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation qualifiante IRATA, obtenir un certificat de travaux en hauteur, valider des modules de sécurité et disposer d&apos;une condition physique irréprochable. Une expérience minimale de 3 ans est généralement recommandée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement leurs certifications IRATA, leur assurance responsabilité civile professionnelle, les références clients et demandez systématiquement un portfolio de réalisations précédentes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Istres ?
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
