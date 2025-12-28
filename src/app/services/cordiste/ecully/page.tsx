import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Écully | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux sur corde à Écully et ses environs. Nos cordistes hautement qualifiés',
  keywords: 'cordiste écully, travaux sur corde écully, travaux acrobatiques écully, cordiste batiment écully, intervention cordiste écully, entreprise cordiste écully',
};

export default function CordisteEcullyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Écully</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux sur corde à Écully et ses environs. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes, garantissant des solutions techniques et sécurisées pour tous vos défis en hauteur.</p>

        <h2>Nos services de travaux sur corde - cordistes a Écully</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques représentent une solution innovante pour les interventions techniques nécessitant une expertise en milieu vertical. Nos cordistes professionnels sont spécialisés dans des missions variées : nettoyage industriel, rénovation de façades, entretien de monuments historiques et interventions sur des structures complexes. Chaque intervention est précédée d&apos;un diagnostic technique précis, permettant une planification optimale et une exécution sécurisée. Plus de 95% de nos missions sont réalisées sans incident, grâce à notre formation continue et notre équipement de pointe homologué.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe possède plus de 15 ans d&apos;expérience à Écully et en région lyonnaise. Nous sommes certifiés IRATA International et disposons de tous les agréments nécessaires. Nos cordistes bénéficient d&apos;une formation annuelle et d&apos;un suivi technique permanent. Nous garantissons réactivité, professionnalisme et solutions techniques sur-mesure.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de proposer un devis précis et transparent, adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation qualifiante IRATA, obtenir des certifications de sécurité, réussir des examens techniques et médicaux. Une condition physique excellente, une absence de vertige et une maîtrise parfaite des techniques de travaux en hauteur sont essentielles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une entreprise de cordistes certifiée doit disposer des agréments IRATA, justifier d&apos;une assurance responsabilité civile professionnelle, présenter des attestations de formations à jour et posséder un historique de missions réussies. Vérifiez toujours ces critères avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Écully ?
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
